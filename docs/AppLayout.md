# AppLayout

> `src/layouts/AppLayout.tsx`

Shell principal de la aplicación. Compone un topbar fijo, un sidebar colapsable y el área de contenido principal.

---

## Estructura

```
┌─────────────────────────────────────────┐
│  header  h-14  (topbar)                 │
├──────────┬──────────────────────────────┤
│  aside   │  main                        │
│  w-52    │  flex-1  overflow-auto       │
│ (sidebar)│                              │
└──────────┴──────────────────────────────┘
```

- **Topbar** (`header`): `h-14`, `border-b`, `bg-white`. Contiene el botón hamburguesa (visible `< lg`) y el logo.
- **Sidebar** (`aside`): `w-52`, `border-r`, `bg-white`. Scroll vertical con secciones colapsables. En mobile es un drawer con `translate-x` y backdrop.
- **Main** (`main`): `flex-1 overflow-auto min-h-0`. Renderiza el `<Outlet />` de React Router.

---

## Responsive behavior

| Viewport | Sidebar | Hamburger |
|----------|---------|-----------|
| `< lg` (mobile) | Drawer lateral, oculto por defecto (`-translate-x-full`) | Visible — abre el drawer |
| `≥ lg` (desktop) | Estático en flujo (`lg:static lg:translate-x-0`) | Oculto (`lg:hidden`) |

El backdrop (`bg-black/40 fixed inset-0 z-30`) se renderiza solo en mobile cuando el sidebar está abierto.

---

## Import

```tsx
import AppLayout from "@/layouts/AppLayout"

// Usado en la definición de rutas (React Router):
<Route element={<AppLayout />}>
  <Route path="components/:slug" element={<ComponentPage />} />
</Route>
```

---

## Key class tokens

| Element | Clases clave |
|---------|-------------|
| Root wrapper | `flex flex-col h-screen bg-white` |
| Topbar | `z-10 flex items-center gap-3 px-6 h-14 border-b border-border bg-white shrink-0` |
| Sidebar | `w-52 py-3 border-r border-border bg-white overflow-y-auto` |
| Main | `flex-1 overflow-auto min-h-0` |
| Nav link active | `bg-muted font-medium text-foreground` |
| Nav link default | `text-muted-foreground hover:text-foreground hover:bg-muted` |
