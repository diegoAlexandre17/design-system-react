import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

/**
 * Componente `Layout`
 * 
 * Estructura principal de la aplicación.
 * - Incluye el `Header` fijo en la parte superior.
 * - Incluye el `Sidebar` fijo a la izquierda.
 * - Define el área principal (`main`) donde se renderiza el contenido hijo (`children`),
 *   ajustando márgenes y scroll para acomodarse al header y sidebar.
 */
const Layout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Sidebar />
      <main className="absolute top-13 left-15 w-[calc(100dvw-60px)] h-[calc(100dvh-52px)] overflow-x-hidden overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export { Layout }