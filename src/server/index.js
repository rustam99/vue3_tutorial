import axios from "axios";

const instance = axios.create({
	baseURL: 'http://api/',
	timeout: 3000,
});

export { instance };
