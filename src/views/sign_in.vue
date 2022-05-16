<template>
	<form class="sign-in" @submit.prevent="onSubmit">
		<h1 class="sign-in__title h1">Войти</h1>
		<div class="sign-in__content">
			<div class="sign-in__row">
				<div class="sign-in__left">
					<div class="sign-in__field">
						<label class="sign-in__label">
							<app-input placeholder="Введите логин" name="login" v-model="login"></app-input>
						</label>
					</div>
					<div class="sign-in__field">
						<label class="sign-in__label">
							<app-input type="password" placeholder="Введите пароль" name="password" v-model="password"></app-input>
						</label>
					</div>
					<div class="sign-in__field">
						<button class="button button_success" type="submit">Войти</button>
					</div>
				</div>
				<div class="sign-in__right">
					<div class="sign-in__text">Нету аккаунта?</div>
					<router-link class="sign-in__link link" exact-active-class="active" :to="{ name: 'sign_up' }">Зарегистрироваться</router-link>
				</div>
			</div>
		</div>
	</form>
	<modal :isShow="showModal" title="Ошибка входа">
		<p>{{ modalText }}</p>
	</modal>
</template>

<script>
	import { mapActions } from 'vuex';
	import AppInput from '@/components/form/input';

	export default {
		data: () => ({
			login: '',
			password: '',
			showModal: false,
			modalText: ''
		}),
		methods: {
			...mapActions('auth', ['signIn']),
			async onSubmit() {
				try {
					await this.signIn({ login: this.login, password: this.password });

					this.$router.push({ name: 'catalog' });
				} catch(error) {
					this.showModal = true;
					this.modalText = error;

					setTimeout(() => {
						this.showModal = false;
					}, 2000);
				}
			}
		},
		components: {
			AppInput
		}
	}
</script>

<style lang="scss">
	@import '@/assets/css/modules/mixin';

	.sign-in {
		&__content {
			margin: 0 auto;
			max-width: 800px;
			padding: 20px 30px;
			box-sizing: border-box;
			background-color: #fff;
		}

		&__title {
			text-align: center;
		}

		&__row {
			display: flex;
		}

		&__left {
			flex: 2;
		}

		&__field + &__field {
			margin-top: 20px;
		}

		&__text {
			font-size: rem(18);
		}

		&__link {
			margin-top: 15px;
		}
	}
</style>
