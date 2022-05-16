<template>
	<header class="header">
		<div class="container">
			<div class="header__content">
				<nav class="nav">
					<router-link
						v-for="link in links"
						:key="link"
						v-slot="{ navigate, href, route, isExactActive }"
						:to="{ name: link }"
						custom>
						<a class="nav__link link" :class="isExactActive ? 'active' : ''" :href="href" @click="navigate">{{ route.meta.name }}</a>
					</router-link>
				</nav>
				<div class="header__right">
					<div class="header__auth">
						<div class="header__user" v-if="isAuthorization">{{ login }}</div>
						<template v-else>
							<router-link class="header__link link" exact-active-class="active" :to="{ name: 'sign_in' }">Войти</router-link>
							<router-link class="header__link link" exact-active-class="active" :to="{ name: 'sign_up' }">Регистрация</router-link>
						</template>
					</div>
					<div class="header__cart">
						<div class="header__total">Сумма: <span class="fw-m">{{ total }} &#8381;</span></div>
						<div class="header__count">Товаров: <span class="fw-m">{{ length }} шт</span></div>
					</div>
					<button class="header__button button button_danger" v-if="isAuthorization" @click="signOut">Выйти</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
	data: () => ({
		links: [ 'catalog', 'cart' ],
	}),
	methods: {
		...mapActions('auth', {
			logout: 'signOut',
		}),
		signOut() {
			this.logout();

			this.$router.push({ name: 'sign_in' });
		}
	},
	computed: {
		... mapState('auth', ['isAuthorization', 'login']),
		...mapGetters('cart', ['total', 'length']),
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/components/button';
	@import '@/assets/css/components/nav';

	.header {
		box-shadow: 0 5px 5px -5px $black;

		&__content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px 0;
		}

		&__right {
			display: flex;
		}

		&__auth {
			display: flex;
			flex-direction: column;
			justify-content: center;
			max-width: 150px;
		}

		&__link + &__link {
			margin-top: 10px;
		}

		&__user {
			font-size: 18px;
		}

		&__button {
			margin-left: 15px;
		}

		&__cart {
			margin-left: 40px;
		}

		&__total,
		&__count {
			font-size: rem(18);
		}

		&__count {
			margin-top: 10px;
		}
	}
</style>
