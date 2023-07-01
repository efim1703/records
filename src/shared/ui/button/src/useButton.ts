import type { ButtonEmits, ButtonProps } from "./defaults";
import type { SetupContext } from "vue";

export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {
	const onClick = () => {
		emit('click')
	}

	return {
		onClick
	}
}
