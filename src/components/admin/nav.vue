<template>
	<ul class="nav-list">
		<li class="nav-list__item" v-for="link in links" :key="link.name">
			<router-link
				:to="{ name: link.name }"
				class="nav-list__link link"
				exact-active-class="active">
				{{ link.label }}
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	data: () => ({
		links: [
			{ name: 'admin_catalog', label: 'Каталог' },
			{ name: 'admin_product', label: 'Продукт' }
		]
	}),
}
</script>

<style lang="scss">
	.nav-list {
		margin: 0;
		padding: 5px;
		list-style: none;

		&__item + &__item {
			margin-top: 15px;
		}
	}
</style>
