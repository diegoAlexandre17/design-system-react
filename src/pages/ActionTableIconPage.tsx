import ActionTableIcon from "@/components/common/ActionTableIcon"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"
import PendingIcon from "@/assets/icons-svg/user-clock.svg?react"
import StarIcon from "@/assets/icons-svg/star-solid.svg?react"
import StarRegularIcon from "@/assets/icons-svg/star-regular.svg?react"
import TrashIcon from "@/assets/icons-svg/trash-solid.svg?react"
import TrashRegularIcon from "@/assets/icons-svg/trash-regular.svg?react"
import UsersSlashIcon from "@/assets/icons-svg/users-slash.svg?react"
import UsersIcon from "@/assets/icons-svg/users.svg?react"

export default function ActionTableIconPage() {
  return (
    <ShowcasePage
      title="Action Table Icon"
      description="Iconos de acción para filas de tablas con tooltip y estados."
    >
      <ShowcaseSection title="Default">
        <div className="flex items-center gap-4">
          <ActionTableIcon icon={UsersIcon} tooltip="Ver usuarios" />
          <ActionTableIcon icon={TrashIcon} tooltip="Eliminar" />
          <ActionTableIcon icon={StarIcon} tooltip="Destacar" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Hover Solid">
        <div className="flex items-center gap-4">
          <ActionTableIcon
            icon={TrashRegularIcon}
            iconSolid={TrashIcon}
            tooltip="Eliminar"
          />
          <ActionTableIcon
            icon={StarRegularIcon}
            iconSolid={StarIcon}
            tooltip="Destacar"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled">
        <div className="flex items-center gap-4">
          <ActionTableIcon icon={UsersIcon} tooltip="Ver usuarios" disabled />
          <ActionTableIcon icon={StarIcon} tooltip="Destacar" disabled />
          <ActionTableIcon
            icon={UsersSlashIcon}
            tooltip="Usuarios inactivos"
            disabled
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Loading">
        <div className="flex items-center gap-4">
          <ActionTableIcon icon={UsersIcon} tooltip="Ver usuarios" loading />
          <ActionTableIcon icon={PendingIcon} tooltip="Pendiente" loading />
          <ActionTableIcon
            icon={UsersSlashIcon}
            tooltip="Usuarios inactivos"
            loading
          />
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}