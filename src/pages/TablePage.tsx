import type { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/common/DataTable"
import { TableCell, TableRow } from "@/components/ui/table"
import { Text } from "@/components/ui/text"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

type Invoice = {
  invoice: string
  paymentStatus: string
  totalAmount: string
  paymentMethod: string
}

const invoices: Invoice[] = [
  { invoice: "INV-001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card!!!" },
  { invoice: "INV-002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV-003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV-004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV-005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV-006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV-007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
]

const invoiceColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoice",
    header: "Invoice",
    cell: ({ row }) => <Text variant="span-table" className="font-medium">{row.getValue("invoice")}</Text>,
  },
  {
    accessorKey: "paymentStatus",
    header: "Status",
    cell: ({ row }) => <Text variant="span-table">{row.getValue("paymentStatus")}</Text>,
  },
  {
    accessorKey: "paymentMethod",
    header: "Method",
    cell: ({ row }) => <Text variant="span-table">{row.getValue("paymentMethod")}</Text>,
  },
  {
    accessorKey: "totalAmount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => <Text variant="span-table" className="block text-right">{row.getValue("totalAmount")}</Text>,
  },
]

// --- Projects example ---

type Participant = { name: string; src?: string }

type Project = {
  id: string
  name: string
  color: string
  participants: Participant[]
  tasks: string
  startDate: string
  endDate: string
  planned: string
  executed: string
  costCenter: string
}

const projects: Project[] = [
  {
    id: "1", name: "Proyecto de empresa", color: "bg-blue-500",
    participants: [
      { name: "Ana García", src: "https://i.pravatar.cc/32?img=1" },
      { name: "Luis Pérez", src: "https://i.pravatar.cc/32?img=2" },
      { name: "María López", src: "https://i.pravatar.cc/32?img=3" },
      { name: "Carlos Ruiz" }, { name: "Sofía Torres" },
    ],
    tasks: "5/10", startDate: "10-02-2025", endDate: "10-02-2025",
    planned: "5 hrs 3 min", executed: "5 hrs 3 min", costCenter: "Desarrollo",
  },
  {
    id: "2", name: "Proyecto 1", color: "bg-violet-500",
    participants: [
      { name: "Pedro Díaz", src: "https://i.pravatar.cc/32?img=4" },
      { name: "Laura Mora", src: "https://i.pravatar.cc/32?img=5" },
      { name: "Andrés Gil", src: "https://i.pravatar.cc/32?img=6" },
      { name: "Valeria Ríos" }, { name: "Miguel Cruz" },
    ],
    tasks: "5/10", startDate: "11-02-2025", endDate: "11-02-2025",
    planned: "5 hrs 3 min", executed: "5 hrs 3 min", costCenter: "Centro de Costo",
  },
  {
    id: "3", name: "Proyecto 3", color: "bg-emerald-500",
    participants: [
      { name: "Isabel Vargas", src: "https://i.pravatar.cc/32?img=7" },
      { name: "Roberto León", src: "https://i.pravatar.cc/32?img=8" },
      { name: "Natalia Soto", src: "https://i.pravatar.cc/32?img=9" },
      { name: "Felipe Medina" }, { name: "Camila Ortiz" },
    ],
    tasks: "5/10", startDate: "10-20-2025", endDate: "10-20-2025",
    planned: "3 hrs 3 min", executed: "3 hrs 3 min", costCenter: "Departamento",
  },
  {
    id: "4", name: "Proyecto 4", color: "bg-orange-500",
    participants: [
      { name: "Diego Reyes", src: "https://i.pravatar.cc/32?img=10" },
      { name: "Gabriela Paredes", src: "https://i.pravatar.cc/32?img=11" },
      { name: "Tomás Navarro", src: "https://i.pravatar.cc/32?img=12" },
      { name: "Valentina Castro" }, { name: "Sebastián Blanco" },
    ],
    tasks: "5/10", startDate: "05-02-2025", endDate: "05-02-2025",
    planned: "1 hrs 3 min", executed: "1 hrs 3 min", costCenter: "Empresa",
  },
  {
    id: "5", name: "Proyecto 5", color: "bg-rose-500",
    participants: [
      { name: "Alejandro Fuentes", src: "https://i.pravatar.cc/32?img=13" },
      { name: "Mariana Herrera", src: "https://i.pravatar.cc/32?img=14" },
      { name: "Joaquín Vega", src: "https://i.pravatar.cc/32?img=15" },
      { name: "Daniela Salinas" }, { name: "Emilio Ramos" },
    ],
    tasks: "5/10", startDate: "10-02-2025", endDate: "10-02-2025",
    planned: "5 hrs 8 min", executed: "5 hrs 8 min", costCenter: "Localización",
  },
]

const VISIBLE_AVATARS = 3

const projectColumns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Proyecto",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className={`${row.original.color} text-white`}>P</AvatarFallback>
        </Avatar>
        <Text variant="span-13" className="text-primary font-medium">{row.getValue("name")}</Text>
      </div>
    ),
  },
  {
    accessorKey: "participants",
    header: () => <div className="text-center">Participantes</div>,
    cell: ({ row }) => {
      const participants: Participant[] = row.original.participants
      const visible = participants.slice(0, VISIBLE_AVATARS)
      const remaining = participants.length - VISIBLE_AVATARS
      return (
        <div className="flex justify-center">
          <AvatarGroup>
            {visible.map((p) => (
              <Avatar key={p.name}>
                {p.src && <AvatarImage src={p.src} alt={p.name} />}
                <AvatarFallback>{p.name[0]}</AvatarFallback>
              </Avatar>
            ))}
            {remaining > 0 && <AvatarGroupCount>+{remaining}</AvatarGroupCount>}
          </AvatarGroup>
        </div>
      )
    },
  },
  {
    accessorKey: "tasks",
    header: () => <div className="text-center">Tareas</div>,
    cell: ({ row }) => <Text variant="span-table" className="block text-center">{row.getValue("tasks")}</Text>,
  },
  {
    accessorKey: "startDate",
    header: () => <div className="text-center">Inicio</div>,
    cell: ({ row }) => <Text variant="span-table" className="block text-center">{row.getValue("startDate")}</Text>,
  },
  {
    accessorKey: "endDate",
    header: () => <div className="text-center">Fin</div>,
    cell: ({ row }) => <Text variant="span-table" className="block text-center">{row.getValue("endDate")}</Text>,
  },
  {
    accessorKey: "planned",
    header: () => <div className="text-center">Planificadas</div>,
    cell: ({ row }) => <Text variant="span-table" className="block text-center">{row.getValue("planned")}</Text>,
  },
  {
    accessorKey: "executed",
    header: () => <div className="text-center">Ejecutadas</div>,
    cell: ({ row }) => <Text variant="span-table" className="block text-center">{row.getValue("executed")}</Text>,
  },
  {
    accessorKey: "costCenter",
    header: () => <div className="text-center">Centro de Costo</div>,
    cell: ({ row }) => <Text variant="span-table" className="block text-center">{row.getValue("costCenter")}</Text>,
  },
]

const TablePage = () => {
  const total = invoices.reduce(
    (sum, inv) => sum + parseFloat(inv.totalAmount.replace("$", "").replace("!", "")),
    0
  )

  return (
    <div className="p-8 space-y-12">
      <section className="max-w-3xl mx-auto">
        <Text variant="h2" className="mb-6">Basic Table</Text>
        <DataTable
          columns={invoiceColumns}
          data={invoices}
          caption="A list of your recent invoices."
          footer={
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">${total.toFixed(2)}</TableCell>
            </TableRow>
          }
        />
      </section>

      <section>
        <Text variant="h2" className="mb-6">Projects Table</Text>
        <DataTable columns={projectColumns} data={projects} enableRowSelection />
      </section>
    </div>
  )
}

export default TablePage