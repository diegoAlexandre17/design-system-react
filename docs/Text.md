# Text

> `src/components/ui/text.tsx`

```tsx
<Text
  variant="..."   // h1 | h2 | h3 | h4 | h5 | p | span | small
                  // | span-table | span-13 | span-15 | small-11
                  // | card-title-graph
  as="..."        // tag opcional
/>
```

**Variantes:**
- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `p`
- `span`
- `small`
- `span-table`
- `span-13`
- `span-15`
- `small-11`
- `card-title-graph`

**Ejemplo:**
```tsx
<Text variant="span-13" className="font-semibold text-primary">
  {name}
</Text>
```

**Página de ejemplo:** `src/pages/TextPage.tsx`
