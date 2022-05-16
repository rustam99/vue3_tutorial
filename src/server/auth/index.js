import { instance } from '../index';

function signIn(login, password) {
	return instance.post('auth/sign_in.php', { login, password })
		.then(res => res.data);
}

function signUp(login, email, password, passwordRetry) {
	return instance.post('auth/sign_up.php', { login, email, password, passwordRetry })
		.then(res => res.data);
}

function check(at) {
	return instance.post('auth/check.php', {}, { headers: { 'Authorization': at } })
		.then(res => res.data);
}

function refresh(rt) {
	return instance.post('auth/refresh.php', {}, { headers: { 'Authorization': rt } })
		.then(res => res.data);
}

export { signUp, signIn, check, refresh };
