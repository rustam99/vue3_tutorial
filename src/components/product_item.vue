<template>
	<div class="product-item">
		<div class="product-item__photo">
			<img :src="photo" alt="">
		</div>
		<div class="product-item__title">{{ title }}</div>
		<div class="product-item__desc">{{ desc }}</div>
		<div class="product-item__price">
			<span class="product-item__key">Цена</span>
			<span class="product-item__val">{{ formatPrice }}&nbsp;&#8381;</span>
		</div>
		<div class="product-item__more">
			<router-link class="product-item__link link" :to="{ name: 'product', params: { id: link } }">Подробнее</router-link>
		</div>
		<button class="product-item__button button button_success">Добавить в корзину</button>
	</div>
</template>

<script>
import { priceFormat } from '@/utils/format'

export default {
	props: {
		photo: {
			type: String,
			default: '@/assets/img/interface/no_photo.png',
		},
		title: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		},
		price: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		}
	},
	computed: {
		formatPrice() {
			return priceFormat(this.price);
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/button';

.product-item {
	display: flex;
	flex-direction: column;
	padding: 20px 25px;
	box-sizing: border-box;
	background-color: #fff;
	box-shadow: 0 0 10px rgba($black, .5);

	&__photo {
		display: flex;
		flex: 1 0 auto;
		justify-content: center;
		align-items: center;
	}

	&__title,
	&__desc,
	&__price,
	&__more,
	&__button {
		margin-top: 20px;
	}

	&__name {
		font-size: rem(18);
		line-height: 1.3;
	}

	&__desc {
		max-height: 65px;
		overflow: hidden;
		line-height: 1.3;
	}

	&__price {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-weight: 500;
	}

	&__key {
		font-size: rem(18);
	}

	&__val {
		margin-left: 10px;
		font-size: rem(21);
	}
}
</style>
