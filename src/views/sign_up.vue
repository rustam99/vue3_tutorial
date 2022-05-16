<template>
	<form class="sign-up" @submit.prevent="submit">
		<h1 class="sign-up__title h1">Регистрация</h1>
		<div class="sign-up__content">
			<div class="sign-up__row">
				<div class="sign-up__left">
					<div class="sign-up__field" v-for="field in fields" :key="field.name">
						<label class="sign-up__label">
							<app-input
								:type="field.type"
								:placeholder="field.placeholder"
								:name="field.name"
								v-model="field.value">
							</app-input>
						</label>
					</div>
					<button type="submit" class="sign-up__button button button_success">Зарегистрироваться</button>
				</div>
				<div class="sign-up__right">
					<div class="sign-up__text">Уже есть аккаунта?</div>
					<router-link class="sign-up__link link" exact-active-class="active" :to="{ name: 'sign_in' }">Войти</router-link>
				</div>
			</div>
		</div>
	</form>
	<modal :isShow="showModal" title="Ошибка регистрации">
		<p>{{ modalText }}</p>
	</modal>
</template>

<script>
	import AppInput from '@/components/form/input';
	import { mapActions } from 'vuex';

	export default {
		data: () => ({
			fields: [
				{ type: 'text', placeholder: 'Введите логин', name: 'login', value: '' },
				{ type: 'email', placeholder: 'Введите Email', name: 'email', value: '' },
				{ type: 'password', placeholder: 'Введите пароль', name: 'password', value: '' },
				{ type: 'password', placeholder: 'Повторите пароль', name: 'password_repeat', value: '' },
			],
			showModal: false,
			modalText: ''
		}),
		methods: {
			...mapActions('auth', ['signUp']),
			async submit() {
				try {
					await this.signUp({
						login: this.fields[0].value,
						email: this.fields[1].value,
						password: this.fields[2].value,
						passwordRetry: this.fields[3].value,
					});

					this.$router.push({ name: 'catalog' });
				} catch (error) {
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

	.sign-up {
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

		&__field + &__field,
		&__button {
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
