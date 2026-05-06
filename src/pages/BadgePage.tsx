import { Badge } from "@/components/ui/badge"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"

export default function BadgePage() {
  return (
    <ShowcasePage title="Badge" description="Badges Calendarios - Tablas">
      <ShowcaseSection>
        <div className="flex flex-col items-center gap-3">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="orange">Superada</Badge>
          <Badge variant="cyan">Sin Iniciar</Badge>
          <Badge variant="sky">Sin Publicar</Badge>
          <Badge variant="neutral">Finalizado</Badge>
        </div>
      </ShowcaseSection>
      <ShowcaseSection title="Badges Solicitudes - Tablas">
        <div className="flex flex-col items-center gap-3">
          <Badge variant="blue">En Petición</Badge>
          <Badge variant="error">Incompleta</Badge>
          <Badge variant="info">Completa</Badge>
          <Badge variant="orange">Superada</Badge>
          <Badge variant="cyan">Sin Iniciar</Badge>
          <Badge variant="sky">Sin Publicar</Badge>
          <Badge variant="neutral">Finalizado</Badge>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
