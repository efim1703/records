import type { RecordEmits, RecordProps  } from "../model/types";
import type { SetupContext } from "vue";
import {computed} from "vue";

export const useRecord = (props: RecordProps, emit: SetupContext<RecordEmits>['emit']) => {
	const id = computed<Number>(() => props.id || 0)
	const temp = computed<Number>(() => props.temperature || 0)
	const changeRecord = () => {
		emit('record:change')
	}

	const deleteRecord = () => {
		emit('record:delete')
	}
	return {
		id,
		temp,
		changeRecord,
		deleteRecord
	}
}
