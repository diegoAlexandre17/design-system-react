import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { BriefcaseIcon, UserIcon } from "lucide-react";
import PersonCharts from "./PersonCharts";
import PersonTable from "./PersonTable";

const PersonsPage = () => {
  return (
    <div className="bg-background w-full h-full p-2.5 flex flex-col gap-2.5">
      <div className="h-15 bg-white flex items-center justify-between gap-4 rounded-lg px-3 py-2.5">
        <div className="flex items-center gap-3">
          <Breadcrumb variant="primary">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Empleados</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ButtonGroup>
          <Button
            variant="tab"
            className="h-10 px-6 bg-primary font-semibold text-white border-primary rounded-s-[5px] shadow-none"
          >
            <UserIcon />
            Datos personales
          </Button>
          <Button
            variant="tab"
            className="h-10 px-6 bg-white font-semibold text-primary border-primary rounded-e-[5px] shadow-none"
          >
            <BriefcaseIcon />
            Datos laborales
          </Button>
        </ButtonGroup>
      </div>

      <PersonCharts />

      <PersonTable />
    </div>
  );
};

export default PersonsPage;
