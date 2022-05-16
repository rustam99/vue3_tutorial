<template>
	<input
		class="input"
		:type="type"
		:placeholder="placeholder"
		:name="name"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'text',
			},
			placeholder: {
				type: String,
				default: '',
			},
			name: {
				type: String,
				default: '',
			},
			modelValue: {
				type: String,
				require: true,
			}
		},
		emits: ['update:modelValue'],
	}
</script>

<style lang="scss">
	@import '@/assets/css/modules/vars';
	@import '@/assets/css/modules/mixin';

	.input {
		padding: 5px;
		border: none;
		border-bottom: 2px solid $black;
		background-color: transparent;
		font-size: rem(18);
		color: $black;
		outline: none;

		&:focus-visible {
			border-bottom-color: $blue;
		}
	}
</style>
