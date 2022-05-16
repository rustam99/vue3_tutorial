<template>
	<div class="product-card">
		{{ $route.params.id }}
	</div>
</template>

<script>
	import E404 from '@/components/404';

	export default {
		computed: {

		},
		methods: {

		},
		components: {
			E404,
		}
	}
</script>

<style lang="scss">
	.product-card {

	}
</style>
