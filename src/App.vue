<template>
	<div class="wrapper">
		<app-header></app-header>
		<main class="content">
			<div class="container">
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>

<script>
import AppHeader from '@/components/header';

export default {
	name: 'default',
	components: {
		AppHeader,
	}
}
</script>
