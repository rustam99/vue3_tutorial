<template>
	<div class="catalog-element">
		<h1 class="catalog-element__title">{{ catalog(idCatalog).name }}</h1>
		<div class="product-list">
			<ProductItem
				v-for="item in products"
				:key="item.id"
				:photo="item.photo_preview"
				:title="item.name"
				:desc="item.description"
				:price="item.price"
				:link="item.id"
				class="product-list__item">
			</ProductItem>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ProductItem from '@/components/product_item';

export default {
	created() {
		this.$store.dispatch('products/all', this.idCatalog);
	},
	computed: {
		...mapState('products', ['products']),
		...mapGetters('catalog', {
			catalog: 'one',
		}),
		idCatalog() {
			return this.$route.params.id;
		}
	},
	components: {
		ProductItem,
	}
}
</script>

<style lang="scss" scoped>
	.product-list {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 0 -20px;

		&__item {
			margin: 20px;
			width: calc(25% - 40px);
		 }
	}
</style>
