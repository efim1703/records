import type {Record} from "@/entities/record";
export const recordFormProps = {
	id: {
		type: Number,
		default: 0
	},
	temperature: {
		type: Number,
		default: 0
	},
}
export const recordFormEmits = {
	'record:save': (v: Record) => true,
	'record:cancel': () => true,
}
