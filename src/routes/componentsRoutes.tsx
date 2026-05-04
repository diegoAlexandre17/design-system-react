import type { ReactNode } from 'react'
import AvatarPage from '@/pages/AvatarPage'
import TextPage from '@/pages/TextPage'
import TablePage from '@/pages/TablePage'
import ModalPage from '@/pages/ModalPage'

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
    label: 'Base components',
    items: [
      {
        path: 'avatar',
        label: 'Avatars',
        element: <AvatarPage />,
      },
      {
        path: 'text',
        label: 'Text',
        element: <TextPage />,
      },
      {
        path: 'table',
        label: 'Table',
        element: <TablePage />,
      },
      {
        path: 'modal',
        label: 'Modal',
        element: <ModalPage />,
      },
    ],
  },
]

/** Flat list of all component routes — use this with React Router's <Route> */
export const componentsRoutes: ComponentRoute[] = componentsSections.flatMap(
  (section) => section.items
)
