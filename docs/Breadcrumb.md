# Breadcrumb

> `src/components/ui/breadcrumb.tsx`

```tsx
<Breadcrumb
  variant="..."  // default | primary
/>
```

**Variantes:**
- `default`
- `primary`

**Ejemplo:**
```tsx
<Breadcrumb variant="primary">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Empleados</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Activo</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

Helpers exportados: `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis`.

**Página de ejemplo:** `src/pages/BreadcrumbPage.tsx`
