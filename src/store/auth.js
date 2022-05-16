import { signUp, signIn, check, refresh } from '@/server/auth/';
import { setTokens, getTokens, removeTokens } from '@/utils/local_storage';
import { getJWTPayload } from '@/utils/token';
import { timeStampFormat } from '@/utils/format.js';

export default {
	namespaced: true,
	state: {
		isAuthorization: false,
		id: null,
		created: null,
		login: null,
		email: null,
	},
	getters: {},
	mutations: {
		setAuthorization(state, isAuthorization) {
			state.isAuthorization = isAuthorization;
		},
		setUserInfo(state, userInfo) {
			state.id = userInfo.id;
			state.created = timeStampFormat(userInfo.created);
			state.login = userInfo.login;
			state.email = userInfo.email;
		},
	},
	actions: {
		async signUp({ commit, dispatch }, { login, email, password, passwordRetry }) {
			const response = await signUp(login, email, password, passwordRetry);

			if (response.result) {
				setTokens(response.result);

				commit('setAuthorization', true);

				dispatch('getUserInfo');

				return true;
			} else {
				throw new Error(response.message);
			}
		},
		async signIn({ commit, dispatch }, { login, password }) {
			const response = await signIn(login, password);

			if (response.result) {
				setTokens(response.result);

				commit('setAuthorization', true);

				dispatch('getUserInfo');

				return true;
			} else {
				throw new Error(response.message);
			}
		},
		async signOut({ commit }) {
			removeTokens();

			commit('setAuthorization', false);
		},
		async check({ commit, dispatch }) {
			const tokens = getTokens();

			if (!tokens.access_token) {
				return false;
			}

			const response = await check(tokens.access_token);

			if (response.result) {
				commit('setAuthorization', true);

				dispatch('getUserInfo');

				return true;
			}

			commit('setAuthorization', false);

			return false;
		},
		async refresh() {
			const rt = getTokens().refresh_token;

			if (rt) {
				const response = await refresh(rt);

				if (response.result) {
					setTokens(response.message);

					return true;
				}
			}

			return false;
		},
		getUserInfo({ commit }) {
			const accessToken = getTokens().access_token;

			if (accessToken) {
				const userInfo = getJWTPayload(accessToken);

				commit('setUserInfo', userInfo);
			}
		}
	},
}
