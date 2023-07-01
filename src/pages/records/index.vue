<template>
	<div class="records-page container page">
		<div class="records-page__inner">
			<div class="records-page__add-record">
				<div class="records-page__add-record-label">Перейти к созданию новой записи</div>
				<router-link :to="{name: 'records-edit', params: {id: 0}}">
					<c-button type="accent">
							Создать
					</c-button>
				</router-link>
			</div>
			<div class="records-page__list">
				<div class="records-page__record">
					<c-record
						v-for="(record, index) in records"
						:key="record.id"
						:index="index + 1"
						:id="record.id"
						:temperature="record.temperature"
						@record:change="changeRecord(record.id)"
						@record:delete="showDeleteRecordModal(record.id)"
					/>
				</div>
			</div>
		</div>
		<c-modal v-model="deleteRecordModal.show">
			<div class="records-page__modal">
				<div class="records-page-modal__label">
					Вы точно хотите удалить запись ?
				</div>
				<div class="records-page-modal__action">
					<c-button
						class="records-page-modal__cancel"
						@click="closeDeleteRecordModal"
					>
						Закрыть
					</c-button>
					<c-button
						type="error"
						class="records-page-modal__delete"
						@click="_deleteRecord"
					>
						Удалить
					</c-button>
				</div>
			</div>
		</c-modal>
	</div>
</template>

<script setup lang="ts">
import {CButton, CModal} from "@/shared/ui";
import {CRecord} from "@/entities/record";
import {useRecordsStore} from "@/app/providers/store/use-records-store";
import {useRouter} from "vue-router";
import {reactive, toRefs} from "vue";

const store = useRecordsStore()
const { records } = toRefs(store.state)
const { deleteRecord } = store.actions

const router = useRouter()

const deleteRecordModal = reactive({
	id: 0,
	show: false,
})
const changeRecord = (id: number) => {
	router.push({name: 'records-edit', params: {id: id || 0}})
}

const _deleteRecord = () => {
	deleteRecord(deleteRecordModal.id)
	closeDeleteRecordModal()
}

const showDeleteRecordModal = (id: number) => {
	deleteRecordModal.id = id
	deleteRecordModal.show = true
}

const closeDeleteRecordModal = () => {
	deleteRecordModal.id = 0
	deleteRecordModal.show = false
}

</script>

<style lang="scss">
.records-page {

	&__inner {
	}

	&__add-record {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;

		a {
			color: #FFF;
		}
	}

	&__add-record-label {
		font-size: 18px;
		font-weight: 500;
	}

	&__list {

	}

	&__record {
		border: 1px solid var(--record-border-color);
		border-radius: 6px;
		margin-bottom: 8px;
		&:last-child {
			margin-bottom: 0;
		}
	}

	&__modal {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}
}

.records-page-modal {
	&__label {
		margin-top: 16px;
	}
}
</style>
