import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import { Layout } from './layouts/Layout'
import ComponentsPage from './pages/ComponentsPage'
import { componentsSections } from './routes/componentsRoutes'
import './App.css'

function App() {
  const baseSections = componentsSections.filter(s => s.label !== "Pages")
  const pagesSection = componentsSections.find(s => s.label === "Pages")

  const baseRoutes = baseSections.flatMap(s => s.items)
  const pagesRoutes = pagesSection ? pagesSection.items : []

  return (
    <Routes>
      {/* Rutas con AppLayout (Default) */}
      <Route element={<AppLayout />}>
        <Route index element={<ComponentsPage />} />
        <Route path="/components">
          <Route index element={<ComponentsPage />} />
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="/projects" element={<div className="p-6"><h1 className="text-2xl font-semibold">Proyectos</h1></div>} />
      </Route>

      {/* Rutas con el nuevo Layout (para sección Pages) */}
      <Route element={<Layout />}>
        <Route path="/components">
          {pagesRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Route>
    </Routes>
  )
}

export default App
