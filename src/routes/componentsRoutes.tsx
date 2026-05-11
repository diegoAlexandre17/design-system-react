import type { ReactNode } from "react"
import AvatarPage from "@/pages/AvatarPage"
import InputPage from "@/pages/InputPage"
import InputPhonePage from "@/pages/InputPhonePage"
import CheckBoxPage from "@/pages/CheckBoxPage"
import TooltipPage from "@/pages/TooltipPage"
import SwitchPage from "@/pages/SwitchPage"
import SelectPage from "@/pages/SelectPage"
import ComboboxPage from "@/pages/ComboboxPage"
import TextPage from "@/pages/TextPage"
import TablePage from "@/pages/TablePage"
import ModalPage from "@/pages/ModalPage"
import ButtonsPage from "@/pages/ButtonsPage"
import CardPage from "@/pages/CardPage"
import CarouselPage from "@/pages/CarouselPage"
import BreadcrumbPage from "@/pages/BreadcrumbPage"
import IconsPage from "@/pages/IconsPage"
import ChartsPage from "@/pages/ChartsPage"
import ChartsIconPage from "@/pages/ChartsIconPage"
import BadgePage from "@/pages/BadgePage"
import PersonsPage from "@/pages/Persons/PersonsPage"
import ColorsPage from "@/pages/ColorsPage"
import ActionTableIconPage from "@/pages/ActionTableIconPage"
import DatepickerPage from "@/pages/DatepickerPage"

export interface ComponentRoute {
  path: string
  label: string
  element: ReactNode
}

export interface ComponentSection {
  label: string
  items: ComponentRoute[]
}

export const componentsSections: ComponentSection[] = [
  {
    label: "Base components",
    items: [
      {
        path: "avatar",
        label: "Avatars",
        element: <AvatarPage />,
      },
      {
        path: "tooltip",
        label: "Tooltip",
        element: <TooltipPage />,
      },
      {
        path: "input",
        label: "Input",
        element: <InputPage />,
      },
      {
        path: "input-phone",
        label: "Input Phone",
        element: <InputPhonePage />,
      },
      {
        path: "checkbox",
        label: "Checkbox",
        element: <CheckBoxPage />,
      },
      {
        path: "switch",
        label: "Switch",
        element: <SwitchPage />,
      },
      {
        path: "select",
        label: "Selects",
        element: <SelectPage />,
      },
      {
        path: "combobox",
        label: "Combobox",
        element: <ComboboxPage />,
      },
      {
        path: "text",
        label: "Text",
        element: <TextPage />,
      },
      {
        path: "table",
        label: "Table",
        element: <TablePage />,
      },
      {
        path: "modal",
        label: "Modal",
        element: <ModalPage />,
      },
      {
        path: "buttons",
        label: "Buttons",
        element: <ButtonsPage />,
      },
      {
        path: "card",
        label: "Card",
        element: <CardPage />,
      },
      {
        path: "carousel",
        label: "Carousel",
        element: <CarouselPage />,
      },
      {
        path: "breadcrumb",
        label: "Breadcrumb",
        element: <BreadcrumbPage />,
      },
      {
        path: "badge",
        label: "Badges",
        element: <BadgePage />,
      },
      {
        path: "charts",
        label: "Charts",
        element: <ChartsPage />,
      },
      {
        path: "colors",
        label: "Colors",
        element: <ColorsPage />,
      },
      {
        path: "icon",
        label: "Icons",
        element: <IconsPage />,
      },
      {
        path: "action-table-icon",
        label: "Table Action Icon",
        element: <ActionTableIconPage />,
      },
      {
        path: "charts-icons",
        label: "Charts Icons",
        element: <ChartsIconPage />,
      },
      {
        path: "datepicker",
        label: "Datepicker",
        element: <DatepickerPage />,
      },
    ],
  },
  {
    label: "Pages",
    items: [
      {
        path: "persons",
        label: "Persons",
        element: <PersonsPage />,
      },
    ],
  },
]

/** Flat list of all component routes — use this with React Router's <Route> */
export const componentsRoutes: ComponentRoute[] = componentsSections.flatMap(
  (section) => section.items,
)
