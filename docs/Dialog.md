# Dialog

> `src/components/ui/dialog.tsx`

```tsx
<Dialog />
```

**Ejemplo:**
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
      <DialogDescription>Descripción del modal.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancelar</Button>
      </DialogClose>
      <Button>Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

Helpers exportados: `DialogTrigger`, `DialogPortal`, `DialogClose`, `DialogOverlay`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`.

**Página de ejemplo:** `src/pages/ModalPage.tsx`
