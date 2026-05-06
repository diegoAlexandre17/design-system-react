# SKILL: MyIntelli Design System

## Descripción

Este skill le dice a Claude cómo generar código correcto y consistente usando el **MyIntelli Design System** (repositorio `design-system-react`). Úsalo cuando el usuario pida crear componentes, páginas, formularios o cualquier UI dentro de este proyecto.

---

## Contexto del sistema

- **Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 + CVA + Radix UI + shadcn/ui
- **Fuente principal:** Lato (body), Geist disponible para headings
- **Color primario:** `#2585F4` (`--primary`) sobre fondo `#E9F3FE` (`--background`)
- **Identidad:** Interfaz empresarial limpia, azul/blanco, con estados de color semánticos
- **Logo:** MyIntelli (archivo en `src/assets/logo-myintelli-horizontal.jpg`)

---

## Archivos de referencia

Antes de generar código para este sistema, consultar:

| Archivo | Contenido |
|---|---|
| `CLAUDE.md` | Reglas generales, estructura de carpetas, convenciones |
| `design-tokens.md` | Tokens de color, tipografía, espaciado |
| `components.md` | Inventario completo de componentes con props y ejemplos |
| `patterns.md` | Patrones de composición reutilizables |

---

## Checklist de generación

Antes de entregar cualquier código de este sistema, verificar:

- [ ] ¿Usa `cn()` para todas las clases?
- [ ] ¿Usa CVA si el componente tiene variantes?
- [ ] ¿Incluye `data-slot`, `data-variant`, `data-size` donde corresponde?
- [ ] ¿Los colores usan tokens CSS (`bg-primary`, `text-foreground`, etc.) en lugar de hex?
- [ ] ¿Los imports usan alias `@/`?
- [ ] ¿Los formularios usan `Field` + `FieldLabel` + `FieldError`?
- [ ] ¿Las tablas de datos usan `DataTable` con `ColumnDef` tipados?
- [ ] ¿Los estados de registros usan `Badge` con variante semántica?
- [ ] ¿El texto en celdas usa `Text variant="span-table"`?

---

## Respuestas rápidas por tarea

### "Crea un formulario de [X]"
→ Usar patrón #1 de `patterns.md`. Siempre `FieldGroup` > `Field` > control + `FieldError`.

### "Crea una tabla de [X]"
→ Usar patrón #2. `DataTable` con `ColumnDef<TipoFila>[]`, badges para estados, `UserCell` para usuarios.

### "Crea una modal de confirmación"
→ Usar patrón #4. `showCloseButton={false}` en modales destructivos.

### "Crea un componente nuevo"
→ Seguir estructura CVA del ejemplo en `CLAUDE.md`. Registrar export en el archivo `.tsx`.

### "Agrega una variante a [componente]"
→ Solo agregar nueva key en el objeto `variants` del CVA. No tocar variantes existentes.

### "Crea una página showcase de [componente]"
→ Crear `src/pages/[NombrePage].tsx` con secciones de variantes. Registrar en `componentsRoutes.tsx`.

---

## Tokens de color de referencia rápida

```
bg-primary          → #2585F4  (azul MyIntelli)
bg-primary-light    → #ECF4FE  (azul claro)
bg-background       → #E9F3FE  (fondo app)
bg-card             → #FFFFFF  (cards)
bg-destructive      → #FD5656  (error/eliminar)
bg-success          → #5FC85F  (éxito)
bg-warning          → #FC9145  (advertencia)
text-foreground     → #5D5D5D  (texto principal)
text-muted-foreground → #737373 (texto secundario)
border-border       → #E5E5E5  (bordes)
```

---

## Ejemplos de código de referencia

### Botón primario
```tsx
<Button variant="default">Guardar</Button>
```

### Botón con ícono
```tsx
<Button variant="ghost" size="icon"><PlusIcon /></Button>
```

### Badge de estado
```tsx
<Badge variant="published">Publicado</Badge>
<Badge variant="pending">Pendiente</Badge>
```

### Campo de formulario completo
```tsx
<Field>
  <FieldLabel htmlFor="nombre">Nombre</FieldLabel>
  <Input id="nombre" placeholder="Escribe aquí..." />
  <FieldError errors={[formErrors.nombre]} />
</Field>
```

### Card con header y acción
```tsx
<Card variant="default">
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardAction><Button variant="ghost" size="icon"><MoreVertical /></Button></CardAction>
  </CardHeader>
  <CardContent>Contenido</CardContent>
</Card>
```

### Avatar con fallback
```tsx
<Avatar size="lg">
  <AvatarImage src={url} alt={nombre} />
  <AvatarFallback>{iniciales}</AvatarFallback>
</Avatar>
```
