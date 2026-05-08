import { NavLink, Outlet } from "react-router-dom"
import { ChevronUp, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { componentsSections } from "@/routes/componentsRoutes"
import logo from "@/assets/logo-myintelli-horizontal.jpg"

export default function AppLayout() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(componentsSections.map((s) => [s.label, true])),
  )
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSection = (label: string) =>
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }))

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top Navbar */}
      <header className="z-10 flex items-center gap-3 px-6 h-14 border-b border-border bg-white shrink-0">
        {/* Hamburger button – visible only below lg */}
        <button
          className="lg:hidden p-1 rounded-md hover:bg-muted transition-colors"
          onClick={() => setSidebarOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="size-5" />
        </button>

        {/* Left: logo */}
        <img
          src={logo}
          alt="MyIntelli"
          width={140}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </header>

      {/* Backdrop – visible only on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cn(
            // Base: fixed drawer on mobile, static on md+
            "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-border bg-white shrink-0 overflow-y-auto transition-transform duration-300",
            "w-52 py-3",
            // On md+ reset to in-flow
            "lg:static lg:z-auto lg:translate-x-0",
            // Mobile open/close
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {/* Close button – visible only below lg */}
          <div className="lg:hidden flex justify-end px-3 mb-2">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-md hover:bg-muted transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Component sections list */}
          <div className="flex flex-col">
            {componentsSections.map((section) => (
              <div key={section.label} className="mb-1">
                <button
                  onClick={() => toggleSection(section.label)}
                  className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {section.label}
                  <ChevronUp
                    className={cn(
                      "size-3.5 text-muted-foreground transition-transform",
                      !openSections[section.label] && "rotate-180",
                    )}
                  />
                </button>

                {openSections[section.label] && (
                  <ul className="mt-0.5">
                    {section.items.map(({ path, label }) => (
                      <li key={path}>
                        <NavLink
                          to={`/components/${path}`}
                          onClick={() => setSidebarOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              "block px-3 py-1.5 text-sm rounded-lg transition-colors mx-1",
                              isActive
                                ? "bg-muted font-medium text-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted",
                            )
                          }
                        >
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Page content */}
        <main className="flex-1 overflow-auto min-h-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
