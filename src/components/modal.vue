<template>
	<transition name="fade">
		<div v-if="isShow" class="modal">
			<slot name="header">
				<h2 class="modal__title">{{ title }}</h2>
			</slot>
			<div class="modal__content">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'Title',
			},
			isShow: {
				type: Boolean,
				default: false,
			}
		},
	}
</script>

<style lang="scss">
	@import '@/assets/css/modules/vars';

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s ease;
	}

	.modal {
		position: fixed;
		top: 0;
		right: 0;
		max-width: 400px;
		padding: 20px 30px;
		box-sizing: border-box;
		background-color: rgba($black, .8);
		color: $white;

		&__title {
			margin: 0;
		}

		&__content {
			margin-top: 15px;
		}
	}
</style>
