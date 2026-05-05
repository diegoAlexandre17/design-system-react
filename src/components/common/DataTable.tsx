import { useState } from "react"
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table"
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  caption?: string
  footer?: React.ReactNode
  enableRowSelection?: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  caption,
  footer,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  const selectionColumn: ColumnDef<TData, unknown> = {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        ref={(el) => {
          if (el) el.indeterminate = table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
        className="h-4 w-4 cursor-pointer accent-primary"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
        className="h-4 w-4 cursor-pointer accent-primary"
      />
    ),
  }

  const allColumns = (
    enableRowSelection ? [selectionColumn, ...columns] : columns
  ) as ColumnDef<TData, unknown>[]

  const table = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    enableRowSelection,
  })

  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      {footer && <TableFooter>{footer}</TableFooter>}
    </Table>
  )
}
