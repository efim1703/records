<template>
	<div class="record-form">
		{{props}}
		{{values}}
		<div class="record-form__inner">
			<div class="record-form__body">
				<div class="record-form__id">
					<span>ID: {{values.id}}</span>
				</div>
				<div class="record-form__temp">
					<span>Temperature: </span>
					<c-input v-model="values.temperature" type="number" :maxLength="10"/>
				</div>
			</div>
			<div class="record-form__action">
				<c-button
					type="error"
					class="record-form__cancel"
					@click="cancel"
				>
					Отменить
				</c-button>
				<c-button
					type="accent"
					class="record-form__save"
					@click="save"
				>
					Сохранить
				</c-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { recordFormEmits, recordFormProps } from "../model";
import {CButton, CInput, CIcon, IClose, IEdit} from "@/shared/ui";
import {useRecordForm} from "./useRecordForm";

const props = defineProps(recordFormProps)
const emit = defineEmits(recordFormEmits)

const {
	values,
	save,
	cancel,
} = useRecordForm(props, emit)
</script>

<style lang="scss">
.record-form {
	&__inner {
		width: 228px;
		margin: 0 auto;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
		border: 1px solid var(--record-form-border-color);
		border-radius: 6px;
	}

	&__body {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 16px;
	}

	&__action {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	&__temp {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.input {
			width: 96px;
		}
	}

	&__change {
	}
}
</style>
