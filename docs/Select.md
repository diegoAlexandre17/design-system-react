# Select

> `src/components/ui/select.tsx`

```tsx
<SelectTrigger
  variant="..."   // default
  size="..."      // sm | default | lg
/>
```

**Variantes:**
- `default`

**Tamaños:**
- `sm`
- `default`
- `lg`

**Ejemplo:**
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Cédula" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="cedula">Cédula</SelectItem>
    <SelectItem value="pasaporte">Pasaporte</SelectItem>
  </SelectContent>
</Select>
```

Helpers exportados: `SelectContent`, `SelectGroup`, `SelectItem`, `SelectLabel`, `SelectScrollDownButton`, `SelectScrollUpButton`, `SelectSeparator`, `SelectValue`.

**Página de ejemplo:** `src/pages/SelectPage.tsx`
