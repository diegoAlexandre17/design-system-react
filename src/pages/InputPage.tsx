import { Input } from "@/components/ui/input"
import {
  AlertTriangle,
  Check,
  Clock,
  Calendar,
  Info,
  ChevronDown,
} from "lucide-react"

export default function InputPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Input</h1>
      </div>
      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Tamaños
        </h2>
        <div className="flex  gap-0.5 p-6 rounded-xl border border-border bg-muted/30">
          <Input className="h-7 text-xs" placeholder="Small" />
          <Input placeholder="Default" />
          <Input className="h-10 text-base" placeholder="Large" />
        </div>
      </section>
      <section className="space-y-3 p-10 bg-white">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Primer Nombre (Focus Simulation) */}
          <div className="space-y-1.5 flex flex-col">
            <label className="text-[13px] font-normal text-[#8e8e8e]">
              Primer nombre *
            </label>
            <Input
              defaultValue="Karen"
              className="w-full border-[#4A90E2]  text-[#4A4A4A] font-normal rounded-md"
            />
          </div>
          {/* Select Simulation */}
          <div className="space-y-1.5 flex flex-col">
            <div className="flex justify-between items-center px-1">
              <label className="text-[13px] font-normal text-[#8e8e8e]">
                Trabajar Día Libre
              </label>
              <Info className="size-3.5 text-[#8e8e8e]" />
            </div>
            <div className="relative">
              <Input
                defaultValue="Media"
                className="w-full border-[#E2E8F0]  text-[#4A4A4A] pr-10 font-normal rounded-md"
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center text-[#cbd5e1] gap-1.5">
                <div className="w-px h-4 bg-[#e2e8f0]" />
                <ChevronDown className="size-4" strokeWidth={3} />
              </div>
            </div>
          </div>
          {/* Password with Icons */}
          <div className="space-y-1.5 flex flex-col">
            <label className="text-[13px] font-normal text-[#8e8e8e]">
              Contraseña actual
            </label>
            <Input
              type="password"
              placeholder="Ingresa tu contraseña"
              className="w-full pl-9 border-[#E2E8F0]   text-[#4A4A4A] placeholder:text-[#cbd5e1] font-normal rounded-md"
            />
          </div>
        </div>
      </section>

      <section className=" p-10 bg-white">
        <div className="flex flex-col gap-10 max-w-70">
          {/* Default */}
          <div className="space-y-8">
            <h3 className="text-[28px] font-normal tracking-tight text-[#4A4A4A]">
              Default
            </h3>
            <div className="space-y-1.5 flex flex-col">
              <label
                htmlFor="val-default"
                className="text-[13px] font-normal text-[#8e8e8e]"
              >
                Title <span className="text-[#FF6B6B]">*</span>
              </label>
              <Input
                id="val-default"
                placeholder="Text"
                className="w-full border-[#E2E8F0]  text-[#4A4A4A] placeholder:text-[#cbd5e1] font-normal rounded-md"
              />
            </div>
          </div>
          {/* Focus */}
          <div className="space-y-6">
            <h3 className="text-[28px] font-normal tracking-tight text-[#4A4A4A]">
              Focus
            </h3>
            <div className="space-y-1.5 flex flex-col">
              <label
                htmlFor="val-focus"
                className="text-[13px] font-normal text-[#8e8e8e]"
              >
                Title <span className="text-[#FF6B6B]">*</span>
              </label>
              <Input
                id="val-focus"
                placeholder="Text"
                className="w-full border-[#4A90E2]  focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] text-[#4A4A4A] placeholder:text-[#cbd5e1] font-normal rounded-md"
              />
            </div>
          </div>
          {/* Error */}
          <div className="space-y-6">
            <h3 className="text-[28px] font-normal tracking-tight text-[#4A4A4A]">
              Error
            </h3>
            <div className="space-y-1.5 flex flex-col">
              <label
                htmlFor="val-error"
                className="text-[13px] font-normal text-[#8e8e8e]"
              >
                Title <span className="text-[#FF6B6B]">*</span>
              </label>
              <Input
                id="val-error"
                placeholder="Text"
                className="w-full border-[#FF6B6B] focus:border-[#FF6B6B] text-[#4A4A4A] placeholder:text-[#cbd5e1] font-normal rounded-md"
              />
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
              <label
                htmlFor="val-success"
                className="text-[13px] font-normal text-[#8e8e8e]"
              >
                Title <span className="text-[#FF6B6B]">*</span>
              </label>
              <Input
                id="val-success"
                placeholder="Text"
                className="w-full border-[#53C65B] focus:border-[#53C65B] text-[#4A4A4A] placeholder:text-[#cbd5e1] font-normal rounded-md"
              />
              <div className="flex items-center gap-1.5 text-[#53C65B] mt-1">
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
            <div className="space-y-5">
              <div className="space-y-1.5 flex flex-col">
                <label className="text-[13px] font-normal text-[#8e8e8e]">
                  Title <span className="text-[#FF6B6B]">*</span>
                </label>
                <Input
                  disabled
                  value="Text"
                  className="w-full bg-[#f8fafc] border-[#e2e8f0] text-[#94a3b8] font-normal rounded-md"
                />
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="text-[13px] font-normal text-[#8e8e8e]">
                  Hora de Reincorporación
                </label>
                <div className="relative">
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#4A90E2]">
                    <Clock className="size-4" />
                  </div>
                  <Input
                    disabled
                    value="4:00 pm"
                    className="w-full pl-9 bg-[#f0f7ff] border-transparent text-[#64748b] font-normal rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="text-[13px] font-normal text-[#8e8e8e]">
                  Día de Reincorporación
                </label>
                <div className="relative">
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#53C65B]">
                    <Calendar className="size-4" />
                  </div>
                  <Input
                    disabled
                    value="Jue, 25-03-2025"
                    className="w-full pl-9 bg-[#f0fdf4] border-transparent text-[#64748b] font-normal rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="text-[13px] font-normal text-[#8e8e8e]">
                  Correo principal <span className="text-[#e2e8f0]">*</span>
                </label>
                <Input
                  disabled
                  placeholder="karenrogrlgrd958@gmail.com"
                  className="w-full bg-white border-[#f1f5f9] text-[#cbd5e1] font-normal rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
