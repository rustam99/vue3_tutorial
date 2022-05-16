function timeStampFormat(stamp) {
	const params = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};

	return new Intl.DateTimeFormat('ru', params).format(new Date(stamp));
}

function priceFormat(price) {
	return new Intl.NumberFormat('ru', {}).format(price);
}

export { timeStampFormat, priceFormat };
