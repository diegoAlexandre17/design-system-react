import { defaultProps } from "@/components/icons/iconDefaultProps";
import type { SvgIconComponent } from "@/components/icons/types";
import Star from "@/assets/icons-svg/star-solid.svg?react";

export const StarIcon: SvgIconComponent = (props) => {
  return <Star {...defaultProps} {...props} />;
};
