import axios from "axios";
import { getAccessToken, setAccessToken } from '@/utils/local_storage';

const instance = axios.create({
	baseURL: '/',
	timeout: 3000,
});

const instanceWithToken = axios.create({
	baseURL: '/',
	timeout: 3000,
});

instanceWithToken.interceptors.request.use((config) => {
	const at = getAccessToken();

	if (!at) {
		throw { message: 'at is not defined', code: 403 };
	}

	if ('headers' in config) {
		config.headers = {};
	}

	config.headers.Authorization = at;

	return config;
});

instanceWithToken.interceptors.response.use(async (config) => {
	return config;
}, async error => {
	if ( error.request.status === 401 || error.request.status === 400 || !error.config._retry) {
		try {
			const response = await instance.get('auth/refresh.php');

			setAccessToken(response.data);

			error.config._retry = true;

			instanceWithToken(error.config);
		} catch (error) {
			throw { message: 'can`t refresh' }
		}
	}

	return error;
});

export { instance, instanceWithToken };
