const ACCESS_TOKEN = 'access_token';

function setAccessToken(token) {
	localStorage.setItem(ACCESS_TOKEN, token);
}

function getAccessToken() {
	return localStorage.getItem(ACCESS_TOKEN);
}

function removeAccessToken() {
	localStorage.removeItem(ACCESS_TOKEN);
}

export { setAccessToken, getAccessToken, removeAccessToken };
