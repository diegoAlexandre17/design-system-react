import React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ChevronDownIcon, XIcon, CheckIcon, Loader2 } from "lucide-react"
import { Separator } from "./separator"

const Combobox = ComboboxPrimitive.Root

type ComboboxSize = "sm" | "default" | "lg"

const COMBOBOX_INPUT_SIZE: Record<ComboboxSize, string> = {
  sm: "h-7 text-xs",
  default: "h-[34px] text-xs",
  lg: "h-9 text-sm",
}

const COMBOBOX_CHIPS_SIZE: Record<ComboboxSize, string> = {
  sm: "h-7 text-xs",
  default: "h-[34px] text-xs",
  lg: "h-9 text-sm",
}

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  startIcon,
  endIcon,
  size = "default",
  wrapperRef,
  ...props
}: Omit<ComboboxPrimitive.Input.Props, "size"> & {
  showTrigger?: boolean
  showClear?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  size?: ComboboxSize
  wrapperRef?: React.Ref<HTMLDivElement>
}) {
  const hasRightAddon = showClear || showTrigger || endIcon != null
  return (
    <InputGroup
      ref={wrapperRef}
      data-size={size}
      className={cn(
        "w-auto rounded-sm border-border bg-white hover:border-secondary has-[[data-slot=input-group-control]:focus-visible]:border-primary has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-0 dark:bg-white",
        COMBOBOX_INPUT_SIZE[size],
        className
      )}
    >
      {startIcon && (
        <InputGroupAddon align="inline-start" className="pl-2.5">
          {startIcon}
        </InputGroupAddon>
      )}
      <ComboboxPrimitive.Input
        render={
          <InputGroupInput
            disabled={disabled}
            className={startIcon ? undefined : "pl-2.5"}
          />
        }
        {...props}
      />
      {hasRightAddon && (
        <InputGroupAddon
          align="inline-end"
          className="gap-0 pr-2.5 has-[>button]:mr-[-3px]"
        >
          {endIcon}
          {showClear && (
            <ComboboxClear
              disabled={disabled}
              className="size-5 min-w-0 [&_svg]:size-3.5"
            />
          )}
          {showTrigger && (
            <>
              <Separator
                orientation="vertical"
                className="mx-2 h-4 data-vertical:self-center"
              />
              <InputGroupButton
                size="icon-xs"
                variant="ghost"
                asChild
                data-slot="input-group-button"
                className="size-5 min-w-0 [&_svg]:size-4 data-pressed:bg-transparent"
                disabled={disabled}
              >
                <ComboboxTrigger />
              </InputGroupButton>
            </>
          )}
        </InputGroupAddon>
      )}
      {children}
    </InputGroup>
  )
}

function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  collisionAvoidance,
  collisionPadding,
  collisionBoundary,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    | "side"
    | "align"
    | "sideOffset"
    | "alignOffset"
    | "anchor"
    | "collisionAvoidance"
    | "collisionPadding"
    | "collisionBoundary"
  >) {
  const resolvedBoundary =
    collisionBoundary ??
    (typeof document !== "undefined" ? document.documentElement : undefined)
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        collisionAvoidance={collisionAvoidance}
        collisionPadding={collisionPadding}
        collisionBoundary={resolvedBoundary}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn("group/combobox-content relative max-h-[min(15rem,var(--available-height,15rem))] w-(--anchor-width) min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) overflow-hidden rounded-[4px] border border-secondary bg-white text-foreground shadow-md duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "max-h-[min(15rem,calc(var(--available-height)-0.5rem))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex h-[34px] w-full cursor-default items-center gap-2 rounded-[4px] pr-8 pl-2.5 text-xs text-foreground outline-hidden select-none data-highlighted:bg-primary-light [&[data-selected]]:bg-primary [&[data-selected]]:text-white [&[data-selected]]:font-medium data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="text-white pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn(
        "px-2 pt-2 pb-1 text-[10px] tracking-wide text-gray-light uppercase",
        className
      )}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function ComboboxChips({
  className,
  size = "default",
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props & { size?: ComboboxSize }) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      data-size={size}
      className={cn(
        "flex flex-nowrap items-center gap-1 rounded-sm border border-border bg-white bg-clip-padding px-2.5 py-1 transition-colors hover:border-secondary focus-within:border-primary has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:focus-within:border-destructive has-data-[slot=combobox-chip]:px-2.5 dark:bg-white",
        COMBOBOX_CHIPS_SIZE[size],
        className
      )}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "flex h-6 w-fit items-center justify-center gap-1 rounded-xs bg-chip-background px-2 text-xs font-medium whitespace-nowrap text-secondary-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-1",
        className
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={
            <Button
              variant="ghost"
              size="icon"
              className="size-4 min-w-0 rounded-sm shadow-none [&_svg]:size-3"
            />
          }
          className="-mr-0.5 hover:bg-destructive-medium"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="pointer-events-none text-secondary-foreground" strokeWidth={3} />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn("min-w-16 flex-1 outline-none", className)}
      {...props}
    />
  )
}



export type ComboboxFieldOption = {
  label: string
  value: string
  disabled?: boolean
}

// Base UI's Combobox.Root has a complex generic that conditionally types
// `value`/`defaultValue`/`onValueChange` based on the `multiple` prop. From a
// wrapper we already enforce correctness via our own discriminated props, so
// loosen the inner type here to avoid duplicated overloads.
const ComboboxAny = Combobox as unknown as React.ComponentType<
  Record<string, unknown> & { children?: React.ReactNode }
>

function ComboboxActions({
  disabled,
  showClear = true,
  showTrigger = true,
  endIcon,
}: {
  disabled?: boolean
  showClear?: boolean
  showTrigger?: boolean
  endIcon?: React.ReactNode
}) {
  if (!showClear && !showTrigger && !endIcon) return null
  return (
    <div className="ml-auto flex shrink-0 items-center gap-0 self-center">
      {endIcon && (
        <span className="flex items-center text-muted-foreground [&>svg]:size-4">
          {endIcon}
        </span>
      )}
      {showClear && (
        <ComboboxClear
          disabled={disabled}
          className="size-5 min-w-0 [&_svg]:size-3.5"
        />
      )}
      {showTrigger && (
        <>
          {showClear && (
            <Separator
              orientation="vertical"
              className="mx-2 h-4 data-vertical:self-center"
            />
          )}
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            asChild
            className="size-5 min-w-0 [&_svg]:size-4 data-pressed:bg-transparent"
            disabled={disabled}
          >
            <ComboboxTrigger />
          </InputGroupButton>
        </>
      )}
    </div>
  )
}

type ComboboxFieldCommonProps = {
  placeholder?: string
  emptyMessage?: string
  disabled?: boolean
  id?: string
  name?: string
  className?: string
  size?: ComboboxSize
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  showTrigger?: boolean
  showClear?: boolean
  "aria-invalid"?: boolean | "true" | "false"
}

export type ComboboxFieldGroup = {
  label: string
  items: ComboboxFieldOption[]
}

type ComboboxFieldItems = ComboboxFieldOption[] | ComboboxFieldGroup[]

function isGroupedItems(
  items: ComboboxFieldItems
): items is ComboboxFieldGroup[] {
  return (
    items.length > 0 &&
    typeof (items[0] as ComboboxFieldGroup).label === "string" &&
    Array.isArray((items[0] as ComboboxFieldGroup).items)
  )
}

function renderItemsList(items: ComboboxFieldItems): React.ReactNode {
  if (isGroupedItems(items)) {
    return (
      <ComboboxList>
        <ComboboxCollection>
          {(group: ComboboxFieldGroup) => (
            <ComboboxGroup key={group.label} items={group.items}>
              <ComboboxLabel>{group.label}</ComboboxLabel>
              <ComboboxCollection>
                {(opt: ComboboxFieldOption) => (
                  <ComboboxItem
                    key={opt.value}
                    value={opt}
                    disabled={opt.disabled}
                  >
                    {opt.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxCollection>
      </ComboboxList>
    )
  }
  return (
    <ComboboxList>
      {(opt: ComboboxFieldOption) => (
        <ComboboxItem key={opt.value} value={opt} disabled={opt.disabled}>
          {opt.label}
        </ComboboxItem>
      )}
    </ComboboxList>
  )
}

type ComboboxFieldProps =
  | (ComboboxFieldCommonProps & {
      items: ComboboxFieldItems
      multiple?: false
      value?: ComboboxFieldOption | null
      defaultValue?: ComboboxFieldOption | null
      onValueChange?: (value: ComboboxFieldOption | null) => void
    })
  | (ComboboxFieldCommonProps & {
      items: ComboboxFieldItems
      multiple: true
      value?: ComboboxFieldOption[]
      defaultValue?: ComboboxFieldOption[]
      onValueChange?: (value: ComboboxFieldOption[]) => void
    })

function ComboboxField(props: ComboboxFieldProps) {
  const {
    items,
    placeholder = "Seleccionar...",
    emptyMessage = "Sin resultados.",
    disabled,
    id,
    name,
    className,
    size = "default",
    startIcon,
    endIcon,
    showTrigger = true,
    showClear = true,
    "aria-invalid": ariaInvalid,
  } = props

  const wrapperRef = React.useRef<HTMLDivElement>(null)

  const itemToStringLabel = (o: ComboboxFieldOption) => o.label

  const list = renderItemsList(items)

  if (props.multiple) {
    return (
      <ComboboxAny
        items={items}
        itemToStringLabel={itemToStringLabel}
        multiple
        value={props.value}
        defaultValue={props.defaultValue}
        onValueChange={props.onValueChange}
        name={name}
        disabled={disabled}
      >
        <ComboboxChips ref={wrapperRef} size={size} className={className}>
          {startIcon && (
            <span className="flex shrink-0 items-center text-muted-foreground [&>svg]:size-4">
              {startIcon}
            </span>
          )}
          <div className="flex min-w-0 flex-1 flex-wrap content-center items-center gap-1 self-stretch overflow-y-auto has-data-[slot=combobox-chip]:content-start">
            <ComboboxValue>
              {(values: ComboboxFieldOption[]) => (
                <>
                  {values.map((opt) => (
                    <ComboboxChip key={opt.value}>{opt.label}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput
                    id={id}
                    placeholder={values.length === 0 ? placeholder : ""}
                    aria-invalid={ariaInvalid}
                    disabled={disabled}
                  />
                </>
              )}
            </ComboboxValue>
          </div>
          <ComboboxActions
            disabled={disabled}
            showClear={showClear}
            showTrigger={showTrigger}
            endIcon={endIcon}
          />
        </ComboboxChips>
        <ComboboxContent anchor={wrapperRef}>
          <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
          {list}
        </ComboboxContent>
      </ComboboxAny>
    )
  }

  return (
    <ComboboxAny
      items={items}
      itemToStringLabel={itemToStringLabel}
      value={props.value}
      defaultValue={props.defaultValue}
      onValueChange={props.onValueChange}
      name={name}
      disabled={disabled}
    >
      <ComboboxInput
        wrapperRef={wrapperRef}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        showTrigger={showTrigger}
        showClear={showClear}
        className={className}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={ariaInvalid}
      />
      <ComboboxContent anchor={wrapperRef}>
        <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
        {list}
      </ComboboxContent>
    </ComboboxAny>
  )
}

type AsyncComboboxFieldCommonProps = {
  loadOptions: (query: string) => Promise<ComboboxFieldOption[]>
  placeholder?: string
  emptyMessage?: string
  loadingMessage?: string
  promptMessage?: string
  debounceMs?: number
  disabled?: boolean
  id?: string
  name?: string
  className?: string
  size?: ComboboxSize
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  showTrigger?: boolean
  showClear?: boolean
  "aria-invalid"?: boolean | "true" | "false"
}

type AsyncComboboxFieldProps =
  | (AsyncComboboxFieldCommonProps & {
      multiple?: false
      value?: ComboboxFieldOption | null
      defaultValue?: ComboboxFieldOption | null
      onValueChange?: (value: ComboboxFieldOption | null) => void
    })
  | (AsyncComboboxFieldCommonProps & {
      multiple: true
      value?: ComboboxFieldOption[]
      defaultValue?: ComboboxFieldOption[]
      onValueChange?: (value: ComboboxFieldOption[]) => void
    })

function AsyncComboboxField(props: AsyncComboboxFieldProps) {
  const {
    loadOptions,
    placeholder = "Buscar...",
    emptyMessage = "Sin resultados.",
    loadingMessage = "Buscando...",
    promptMessage = "Escribe para buscar.",
    debounceMs = 300,
    disabled,
    id,
    name,
    className,
    size = "default",
    startIcon,
    endIcon,
    showTrigger = true,
    showClear = true,
    "aria-invalid": ariaInvalid,
  } = props

  const wrapperRef = React.useRef<HTMLDivElement>(null)

  const isMultiple = props.multiple === true
  const isControlled = props.value !== undefined

  const [internalValue, setInternalValue] = React.useState<
    ComboboxFieldOption | ComboboxFieldOption[] | null
  >(() =>
    isMultiple
      ? (props as Extract<AsyncComboboxFieldProps, { multiple: true }>)
          .defaultValue ?? []
      : (props as Extract<AsyncComboboxFieldProps, { multiple?: false }>)
          .defaultValue ?? null
  )

  const selected = isControlled
    ? (props.value as ComboboxFieldOption | ComboboxFieldOption[] | null)
    : internalValue

  const handleValueChange = (next: unknown) => {
    if (!isControlled) {
      setInternalValue(
        next as ComboboxFieldOption | ComboboxFieldOption[] | null
      )
    }
    if (isMultiple) {
      ;(
        props as Extract<AsyncComboboxFieldProps, { multiple: true }>
      ).onValueChange?.((next as ComboboxFieldOption[]) ?? [])
    } else {
      ;(
        props as Extract<AsyncComboboxFieldProps, { multiple?: false }>
      ).onValueChange?.((next as ComboboxFieldOption | null) ?? null)
    }
  }

  const [searchValue, setSearchValue] = React.useState("")
  const [results, setResults] = React.useState<ComboboxFieldOption[]>([])
  const [isLoading, setIsLoading] = React.useState(false)

  const abortRef = React.useRef<AbortController | null>(null)
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasLoadedRef = React.useRef(false)
  const loadOptionsRef = React.useRef(loadOptions)
  React.useEffect(() => {
    loadOptionsRef.current = loadOptions
  })

  React.useEffect(() => {
    return () => {
      abortRef.current?.abort()
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  const handleOpenChange = (open: boolean) => {
    if (!open || hasLoadedRef.current) return
    hasLoadedRef.current = true
    abortRef.current?.abort()
    const ctrl = new AbortController()
    abortRef.current = ctrl
    setIsLoading(true)
    ;(async () => {
      try {
        const data = await loadOptionsRef.current("")
        if (ctrl.signal.aborted) return
        setResults(data)
      } catch {
        if (!ctrl.signal.aborted) setResults([])
      } finally {
        if (!ctrl.signal.aborted) setIsLoading(false)
      }
    })()
  }

  const selectedList = React.useMemo<ComboboxFieldOption[]>(() => {
    if (!selected) return []
    return Array.isArray(selected) ? selected : [selected]
  }, [selected])

  const items = React.useMemo(() => {
    if (selectedList.length === 0) return results
    const merged = [...results]
    for (const s of selectedList) {
      if (!merged.some((r) => r.value === s.value)) merged.push(s)
    }
    return merged
  }, [results, selectedList])

  const trimmed = searchValue.trim()

  const handleInputValueChange = (
    next: string,
    info: { reason?: string }
  ) => {
    setSearchValue(next)

    abortRef.current?.abort()
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (info.reason === "item-press") return

    setIsLoading(true)
    debounceRef.current = setTimeout(() => {
      const ctrl = new AbortController()
      abortRef.current = ctrl
      ;(async () => {
        try {
          const data = await loadOptionsRef.current(next)
          if (ctrl.signal.aborted) return
          setResults(data)
        } catch {
          if (!ctrl.signal.aborted) setResults([])
        } finally {
          if (!ctrl.signal.aborted) setIsLoading(false)
        }
      })()
    }, debounceMs)
  }

  const status = isLoading ? (
    <div className="flex items-center justify-center gap-2 px-2 py-2 text-xs text-muted-foreground">
      <Loader2 className="size-3.5 animate-spin" />
      {loadingMessage}
    </div>
  ) : trimmed === "" && results.length === 0 ? (
    <div className="px-2 py-2 text-center text-xs text-muted-foreground">
      {promptMessage}
    </div>
  ) : null

  const list = (
    <ComboboxList>
      {(opt: ComboboxFieldOption) => (
        <ComboboxItem key={opt.value} value={opt} disabled={opt.disabled}>
          {opt.label}
        </ComboboxItem>
      )}
    </ComboboxList>
  )

  if (isMultiple) {
    return (
      <ComboboxAny
        items={items}
        itemToStringLabel={(o: ComboboxFieldOption) => o.label}
        multiple
        filter={null}
        value={selected as ComboboxFieldOption[]}
        onValueChange={handleValueChange}
        onInputValueChange={handleInputValueChange}
        onOpenChange={handleOpenChange}
        name={name}
        disabled={disabled}
      >
        <ComboboxChips ref={wrapperRef} size={size} className={className}>
          {startIcon && (
            <span className="flex shrink-0 items-center text-muted-foreground [&>svg]:size-4">
              {startIcon}
            </span>
          )}
          <div className="flex min-w-0 flex-1 flex-wrap content-center items-center gap-1 self-stretch overflow-y-auto has-data-[slot=combobox-chip]:content-start">
            <ComboboxValue>
              {(values: ComboboxFieldOption[]) => (
                <>
                  {values.map((opt) => (
                    <ComboboxChip key={opt.value}>{opt.label}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput
                    id={id}
                    placeholder={values.length === 0 ? placeholder : ""}
                    aria-invalid={ariaInvalid}
                    disabled={disabled}
                  />
                </>
              )}
            </ComboboxValue>
          </div>
          <ComboboxActions
            disabled={disabled}
            showClear={showClear}
            showTrigger={showTrigger}
            endIcon={endIcon}
          />
        </ComboboxChips>
        <ComboboxContent anchor={wrapperRef}>
          {status}
          {!isLoading && trimmed !== "" && (
            <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
          )}
          {list}
        </ComboboxContent>
      </ComboboxAny>
    )
  }

  return (
    <ComboboxAny
      items={items}
      itemToStringLabel={(o: ComboboxFieldOption) => o.label}
      filter={null}
      value={selected as ComboboxFieldOption | null}
      onValueChange={handleValueChange}
      onInputValueChange={handleInputValueChange}
      onOpenChange={handleOpenChange}
      name={name}
      disabled={disabled}
    >
      <ComboboxInput
        wrapperRef={wrapperRef}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        showTrigger={showTrigger}
        showClear={showClear}
        className={className}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={ariaInvalid}
      />
      <ComboboxContent anchor={wrapperRef}>
        {status}
        {!isLoading && trimmed !== "" && (
          <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
        )}
        {list}
      </ComboboxContent>
    </ComboboxAny>
  )
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxField,
  AsyncComboboxField,
}
