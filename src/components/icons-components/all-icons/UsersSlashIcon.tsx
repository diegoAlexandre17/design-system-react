import { defaultProps } from "@/components/icons/iconDefaultProps";
import type { SvgIconComponent } from "@/components/icons/types";
import UsersSlash from "@/assets/icons-svg/users-slash.svg?react";

export const UsersSlashIcon: SvgIconComponent = (props) => {
  return <UsersSlash {...defaultProps} {...props} />;
};