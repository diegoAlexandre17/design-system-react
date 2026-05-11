import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/common/DataTable";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import EmployeeNameInfo from "@/components/common/EmployeeNameInfo";
import { Input } from "@/components/ui/input";
import { Bolt, IdCard, Plus, Search, SearchIcon, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ComboboxField, type ComboboxFieldOption } from "@/components/ui/combobox";
import { paddingTable } from "@/constants/styles/styles";

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
  autenticacion: string;
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
    fechaNacimiento: "22-01-1998",
    correo: "Lm+4723@intelli-next.c...",
    metodo: "Biometrico",
    autenticacion: "SSO",
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
    autenticacion: "2FA",
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
    autenticacion: "PIN",
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
    autenticacion: "SSO",
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
    autenticacion: "Proximidad",
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
    autenticacion: "2FA",
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
    autenticacion: "PIN",
  },
];

const personColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "sede",
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Sede</TooltipTrigger>
          <TooltipContent arrow>Sede</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    cell: ({ row }) => <Text variant="span-table">{row.getValue("sede")}</Text>,
  },
  {
    accessorKey: "identificacion",
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Identificación</TooltipTrigger>
          <TooltipContent arrow>Identificación</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
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
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Empleado</TooltipTrigger>
          <TooltipContent arrow>Empleado</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
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
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Método</TooltipTrigger>
          <TooltipContent arrow>Método</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
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
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Departamento</TooltipTrigger>
          <TooltipContent arrow>Departamento</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("departamento")}</Text>
    ),
  },
  {
    accessorKey: "tipoDocumento",
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Tipo de documento</TooltipTrigger>
          <TooltipContent arrow>Tipo de documento</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("tipoDocumento")}</Text>
    ),
  },
  {
    accessorKey: "autenticacion",
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Autenticación</TooltipTrigger>
          <TooltipContent arrow>Autenticación</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge className="bg-primary-light text-primary w-fit cursor-default">
                <IdCard size={20} />
              </Badge>
            </TooltipTrigger>
            <TooltipContent arrow>{row.original.autenticacion}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
  {
    accessorKey: "fechaNacimiento",
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Fec. de nac.</TooltipTrigger>
          <TooltipContent arrow>Fec. de nac.</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    cell: ({ row }) => (
      <Text variant="span-table">{row.getValue("fechaNacimiento")}</Text>
    ),
  },
  {
    accessorKey: "correo",
    header: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Correo</TooltipTrigger>
          <TooltipContent arrow>Correo</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
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

  const frameworks: ComboboxFieldOption[] = [
    { label: "Next.js", value: "next" },
    { label: "SvelteKit", value: "sveltekit" },
    { label: "Nuxt.js", value: "nuxt" },
    { label: "Remix", value: "remix" },
    { label: "Astro", value: "astro" },
    { label: "Vite", value: "vite" },
    { label: "Gatsby", value: "gatsby" },
    { label: "Solid Start", value: "solid-start" },
  ]

  return (
    <Card variant="borderless" className={`flex-1 ${paddingTable}`}>
      <div>
        <div className="relative flex items-center justify-between">
          <div className='w-150'>
            <ComboboxField
              id="cb-search-left"
              items={frameworks}
              placeholder="Buscar..."
              startIcon={<SearchIcon />}
              showTrigger={false}
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