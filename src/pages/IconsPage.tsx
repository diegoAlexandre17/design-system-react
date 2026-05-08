import { useState } from "react";
import { Icon } from "@/components/icons/IconWrapper";
import {
  ShowcasePage,
  ShowcaseSection,
} from "@/components/component-showcase-page";
import PendingIcon from "@/assets/icons-svg/user-clock.svg?react";
import UsersSlashIcon from "@/assets/icons-svg/users-slash.svg?react";
import UsersIcon from "@/assets/icons-svg/users.svg?react";
import { Input } from "@/components/ui/input";

const ALL_ICONS = [
  { icon: UsersIcon, name: "users", label: "Users" },
  { icon: UsersSlashIcon, name: "users-slash", label: "Users Slash" },
  { icon: PendingIcon, name: "user-clock", label: "User Clock" },
];

function IconsPage() {
  const [search, setSearch] = useState("");

  const filtered = ALL_ICONS.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ShowcasePage
      title="Icons"
      description="Displays the custom SVG icons available through the shared Icon wrapper."
    >
      <ShowcaseSection
        title="IconWrapper sizes"
        description="Example using ActiveIcon with the size prop exposed by the shared Icon wrapper."
      >
        <div className="space-y-6">
          <div className="space-y-3 rounded-lg border border-border bg-card p-4">
            <p className="text-sm font-medium text-foreground">Basic usage</p>
            <pre className="overflow-x-auto rounded-md bg-background p-3 text-xs text-muted-foreground">
              <code>{`<Icon icon={ActiveIcon} size="lg" className="text-primary" />`}</code>
            </pre>
          </div>

          <Input
            placeholder="Search icons by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {filtered.length > 0 ? (
              filtered.map(({ icon, name, label }) => (
                <div
                  key={name}
                  className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-5"
                >
                  <Icon icon={icon} size="3xl" className="text-destructive" name={name} />
                  <span className="text-xs font-medium tracking-wide text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))
            ) : (
              <p className="col-span-full text-sm text-muted-foreground">
                No icons match &ldquo;{search}&rdquo;.
              </p>
            )}
          </div>
        </div>
      </ShowcaseSection>
    </ShowcasePage>
  );
}

export default IconsPage;
