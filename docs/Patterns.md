# Patrones de Layout y de UI

## 📐 Patrones de Layout

### Container
Ancho máximo centrado con padding lateral:

```tsx
<div className="container">
  {/* Contenido se mantiene dentro de 1200px max */}
</div>
```

**Breakpoints:**
- Mobile: 100% ancho (padding 16px)
- Tablet: 768px
- Desktop: 1024px
- Large: 1200px max

### Grid System
Sistema de 12 columnas:

```tsx
<div className="grid grid-cols-12 gap-md">
  <div className="col-span-6">Mitad</div>
  <div className="col-span-6">Mitad</div>
</div>
```

### Flexbox
```tsx
<div className="flex items-center justify-center">…</div>
<div className="flex justify-between items-center">…</div>
<div className="flex flex-col gap-md">…</div>
```

---

## 🎯 Patrones Comunes

### Formulario de Login
```tsx
<Card className="max-w-sm w-full">
  <CardHeader>
    <CardTitle>Iniciar sesión</CardTitle>
    <CardDescription>Accedé con tu email y contraseña.</CardDescription>
  </CardHeader>
  <CardContent>
    <FieldGroup>
      <Field>
        <Label required htmlFor="login-email">Email</Label>
        <Input id="login-email" type="email" placeholder="tu@empresa.com" />
      </Field>
      <Field>
        <Label required htmlFor="login-pass">Contraseña</Label>
        <Input id="login-pass" type="password" placeholder="••••••••" />
      </Field>
    </FieldGroup>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Ingresar</Button>
  </CardFooter>
</Card>
```

### Dashboard Card con Métrica
```tsx
<Card variant="borderless" className="py-2 gap-2">
  <CardHeader>
    <Text variant="card-title-graph">Estatus</Text>
  </CardHeader>
  <CardContent>
    <div className="flex gap-2.5">
      <Avatar size="xl">
        <AvatarFallback className="rounded-md bg-success-light">
          <User className="text-success" />
        </AvatarFallback>
      </Avatar>
      <div>
        <Text variant="p" className="font-semibold text-success">100</Text>
        <Text variant="small">Activos</Text>
      </div>
    </div>
  </CardContent>
</Card>
```

### Navbar
```tsx
<nav className="flex items-center justify-between px-4 py-3 bg-white border-b border-border">
  <div className="flex items-center gap-3">
    <Breadcrumb variant="primary">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Empleados</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
  <ButtonGroup>
    <Button variant="tab-active">Datos personales</Button>
    <Button variant="tab">Datos laborales</Button>
  </ButtonGroup>
</nav>
```

### Hero Section
```tsx
<section className="px-6 py-16 text-center space-y-4">
  <Text variant="h1" className="text-foreground">
    Construí tu producto con un sistema sólido
  </Text>
  <Text variant="p" className="max-w-xl mx-auto text-muted-foreground">
    Componentes, tokens y patrones listos para usar en cada pantalla.
  </Text>
  <div className="flex justify-center gap-3">
    <Button>Empezar ahora</Button>
    <Button variant="outline">Ver componentes</Button>
  </div>
</section>
```
