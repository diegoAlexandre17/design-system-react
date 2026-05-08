# InputPhone

> `src/components/ui/input-phone.tsx`

```tsx
<InputPhone
  variant="..."   // default | separator
/>
```

**Variantes:**
- `default`
- `separator`

**Ejemplo:**
```tsx
<InputPhone
  defaultCountry="co"
  preferredCountries={["ar", "us", "es", "br", "mx"]}
  searchable
  variant="separator"
  value={phone}
  onChange={setPhone}
/>
```

**Página de ejemplo:** `src/pages/InputPhonePage.tsx`
