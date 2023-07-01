<template>
	<div class="records-edit-page container page">
		<div class="records-edit-page__inner">
			<c-record-form
				:id="recordForm.id"
				:temperature="recordForm.temperature"
				@record:cancel="showCancelModal"
				@record:save="saveRecord"
			/>
		</div>
	</div>
	<c-modal v-model="cancelModal.show">
		<div class="records-edit-page__modal">
			<div class="records-edit-page__label">
				Вы точно хотите отменить изменения?
			</div>
			<div class="records-edit-page__action">
				<c-button
					class="records-edit-page__cancel"
					@click="cancelModal.show = false"
				>
					Закрыть
				</c-button>
				<c-button
					type="error"
					class="records-edit-page__delete"
					@click="closeCancelModal"
				>
					Отменить
				</c-button>
			</div>
		</div>
	</c-modal>
</template>

<script setup lang="ts">
import {CRecordForm} from "@/features/record-form";
import {useRoute, useRouter} from "vue-router";
import {reactive, ref, toRefs} from "vue";
import {useRecordsStore} from "@/app/providers/store/use-records-store";
import type {Record} from "@/entities/record";
import {CButton, CModal} from "@/shared/ui";


const recordForm = ref<Record>({
	id: 0,
	temperature: 0
})
const cancelModal = reactive({
	id: 0,
	show: false,
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

const showCancelModal = () => {
	cancelModal.show = true
}

const closeCancelModal = () => {
	cancelModal.show = false
	directToRecords()
}
setRecordById()
</script>

<style lang="scss">
.records-edit-page {
	&__modal {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}
}

.records-edit-page-modal {
	&__label {
		margin-top: 16px;
	}
}
</style>
