<template>
	<div class="product-card">
		<div class="product-card__image">
			<img class="product-card__img" src="@/assets/img/misc/1_small.jpg" alt="">
		</div>
		<div class="product-card__title">asdsad</div>
		<div class="product-card__desc">qeqwewewqe</div>
		<div class="product-card__price">27 000 Р</div>
		<div class="product-card__count">
			<button class="button button_primary">-</button>
			<label class="product-card__label">
				<appInput class="product-card__input" @input="valid" v-model="count"></appInput>
				{{count}}
			</label>
			<button class="button button_primary">+</button>
		</div>
	</div>
</template>

<script>
import AppInput from '@/components/form/input';

export default {
	data: () => ({
		count: '1',
	}),
	computed: {},
	methods: {
		valid(e) {
			if (e.target.value === '') {
				this.count = '1';

				e.target.value = this.count;
			}

			this.count = this.count.replace(/[^0-9]/g, '');

			e.target.value = this.count;
		}
	},
	components: {
		AppInput
	}
}
</script>

<style lang="scss">
.product-card {

}
</style>
