import { useState, type ReactNode } from "react"
import type { ColumnDef, RowSelectionState } from "@tanstack/react-table"
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Text } from "@/components/ui/text"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  caption?: ReactNode
  footer?: ReactNode
  enableRowSelection?: boolean
  title?: ReactNode
  toolbarActions?: ReactNode
  showSearch?: boolean
  searchPlaceholder?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  caption,
  footer,
  enableRowSelection = false,
  title,
  toolbarActions,
  showSearch = true,
  searchPlaceholder = "Buscar...",
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [globalFilter, setGlobalFilter] = useState("")

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
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: { rowSelection, globalFilter },
    enableRowSelection,
  })

  return (
    <Card variant="borderless" className="flex-1">
      {title && (
        <CardHeader>
          <Text variant="h5">{title}</Text>
        </CardHeader>
      )}
      <CardContent>
        {(showSearch || toolbarActions) && (
          <div className="flex items-center gap-2 mb-3">
            {showSearch && (
              <div className="w-150">
                <Input
                  placeholder={searchPlaceholder}
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  startIcon={<Search size={16} />}
                />
              </div>
            )}
            {toolbarActions}
          </div>
        )}
        <Table>
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
        </Table>
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}
