# EmployeeStatusCard

> `src/components/common/EmployeeStatusCard.tsx`

Card compuesto que muestra el estado de un empleado: nombre, avatar con ring del color del status, lista de filas tipadas (clockin / clockout / planned / hours / location), badges de rol y métodos de fichaje (dispositivos). Construido sobre `Card` (`size="sm"`).

```tsx
<EmployeeStatusCard
  name="..."
  avatarSrc="..."
  avatarFallback="..."
  status="..."        // working | worked | absent | permit
  statusLabel="..."   // override del label default del status
  roleBadges={[ ... ]}
  data={{ ... }}
  devices={[ ... ]}
/>
```

**Statuses (mapean a ring + footer + label):**
- `working` → ring `success`, footer `bg-working-bg / text-working`, label `"Trabajando"`.
- `worked` → ring `worked`, footer `bg-worked-bg / text-worked`, label `"Trabajó"`.
- `absent` → ring `absent`, footer `bg-absent-bg / text-absent`, label `"Ausente"`.
- `permit` → ring `permit`, footer `bg-permit-bg / text-permit`, label `"Permiso"`.

**Filas de `data` (todas opcionales):**
- `clockin` — ícono `LogIn`
- `clockout` — ícono `LogOut`
- `planned` — ícono `Calendar`
- `hours` — ícono `Clock`
- `location` — ícono `MapPin`

El orden de render es fijo, definido en el componente. Pasar solo las filas que apliquen — las ausentes no se renderizan.

**`roleBadges`** — array de `{ icon, label?, variant?, key? }`. Se renderizan como `<Badge>` circulares de `size-5` en el `CardAction`. `variant` default `info`.

**`devices`** — array de `EmployeeDevice`. Cada uno expande a un par de íconos `[método, dispositivo]`:
- `faceMobile` → `[ScanFace, Smartphone]` — "Reconocimiento facial por celular"
- `proximityBiometric` → `[CreditCard, ScanLine]` — "Tarjeta de proximidad por biométrico"
- `fingerprintBiometric` → `[Fingerprint, ScanLine]` — "Huella por biométrico"

Se renderizan en el `CardFooter`, al lado del label del status.

**Ancho:** `max-w-[250px] w-full` por defecto — se mantiene a 250px pero puede achicarse en pantallas chicas antes de que el contenedor padre cambie su layout de columnas. **No reemplazar por `w-[250px]` fijo.**

**Tipos exportados:** `EmployeeStatus`, `EmployeeStatusCardProps`, `EmployeeStatusData`, `EmployeeDevice`, `EmployeeRoleBadge`.

**Ejemplo:**
```tsx
<EmployeeStatusCard
  name="Jose Blanco"
  avatarSrc="https://github.com/shadcn.png"
  status="working"
  data={{
    clockin: "07:43 am",
    hours: "3.32 hrs",
    location: "Oficina Colombia",
  }}
  roleBadges={[
    { icon: <Backpack />, label: "Equipo de campo", variant: "info" },
  ]}
  devices={["faceMobile"]}
/>
```

**Página de ejemplo:** `src/pages/CardPage.tsx`
