import { instance, instanceWithToken } from '../index';

function signIn(login, password) {
	return instance.post('auth/sign_in.php', { login, password })
		.then(res => res.data);
}

function signUp(login, email, password, passwordRetry) {
	return instance.post('auth/sign_up.php', { login, email, password, passwordRetry })
		.then(res => res.data);
}

function check() {
	return instanceWithToken.get('auth/check.php').then(res => res.data).catch(console.warn);
}

export { signUp, signIn, check };
