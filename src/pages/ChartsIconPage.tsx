import IconsChartCard from "@/components/common/charts/IconsChartCard";
import { User, UserMinus, UserPlus } from "lucide-react";

const ChartsIconPage = () => {
  const dataFirstChart = [
    {
      icon: <User className="text-success" />,
      color: "bg-success-light",
      count: 100,
      title: "Activos",
      textColor: "text-success",
    },
    {
      icon: <UserMinus className="text-secondary" />,
      color: "bg-secondary-light",
      count: 10,
      title: "Inactivos",
      textColor: "text-secondary",
    },
  ];

  const dataSecondChart = [
    {
      icon: <UserPlus className="text-success" />, 
      color: "bg-success-light",
      count: 29,
      title: "Ingresos",
      textColor: "text-success",
    },
    {
      icon: <UserMinus className="text-destructive" />,
      color: "bg-destructive-light",
      count: 10,
      title: "Egresos",
      textColor: "text-destructive",
    },
  ];

  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Icons Chart Card</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A card component that displays a donut chart alongside icon-labeled metrics.
        </p>
      </div>

      {/* Estatus */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Estatus
        </h2>
        <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <IconsChartCard data={dataFirstChart} title={"Estatus"} />
        </div>
        <p className="text-xs text-muted-foreground">
          Activos vs. Inactivos — muestra la distribución de usuarios por estado.
        </p>
      </section>

      {/* Multiple cards */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Multiple Cards
        </h2>
        <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <IconsChartCard data={dataFirstChart} title={"Estatus"} />
          <IconsChartCard data={dataSecondChart} title={"Rotación"} />
        </div>
        <p className="text-xs text-muted-foreground">
          Varias tarjetas en fila para comparar métricas de un vistazo.
        </p>
      </section>
    </div>
  );
};

export default ChartsIconPage;
