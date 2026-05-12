import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/icons/IconWrapper"
import type { SvgIconComponent } from "@/components/icons/types"
import GaugeSolidIcon from "@/assets/icons-svg/gauge-solid.svg?react"
import MapSolidIcon from "@/assets/icons-svg/map-solid.svg?react"
import UsersIcon from "@/assets/icons-svg/users.svg?react"
import BriefcaseClockSolidIcon from "@/assets/icons-svg/briefcase-clock-solid.svg?react"
import FileSpreadsheetSolidIcon from "@/assets/icons-svg/file-spreadsheet-solid.svg?react"
import ExclamationTriangleSolidIcon from "@/assets/icons-svg/exclamation-triangle-solid.svg?react"
import ChartLineupSolidIcon from "@/assets/icons-svg/chart-lineup-solid.svg?react"
import ClockRotateLeftIcon from "@/assets/icons-svg/clock-rotate-left.svg?react"
import FileChartIcon from "@/assets/icons-svg/file-chart.svg?react"
import GearsIcon from "@/assets/icons-svg/gears.svg?react"

interface SidebarItem {
  icon: SvgIconComponent
  label: string
  href: string
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { icon: GaugeSolidIcon, label: "Dashboard", href: "#" },
  { icon: MapSolidIcon, label: "Map", href: "#" },
  { icon: UsersIcon, label: "Users", href: "#" },
  { icon: BriefcaseClockSolidIcon, label: "Briefcase", href: "#" },
  { icon: FileSpreadsheetSolidIcon, label: "Schedule", href: "#" },
  { icon: ExclamationTriangleSolidIcon, label: "Alerts", href: "#" },
  { icon: ChartLineupSolidIcon, label: "Charts", href: "#" },
  { icon: ClockRotateLeftIcon, label: "History", href: "#" },
 
]

const SIDEBAR_BOTTOM_ITEMS: SidebarItem[] = [
  { icon: FileChartIcon, label: "Reports", href: "#" },
  { icon: GearsIcon, label: "Settings", href: "#" },
]

const Sidebar = () => {
  const [activeLabel, setActiveLabel] = useState<string>("Dashboard")

  const renderItem = (item: SidebarItem) => {
    const isActive = activeLabel === item.label
    return (
      <Button
        key={item.label}
        size="icon"
        variant={isActive ? "default" : "link"}
        className="size-11 shadow-none"
        title={item.label}
        onClick={() => setActiveLabel(item.label)}
      >
        <Icon
          icon={item.icon}
          className={`text-[25px] ${isActive ? "text-white" : "text-foreground"}`}
        />
      </Button>
    )
  }

  return (
    <aside className="bg-white fixed top-13 z-40 w-15 h-[calc(100dvh-52px)] flex flex-col justify-between p-2">
      <section className="flex flex-col gap-1.5">
        {SIDEBAR_ITEMS.map(renderItem)}
      </section>

      <section className="flex flex-col gap-1.5">
        {SIDEBAR_BOTTOM_ITEMS.map(renderItem)}
      </section>
    </aside>
  )
}

export default Sidebar
