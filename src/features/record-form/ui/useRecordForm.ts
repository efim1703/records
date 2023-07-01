import type { RecordFormEmits, RecordFormProps  } from "../model/types";
import type { SetupContext } from "vue";
import {computed, reactive} from "vue";
import type {Record} from "@/entities/record";

export const useRecordForm = (props: RecordFormProps, emit: SetupContext<RecordFormEmits>['emit']) => {
	const values = reactive<Record>({
		id: props.id || 0,
		temperature: props.temperature || 0,
	})

	const save = () => {
		emit('record:save', values)
	}
	const cancel = () => {
		emit('record:cancel')
	}

	return {
		values,
		save,
		cancel
	}
}
