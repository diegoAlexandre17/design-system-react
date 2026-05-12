import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/common/DataTable";
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page";
import { Text } from "@/components/ui/text";
import EmployeeNameInfo from "@/components/common/EmployeeNameInfo";
import { Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/IconWrapper";
import ConfigSolidIcon from "@/assets/icons-svg/config-solid.svg?react";

type Person = {
  identificacion: string;
  tipoDocumento: string;
  nombre: string;
  cargo: string;
  avatarSrc?: string;
  sede: string;
  departamento: string;
  correo: string;
};

const persons: Person[] = [
  {
    sede: "",
    identificacion: "1010237648",
    tipoDocumento: "Cédula",
    nombre: "Leidi Martinez",
    cargo: "",
    avatarSrc: "https://i.pravatar.cc/32?img=1",
    departamento: "",
    correo: "Lm+4723@intelli-next.c...",
  },
  {
    sede: "Eeuu",
    identificacion: "1013579114",
    tipoDocumento: "Cédula",
    nombre: "Leidi Martinez",
    cargo: "Ingeniero De Software",
    avatarSrc: "https://i.pravatar.cc/32?img=1",
    departamento: "Administracion",
    correo: "Leidiowebinar@yopmail....",
  },
  {
    sede: "Oficina Colombia",
    identificacion: "1014262500",
    tipoDocumento: "Cédula",
    nombre: "Juan Camilo G.",
    cargo: "Auxiliar De Capital",
    avatarSrc: "https://i.pravatar.cc/32?img=3",
    departamento: "Gerencia Capital Humano",
    correo: "Juan.jerez@asd.com",
  },
  {
    sede: "Eeuu",
    identificacion: "1015394831",
    tipoDocumento: "Cédula",
    nombre: "Natali Caldero...",
    cargo: "Gerente De Marc...",
    avatarSrc: "https://i.pravatar.cc/32?img=5",
    departamento: "Marcas Representadas",
    correo: "Natali.caldero321n@co...",
  },
  {
    sede: "Colombia",
    identificacion: "1015432135",
    tipoDocumento: "Cédula",
    nombre: "Eduar Chaux",
    cargo: "Cartagena",
    avatarSrc: "https://i.pravatar.cc/32?img=7",
    departamento: "",
    correo: "Eduar.chaux@congrupo...",
  },
  {
    sede: "Eeuu",
    identificacion: "1015442936",
    tipoDocumento: "Cédula",
    nombre: "Leidy Lorena M.",
    cargo: "Supervisor Tecni...",
    avatarSrc: "https://i.pravatar.cc/32?img=9",
    departamento: "Mantenimiento",
    correo: "Leidy.mendieta@congru...",
  },
  {
    sede: "Eeuu",
    identificacion: "1015480576",
    tipoDocumento: "Cédula",
    nombre: "Jennifer Aleja...",
    cargo: "Analista De I&d",
    avatarSrc: "https://i.pravatar.cc/32?img=11",
    departamento: "Gcia Investigacion Y De...",
    correo: "Jennifer.cuenca@congr...",
  },
];

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "identificacion",
    header: "Identificación",
    cell: ({ row }) => (
      <div className="flex flex-col gap-0.5">
        <Text variant="span-table" className="font-medium">
          {row.getValue("identificacion")}
        </Text>
        <Text variant="span-table" className="text-muted-foreground">
          {row.original.tipoDocumento}
        </Text>
      </div>
    ),
  },
  {
    accessorKey: "nombre",
    header: "Empleado",
    cell: ({ row }) => (
      <EmployeeNameInfo
        img={row.original.avatarSrc ?? ""}
        name={row.original.nombre}
        position={row.original.cargo}
      />
    ),
  },
  {
    accessorKey: "sede",
    header: "Sede",
    cell: ({ row }) => <Text variant="span-table">{row.getValue("sede")}</Text>,
  },
  {
    accessorKey: "departamento",
    header: "Departamento",
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("departamento")}</Text>
    ),
  },
  {
    accessorKey: "correo",
    header: "Correo",
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("correo")}</Text>
    ),
  },
];

export default function TablePage() {
  return (
    <div className="space-y-10 p-2.5 bg-background">
      <DataTable
        columns={columns}
        data={persons}
        enableRowSelection
        toolbarActions={
          <div className="flex items-center gap-2 ml-auto">
            <Button size="icon" className="shadow-none bg-success">
              <Icon icon={ConfigSolidIcon} size="md" />
            </Button>
            <Button size="icon-lg" variant="default" className="shadow-none">
              <Plus />
            </Button>
          </div>
        }
      />

      <DataTable columns={columns} data={persons} showSearch={false} />

      <DataTable
        columns={columns}
        data={persons}
        showSearch={false}
        title={
          <div className="flex items-center gap-1.5">
            <Users size={14} />
            Listado de empleados
          </div>
        }
      />
    </div>
  );
}
