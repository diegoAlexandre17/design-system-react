import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/common/DataTable";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import EmployeeNameInfo from "@/components/common/EmployeeNameInfo";
import { Input } from "@/components/ui/input";
import { Bolt, Plus, Search, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Person = {
  sede: string;
  identificacion: string;
  tipoDocumento: string;
  nombre: string;
  cargo: string;
  avatarSrc?: string;
  departamento: string;
  fechaNacimiento: string;
  correo: string;
  metodo: string;
};

const persons: Person[] = [
  {
    sede: "",
    identificacion: "1010237648",
    tipoDocumento: "Cédula",
    nombre: "Leidi Martinez",
    cargo: "Lider",
    avatarSrc: "https://i.pravatar.cc/32?img=1",
    departamento: "",
    fechaNacimiento: "22-01-1998",
    correo: "Lm+4723@intelli-next.c...",
    metodo: "Biometrico",
  },
  {
    sede: "Eeuu",
    identificacion: "1013579114",
    tipoDocumento: "Cédula",
    nombre: "Leidi Martinez",
    cargo: "Ingeniero De Software",
    avatarSrc: "https://i.pravatar.cc/32?img=1",
    departamento: "Administracion",
    fechaNacimiento: "22-01-1998",
    correo: "Leidiowebinar@yopmail....",
    metodo: "Biometrico",
  },
  {
    sede: "Oficina Colombia",
    identificacion: "1014262500",
    tipoDocumento: "Cédula",
    nombre: "Juan Camilo G.",
    cargo: "Auxiliar De Capital",
    avatarSrc: "https://i.pravatar.cc/32?img=3",
    departamento: "Gerencia Capital Humano",
    fechaNacimiento: "03-02-1995",
    correo: "Juan.jerez@asd.com",
    metodo: "Biometrico",
  },
  {
    sede: "Eeuu",
    identificacion: "1015394831",
    tipoDocumento: "Cédula",
    nombre: "Natali Caldero...",
    cargo: "Gerente De Marc...",
    avatarSrc: "https://i.pravatar.cc/32?img=5",
    departamento: "Marcas Representadas",
    fechaNacimiento: "17-06-1986",
    correo: "Natali.caldero321n@co...",
    metodo: "Biometrico",
  },
  {
    sede: "Colombia",
    identificacion: "1015432135",
    tipoDocumento: "Cédula",
    nombre: "Eduar Chaux",
    cargo: "Cartagena",
    avatarSrc: "https://i.pravatar.cc/32?img=7",
    departamento: "",
    fechaNacimiento: "29-06-1992",
    correo: "Eduar.chaux@congrupo...",
    metodo: "Biometrico",
  },
  {
    sede: "Eeuu",
    identificacion: "1015442936",
    tipoDocumento: "Cédula",
    nombre: "Leidy Lorena M.",
    cargo: "Supervisor Tecni...",
    avatarSrc: "https://i.pravatar.cc/32?img=9",
    departamento: "Mantenimiento",
    fechaNacimiento: "10-12-1993",
    correo: "Leidy.mendieta@congru...",
    metodo: "Biometrico",
  },
  {
    sede: "Eeuu",
    identificacion: "1015480576",
    tipoDocumento: "Cédula",
    nombre: "Jennifer Aleja...",
    cargo: "Analista De I&d",
    avatarSrc: "https://i.pravatar.cc/32?img=11",
    departamento: "Gcia Investigacion Y De...",
    fechaNacimiento: "18-04-1999",
    correo: "Jennifer.cuenca@congr...",
    metodo: "Biometrico",
  },
];

const personColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "sede",
    header: "Sede",
    cell: ({ row }) => <Text variant="span-table">{row.getValue("sede")}</Text>,
  },
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
    accessorKey: "metodo",
    header: "Método",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar size="sm">
                <AvatarFallback className="bg-success-light text-success">
                  <Smartphone size={16} />
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent arrow>{row.original.metodo}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: "departamento",
    header: "Departamento",
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("departamento")}</Text>
    ),
  },
  {
    accessorKey: "tipoDocumento",
    header: "Tipo de documento",
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("tipoDocumento")}</Text>
    ),
  },
  {
    accessorKey: "fechaNacimiento",
    header: "Fec. de nac.",
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("fechaNacimiento")}</Text>
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

const PersonTable = () => {
  const [search, setSearch] = useState("");

  const filtered = persons.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.nombre.toLowerCase().includes(q) ||
      p.identificacion.includes(q) ||
      p.sede.toLowerCase().includes(q) ||
      p.departamento.toLowerCase().includes(q) ||
      p.correo.toLowerCase().includes(q)
    );
  });

  return (
    <Card variant="borderless">
      <div className="px-4">
        <div className="relative flex items-center justify-between">
          <div>
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 w-100"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button size="icon" className="shadow-none bg-success">
              <Bolt />
            </Button>
            <Button size="icon-lg" variant="default" className="shadow-none">
              <Plus />
            </Button>
          </div>
        </div>
      </div>
      <DataTable columns={personColumns} data={filtered} enableRowSelection />
    </Card>
  );
};

export default PersonTable;
