import { defaultProps } from "@/components/icons/iconDefaultProps";
import type { SvgIconComponent } from "@/components/icons/types";
import Users from "@/assets/icons-svg/users.svg?react";

export const UsersIcon: SvgIconComponent = (props) => {
  return <Users {...defaultProps} {...props} />;
};
