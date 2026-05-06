import { useMemo, useState } from "react"
import { InputPhone } from "@/components/ui/input-phone"
import { Label } from "@/components/ui/label"
import type { CountryIso2 } from "react-international-phone"
import { AlertTriangle, Check } from "lucide-react"

const PREFERRED: CountryIso2[] = ["ar", "us", "es", "br", "mx"]

export default function InputPhonePage() {
  const [phone, setPhone] = useState("")
  const [phoneAr, setPhoneAr] = useState("")
  const [phoneCo, setPhoneCo] = useState("+573166999738")
  const preferred = useMemo(() => PREFERRED, [])

  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Input Phone</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Phone input built on top of the shadcn <code>Input</code> using the{" "}
          <code>usePhoneInput</code> hook from{" "}
          <code>react-international-phone</code>.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Default
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30 max-w-sm">
          <div className="space-y-1.5 flex flex-col">
            <Label className="text-xs text-muted-foreground">
              Teléfono
            </Label>
            <InputPhone
              defaultCountry="co"
              value={phoneCo}
              onChange={setPhoneCo}
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Value: <code>{phoneCo || "—"}</code>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Default — empty
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30 max-w-sm">
          <InputPhone
            value={phone}
            onChange={setPhone}
            placeholder="Phone number"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Value: <code>{phone || "—"}</code>
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Separator variant + searchable
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30 max-w-sm">
          <InputPhone
            variant="separator"
            searchable
            value={phoneAr}
            onChange={setPhoneAr}
            defaultCountry="ar"
            preferredCountries={preferred}
            placeholder="Número de teléfono"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Value: <code>{phoneAr || "—"}</code>
          </p>
        </div>
      </section>

      <section className="space-y-3 p-10 bg-white">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Default */}
          <div className="space-y-6">
            <h3 className="text-[28px] font-normal tracking-tight text-[#4A4A4A]">
              Default
            </h3>
            <div className="space-y-1.5 flex flex-col">
              <Label
                required
                className="text-xs text-muted-foreground"
              >
                Phone
              </Label>
              <InputPhone defaultCountry="us" />
            </div>
          </div>

          {/* Error */}
          <div className="space-y-6">
            <h3 className="text-[28px] font-normal tracking-tight text-[#4A4A4A]">
              Error
            </h3>
            <div className="space-y-1.5 flex flex-col">
              <Label
                required
                className="text-xs text-muted-foreground"
              >
                Phone
              </Label>
              <InputPhone aria-invalid defaultCountry="us" />
              <div className="flex items-center gap-1.5 text-[#FF6B6B] mt-1">
                <AlertTriangle className="size-3.5 fill-current" />
                <span className="text-[13px]">Help text</span>
              </div>
            </div>
          </div>

          {/* Success */}
          <div className="space-y-6">
            <h3 className="text-[28px] font-normal tracking-tight text-[#4A4A4A]">
              Success
            </h3>
            <div className="space-y-1.5 flex flex-col">
              <Label
                required
                className="text-xs text-muted-foreground"
              >
                Phone
              </Label>
              <InputPhone
                defaultCountry="us"
                containerClassName="border-success focus-within:border-success"
              />
              <div className="flex items-center gap-1.5 text-success mt-1">
                <Check className="size-3.5" strokeWidth={3} />
                <span className="text-[13px]">Help text</span>
              </div>
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-6">
            <h3 className="text-[28px] font-normal tracking-tight text-[#4A4A4A]">
              Disabled
            </h3>
            <div className="space-y-1.5 flex flex-col">
              <Label className="text-xs text-muted-foreground">
                Phone
              </Label>
              <InputPhone disabled defaultCountry="us" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
