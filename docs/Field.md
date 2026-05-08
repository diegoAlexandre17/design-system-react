# Field

> `src/components/ui/field.tsx`

```tsx
<Field
  orientation="..."  // vertical | horizontal | responsive
/>
```

**Orientaciones:**
- `vertical`
- `horizontal`
- `responsive`

**Ejemplo:**
```tsx
<FieldGroup>
  <Field>
    <Label required htmlFor="name-1">Nombre</Label>
    <Input id="name-1" placeholder="Karen" />
  </Field>
</FieldGroup>
```

`FieldLegend` también acepta `variant`:
- `legend` (default)
- `label`

Helpers exportados: `FieldLabel`, `FieldDescription`, `FieldError`, `FieldGroup`, `FieldLegend`, `FieldSeparator`, `FieldSet`, `FieldContent`, `FieldTitle`.

**Página de ejemplo:** se usa dentro de `src/pages/ModalPage.tsx`.
