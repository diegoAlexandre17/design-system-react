import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const ModalPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Dialog / Modal</h1>

      {/* Basic dialog with trigger */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Basic Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog Btn</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
            </DialogHeader>
            <p className="py-4 text-sm text-muted-foreground">Modal body</p>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="destructive">Cancel</Button>
              </DialogClose>
              <Button variant="destructive">Delete account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  )
}

export default ModalPage