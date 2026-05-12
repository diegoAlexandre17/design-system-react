import { useState } from "react"
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table"
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
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
    size: 18,
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected()
              ? true
              : table.getIsSomePageRowsSelected()
                ? "indeterminate"
                : false
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
      </div>
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
    <Table >
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                style={
                  header.column.columnDef.size !== undefined
                    ? { width: header.column.columnDef.size, minWidth: header.column.columnDef.size }
                    : undefined
                }
              >
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
                <TableCell
                  key={cell.id}
                  style={
                    cell.column.columnDef.size !== undefined
                      ? { width: cell.column.columnDef.size, minWidth: cell.column.columnDef.size }
                      : undefined
                  }
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={allColumns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      {footer && <TableFooter>{footer}</TableFooter>}
    </Table>
  )
}
