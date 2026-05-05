import type { ReactNode } from "react"
import AvatarPage from "@/pages/AvatarPage"
import InputPage from "@/pages/InputPage"
import InputPhonePage from "@/pages/InputPhonePage"
import CheckBoxPage from "@/pages/CheckBoxPage"
import TooltipPage from "@/pages/TooltipPage"
import SwitchPage from "@/pages/SwitchPage"
import SelectPage from "@/pages/SelectPage"
import TextPage from "@/pages/TextPage"
import TablePage from "@/pages/TablePage"
import ModalPage from "@/pages/ModalPage"
import ButtonsPage from "@/pages/ButtonsPage"
import CardPage from "@/pages/CardPage"
import BreadcrumbPage from "@/pages/BreadcrumbPage"
import BadgePage from "@/pages/BadgePage"
import ChartsPage from "@/pages/ChartsPage"

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
    ],
  },
]

/** Flat list of all component routes — use this with React Router's <Route> */
export const componentsRoutes: ComponentRoute[] = componentsSections.flatMap(
  (section) => section.items,
)
