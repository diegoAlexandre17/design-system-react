# Avatar

> `src/components/ui/avatar.tsx`

```tsx
<Avatar
  size="..."   // default | sm | lg | xl | xxl | profile
/>
```

**Tamaños:**
- `default` (size-8)
- `sm` (size-7.5)
- `lg` (size-10)
- `xl` (size-14)
- `xxl` (size-20)
- `profile` (125px, con borde primario)

**Ejemplo:**
```tsx
<Avatar size="lg">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>SC</AvatarFallback>
  <AvatarBadge />
</Avatar>
```

Helpers exportados: `AvatarImage`, `AvatarFallback`, `AvatarBadge`, `AvatarGroup`, `AvatarGroupCount`.

**Página de ejemplo:** `src/pages/AvatarPage.tsx`
