# EmployeeStatusCard

> `src/components/common/EmployeeStatusCard.tsx`

Tarjeta de estado del empleado. Muestra avatar con anillo de color, datos de fichaje, estado de asistencia y método de autenticación.

---

## EmployeeStatus values

| Value | Label | Color token |
|-------|-------|-------------|
| `"working"` | Trabajando | `text-working` / `bg-working-bg` |
| `"worked"` | Trabajó | `text-worked` / `bg-worked-bg` |
| `"absent"` | Ausente | `text-absent` / `bg-absent-bg` |
| `"permit"` | Permiso | `text-permit` / `bg-permit-bg` |

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | — | **Requerido.** Nombre del empleado |
| `avatarSrc` | `string` | — | URL de la imagen de avatar |
| `avatarFallback` | `string` | — | Texto fallback del avatar; si omitido, se generan iniciales |
| `status` | `EmployeeStatus` | `"working"` | Estado de asistencia (controla colores) |
| `statusLabel` | `string` | — | Texto del footer; si omitido, usa el label del status |
| `roleBadges` | `EmployeeRoleBadge[]` | — | Badges de rol en el header (ícono + variant) |
| `data` | `EmployeeStatusData` | — | Datos de fichaje (ver `ROW_CONFIG` keys) |
| `devices` | `EmployeeDevice[]` | — | Métodos de autenticación (ver `DEVICE_CONFIG` keys) |

### STATUS_TOKENS

Objeto interno que mapea cada `EmployeeStatus` a clases de color. Fuente de verdad única:

```ts
const STATUS_TOKENS = {
  working: { ring: "ring-success",  accent: "text-working", footer: "bg-working-bg text-working",  label: "Trabajando" },
  worked:  { ring: "ring-worked",   accent: "text-worked",  footer: "bg-worked-bg text-worked",    label: "Trabajó" },
  absent:  { ring: "ring-absent",   accent: "text-absent",  footer: "bg-absent-bg text-absent",    label: "Ausente" },
  permit:  { ring: "ring-permit",   accent: "text-permit",  footer: "bg-permit-bg text-permit",    label: "Permiso" },
}
```

### ROW_CONFIG keys

Las filas de datos de fichaje siguen este orden fijo:

| Key | Ícono (Lucide) | Uso |
|-----|----------------|-----|
| `clockin` | `LogIn` | Hora de entrada |
| `clockout` | `LogOut` | Hora de salida |
| `planned` | `Calendar` | Turno planificado |
| `hours` | `Clock` | Horas trabajadas |
| `location` | `MapPin` | Sede / ubicación |

### DEVICE_CONFIG keys

| Key | Íconos | Label |
|-----|--------|-------|
| `faceMobile` | `ScanFace` + `Smartphone` | Reconocimiento facial por celular |
| `proximityBiometric` | `CreditCard` + `ScanLine` | Tarjeta de proximidad por biométrico |
| `fingerprintBiometric` | `Fingerprint` + `ScanLine` | Huella por biométrico |

---

## Tokens usados

`--working`, `--working-bg`, `--absent`, `--absent-bg`, `--permit`, `--permit-bg`, `--worked`, `--worked-bg`  
(ver [Tokens de Diseño](Tokens.md))

---

## Ejemplo

```tsx
import EmployeeStatusCard from "@/components/common/EmployeeStatusCard"
import { Calendar } from "lucide-react"

<EmployeeStatusCard
  name="Leidi Martinez"
  avatarSrc="https://i.pravatar.cc/150?img=1"
  status="working"
  data={{
    clockin: "08:05",
    clockout: "17:00",
    planned: "Turno Mañana",
    hours: "8h 55m",
    location: "Sede Central",
  }}
  devices={["faceMobile"]}
  roleBadges={[
    { icon: <Calendar className="size-2.5" />, variant: "info", label: "Planificado" },
  ]}
/>
```
