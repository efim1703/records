import type { ExtractPropTypes } from "vue";

export const inputProps = {
	modelValue: {
		type: String,
		required: true
	},
	size: {
		type: [String, Number],
		default: 'default'
	},
	fullWidth: {
		type: Boolean,
		default: false
	},
	type: {
		type: String,
		default: 'text'
	},
	maxLength: {
		type: Number,
		required: false
	},
}

export const inputEmits = {
	[ 'input' ]: (str: string | number) => true,
	[ 'update:modelValue' ]: (str: string | number) => true,
}

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits

export default inputProps
