# Cómo agregar una nueva página de componente

## 1. Crear la página

Crea un archivo en `src/pages` con el nombre del componente, por ejemplo `ButtonPage.tsx`:

```tsx
export default function ButtonPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Button</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Descripción del componente.
        </p>
      </div>

      {/* Secciones de ejemplos */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Default</h2>
        <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-muted/30">
          {/* ejemplos aquí */}
        </div>
      </section>
    </div>
  )
}
```

## 2. Registrar la ruta

Abre `src/routes/componentsRoutes.tsx`, importa la página y agrégala al array `items` de la sección correspondiente:

```tsx
import ButtonPage from '@/pages/components/ButtonPage'

export const componentsSections: ComponentSection[] = [
  {
    label: 'Base components',
    items: [
      { path: 'avatar', label: 'Avatars', element: <AvatarPage /> },
      { path: 'button', label: 'Buttons', element: <ButtonPage /> }, // nueva entrada
    ],
  },
]
```

Con eso la ruta `/components/button` queda disponible y el link aparece automáticamente en el sidebar.
