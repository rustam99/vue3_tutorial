export default {
	namespaced: true,
	state: {
		products: []
	},
	getters: {
		one: state => id => state.products.find(product => product.id === id),
		length: state => state.products.length,
		has: state => id => state.products.some(product => product.id === id),
		all: (state, getters, rootState, rootGetters) => {
			return state.products.map(product => {
				return { ...rootGetters['products/one'](product.id), ...product };
			});
		},
		total: (state, getters) => getters.all.reduce((acc, cur) => acc + cur.price * cur.cnt, 0),
	},
	mutations: {
		add(state, id) {
			state.products.push({ id, cnt: 1 });
		},
		remove(state, id) {
			state.products = state.products.filter(product => product.id !== id);
		},
		setCnt(state, { id, cnt }) {
			const index = state.products.findIndex(product => product.id === id);

			state.products[index].cnt = Math.max(1, cnt);
		}
	},
	actions: {
		add({ commit }, id) {
			commit('add', id);
		},
		remove({ commit }, id) {
			commit('remove', id);
		},
		increase({ commit, getters }, id) {
			commit('setCnt', {id, cnt: getters.one(id).cnt + 1 });
		},
		decrease({ commit, getters }, id) {
			commit('setCnt', { id, cnt: getters.one(id).cnt - 1 });
		},
		setCnt({ commit, getters }, { id, cnt }) {
			const newCnt = parseInt(cnt);

			if (getters.has(id)) {
				commit('setCnt', { id, cnt: isNaN(newCnt) ? 1 : newCnt });
			}
		},
	}
}
