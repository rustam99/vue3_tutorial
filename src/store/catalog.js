import { all, one } from '@/server/catalog';

export default {
	namespaced: true,
	state: {
		catalog: [],
	},
	getters: {
		get: state => state.catalog,
		one: state => id => state.catalog.find(item => item.id === id),
	},
	mutations: {
		setAll(state, catalog) {
			state.catalog = catalog;
		}
	},
	actions: {
		async all({ commit }) {
			const response = await all();

			if (response.result) {
				commit('setAll', response.message);

				return true;
			} else {
				throw new Error(response.message);
			}
		}
	},
}
