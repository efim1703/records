<template>
	<input
		class="input"
		:value="modelValue"
		@input="$event => onInput($event.target.value)"
	>
</template>

<script setup lang="ts">
import { inputEmits, inputProps } from "./defaults";
import { useInput } from "./useInput";

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const {
	modelValue,
	onInput
} = useInput(props, emit)

</script>

<style lang="scss">
.input {
	width: fit-content;
	border: 1px solid var(--input-color-border);
	border-radius: 6px;
	padding: 4px 12px;

	&:hover,
	&:active,
	&:focus {
		border: 1px solid var(--input-color-border);
	}

	&--full-width {
		width: 100%;
	}
}
</style>
