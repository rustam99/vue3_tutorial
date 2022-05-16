import { instance } from '@/server';

function all (catalogId) {
	return instance.get(`/product/?catalog_id=${catalogId}`).then(res => res.data);
}

function one (id) {
	return instance.get(`/product/?id=${id}`).then(res => res.data);
}

export { all, one };
