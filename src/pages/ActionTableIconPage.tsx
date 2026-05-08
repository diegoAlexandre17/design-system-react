import ActionTableIcon from "@/components/common/ActionTableIcon"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"
import { PendingIcon } from "@/components/icons-components/all-icons/PendingIcon"
import { StarIcon } from "@/components/icons-components/all-icons/StarIcon"
import { TrashIcon } from "@/components/icons-components/all-icons/TrashIcon"
import { UsersSlashIcon } from "@/components/icons-components/all-icons/UsersSlashIcon"
import { Users } from "lucide-react"

export default function ActionTableIconPage() {
  return (
    <ShowcasePage
      title="Action Table Icon"
      description="Iconos de acción para filas de tablas con tooltip y estados."
    >
      <ShowcaseSection title="Default">
        <div className="flex items-center gap-4">
          <ActionTableIcon icon={Users} tooltip="Ver usuarios" />
          <ActionTableIcon icon={TrashIcon} tooltip="Pendiente" />
          <ActionTableIcon icon={StarIcon} tooltip="Usuarios inactivos" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled">
        <div className="flex items-center gap-4">
          <ActionTableIcon icon={Users} tooltip="Ver usuarios" disabled />
          <ActionTableIcon icon={StarIcon} tooltip="Pendiente" disabled />
          <ActionTableIcon
            icon={UsersSlashIcon}
            tooltip="Usuarios inactivos"
            disabled
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Loading">
        <div className="flex items-center gap-4">
          <ActionTableIcon icon={Users} tooltip="Ver usuarios" loading />
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