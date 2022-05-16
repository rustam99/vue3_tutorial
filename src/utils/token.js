function getJWTPayload(token){
	return parseJWT(token).payload;
}

function parseJWT(token){
	let parts = token.split('.');

	return {
		header: parsePart(parts[0]),
		payload: parsePart(parts[1]),
		sign: parts[2]
	};
}

function parsePart(str){
	return JSON.parse(atob(str));
}

export { getJWTPayload };
