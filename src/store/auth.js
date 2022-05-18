import { signUp, signIn, check, refresh } from '@/server/auth/';
import { setAccessToken, getAccessToken, removeAccessToken } from '@/utils/local_storage';
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
				setAccessToken(response.result);

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
				setAccessToken(response.result);

				commit('setAuthorization', true);

				dispatch('getUserInfo');

				return true;
			} else {
				throw new Error(response.message);
			}
		},
		async signOut({ commit }) {
			removeAccessToken();

			commit('setAuthorization', false);
		},
		async check({ commit, dispatch }) {
			const token = getAccessToken();

			if (!token) {
				commit('setAuthorization', false);

				return false;
			}

			try {
				await check();

				commit('setAuthorization', true);

				dispatch('getUserInfo');

				return true;
			} catch (error) {
				commit('setAuthorization', false);

				return false;
			}
		},
		getUserInfo({ commit }) {
			const accessToken = getAccessToken();

			if (accessToken) {
				const userInfo = getJWTPayload(accessToken);

				commit('setUserInfo', userInfo);
			}
		}
	},
}
