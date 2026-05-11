# Carousel

> `src/components/ui/carousel.tsx`

Carrusel deslizable basado en [Embla](https://www.embla-carousel.com/). Útil para listar elementos con flechas de navegación cuando no entran en una sola fila (o columna).

```tsx
<Carousel
  orientation="..."   // horizontal (default) | vertical
  opts={{ ... }}      // CarouselOptions de Embla
  plugins={[ ... ]}   // CarouselPlugin de Embla
  setApi={(api) => {}}
/>
```

**Orientaciones:**
- `horizontal` (default)
- `vertical` — requiere setear `h-[...]` en `<CarouselContent>` para que Embla tenga viewport.

**Opciones de Embla más usadas (`opts`):**
- `align`: `"start" | "center" | "end"`
- `containScroll`: `"trimSnaps" | "keepSnaps" | false` — `keepSnaps` evita que el último snap deje slides cortados.

**Componentes exportados:**
- `Carousel` — root con contexto.
- `CarouselContent` — viewport con `overflow-hidden`. Acepta `className` para definir altura (vertical) o spacing.
- `CarouselItem` — cada slide. Default `basis-full`; overridear con `basis-auto` o `basis-[N%]` para mostrar varios slides simultáneos.
- `CarouselPrevious` / `CarouselNext` — botones de navegación. Estilo built-in: 28×28 circulares, `bg-[#2485f4]`, chevron blanco `strokeWidth={3}`, disabled con `/60` de opacidad, posicionados con `-left-3.5` / `-right-3.5` (centro sobre el borde del carousel).
- `CarouselApi` (type) — para integrar imperativamente vía `setApi`.

**Ejemplo horizontal:**
```tsx
<Carousel opts={{ align: "start" }} className="w-full">
  <CarouselContent>
    {items.map((item) => (
      <CarouselItem key={item.id} className="basis-auto">
        <IconTileCard variant="info" icon={<Square />} label={item.label} />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

**Ejemplo vertical:**
```tsx
<Carousel orientation="vertical" opts={{ align: "start" }} className="w-50">
  <CarouselContent className="h-[520px]">
    {items.map((item) => (
      <CarouselItem key={item.id} className="basis-auto">
        <IconTileCard size="lg" variant="info" icon={<Square />} label={item.label} />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

**Gotchas:**
- `basis-auto` toma el ancho/alto intrínseco del contenido. Si el slide usa `w-full` (o `max-w-[N] w-full`) crea una dependencia circular y los slides quedan de tamaños distintos. Solución: usar `basis-[N%]` o `basis-[Npx]` cuando el contenido no tenga un ancho fijo.
- En vertical, la altura DEBE setearse en `<CarouselContent>` (no en el `<Carousel>` root), porque ahí va el div con `overflow-hidden` que Embla usa como viewport.

**Página de ejemplo:** `src/pages/CarouselPage.tsx`
