import type { ExtractPropTypes } from "vue";
import type { recordFormEmits, recordFormProps } from "./defaults";

export type RecordFormProps = ExtractPropTypes<typeof recordFormProps>
export type RecordFormEmits = typeof recordFormEmits
