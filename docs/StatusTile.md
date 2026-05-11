# StatusTile

> `src/components/common/StatusTile.tsx`

Wrapper sobre `IconTileCard` que conoce el mapping `status → variant + icon + label` del dominio (novedades de RRHH). El consumidor solo pasa el `status` y opcionalmente un `count`.

```tsx
<StatusTile
  status="..."     // ver lista de statuses abajo
  count={3}
  selected={false}
  onClick={() => {}}
/>
```

**Statuses disponibles:**
- `tardanzas` → variant `tangerine` · icon `Clock` · "Tardanzas"
- `ausencias` → variant `error` · icon `UserX` · "Ausencias"
- `salidasIntempestivas` → variant `purple` · icon `LogOut` · "Salidas Intempestivas"
- `permisos` → variant `mustard` · icon `FileText` · "Permisos"
- `tiempoLibre` → variant `forest` · icon `CalendarDays` · "Tiempo libre"
- `cambioTurno` → variant `slate` · icon `RefreshCcw` · "Cambio de turno"
- `impares` → variant `blue` · icon `EyeOff` · "Impares"
- `fueraGeocerca` → variant `error` · icon `MapPinOff` · "Fuera de geocerca"
- `manuales` → variant `success` · icon `Pencil` · "Manuales"
- `horasExtras` → variant `violet` · icon `Timer` · "Horas extras"
- `sinProgramacion` → variant `teal` · icon `CalendarOff` · "Sin programación"

**Props:**
- `status: StatusKey` (requerido)
- `count?: number` — pasado al widget de novedades del IconTileCard.
- `selected?: boolean` — reenviado al IconTileCard.
- `onClick?: () => void`
- `className?: string`

**Exports:** `StatusTile`, `STATUS_KEYS` (array readonly con todas las keys), `StatusKey` (type).

**Ejemplo:**
```tsx
const [selectedStatus, setSelectedStatus] = useState<StatusKey | null>("permisos")

{STATUS_KEYS.map((status) => (
  <StatusTile
    key={status}
    status={status}
    count={counts[status]}
    selected={selectedStatus === status}
    onClick={() => setSelectedStatus(status)}
  />
))}
```

**Página de ejemplo:** `src/pages/CarouselPage.tsx`
