import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  IconTileCard,
  type IconTileCardVariant,
} from "@/components/ui/icon-tile-card"
import { StatusTile, STATUS_KEYS } from "@/components/common/StatusTile"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"
import { Square } from "lucide-react"

const STATUS_COUNTS: Partial<Record<(typeof STATUS_KEYS)[number], number>> = {
  tardanzas: 3,
  ausencias: 1,
  permisos: 4,
  tiempoLibre: 2,
  fueraGeocerca: 7,
  horasExtras: 12,
}

const allVariants: IconTileCardVariant[] = [
  "info",
  "success",
  "warning",
  "error",
  "orange",
  "cyan",
  "sky",
  "neutral",
  "blue",
  "indigo",
  "purple",
  "tangerine",
  "mustard",
  "forest",
  "slate",
  "violet",
  "teal",
]

export default function CarouselPage() {
  return (
    <ShowcasePage
      title="Carousel"
      description="Carrusel deslizable basado en Embla. Útil para listar elementos con flechas de navegación cuando no entran en una sola fila."
      wide
    >
      <ShowcaseSection
        title="Status tiles (novedades)"
        description="Caso real: 11 statuses del dominio renderizados con StatusTile. El componente conoce el mapping status→variant+icon+label internamente."
      >
        <div className="px-12">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {STATUS_KEYS.map((status) => (
                <CarouselItem key={status} className="basis-auto">
                  <StatusTile
                    status={status}
                    count={STATUS_COUNTS[status]}
                    onClick={() => {}}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="IconTileCard (todas las variantes)"
        description="Demo del primitive con sus 17 variantes de color. StatusTile es solo un wrapper que elige una de estas."
      >
        <div className="px-12">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {allVariants.map((variant) => (
                <CarouselItem key={variant} className="basis-auto">
                  <IconTileCard
                    variant={variant}
                    icon={<Square />}
                    label={variant}
                    onClick={() => {}}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
