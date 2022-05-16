import { all, one } from '@/server/products';

export default {
	namespaced: true,
	state: {
		products: [],
	},
	getters: {
		one: state => id => state.products.find(item => item.id === id),
	},
	mutations: {
		setProducts(state, products) {
			state.products = products;
		}
	},
	actions: {
		async all({ commit }, catalogId) {
			const response = await all(catalogId);

			if (response.result) {
				commit('setProducts', response.message);

				return true;
			}

			return new Error(response.message);
		},
		async one({}, id) {
			const response = await one(id);

			if (response.result) {
				return response.message;
			}

			return new Error(response.message);
		}
	}
}
