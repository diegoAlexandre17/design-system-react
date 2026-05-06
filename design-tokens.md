# Design Tokens — MyIntelli Design System

Todos los tokens están definidos en `src/App.css` dentro de `@layer theme { :root { ... } }` y se mapean a utilidades Tailwind via `@theme inline`.

---

## Colores — Light Theme (`:root`)

### Fondos
| Token | Valor | Uso |
|---|---|---|
| `--background` | `#E9F3FE` | Fondo principal de la app |
| `--background-gray` | `#EFF6FE` | Fondo alternativo / secciones |
| `--card` | `#FFFFFF` | Fondo de cards y paneles |
| `--popover` | `#FFFFFF` | Fondo de popovers y dropdowns |
| `--muted` | `#F5F5F5` | Fondo de elementos deshabilitados / neutros |

### Texto
| Token | Valor | Uso |
|---|---|---|
| `--foreground` | `#5D5D5D` | Texto principal del body |
| `--card-foreground` | `#0A0A0A` | Texto sobre cards |
| `--muted-foreground` | `#737373` | Texto secundario / placeholders |
| `--black-light` | `#333333` | Texto oscuro ligero |
| `--gray-medium` | `#808080` | Texto gris medio |

### Colores de marca
| Token | Valor | Clase Tailwind | Uso |
|---|---|---|---|
| `--primary` | `#2585F4` | `bg-primary`, `text-primary` | Acción principal, botones default |
| `--primary-light` | `#ECF4FE` | `bg-primary-light` | Fondos tinted primario |
| `--primary-foreground` | `#FAFAFA` | `text-primary-foreground` | Texto sobre primario |
| `--secondary` | `#A7A7A7` | `bg-secondary` | Elementos secundarios |
| `--secondary-foreground` | `#171717` | `text-secondary-foreground` | Texto sobre secundario |

### Colores de estado
| Token | Valor | Clase Tailwind | Uso |
|---|---|---|---|
| `--destructive` | `#FD5656` | `bg-destructive` | Error, eliminar, peligro |
| `--destructive-foreground` | `#FAFAFA` | `text-destructive-foreground` | Texto sobre destructivo |
| `--success` | `#5FC85F` | `bg-success` | Éxito, confirmación |
| `--success-foreground` | `#FAFAFA` | `text-success-foreground` | Texto sobre success |
| `--warning` | `#FC9145` | `bg-warning` | Advertencia |
| `--warning-foreground` | `#FAFAFA` | `text-warning-foreground` | Texto sobre warning |

### Bordes e inputs
| Token | Valor | Uso |
|---|---|---|
| `--border` | `#E5E5E5` | Bordes de componentes |
| `--input` | `#E5E5E5` | Borde de inputs en reposo |
| `--ring` | `#0A0A0A` | Focus ring |

### Colores de gráficas
| Token | Valor |
|---|---|
| `--chart-1` | `#E76E50` |
| `--chart-2` | `#2A9D90` |
| `--chart-3` | `#274754` |
| `--chart-4` | `#E9C468` |
| `--chart-5` | `#F4A462` |

---

## Colores — Dark Theme (`.dark`)

| Token | Valor |
|---|---|
| `--background` | `#0A0A0A` |
| `--foreground` | `#FAFAFA` |
| `--primary` | `#1D6CC6` |
| `--success` | `#1B9849` |
| `--destructive` | `#FD5656` |
| `--muted` | `#262626` |
| `--border` | `#262626` |

---

## Tipografía

### Familias
| Variable | Fuente | Uso |
|---|---|---|
| `font-sans` (body default) | **Lato** | Todo el texto del sistema |
| `@fontsource-variable/geist` | **Geist** | Disponible para headings / código |

> La familia aplicada en `body` es Lato (declarado en `App.css`).

### Escala de texto (via componente `Text`)

| Variante | Clase Tailwind | Elemento HTML |
|---|---|---|
| `h1` | `text-4xl lg:text-5xl font-semibold tracking-tight` | `<h1>` |
| `h2` | `text-3xl font-semibold tracking-tight` | `<h2>` |
| `h3` | `text-2xl font-semibold tracking-tight` | `<h3>` |
| `h4` | `text-xl font-semibold tracking-tight` | `<h4>` |
| `h5` | `text-lg font-semibold tracking-tight` | `<h5>` |
| `p` | `text-base leading-7` | `<p>` |
| `span` | `text-base` | `<span>` |
| `small` | `text-sm font-medium leading-none` | `<small>` |
| `span-table` | `text-[12px] leading-none` | `<span>` |
| `span-13` | `text-[13px] leading-none` | `<span>` |
| `span-15` | `text-[15px] leading-none` | `<span>` |

---

## Espaciado y geometría

| Token | Valor | Uso |
|---|---|---|
| `--radius` | `0.5rem` (8px) | Border radius base del sistema |
| Radius componentes | `rounded-md` (6px), `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` | Según componente |

### Alturas de inputs y controles

| Tamaño | Altura | Uso |
|---|---|---|
| `sm` | `h-7` (28px) | Inputs compactos |
| `default` | `h-8` / `h-8.5` (32–34px) | Inputs y botones estándar |
| `lg` | `h-9` / `h-10` (36–40px) | Controles grandes |

---

## Sombras

Los botones usan una sombra Material-style por defecto:
```
shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),_0px_2px_2px_0px_rgba(0,0,0,0.14),_0px_1px_5px_0px_rgba(0,0,0,0.12)]
```

Los botones `link`, `tab`, `tab-active` y `ghost` usan `shadow-none`.

---

## Cómo usar los tokens en código

```tsx
// ✅ Correcto — usar clases Tailwind mapeadas
<div className="bg-primary text-primary-foreground" />
<div className="border-border bg-card" />

// ✅ Correcto — usar CSS variables directamente en estilos inline si es necesario
<div style={{ color: "var(--primary)" }} />

// ❌ Incorrecto — hardcodear valores
<div className="bg-[#2585F4]" />
```
