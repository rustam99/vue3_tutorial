const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

function setTokens(tokens) {
	localStorage.setItem(ACCESS_TOKEN, tokens.access_token);
	localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token);
}

function getTokens() {
	return {
		[ACCESS_TOKEN]: localStorage.getItem(ACCESS_TOKEN),
		[REFRESH_TOKEN]: localStorage.getItem(REFRESH_TOKEN)
	};
}

function removeTokens() {
	localStorage.removeItem(ACCESS_TOKEN);
	localStorage.removeItem(REFRESH_TOKEN);
}

export { setTokens, getTokens, removeTokens };
