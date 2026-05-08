# InputGroup

> `src/components/ui/input-group.tsx`

```tsx
<InputGroup>
  <InputGroupAddon align="...">…</InputGroupAddon>   // inline-start | inline-end | block-start | block-end
  <InputGroupInput />
  <InputGroupButton size="...">…</InputGroupButton>  // xs | sm | icon-xs | icon-sm
</InputGroup>
```

**`InputGroupAddon` align:**
- `inline-start`
- `inline-end`
- `block-start`
- `block-end`

**`InputGroupButton` size:**
- `xs`
- `sm`
- `icon-xs`
- `icon-sm`

**Ejemplo:**
```tsx
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Buscar…" />
</InputGroup>
```

Helpers exportados: `InputGroupAddon`, `InputGroupButton`, `InputGroupText`, `InputGroupInput`, `InputGroupTextarea`.
