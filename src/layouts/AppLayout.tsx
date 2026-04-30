import { NavLink, Outlet, useMatch } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { componentsSections } from "@/routes/componentsRoutes";
import logo from "@/assets/logo-myintelli-horizontal.jpg";

export default function AppLayout() {
  const isComponentsSection = !!(
    useMatch("/components/*") || useMatch("/components")
  );
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(componentsSections.map((s) => [s.label, true])),
  );

  const toggleSection = (label: string) =>
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top Navbar */}
      <header className="flex items-center justify-between px-6 h-14 border-b border-border bg-white shrink-0">
        {/* Left: logo */}
        <img src={logo} alt="MyIntelli" width={140} height={40} className="h-10 w-auto object-contain" />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cn(
            "flex flex-col border-r border-border bg-white shrink-0 overflow-y-auto transition-all",
            isComponentsSection ? "w-52 py-3" : "w-12 py-3 items-center",
          )}
        >
          {/* Component sections list */}
          {isComponentsSection && (
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
          )}
        </aside>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
