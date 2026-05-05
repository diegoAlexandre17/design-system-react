import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
} from "@/components/ui/avatar"

export default function AvatarPage() {
  return (
    <div className="p-8 max-w-3xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Avatar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      {/* Profile */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Profile
        </h2>
        <div className="flex items-end gap-6 p-6 rounded-xl border border-border bg-muted/30">
          <Avatar size="profile">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <Avatar size="profile">
            <AvatarFallback>DG</AvatarFallback>
            <AvatarBadge />
          </Avatar>
        </div>
        <p className="text-xs text-muted-foreground">
          profile (125px) — ideal para páginas de perfil de usuario
        </p>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Sizes
        </h2>
        <div className="flex items-end gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-xs text-muted-foreground">sm · default · lg</p>
      </section>

      {/* Extra sizes */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Extra Sizes
        </h2>
        <div className="flex items-end gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <Avatar size="xl">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar size="xxl">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
          <Avatar size="xxl">
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-xs text-muted-foreground">xl (56px) · xxl (80px)</p>
      </section>

      {/* Fallback */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Fallback
        </h2>
        <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="broken" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-xs text-muted-foreground">
          When the image fails to load, the fallback initials are shown.
        </p>
      </section>

      {/* With Badge */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          With Badge
        </h2>
        <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <Avatar size="sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <Avatar size="default">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge />
          </Avatar>
        </div>
      </section>

      {/* With Border */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          With Border
        </h2>
        <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-muted/30">
          <AvatarGroup className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-primary">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>DG</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>+2</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>
        <p className="text-xs text-muted-foreground">
          Border <code>ring-primary</code> aplicado al grupo vía{" "}
          <code>className</code>
        </p>
      </section>

      {/* Group */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Group
        </h2>
        <div className="p-6 rounded-xl border border-border bg-muted/30">
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>DG</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>+2</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  )
}
