import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page";
import { Label } from "@/components/ui/label";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ModalPage = () => {
  return (
    <ShowcasePage title="Modal" description="Modals / Dialogs">
      {/* Basic dialog with trigger */}
      <ShowcaseSection title="Basic Dialog">
        <h2 className="text-lg font-semibold">Basic Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog Btn</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo empleado</DialogTitle>
            </DialogHeader>
            {/* <div>
              <Label required>
                Tipo de Persona
              </Label>
            </div> */}
            <FieldGroup>
              <Field>
                <Label required htmlFor="name-1">
                  Tipo de Empleado
                </Label>
                <Select>
                  <SelectTrigger id="tipo-doc">
                    <SelectValue placeholder="Cédula" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cedula">Cédula</SelectItem>
                    <SelectItem value="pasaporte">Pasaporte</SelectItem>
                    <SelectItem value="dni">DNI</SelectItem>
                    <SelectItem value="rut">RUT</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <Label required htmlFor="username-1">
                  Username
                </Label>
                <Input id="username-1" name="username" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="success">Enviar</Button>
              </DialogClose>
              <Button variant="destructive">Cancelar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>
    </ShowcasePage>
  );
};

export default ModalPage;
