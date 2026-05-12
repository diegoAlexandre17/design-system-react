import { useState } from "react"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Text } from "@/components/ui/text"
import { BellIcon } from "lucide-react"
import logo from "@/assets/logo-myintelli-horizontal.jpg"
import { Icon } from "@/components/icons/IconWrapper"
import IntelliTimeIcon from "@/assets/icons-svg/intelli-time.svg?react"
import IntelliAccessIcon from "@/assets/icons-svg/intelli-access.svg?react"
import IntelliGuestIcon from "@/assets/icons-svg/intelli-guest.svg?react"
import IntelliLunchIcon from "@/assets/icons-svg/intelli-lunch.svg?react"

const middleIcons = [
  { icon: IntelliTimeIcon, href: "#", label: "Time" },
  { icon: IntelliAccessIcon, href: "#", label: "Access" },
  { icon: IntelliGuestIcon, href: "#", label: "Guest" },
  { icon: IntelliLunchIcon, href: "#", label: "Lunch" },
]

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <header className="bg-white fixed z-50 w-full h-13 flex justify-between shadow-[0px_4px_15px_0px_rgba(34,41,47,0.1)] px-5">
      {/* Sección del logotipo */}
      <section className="w-1/3 flex items-center">
        <a href="/" className="w-max">
          <img src={logo} alt="logo" className="w-35 h-10" width={140} height={40}/>
        </a>
      </section>

      {/* Navegación central con iconos */}
      <nav className="w-1/3 flex items-center justify-center gap-11">
        {middleIcons.map((item, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className="cursor-pointer">
            <Icon
              icon={item.icon}
              size="4xl"
              className={activeIndex === index ? "text-purple-navbar" : "text-foreground"}
            />
          </button>
        ))}
      </nav>

      {/* Información de usuario y acciones */}
      <section className="w-1/3 text-slate-600 flex items-center justify-end gap-4">
        <div className="text-xs flex flex-col items-end justify-center">
          <BellIcon className="size-6 text-gray-500 fill-current" />
        </div>
        <div className="flex flex-col gap-1">
          <Text variant="span-15" className="font-semibold">Asel</Text>
          <Text variant="small-10" className="text-secondary">Desarrollador</Text>
        </div>
        <Avatar size="lg" ring >
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
          <AvatarBadge className="size-2!"/>
        </Avatar>
      </section>
    </header>
  )
}

export default Header