import IconsChartCard from "@/components/common/charts/IconsChartCard";
import { User, UserMinus, UserPlus } from "lucide-react";

const ChartsPage = () => {
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
    <div className="p-8 max-w-4xl">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <IconsChartCard data={dataFirstChart} title={"Estatus"} />
        </div>

        <div className="col-span-1">
          <IconsChartCard data={dataSecondChart} title={"Rotación"} />
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
