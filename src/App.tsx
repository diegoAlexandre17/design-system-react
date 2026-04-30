import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ComponentsPage from './pages/ComponentsPage'
import { componentsRoutes } from './routes/componentsRoutes'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<div className="p-6"><h1 className="text-2xl font-semibold">Inicio</h1></div>} />
        <Route path="/components">
          <Route index element={<ComponentsPage />} />
          {componentsRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="/projects" element={<div className="p-6"><h1 className="text-2xl font-semibold">Proyectos</h1></div>} />
      </Route>
    </Routes>
  )
}

export default App
