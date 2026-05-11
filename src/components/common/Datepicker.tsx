import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange, type Locale } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DatePickerProps {
  date?: Date
  onSelect?: (date: Date | undefined) => void
  numberOfMonths?: number
  disabled?: React.ComponentProps<typeof Calendar>["disabled"]
  locale?: Locale
  className?: string
}

export function DatePicker({ date, onSelect, numberOfMonths = 1, disabled, locale, className }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (!val) {
      onSelect?.(undefined)
      return
    }
    const parsed = new Date(`${val}T12:00:00`)
    if (!isNaN(parsed.getTime())) {
      onSelect?.(parsed)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex h-8.5 items-center rounded-sm border border-secondary cursor-pointer bg-white transition-colors hover:border-primary has-focus:border-primary",
            className,
          )}
        >
          <input
            type="date"
            value={date ? format(date, "yyyy-MM-dd") : ""}
            onChange={handleInputChange}
            onClick={(e) => e.stopPropagation()}
            onFocus={() => setOpen(true)}
            className="min-w-0 cursor-pointer flex-1 bg-transparent px-2.5 py-1 text-sm font-medium leading-5 tracking-tight text-foreground outline-none [&::-webkit-calendar-picker-indicator]:hidden"
          />
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" side="bottom">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            onSelect?.(selectedDate)
            setOpen(false)
          }}
          defaultMonth={date}
          numberOfMonths={numberOfMonths}
          disabled={disabled}
          locale={locale}
        />
      </PopoverContent>
    </Popover>
  )
}

interface DateRangePickerProps {
  range?: DateRange
  onSelect?: (range: DateRange | undefined) => void
  numberOfMonths?: number
  locale?: Locale
  className?: string
}

export function DateRangePicker({ range, onSelect, numberOfMonths = 2, locale, className }: DateRangePickerProps) {
  const label = range?.from
    ? range.to
      ? `${format(range.from, "LLL dd, y", { locale })} – ${format(range.to, "LLL dd, y", { locale })}`
      : format(range.from, "LLL dd, y", { locale })
    : ""

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          role="button"
          tabIndex={0}
          className={cn(
            "flex h-8.5 w-[280px] cursor-pointer items-center gap-1.5 rounded-sm border border-secondary bg-white px-2.5 py-1 text-sm transition-colors hover:border-primary focus-visible:border-primary focus-visible:outline-none",
            className,
          )}
        >
          <input
            readOnly
            tabIndex={-1}
            value={label}
            placeholder="Pick a date range"
            onMouseDown={(e) => e.preventDefault()}
            className="min-w-0 flex-1 cursor-pointer bg-transparent text-sm font-medium leading-5 tracking-tight text-foreground placeholder:text-muted-foreground outline-none"
          />
          <CalendarIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" side="bottom">
        <Calendar
          mode="range"
          selected={range}
          onSelect={(selectedRange) => {
            onSelect?.(selectedRange)
          }}
          defaultMonth={range?.from}
          numberOfMonths={numberOfMonths}
          locale={locale}
        />
      </PopoverContent>
    </Popover>
  )
}