export const recordProps = {
	index: {
		type: Number,
		default: 0
	},
	id: {
		type: Number,
		required: true
	},
	temperature: {
		type: Number,
		default: 0
	},
}
export const recordEmits = {
	'record:change': () => true,
	'record:delete': () => true,
}
