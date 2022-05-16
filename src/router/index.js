import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home';
import Catalog from '@/views/catalog/index';
import CatalogChild from '@/views/catalog/element';
import Cart from '@/views/cart';
import Product from '@/views/product';
import E404 from '@/views/404';
import SignIn from '@/views/sign_in';
import SignUp from '@/views/sign_up';

import store from '@/store/index';

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/catalog', name: 'catalog', component: Catalog, meta: { name: 'Каталог', auth: true } },
	{ path: '/catalog/:id', name: 'catalog_element', component: CatalogChild, meta: { name: 'Продукты каталога', auth: true } },
	{ path: '/cart', name: 'cart', component: Cart, meta: { name: 'Корзина', auth: true } },
	{ path: '/product/:id', name: 'product', component: Product, meta: { name: 'Продукт', auth: true } },
	{ path: '/sign-in', name: 'sign_in', component: SignIn },
	{ path: '/sign-up', name: 'sign_up', component: SignUp },
	{ path: '/:pathMatch(.*)*', name: 'E404', component: E404 },
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach(async (to, from) => {
	if (to.meta?.auth) {
		if (!await store.dispatch('auth/check')) {
			const isRefreshSuccess = await store.dispatch('auth/refresh');

			if (!isRefreshSuccess) {
				return '/sign-in';
			}
		}
	}
});

export default router;
