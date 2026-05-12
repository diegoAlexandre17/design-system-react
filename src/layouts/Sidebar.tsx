import { SquareAsteriskIcon } from "lucide-react"

// Lista de elementos principales del sidebar (Ejemplo placeholder, luego reemplazar con rutas reales)
const SIDEBAR_ITEMS = Array.from({ length: 8 }, (_, index) => ({
  icon: SquareAsteriskIcon,
  label: `Icono ${index + 1}`,
  href: "#"
}))

/**
 * Componente `Sidebar`
 * 
 * Barra lateral de navegación fija a la izquierda.
 * Muestra una lista de items de navegación y acciones adicionales en la parte inferior.
 */
const Sidebar = () => {
  return (
    <aside className="bg-white fixed top-13 z-40 w-15 h-[calc(100dvh-52px)] flex flex-col justify-between p-2">
      {/* Sección superior: Items de navegación principales */}
      <section className="flex flex-col gap-2">
        {SIDEBAR_ITEMS.map((item) => (
          <a key={item.label} href={item.href} className="size-11.25 text-black hover:bg-blue-500 hover:text-white hover:opacity-100 flex items-center justify-center rounded-md">
            <item.icon className="size-6" />
          </a>
        ))}
      </section>

      {/* Sección inferior: Acciones de configuración o utilidades */}
      <section className="flex flex-col gap-2">
        <a href="#" className="size-11.25 text-black hover:bg-blue-500 hover:text-white hover:opacity-100 flex items-center justify-center rounded-md">
          <SquareAsteriskIcon className="size-6" />
        </a>

        <a href="#" className="size-11.25 bg-blue-500 text-white flex items-center justify-center rounded-md hover:opacity-100">
          <SquareAsteriskIcon className="size-6" />
        </a>
      </section>
    </aside>
  )
}

export default Sidebar