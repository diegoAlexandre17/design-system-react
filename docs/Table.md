# Table

> `src/components/ui/table.tsx`

```tsx
<Table />
```

**Ejemplo:**
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>Paid</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

Helpers exportados: `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, `TableCaption`.

**Página de ejemplo:** `src/pages/TablePage.tsx`
