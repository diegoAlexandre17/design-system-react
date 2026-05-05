import * as React from "react"
import { Popover as PopoverPrimitive } from "radix-ui"
import { ChevronDown, Search } from "lucide-react"
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
  type CountryIso2,
  type ParsedCountry,
} from "react-international-phone"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type InputPhoneVariant = "default" | "separator"

type InputPhoneProps = Omit<
  React.ComponentProps<typeof Input>,
  "value" | "onChange" | "type"
> & {
  value?: string
  onChange?: (phone: string) => void
  defaultCountry?: CountryIso2
  preferredCountries?: CountryIso2[]
  hideDropdown?: boolean
  searchable?: boolean
  variant?: InputPhoneVariant
  containerClassName?: string
  triggerClassName?: string
  inputClassName?: string
}

const ALL_COUNTRIES: ParsedCountry[] = defaultCountries.map(parseCountry)
const COUNTRY_BY_ISO2 = new Map(ALL_COUNTRIES.map((c) => [c.iso2, c]))

function buildOrderedCountries(preferred?: CountryIso2[]): {
  list: ParsedCountry[]
  preferredCount: number
} {
  if (!preferred || preferred.length === 0) {
    return { list: ALL_COUNTRIES, preferredCount: 0 }
  }
  const preferredCountries: ParsedCountry[] = []
  for (const iso of preferred) {
    const country = COUNTRY_BY_ISO2.get(iso)
    if (country) preferredCountries.push(country)
  }
  const preferredSet = new Set(preferred)
  const rest = ALL_COUNTRIES.filter((c) => !preferredSet.has(c.iso2))
  return {
    list: [...preferredCountries, ...rest],
    preferredCount: preferredCountries.length,
  }
}

function CountryListContent({
  selectedIso2,
  preferredCountries,
  searchable,
  onSelect,
  onClose,
}: {
  selectedIso2: CountryIso2
  preferredCountries?: CountryIso2[]
  searchable: boolean
  onSelect: (iso2: CountryIso2) => void
  onClose: () => void
}) {
  const [search, setSearch] = React.useState("")

  const { list, preferredCount } = React.useMemo(
    () => buildOrderedCountries(preferredCountries),
    [preferredCountries],
  )

  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return list
    const digits = q.replace(/\D/g, "")
    return list.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (digits.length > 0 && c.dialCode.includes(digits)),
    )
  }, [list, search])

  const showPreferredDivider =
    preferredCount > 0 && search.trim().length === 0

  return (
    <>
      {searchable && (
        <div className="flex items-center gap-2 border-b border-border px-2 py-2">
          <Search
            aria-hidden
            className="size-3.5 shrink-0 text-muted-foreground"
          />
          <Input
            autoFocus
            type="text"
            placeholder="Search country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-7 border-0 bg-transparent! px-0 focus:border-0"
          />
        </div>
      )}
      <ul role="listbox" className="max-h-60 overflow-auto p-1">
        {filtered.length === 0 ? (
          <li className="px-2 py-3 text-center text-xs text-muted-foreground">
            No country found
          </li>
        ) : (
          filtered.map((c, idx) => {
            const isSelected = c.iso2 === selectedIso2
            const dividerAfter =
              showPreferredDivider && idx === preferredCount - 1
            return (
              <React.Fragment key={c.iso2}>
                <li
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onSelect(c.iso2)
                    onClose()
                  }}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
                    "hover:bg-accent hover:text-accent-foreground",
                    isSelected && "bg-accent text-accent-foreground",
                  )}
                >
                  <FlagImage iso2={c.iso2} size={20} />
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-xs text-muted-foreground">
                    +{c.dialCode}
                  </span>
                </li>
                {dividerAfter && (
                  <li aria-hidden className="my-1 h-px bg-border" />
                )}
              </React.Fragment>
            )
          })
        )}
      </ul>
    </>
  )
}

function CountryPopover({
  selectedIso2,
  onSelect,
  preferredCountries,
  disabled,
  hideDropdown,
  searchable,
  triggerClassName,
}: {
  selectedIso2: CountryIso2
  onSelect: (iso2: CountryIso2) => void
  preferredCountries?: CountryIso2[]
  disabled?: boolean
  hideDropdown?: boolean
  searchable: boolean
  triggerClassName?: string
}) {
  const [open, setOpen] = React.useState(false)
  const selected = COUNTRY_BY_ISO2.get(selectedIso2)

  const triggerContent = (
    <>
      <FlagImage
        iso2={selectedIso2}
        size={20}
        style={{ visibility: selected ? "visible" : "hidden" }}
      />
      {!hideDropdown && (
        <ChevronDown
          aria-hidden
          className={cn(
            "size-3 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      )}
    </>
  )

  if (hideDropdown || disabled) {
    return (
      <button
        type="button"
        disabled
        data-slot="input-phone-trigger"
        className={triggerClassName}
        title={selected?.name}
      >
        {triggerContent}
      </button>
    )
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          data-slot="input-phone-trigger"
          aria-label="Select country"
          title={selected?.name}
          className={triggerClassName}
        >
          {triggerContent}
        </button>
      </PopoverPrimitive.Trigger>
      {open && (
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={6}
            className={cn(
              "z-50 w-[300px] rounded-md border border-border bg-popover text-popover-foreground shadow-md outline-none",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            )}
          >
            <CountryListContent
              selectedIso2={selectedIso2}
              preferredCountries={preferredCountries}
              searchable={searchable}
              onSelect={onSelect}
              onClose={() => setOpen(false)}
            />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      )}
    </PopoverPrimitive.Root>
  )
}

function InputPhone({
  value,
  onChange,
  defaultCountry = "us",
  preferredCountries,
  hideDropdown,
  searchable = false,
  disabled,
  className,
  variant = "default",
  containerClassName,
  triggerClassName,
  inputClassName,
  ...rest
}: InputPhoneProps) {
  const {
    inputValue,
    handlePhoneValueChange,
    inputRef,
    country,
    setCountry,
  } = usePhoneInput({
    defaultCountry,
    value,
    onChange: (data) => onChange?.(data.phone),
  })

  const triggerCls =
    variant === "default"
      ? cn(
          "flex h-8.5 shrink-0 items-center gap-1 rounded-none border-0 bg-transparent pl-2 pr-1 text-sm font-medium leading-5 tracking-tight transition-colors outline-none",
          "hover:bg-muted/30",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          triggerClassName,
        )
      : cn(
          "flex h-8.5 shrink-0 items-center gap-1 rounded-l-lg rounded-r-none border border-r-0 border-input bg-white pl-2 pr-1 text-sm font-medium leading-5 tracking-tight transition-colors outline-none",
          "hover:bg-muted/40 focus-visible:border-primary focus-visible:z-10",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50",
          "aria-invalid:border-destructive",
          "dark:bg-input/30 dark:disabled:bg-input/80",
          triggerClassName,
        )

  const inputCls =
    variant === "default"
      ? cn(
          "rounded-none border-0 bg-transparent! flex-1 min-w-0 pl-1 focus:border-0",
          inputClassName,
          className,
        )
      : cn(
          "rounded-l-none rounded-r-lg border border-input bg-white flex-1 min-w-0 pl-1.5",
          inputClassName,
          className,
        )

  const containerCls =
    variant === "default"
      ? cn(
          "flex items-stretch w-full rounded-md border border-input bg-white transition-colors",
          "focus-within:border-primary",
          "has-[input:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:bg-input/50",
          "has-[input[aria-invalid=true]]:border-destructive",
          containerClassName,
        )
      : cn("relative flex items-stretch w-full", containerClassName)

  return (
    <div data-slot="input-phone" className={containerCls}>
      <CountryPopover
        selectedIso2={country.iso2}
        onSelect={(iso2) => setCountry(iso2)}
        preferredCountries={preferredCountries}
        disabled={disabled}
        hideDropdown={hideDropdown}
        searchable={searchable}
        triggerClassName={triggerCls}
      />
      <Input
        {...rest}
        type="tel"
        ref={inputRef}
        value={inputValue}
        onChange={handlePhoneValueChange}
        disabled={disabled}
        className={inputCls}
      />
    </div>
  )
}

export { InputPhone }
export type { InputPhoneProps, InputPhoneVariant }
