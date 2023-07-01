<template>
	<div class="records-edit-page container page">
		<div class="records-edit-page__inner">
			<c-record-form
				:id="recordForm.id"
				:temperature="recordForm.temperature"
				@record:cancel="cancelEditRecord"
				@record:save="saveRecord"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {CRecordForm} from "@/features/record-form";
import {useRoute, useRouter} from "vue-router";
import {ref, toRefs} from "vue";
import {useRecordsStore} from "@/app/providers/store/use-records-store";
import type {Record} from "@/entities/record";
const recordForm = ref<Record>({
	id: 0,
	temperature: 0
})

const router = useRouter()
const route = useRoute()
const store = useRecordsStore()
const {getRecordById, setRecord} = store.actions

const setRecordById = () => {
	const id = Number(route.params?.id) || 0
	const _record = getRecordById(id)
	if (_record) {
		recordForm.value = Object.assign(recordForm.value, _record)
	}
}

const cancelEditRecord = () => {
	recordForm.value.id = 0
	recordForm.value.temperature = 0
	directToRecords()
}
const saveRecord = (val: Record) => {
	setRecord(val)
	directToRecords()
}

const directToRecords = () => {
	router.push({name: 'records'})
}

setRecordById()
</script>

<style lang="scss">
.records-edit-page {

}
</style>
