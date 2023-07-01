import type { IconEmits, IconProps } from "../model";
import type { CSSProperties, SetupContext } from "vue";
import { computed, toRefs } from "vue";

export const useIcon = (props: IconProps, emit: SetupContext<IconEmits>['emit']) => {
	const {size, color} = toRefs(props)

	const style = computed<CSSProperties>(() => {
		const result: Record<string, any> = {}

		if (size.value && typeof size.value !== undefined) {
			result[ '--size' ] = size.value
		}

		if (color.value) {
			result[ 'color' ] = color.value
		}

		return result
	})

	return {
		style
	}
}
