import type { InputEmits, InputProps } from "./defaults";
import type { SetupContext } from "vue";
import { computed } from "vue";

export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
	const onInput = (str: string) => {
		let value: string | number = str
		if (props.maxLength && str.length > props.maxLength) {
				value = str.slice(0, props.maxLength)
		}
		if (props.type === 'number') {
			value = Number(value)
		}
		emit('input', value)
		emit('update:modelValue', value)
	}

	const modelValue = computed(() => props.modelValue)

	return {
		modelValue,
		onInput
	}
}
