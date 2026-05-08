# DataTable

> `src/components/common/DataTable.tsx`

Tabla genérica basada en `@tanstack/react-table` que envuelve los primitives `Table*`.

**Props:**
- `columns: ColumnDef<TData, TValue>[]`
- `data: TData[]`
- `caption?: string`
- `footer?: React.ReactNode`
- `enableRowSelection?: boolean` — agrega columna de checkboxes con selección de fila

**Ejemplo:**
```tsx
<DataTable<Invoice, unknown>
  columns={invoiceColumns}
  data={invoices}
  enableRowSelection
/>
```

**Páginas de ejemplo:**
- `src/pages/TablePage.tsx`
- `src/pages/Persons/PersonTable.tsx`
