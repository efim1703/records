<template>
	<button
		:class="[
			'button', `button--${props.type}`,
			{'button--text': props.text},
			{'button--full-width': props.fullWidth},
		]"
		@click="onClick"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { buttonEmits, buttonProps } from "./defaults";
import { useButton } from "./useButton";

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const {
	onClick
} = useButton(props, emit)
</script>

<style lang="scss">
.button {
	width: fit-content;
	padding: 8px 16px;
	border-radius: 6px;
	color: var(--button-default-text);
	background-color: var(--button-default-background);
	cursor: pointer;
	transition: all .2s ease-in;
	font-size: 12px;

	&:hover {
		color: #fff;
		background-color: var(--button-default-background-hover);
	}

	&--error {
		color: var(--button-error-text);
		background-color: var(--button-error-background);
		&:hover {
			background-color: var(--button-error-background-hover);
		}
	}

	&--accent {
		color: var(--button-accent-text);
		background-color: var(--button-accent-background);
		&:hover {
			background-color: var(--button-accent-background-hover);
		}
	}

	&--full-width {
		width: 100%;
	}

	&--text {
		padding: 4px;
		background-color: transparent;
		color: var(--color-text-primary);
	}

	& + .button {
		margin-left: 8px;
	}
}
</style>
