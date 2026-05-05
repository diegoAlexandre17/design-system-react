import * as React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { type DateRange } from "react-day-picker";
import { DatePicker, DateRangePicker } from "@/components/common/Datepicker";
import { Label } from "@/components/ui/label";

const DatepickerPage = () => {
  const [date, setDate] = React.useState<Date | undefined>();
  const [dateEs, setDateEs] = React.useState<Date | undefined>();
  const [range2months, setRange2months] = React.useState<
    DateRange | undefined
  >();
  const [range1month, setRange1month] = React.useState<DateRange | undefined>();
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();

  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Datepicker</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Displays a datepicker component for selecting dates.
        </p>
      </div>

      {/* Basic */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Basic
        </h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <DatePicker date={date} onSelect={setDate} />
        </div>
        <p className="text-sm text-muted-foreground">
          Selected:{" "}
          {date ? format(date, "PPP") : <span className="italic">none</span>}
        </p>
      </section>

      {/* Spanish locale */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Español
        </h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <DatePicker date={dateEs} onSelect={setDateEs} locale={es} />
        </div>
        <p className="text-sm text-muted-foreground">
          Seleccionado:{" "}
          {dateEs ? (
            format(dateEs, "PPP", { locale: es })
          ) : (
            <span className="italic">ninguno</span>
          )}
        </p>
      </section>

      {/* Range */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Range with 2 months
        </h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <DateRangePicker range={range2months} onSelect={setRange2months} />
        </div>
        <p className="text-sm text-muted-foreground">
          Selected:{" "}
          {range2months?.from ? (
            range2months.to ? (
              `${format(range2months.from, "LLL dd, y")} – ${format(range2months.to, "LLL dd, y")}`
            ) : (
              format(range2months.from, "LLL dd, y")
            )
          ) : (
            <span className="italic">none</span>
          )}
        </p>
      </section>

      {/* Range single month */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Range with 1 month
        </h2>
        <div className="flex flex-wrap items-center gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <DateRangePicker
            range={range1month}
            onSelect={setRange1month}
            numberOfMonths={1}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Selected:{" "}
          {range1month?.from ? (
            range1month.to ? (
              `${format(range1month.from, "LLL dd, y")} – ${format(range1month.to, "LLL dd, y")}`
            ) : (
              format(range1month.from, "LLL dd, y")
            )
          ) : (
            <span className="italic">none</span>
          )}
        </p>
      </section>

      {/* Start & End date selects */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Start & End date
        </h2>
        <div className="flex flex-wrap items-end gap-3 p-6 rounded-xl border border-border bg-muted/30">
          <div className="flex flex-col gap-1">
            <Label>Start date</Label>
            <DatePicker
              date={startDate}
              onSelect={(d) => {
                setStartDate(d);
                if (endDate && d && endDate < d) setEndDate(undefined);
              }}
              disabled={endDate ? { after: endDate } : undefined}
            />
          </div>
          <div className="flex flex-col gap-1">
            {/* <span className="text-xs text-muted-foreground">End date</span> */}
            <Label>End date</Label>
            <DatePicker
              date={endDate}
              onSelect={setEndDate}
              disabled={startDate ? { before: startDate } : undefined}
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Selected:{" "}
          {startDate || endDate ? (
            `${startDate ? format(startDate, "LLL dd, y") : "—"} → ${endDate ? format(endDate, "LLL dd, y") : "—"}`
          ) : (
            <span className="italic">none</span>
          )}
        </p>
      </section>
    </div>
  );
};

export default DatepickerPage;
