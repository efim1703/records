<template>
	<div class="record">
		<div class="record__inner">
			<div class="record__index">{{props.index + '.'}}</div>
			<div class="record__content">
				<div class="record__id">ID: {{id}}</div>
				<div class="record__temp">Temperature: {{temp}}</div>
			</div>
			<div class="record__action">
				<c-button
					class="record__change"
					text
					@click="changeRecord"
				>
					<c-icon size="20px">
						<i-edit />
					</c-icon>
				</c-button>
				<c-button
					type="error"
					text
					class="record__delete"
					@click="deleteRecord"
				>
					<c-icon size="20px">
						<i-close />
					</c-icon>
				</c-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { recordEmits, recordProps } from "../model";
import {CButton, CIcon, IClose, IEdit} from "@/shared/ui";
import {useRecord} from "./useRecord";

const props = defineProps(recordProps)
const emit = defineEmits(recordEmits)

const {
	id,
	temp,
	changeRecord,
	deleteRecord,
} = useRecord(props, emit)
</script>

<style lang="scss">
.record {

	&__inner {
		padding: 4px 8px;
		display: flex;
		gap: 8px;
		align-items: center;
	}

	&__content {
		display: flex;
		gap: 12px;
	}

	&__action {
		margin-left: auto;
	}

	&__change {
	}
}
</style>
