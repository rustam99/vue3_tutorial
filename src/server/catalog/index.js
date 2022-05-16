import { instance } from '../index';

const url = 'catalog/';

function all() {
	return instance.get(url).then(res => res.data);
}

function one(id) {
	return instance.get(`${url}?id=${id}`).then(res => res.data);
}

export { all, one };
