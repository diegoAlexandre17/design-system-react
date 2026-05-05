import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange, type Locale } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  date?: Date
  onSelect?: (date: Date | undefined) => void
  numberOfMonths?: number
  disabled?: React.ComponentProps<typeof Calendar>["disabled"]
  locale?: Locale
}

export function DatePicker({ date, onSelect, numberOfMonths = 1, disabled, locale }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          {date ? format(date, "PPP", { locale }) : <span>Pick a date</span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
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
}

export function DateRangePicker({ range, onSelect, numberOfMonths = 2, locale }: DateRangePickerProps) {
  const label = range?.from
    ? range.to
      ? `${format(range.from, "LLL dd, y", { locale })} – ${format(range.to, "LLL dd, y", { locale })}`
      : format(range.from, "LLL dd, y", { locale })
    : "Pick a date range"

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!range?.from}
          className="w-[280px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          <span>{label}</span>
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
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
