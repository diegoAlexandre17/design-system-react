import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import UsersIcon from "@/assets/icons-svg/users.svg?react";
import UserClockIcon from "@/assets/icons-svg/user-clock.svg?react";
import UserDashedIcon from "@/assets/icons-svg/user-dashed-solid.svg?react";
import { Icon } from "@/components/icons/IconWrapper";
import PersonCharts from "./PersonCharts";
import PersonTable from "./PersonTable";
import { paddingHeaderBreadcrumbs } from "@/constants/styles/styles";

const PersonsPage = () => {
  return (
    <div className="bg-background w-full h-full p-2.5 flex flex-col gap-2">
      <div className={`h-15 bg-white flex items-center justify-between gap-4 rounded-lg ${paddingHeaderBreadcrumbs}`}>
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
            className="h-10 w-[148px] px-6 bg-primary font-semibold text-white border-primary rounded-s-[5px] shadow-none"
          >
            <Icon icon={UsersIcon} size='lg' />
            Activos
          </Button>
          <Button
            variant="tab"
            className="h-10 w-[148px] px-6 bg-white font-semibold text-primary border-primary shadow-none"
          >
            <Icon icon={UserClockIcon} size='lg' />
            Pendientes
          </Button>
          <Button
            variant="tab"
            className="h-10 w-[148px] px-6 bg-white font-semibold text-primary border-primary rounded-e-[5px] shadow-none"
          >
            <Icon icon={UserDashedIcon} size='lg' />
            Inactivos
          </Button>
        </ButtonGroup>
      </div>

      <PersonCharts />

      <PersonTable />
    </div>
  );
};

export default PersonsPage;
