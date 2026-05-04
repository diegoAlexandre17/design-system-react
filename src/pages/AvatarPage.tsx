import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
} from "@/components/ui/avatar"
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page"

export default function AvatarPage() {
  return (
    <ShowcasePage
      title="Avatar"
      description="An image element with a fallback for representing the user."
    >
      <ShowcaseSection
        title="Profile"
        description="profile (125px) — ideal para páginas de perfil de usuario"
      >
        <div className="flex items-end gap-6">
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
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="sm · default · lg">
        <div className="flex items-end gap-4">
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
      </ShowcaseSection>

      <ShowcaseSection title="Extra Sizes" description="xl (56px) · xxl (80px)">
        <div className="flex items-end gap-4">
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
      </ShowcaseSection>

      <ShowcaseSection
        title="Fallback"
        description="When the image fails to load, the fallback initials are shown."
      >
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="broken" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Badge">
        <div className="flex items-center gap-4">
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
      </ShowcaseSection>

      <ShowcaseSection
        title="With Border"
        description="Border ring-primary aplicado al grupo vía className"
      >
        <div className="flex items-center gap-4">
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
      </ShowcaseSection>

      <ShowcaseSection title="Group">
        <div>
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
