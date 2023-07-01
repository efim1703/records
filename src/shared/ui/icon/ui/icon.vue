<template>
	<i class="icon" :style="style" v-bind="$attrs">
		<slot/>
	</i>
</template>

<script setup lang="ts">
import { iconEmits, iconProps } from "../model";
import { useIcon } from "./use-icon";

defineOptions({
	name: 'Icon',
	inheritAttrs: false
})

const props = defineProps(iconProps)
const emit = defineEmits(iconEmits)

const {
	style
} = useIcon(props, emit)
</script>

<style lang="scss">
.icon {
	display: flex;
	align-items: center;
	justify-content: center;
	--size: 24px;

	svg {
		width: var(--size);
		height: var(--size);
	}
}
</style>
