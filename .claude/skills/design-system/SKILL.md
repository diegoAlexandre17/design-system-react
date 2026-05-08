---
name: design-system
description: Genera o actualiza la documentación del design system bajo `docs/`, con un archivo Markdown por componente (Avatar.md, Button.md, …) más Tokens.md, Patterns.md y un índice CLAUDE_DESIGN.md. Invocar cuando se agreguen/modifiquen componentes en src/components/ui o src/components/common, tokens CSS en src/App.css, ejemplos en src/pages, o cuando el usuario pida "actualizar la guía de diseño", "regenerar docs del design system", "sincronizar la guía", etc.
---

# Skill: design-system

Mantiene la documentación del sistema de diseño bajo `docs/`, **un archivo por componente** (más archivos compartidos para tokens y patrones, y un índice). Esto permite que Claude Design (y cualquier consumidor) consulte la doc de un componente puntual sin cargar un único archivo enorme.

## Cuándo ejecutar

- Se agregó o modificó un componente en `src/components/ui/` o `src/components/common/`.
- Cambiaron variantes (`cva`) o props públicas de un componente existente.
- Se modificaron variables CSS (`--*`) en `src/App.css`.
- Se creó/actualizó una página showcase en `src/pages/`.
- El usuario pide explícitamente "actualizar la guía", "sincronizar docs del design system", etc.

## Salida

Escribir/actualizar archivos dentro de `docs/`:

- **Un `.md` por componente** (PascalCase del componente, e.g. `Button.md`, `InputPhone.md`, `DataTable.md`).
- **Archivos compartidos**:
  - `Tokens.md` — variables CSS de `src/App.css`.
  - `Patterns.md` — patrones de layout y patrones comunes (login, navbar, hero, dashboard cards).
- **Índice**: `CLAUDE_DESIGN.md` — listado con enlaces relativos a cada archivo de componente.

Si la carpeta `docs/` no existe aún, crearla.

**Nunca volcar todo en un solo archivo.** El antiguo `CLAUDE_DESIGN.md` monolítico fue reemplazado por este esquema.

## Procedimiento

1. **Inventariar componentes**
   - `src/components/ui/*.tsx` → primitives (kebab-case en el nombre del archivo, PascalCase en el nombre del componente exportado).
   - `src/components/common/**/*.tsx` → compuestos (PascalCase).
   - `src/components/icons/*.tsx` → iconos custom (van todos juntos en `Icons.md`).
   - Para cada uno, leer las definiciones `cva(...)` o tipos manuales (e.g. `size?: "sm" | "md" | "lg"`) y extraer **todas** las opciones presentes. No inventar variantes — listar solo las del código.

2. **Inventariar tokens**
   - Parsear `src/App.css` y volcar todas las variables CSS (`--color-*`, `--*-badge`, paleta primary/secondary/success/warning/destructive, etc.) tanto del tema claro como del oscuro.

3. **Inventariar páginas de ejemplo**
   - Listar archivos en `src/pages/` y subcarpetas (`src/pages/Persons/`, etc.).
   - Para cada componente, identificar la(s) página(s) showcase relacionada(s) y mencionarlas al final del archivo del componente con el path real (`src/pages/<Pagina>.tsx`).

4. **Para cada componente**, escribir su archivo siguiendo el formato de la sección "Estructura por componente" más abajo. Si el archivo ya existe, **sobrescribirlo** (no fusionar — la fuente de verdad es el código actual).

5. **Generar/actualizar archivos compartidos** (`Tokens.md`, `Patterns.md`).

6. **Generar/actualizar el índice** `CLAUDE_DESIGN.md` con enlaces a cada archivo de componente, agrupados por sección (UI / Compuestos / Iconos / Tokens / Patrones), en orden alfabético dentro de cada grupo.

## Estructura por componente

Cada archivo `docs/<Componente>.md` sigue este esqueleto. Si el componente no tiene `variant` o `size` definidos, **omitir** esas secciones y mostrar solo `<Componente />` en el ejemplo.

````markdown
# <NombreComponente>

> `src/components/ui/<archivo>.tsx`  <!-- o common/, icons/ según corresponda -->

```tsx
<Componente
  variant="..."   // si aplica — listar opciones
  size="..."      // si aplica — listar opciones
/>
```

**Variantes:**  <!-- omitir si no hay -->
- `variant1`
- `variant2`

**Tamaños:**  <!-- omitir si no hay -->
- `size1`
- `size2`

**Ejemplo:**
```tsx
<Componente variant="..." size="..." />
```

Helpers exportados: `Sub1`, `Sub2`, …  <!-- si el archivo exporta más componentes -->

**Página de ejemplo:** `src/pages/<Pagina>.tsx`  <!-- si existe -->
````

## Estructura de archivos compartidos

### `Tokens.md`

```markdown
# Tokens de Diseño

> Definidos en `src/App.css`. Preferir tokens sobre hex literales.

## Other

```css
/* Volcar TODAS las variables de src/App.css, sin reordenar.
   Mantener `--color-*` arriba (mappings de Tailwind), después los valores
   crudos del tema claro (:root), luego los del tema oscuro (.dark). */
```
```

### `Patterns.md`

Mantener los snippets genéricos (Container, Grid, Flexbox, Login, Navbar, Hero, Dashboard Card). Estos snippets son **patrones genéricos**: se mantienen entre runs y solo se actualizan si el usuario lo pide.

### `CLAUDE_DESIGN.md` (índice)

```markdown
# 🤖 Guía para Claude Design — Índice

Esta es la **guía principal** para usar este sistema de diseño con Claude Design.
La documentación está dividida en archivos por componente — usá este índice para encontrar cada uno.

> Mantenida por la skill `design-system`.

## 🎯 Componentes UI (`src/components/ui/`)

- [Avatar](Avatar.md)
- [Badge](Badge.md)
<!-- … -->

## 🧩 Componentes Compuestos (`src/components/common/`)

- [DataTable](DataTable.md)
<!-- … -->

## 🌟 Iconos custom (`src/components/icons/`)

- [Icons](Icons.md)

## 🎨 Tokens y patrones

- [Tokens de Diseño](Tokens.md)
- [Patterns](Patterns.md)
```

## Reglas

- **Idioma**: español.
- **Naming**: cada archivo de componente usa PascalCase del componente exportado (`Button.md`, no `button.md`). Compuestos también en PascalCase. Iconos custom van juntos en `Icons.md`.
- **Crear si no existe**: cuando un componente nuevo aparece, crear su archivo. No falla si no existe — siempre `Write` creando o sobrescribiendo.
- **Borrar archivos huérfanos**: si en una corrida un componente fue eliminado del código (no aparece en el inventario), eliminar también su `.md` (usar `Bash rm`). Antes de borrar, confirmar que no quedan referencias en el código.
- **Orden**: dentro del índice y dentro de cada sección, alfabético. Tokens en el orden en que aparecen en `App.css`.
- **No inventar**: listar solo variantes/sizes presentes en el código.
- **Tokens**: copiarlos textualmente desde `src/App.css`, sin traducir nombres ni reordenar.
- **Snippets de patrones comunes** (`Patterns.md`): son genéricos, no se derivan del código — mantenerlos estables.
- **No tocar otros archivos** del repositorio. Solo `docs/`.

## Verificación final

Al terminar, reportar:
- Cantidad de archivos por componente escritos (creados + actualizados).
- Cantidad de archivos compartidos actualizados (`Tokens.md`, `Patterns.md`, `CLAUDE_DESIGN.md`).
- Archivos `.md` huérfanos eliminados (si aplica).
- Path de la carpeta `docs/`.
