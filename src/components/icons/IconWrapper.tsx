import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Tamaños relativos al `font-size` del contenedor (em),
 * para que el ícono escale con el texto al estilo FontAwesome.
 */
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"

const SIZE_CLASSES: Record<IconSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
}

export type SvgIconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement>
>

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "ref"> {
  /** Componente SVG a renderizar (ej: importado como ReactComponent o creado manualmente). */
  icon: SvgIconComponent
  /** Tamaño preestablecido (relativo al font-size del contenedor). */
  size?: IconSize
  /**
   * Clases extra de tailwind. Pueden sobreescribir el tamaño
   * (ej: `w-8 h-8`) o cambiar el color (`text-primary`).
   */
  className?: string
}

/**
 * Wrapper genérico para renderizar íconos SVG.
 * Inspirado en la API de <FontAwesomeIcon />.
 * El tamaño se maneja vía `font-size`, y el SVG usa `1em` x `1em`.
 *
 * @example
 * <Icon icon={MyIcon} size="lg" className="text-primary" />
 * // Tamaño custom vía clases (sobreescribe `size`):
 * <Icon icon={MyIcon} className="text-3xl text-destructive" />
 */
export function Icon({
  icon: SvgComponent,
  size = "md",
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      {...props}
      className={cn("inline-block shrink-0", SIZE_CLASSES[size], className)}
    />
  )
}

export default Icon
