# Tooltip

> `src/components/ui/tooltip.tsx`

```tsx
<TooltipContent
  variant="..."   // default | gray
  arrow={true}
/>
```

**Variantes:**
- `default`
- `gray`

**Ejemplo:**
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent arrow>Tooltip por defecto</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

Helpers exportados: `TooltipProvider`, `TooltipTrigger`.

**Página de ejemplo:** `src/pages/TooltipPage.tsx`
