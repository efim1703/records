import type {ExtractPropTypes, PropType} from "vue";

export type ButtonType = 'default' | 'error'

export const buttonProps = {
	type: {
		type: String as PropType<ButtonType>,
		default: 'default'
	},
	size: {
		type: String,
		default: 'default'
	},
	fullWidth: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	text: {
		type: Boolean,
		default: false
	},
}

export const buttonEmits = {
	'click': () => true,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export default buttonProps
