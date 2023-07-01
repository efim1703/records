import { defineStore } from "pinia"
import { computed, ref } from "vue";
import type {Record} from "@/entities/record";
import {useStorage} from "@vueuse/core";

// Можно было написать на простом pinia синтаксисе, н отакой компонентый синтаксис удобен для более масштабных сторов
export const useRecordsStore = defineStore('records', () => {
	const defaultRecords: Record[] = ([{id: 1, temperature: 24}, {id: 2, temperature: 23}, {id: 3, temperature: 25}])

	const storage = useStorage<{
		records: Record[],
	}>('records-storage-key', {
		records: defaultRecords,
	})

	const _records = ref<Record[]>(storage.value.records ?? defaultRecords)

	// Мосты
	const records = computed<Record[]>({
		get: () => _records.value,
		set: (v: any) => {
			console.log('save',v)
			_records.value = v
			storage.value.records = v
		},
	})

	const getRecordById = (id: number) => {
		return records.value.find(el => el.id === id)
	}
	const setRecord = (record: Record) => {
		if (record.id === 0) {
			records.value.unshift(Object.assign(record, {id: new Date().getTime()}))
		} else {
			records.value = records.value.map(el => el.id === record.id ? Object.assign(el, record) : el)
		}
	}

	const deleteRecord = (recordId: number) => {
		records.value = records.value.filter(el => el.id !== recordId )
	}

	return {
		state: {
			records,
		},
		actions: {
			setRecord,
			getRecordById,
			deleteRecord,
		}
	}
})
