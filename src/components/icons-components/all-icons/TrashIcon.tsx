import { defaultProps } from "@/components/icons/iconDefaultProps";
import type { SvgIconComponent } from "@/components/icons/types";
import Trash from "@/assets/icons-svg/trash-solid.svg?react";

export const TrashIcon: SvgIconComponent = (props) => {
  return <Trash {...defaultProps} {...props} />;
};
