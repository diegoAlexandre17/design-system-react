# Card

> `src/components/ui/card.tsx`

```tsx
<Card
  variant="..."  // default | muted | primary | outline | ghost | borderless
  size="..."     // default | sm
/>
```

**Variantes:**
- `default`
- `muted`
- `primary`
- `outline`
- `ghost`
- `borderless`

**Tamaños:**
- `default`
- `sm`

**Ejemplo:**
```tsx
<Card variant="default">
  <CardHeader>
    <CardTitle>Notificaciones</CardTitle>
    <CardDescription>Tenés 3 mensajes sin leer.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">Contenido…</p>
  </CardContent>
  <CardFooter>
    <Button size="sm" variant="outline">Ver todo</Button>
  </CardFooter>
</Card>
```

Helpers exportados: `CardHeader`, `CardFooter`, `CardTitle`, `CardAction`, `CardDescription`, `CardContent`.

**Página de ejemplo:** `src/pages/CardPage.tsx`
