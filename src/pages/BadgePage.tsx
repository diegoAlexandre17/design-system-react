import { Badge } from "@/components/ui/badge"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"

//TODO - Cambiar los nombres por los genericos, y agregar una sección de "status" o "estado" para mostrar los diferentes estados de un proceso, como "en progreso", "completado", "pendiente", etc.

export default function BadgePage() {
  return (
    <ShowcasePage title="Badge" description="Badges Calendarios - Tablas">
      <ShowcaseSection>
        <div className="flex flex-col items-center gap-3">
          <Badge variant="published">Publicada</Badge>
          <Badge variant="pending">Cambios Sin Publicar</Badge>
          <Badge variant="incomplete">Incompleta</Badge>
          <Badge variant="complete">Completa</Badge>
          <Badge variant="surpassed">Superada</Badge>
          <Badge variant="notStarted">Sin Iniciar</Badge>
          <Badge variant="unpublished">Sin Publicar</Badge>
          <Badge variant="finalized">Finalizado</Badge>
        </div>
      </ShowcaseSection>
      <ShowcaseSection title="Badges Solicitudes - Tablas">
        <div className="flex flex-col items-center gap-3">
          <Badge variant="petition">En Petición</Badge>
          <Badge variant="incomplete">Incompleta</Badge>
          <Badge variant="complete">Completa</Badge>
          <Badge variant="surpassed">Superada</Badge>
          <Badge variant="notStarted">Sin Iniciar</Badge>
          <Badge variant="unpublished">Sin Publicar</Badge>
          <Badge variant="finalized">Finalizado</Badge>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
