<template>
	<h1>{{ title }}</h1>
	<router-link :to="{ name: 'catalog' }">To catalog</router-link>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '404 Not Found!!!'
			}
		}
	}
</script>
