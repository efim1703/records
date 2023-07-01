import type { ExtractPropTypes } from "vue";
import type { recordEmits, recordProps } from "./defaults";

interface Record {
	id: number,
	temperature: number,
}

export type RecordProps = ExtractPropTypes<typeof recordProps>
export type RecordEmits = typeof recordEmits

export type {
	Record
}
