import { useMemo, useState } from "react"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"
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
    <ShowcasePage
      title="Input Phone"
      description="Phone input built on top of the shadcn Input using the usePhoneInput hook from react-international-phone."
    >
      <ShowcaseSection title="Default">
        <div className="max-w-sm">
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
      </ShowcaseSection>

      <ShowcaseSection title="Default — empty">
        <div className="max-w-sm">
          <InputPhone
            value={phone}
            onChange={setPhone}
            placeholder="Phone number"
          />
          <p className="mt-3 text-xs text-muted-foreground">
            Value: <code>{phone || "—"}</code>
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Separator variant + searchable">
        <div className="max-w-sm">
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
      </ShowcaseSection>

      <ShowcaseSection title="States">
        <div className="rounded-xl bg-white p-4 sm:p-6">
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
                <div className="mt-1 flex items-center gap-1.5 text-[#FF6B6B]">
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
                <div className="mt-1 flex items-center gap-1.5 text-success">
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
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
