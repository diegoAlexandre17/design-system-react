# CLAUDE.md

Guía para Claude Code al trabajar con este repositorio.

## Stack

- **Framework**: React 19 + Vite 8 + TypeScript
- **Routing**: react-router-dom v7
- **Estilos**: Tailwind CSS v4 (`@tailwindcss/vite`) + `tw-animate-css`
- **UI primitives**: shadcn/ui sobre Radix UI (`radix-ui`, `@base-ui/react`)
- **Tablas**: `@tanstack/react-table`
- **Charts**: `echarts-for-react` y `apexcharts` / `react-apexcharts`
- **Iconos**: `lucide-react` + SVGs custom en `src/components/icons/`
- **Teléfonos**: `react-international-phone`
- **Variantes**: `class-variance-authority` + `clsx` + `tailwind-merge`

## Scripts

```bash
npm run dev      # Vite dev server
npm run build    # tsc -b && vite build
npm run lint     # ESLint
npm run preview  # Vite preview
```

## Estructura del proyecto

```
design-system-react/
├── .claude/
│   ├── settings.local.json
│   └── skills/
│       └── design-system/         # Skill para mantener docs/CLAUDE_DESIGN.md
│           └── SKILL.md
├── public/
├── src/
│   ├── App.tsx                    # Root con routing
│   ├── App.css                    # Tokens CSS y estilos globales
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   │   ├── ui/                    # Primitives shadcn (avatar, badge, button, card, …)
│   │   ├── common/                # Componentes compuestos del producto
│   │   │   ├── DataTable.tsx
│   │   │   ├── EmployeeNameInfo.tsx
│   │   │   ├── PieChart.tsx · PieChartApex.tsx
│   │   │   ├── RingsChart.tsx · RingsChartApex.tsx
│   │   │   ├── ToolbarButton.tsx
│   │   │   └── charts/            # IconsChartCard y otros
│   │   ├── icons/                 # SVGs custom (StarIcon, TrashIcon)
│   │   └── component-showcase-page.tsx  # Wrapper de páginas demo
│   ├── constants/
│   │   └── styles/styles.ts       # Constantes de spacing/padding compartidas
│   ├── layouts/
│   │   └── AppLayout.tsx          # Sidebar + topbar (incluye sidebar mobile)
│   ├── lib/
│   │   └── utils.ts               # cn() helper
│   ├── pages/                     # Una página por componente del sistema
│   │   ├── AvatarPage.tsx · BadgePage.tsx · BreadcrumbPage.tsx
│   │   ├── ButtonsPage.tsx · CardPage.tsx · ChartsPage.tsx
│   │   ├── CheckBoxPage.tsx · ColorsPage.tsx · ComboboxPage.tsx
│   │   ├── IconsPage.tsx · InputPage.tsx · InputPhonePage.tsx
│   │   ├── ModalPage.tsx · SelectPage.tsx · SwitchPage.tsx
│   │   ├── TablePage.tsx · TextPage.tsx · TooltipPage.tsx
│   │   └── Persons/               # Ejemplo end-to-end (charts + tabla)
│   │       ├── PersonsPage.tsx
│   │       ├── PersonCharts.tsx
│   │       └── PersonTable.tsx
│   └── routes/
│       └── componentsRoutes.tsx   # Definición de rutas
├── docs/                          # Generado/actualizado por la skill design-system
│   ├── CLAUDE_DESIGN.md           #   Índice con enlaces a cada componente
│   ├── <Componente>.md            #   Un archivo por componente (Avatar.md, Button.md, …)
│   ├── Tokens.md                  #   Tokens CSS de src/App.css
│   └── Patterns.md                #   Patrones de layout y patrones comunes
├── CLAUDE.md                      # Este archivo
├── components.json                # Configuración shadcn
├── eslint.config.js
├── tsconfig*.json
├── vite.config.ts
└── vercel.json
```

## Convenciones

- **Alias**: `@/*` apunta a `src/*` (configurado en `tsconfig` y `vite.config.ts`).
- **Componentes UI** (`src/components/ui/`): primitives basados en shadcn/Radix con `cva` para variantes. No mezclar lógica de negocio aquí.
- **Componentes común** (`src/components/common/`): compuestos del producto que pueden depender de la UI base.
- **Páginas demo**: cada componente del sistema tiene una página showcase en `src/pages/` que usa `ShowcasePage` + `ShowcaseSection` de `component-showcase-page.tsx`.
- **Tokens de diseño**: variables CSS (`--primary`, `--success`, `--*-badge`, …) declaradas en `src/App.css`. Preferir tokens sobre hex literales.
- **Spacing compartido**: constantes en `src/constants/styles/styles.ts` (ej. `paddingTable`, `paddingHeaderBreadcrumbs`).

## Skills disponibles

- **design-system** (`.claude/skills/design-system/SKILL.md`): mantiene la documentación del sistema de diseño bajo `docs/`, con **un archivo Markdown por componente** (`Avatar.md`, `Button.md`, …) más `Tokens.md`, `Patterns.md` y un índice `CLAUDE_DESIGN.md`. Invocar cuando se agreguen/modifiquen componentes en `src/components/ui/` o `src/components/common/`, tokens en `src/App.css`, o ejemplos en `src/pages/`.
