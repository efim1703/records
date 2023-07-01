import type { ExtractPropTypes } from "vue";
import type { iconEmits, iconProps } from "./defaults";

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconEmits = typeof iconEmits
