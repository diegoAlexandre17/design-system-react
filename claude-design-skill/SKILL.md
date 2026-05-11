---
name: claude-design
description: Self-contained design-system kit for Claude. Paste into any Claude conversation to give it the full token palette, SVG icons, icon system, layout shell, and component vocabulary without needing to upload any files.
---

# Claude Design Skill — MyIntelli Design System

> Snapshot date: 2026-05-08

---

## When to use

Load this skill whenever you need Claude to:

- Generate UI components that match the MyIntelli design system.
- Use the correct CSS token names instead of raw hex colors.
- Render one of the 7 custom SVG icons without looking them up.
- Understand the AppLayout shell (topbar + sidebar + main) before scaffolding a new screen.
- Follow the Persons-page pattern for data-heavy screens (header strip → charts → DataTable).

---

## What's in the box

1. Visual Foundations — full CSS token palette (light + dark)
2. Typography — Geist (headings) + Lato (body)
3. Custom SVGs — 7 icons, inline raw markup
4. Icon system — `IconWrapper` / `Icon` snippet + size table
5. Layout shell — `AppLayout` sidebar + topbar structure
6. Component vocabulary — Button, Badge, Card, Input, DataTable one-liners
7. Persons-page recipe — end-to-end screen pattern
8. Anti-patterns

---

## Working rules

### Always

- Use CSS token names (`text-primary`, `bg-working-bg`) — never raw hex.
- Import SVGs with the `?react` suffix: `import UsersIcon from "@/assets/icons-svg/users.svg?react"`.
- Route every custom SVG through `<Icon icon={...} />` — never render `<svg>` directly in JSX.
- Match existing Tailwind utility patterns from the project (see Component vocabulary).
- Keep business logic out of `src/components/ui/` — that folder is primitives only.

### Never

- Add inline `style={{ color: "#2585f4" }}` — use `className="text-primary"`.
- Hardcode sizes in pixels — use `IconSize` values (`size="lg"`) or Tailwind text classes.
- Create new color variables — extend `STATUS_TOKENS` pattern if new statuses are needed.
- Mix `echarts-for-react` and `apexcharts` in the same chart — pick one per chart type.

### When you need an icon

1. Check `src/assets/icons-svg/` first (7 custom SVGs listed below).
2. If not found there, use `lucide-react` — it's already installed.
3. Always wrap with `<Icon icon={...} size="..." />`.

### When the user wants a new screen — Persons-page recipe

```
src/pages/MyFeature/
├── MyFeaturePage.tsx   ← header strip (Breadcrumb + ButtonGroup tabs)
├── MyFeatureCharts.tsx ← IconsChartCard + PieChart/RingsChart grid
└── MyFeatureTable.tsx  ← DataTable inside a Card, with Combobox filters
```

Header strip pattern:
```tsx
<div className={`h-15 bg-white flex items-center justify-between gap-4 rounded-lg ${paddingHeaderBreadcrumbs}`}>
  <Breadcrumb variant="primary">…</Breadcrumb>
  <ButtonGroup>
    <Button variant="tab" className="h-10 px-6 bg-primary font-semibold text-white border-primary rounded-s-[5px] shadow-none">
      <UserIcon /> Tab 1
    </Button>
    <Button variant="tab" className="h-10 px-6 bg-white font-semibold text-primary border-primary rounded-e-[5px] shadow-none">
      <BriefcaseIcon /> Tab 2
    </Button>
  </ButtonGroup>
</div>
```

---

## Visual Foundations — CSS Tokens

```css
/* ============================================================
   src/App.css — @layer theme (verbatim snapshot 2026-05-08)
   ============================================================ */

@layer theme {
  :root {
    /* Light theme */
    --background: #e9f3fe;
    --background-gray: #eff6fe;
    --foreground: #5d5d5d;
    --card: #ffffff;
    --card-foreground: #0a0a0a;
    --popover: #ffffff;
    --popover-foreground: #0a0a0a;
    --primary: #2585f4;
    --primary-light: #ecf4fe;
    --primary-foreground: #fafafa;
    --secondary: #a7a7a7;
    --secondary-light: #dfdfdf;
    --secondary-foreground: #171717;
    --muted: #f5f5f5;
    --muted-foreground: #737373;
    --accent: #f5f5f5;
    --accent-foreground: #171717;
    --destructive: #fd5656;
    --destructive-light: #ffdddd;
    --destructive-medium: #FFBDAD;
    --destructive-foreground: #fafafa;
    --success: #5fc85f;
    --success-light: #DFF4DF;
    --working: #5ec85e;
    --working-bg: #5ec85e33;
    --absent: #fd5656;
    --absent-bg: #fd565633;
    --permit: #fc9245;
    --permit-bg: #fc924533;
    --worked: #5d5d5d;
    --worked-bg: #5d5d5d33;
    --green: #53C18A;
    --success-foreground: #fafafa;
    --warning: #fc9245;
    --warning-light: #ffefe3;
    --warning-foreground: #fafafa;
    --border: #e5e5e5;
    --input: #e5e5e5;
    --ring: #0a0a0a;
    --chip-background: #E6E6E6;
    --black-light: #333;
    --gray-medium: #808080;
    --gray-light: #999999;
    --radius: 0.5rem;
    --chart-1: #e76e50;
    --chart-2: #2a9d90;
    --chart-3: #274754;
    --success-badge: #EFF9EF;
    --warning-badge: #FEFAE6;
    --error-badge: #FFEEEE;
    --info-badge: #EDF7F9;
    --orange-badge: #FFF0EC;
    --cyan-badge: #E9FCFC;
    --sky-badge: #DDF0FF;
    --neutral-badge: #E8EBF2;
    --blue-badge: #E5F0FE;
    --indigo-badge: #EFF1FA;
    --mint-badge: #DFF4DF;
    --rose-badge: #FFEBEB;
    --purple-badge: #B66DFF;
    --success-badge-text: #5EC85E;
    --warning-badge-text: #F1CC05;
    --error-badge-text: #FD5656;
    --info-badge-text: #33B7C9;
    --orange-badge-text: #FF885C;
    --cyan-badge-text: #00D7D7;
    --sky-badge-text: #55ADFF;
    --neutral-badge-text: #5C6696;
    --blue-badge-text: #2485F4;
    --indigo-badge-text: #6176CE;
    --purple-badge-text: #B66DFF;
  }

  .dark {
    --background: #0a0a0a;
    --foreground: #fafafa;
    --card: #0a0a0a;
    --card-foreground: #fafafa;
    --popover: #0a0a0a;
    --popover-foreground: #fafafa;
    --primary: #1d6cc6;
    --primary-light: #ecf4fe;
    --primary-foreground: #fafafa;
    --secondary: #a7a7a7;
    --secondary-foreground: #fafafa;
    --muted: #262626;
    --muted-foreground: #a3a3a3;
    --accent: #262626;
    --accent-foreground: #fafafa;
    --destructive: #fd5656;
    --destructive-foreground: #fafafa;
    --success: #1b9849;
    --working: #5ec85e;
    --working-bg: #5ec85e33;
    --absent: #fd5656;
    --absent-bg: #fd565633;
    --permit: #fc9245;
    --permit-bg: #fc924533;
    --worked: #5d5d5d;
    --worked-bg: #5d5d5d33;
    --success-foreground: #fafafa;
    --warning: #f37216;
    --warning-foreground: #171717;
    --border: #262626;
    --input: #262626;
    --ring: #D4D4D4;
    --gray-light: #999999;
    --chart-1: #2662D9;
    --chart-2: #2EB88A;
    --chart-3: #E88C30;
    --chart-4: #AF57DB;
    --chart-5: #E23670;
  }
}
```

---

## Typography

- **Headings / UI labels**: Geist Variable (`@fontsource-variable/geist`) — applied via `font-[Geist]` or Tailwind's default sans stack after the import.
- **Body / paragraphs**: Lato — `font-family: "Lato", sans-serif` on `body` in `src/App.css`.

---

## Custom SVGs

All 7 custom SVG icons from `src/assets/icons-svg/`. Inline markup is verbatim.

### star-regular.svg — viewBox="0 0 576 512"

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"/></svg>
```

### star-solid.svg — viewBox="0 0 576 512"

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
```

### trash-regular.svg — viewBox="0 0 448 512"

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432,80.1c4.7,0,8.5,1.5,11.5,4.5c3,3,4.5,6.8,4.5,11.5v16c0,4.7-1.5,8.5-4.5,11.5c-3,3-6.8,4.5-11.5,4.5h-16l-21,339.6 c-0.7,12.7-5.7,23.4-15,32.1c-9.3,8.7-20.3,13-33,13H101c-12.7,0-23.7-4.3-33-13c-9.3-8.7-14.3-19.4-15-32.1L32,128.2H16 c-4.7,0-8.5-1.5-11.5-4.5c-3-3-4.5-6.8-4.5-11.5v-16c0-4.7,1.5-8.5,4.5-11.5c3-3,6.8-4.5,11.5-4.5h82L132,23c4-6,10-11.4,18-16 c8-4.7,16-7,24-7h100c5.3,0,10.7,1,16,3c5.3,2,10.3,4.8,15,8.5c4.7,3.7,8.3,7.5,11,11.5l34,57.1H432z M174,48.1l-20,32.1h140 l-20-32.1H174z M347,464.8l21-336.6H80l21,336.6H347z"/></svg>
```

### trash-solid.svg — viewBox="0 0 448 512"

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg>
```

### user-clock.svg — viewBox="0 0 511 414"

```svg
<svg viewBox="0 0 511 414" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M396.025 181.125C332.469 181.125 281.05 233.198 281.05 297.562C281.05 361.927 332.469 414 396.025 414C459.581 414 511 361.927 511 297.562C511 233.198 459.581 181.125 396.025 181.125ZM447.125 302.657C447.125 306.942 443.612 310.5 439.38 310.5H390.995C386.763 310.5 383.25 306.942 383.25 302.657V240.718C383.25 236.433 386.763 232.875 390.995 232.875H401.055C405.287 232.875 408.8 236.433 408.8 240.718V284.625H439.38C443.612 284.625 447.125 288.183 447.125 292.468V302.657ZM255.5 297.562C255.5 275.084 260.85 253.818 270.032 234.896C263.644 233.684 257.097 232.875 250.39 232.875H237.056C219.331 241.123 199.609 245.812 178.85 245.812C158.091 245.812 138.449 241.123 120.644 232.875H107.31C48.0659 232.875 0 281.552 0 341.55V375.188C0 396.615 17.1664 414 38.325 414H315.463C279.293 388.206 255.5 345.674 255.5 297.562ZM178.85 207C235.3 207 281.05 160.668 281.05 103.5C281.05 46.3324 235.3 0 178.85 0C122.4 0 76.65 46.3324 76.65 103.5C76.65 160.668 122.4 207 178.85 207Z" />
</svg>
```

### users-slash.svg — viewBox="0 0 497 385"

```svg
<svg viewBox="0 0 497 385" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M103.05 159.639L28.1116 103.618C26.0009 108.948 24.8962 114.603 24.85 120.311C24.8138 129.128 27.2873 137.784 31.999 145.328C36.7107 152.873 43.4784 159.014 51.5587 163.078C59.6391 167.142 68.7196 168.971 77.8032 168.364C86.8868 167.757 95.6221 164.739 103.05 159.639ZM134.423 206.487C125.123 197.516 112.527 192.485 99.4 192.5H49.7C36.525 192.52 23.8956 197.597 14.5795 206.618C5.26337 215.639 0.0205378 227.868 0 240.626V264.689C0 271.071 2.61812 277.191 7.2784 281.704C11.9387 286.216 18.2594 288.752 24.85 288.752H76.0255C78.3891 271.557 84.9096 255.146 95.0568 240.851C105.204 226.557 118.692 214.783 134.423 206.487ZM422.45 168.437C432.28 168.437 441.889 165.615 450.062 160.326C458.235 155.038 464.605 147.522 468.367 138.728C472.128 129.934 473.113 120.258 471.195 110.922C469.277 101.587 464.544 93.0118 457.593 86.2812C450.643 79.5507 441.787 74.9672 432.146 73.1103C422.505 71.2533 412.512 72.2064 403.431 75.8489C394.349 79.4914 386.587 85.6598 381.126 93.5741C375.665 101.488 372.75 110.793 372.75 120.311C372.771 133.069 378.013 145.298 387.329 154.319C396.646 163.34 409.275 168.417 422.45 168.437ZM388.747 267.02C382.77 254.277 373.667 243.141 362.23 234.583C350.793 226.025 337.37 220.303 323.128 217.916L280.339 185.883C312.566 173.626 335.475 143.848 335.475 108.28C335.485 97.2172 333.243 86.2611 328.875 76.0385C324.508 65.816 318.102 56.5277 310.023 48.7052C301.945 40.8827 292.353 34.6794 281.796 30.4505C271.239 26.2215 259.925 24.0499 248.5 24.0598C204.158 24.0598 167.97 56.2439 162.612 97.8276L35.3336 2.55355C34.0449 1.57776 32.5698 0.858006 30.9931 0.435606C29.4164 0.0132046 27.7691 -0.103532 26.1456 0.0920943C24.5222 0.287721 22.9547 0.791859 21.533 1.57558C20.1113 2.3593 18.8634 3.40717 17.8609 4.65905L2.64031 23.6838C0.629463 26.1994 -0.270669 29.3838 0.136813 32.5404C0.544295 35.697 2.22622 38.5689 4.81469 40.5278L461.666 382.446C462.955 383.422 464.43 384.142 466.007 384.564C467.584 384.987 469.231 385.104 470.854 384.908C472.478 384.712 474.045 384.208 475.467 383.424C476.889 382.641 478.137 381.593 479.139 380.341L494.36 361.316C495.367 360.068 496.111 358.64 496.547 357.113C496.983 355.586 497.104 353.991 496.902 352.419C496.7 350.847 496.179 349.329 495.37 347.953C494.56 346.576 493.478 345.368 492.185 344.397L388.747 267.02ZM99.4 303.189V324.846C99.4 334.419 103.327 343.599 110.318 350.368C117.308 357.137 126.789 360.94 136.675 360.94H360.325C363.638 360.892 366.929 360.411 370.11 359.511L180.163 217.39C134.889 221.676 99.4 258.222 99.4 303.189ZM447.3 192.5H397.6C384.473 192.485 371.877 197.516 362.577 206.487C378.306 214.778 391.788 226.552 401.923 240.848C412.058 255.145 418.56 271.559 420.897 288.752H472.15C478.741 288.752 485.061 286.216 489.722 281.704C494.382 277.191 497 271.071 497 264.689V240.626C496.979 227.868 491.737 215.639 482.421 206.618C473.104 197.597 460.475 192.52 447.3 192.5Z"/>
</svg>
```

### users.svg — viewBox="0 0 497 334"

```svg
<svg viewBox="0 0 497 334" xmlns="http://www.w3.org/2000/svg">
<path d="M74.55 143.143C101.963 143.143 124.25 121.746 124.25 95.4286C124.25 69.1112 101.963 47.7143 74.55 47.7143C47.1373 47.7143 24.85 69.1112 24.85 95.4286C24.85 121.746 47.1373 143.143 74.55 143.143ZM422.45 143.143C449.863 143.143 472.15 121.746 472.15 95.4286C472.15 69.1112 449.863 47.7143 422.45 47.7143C395.037 47.7143 372.75 69.1112 372.75 95.4286C372.75 121.746 395.037 143.143 422.45 143.143ZM447.3 167H397.6C383.933 167 371.585 172.293 362.577 180.867C393.873 197.343 416.082 227.09 420.897 262.429H472.15C485.895 262.429 497 251.767 497 238.571V214.714C497 188.397 474.713 167 447.3 167ZM248.5 167C296.569 167 335.475 129.649 335.475 83.5C335.475 37.3513 296.569 0 248.5 0C200.431 0 161.525 37.3513 161.525 83.5C161.525 129.649 200.431 167 248.5 167ZM308.14 190.857H301.695C285.542 198.313 267.603 202.786 248.5 202.786C229.397 202.786 211.536 198.313 195.305 190.857H188.86C139.471 190.857 99.4 229.327 99.4 276.743V298.214C99.4 317.971 116.096 334 136.675 334H360.325C380.904 334 397.6 317.971 397.6 298.214V276.743C397.6 229.327 357.529 190.857 308.14 190.857ZM134.423 180.867C125.415 172.293 113.068 167 99.4 167H49.7C22.2873 167 0 188.397 0 214.714V238.571C0 251.767 11.1048 262.429 24.85 262.429H76.0255C80.9178 227.09 103.128 197.343 134.423 180.867Z"/>
</svg>
```

---

## Icon system — IconWrapper

```tsx
// src/components/icons/IconWrapper.tsx (key excerpt)
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"

export function Icon({ icon: SvgComponent, size = "md", className, ...props }: IconProps) {
  return (
    <SvgComponent
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      className={cn("inline-block shrink-0", SIZE_CLASSES[size], className)}
      {...props}
    />
  )
}
```

| Size | Tailwind | Approx |
|------|----------|--------|
| `xs` | `text-xs` | 12px |
| `sm` | `text-sm` | 14px |
| `md` | `text-base` | 16px |
| `lg` | `text-lg` | 18px |
| `xl` | `text-xl` | 20px |
| `2xl` | `text-2xl` | 24px |
| `3xl` | `text-3xl` | 30px |
| `4xl` | `text-4xl` | 36px |
| `5xl` | `text-5xl` | 48px |

---

## Layout shell — AppLayout

```
┌─────────────────────────────────────────┐
│  header  h-14  border-b  bg-white       │ ← topbar (logo + hamburger)
├──────────┬──────────────────────────────┤
│  w-52    │  flex-1  overflow-auto       │
│  sidebar │  <Outlet />                  │
└──────────┴──────────────────────────────┘
```

- Sidebar is a fixed drawer on mobile (`< lg`), static in-flow on desktop.
- Use `<Outlet />` from React Router — `AppLayout` is a layout route.

---

## Component vocabulary

| Component | Import | Quick usage |
|-----------|--------|-------------|
| `Button` | `@/components/ui/button` | `<Button variant="default" size="default">Label</Button>` |
| `Badge` | `@/components/ui/badge` | `<Badge variant="success">Active</Badge>` |
| `Card` | `@/components/ui/card` | `<Card size="sm"><CardHeader>…</CardHeader><CardContent>…</CardContent></Card>` |
| `Input` | `@/components/ui/input` | `<Input size="md" placeholder="…" />` |
| `DataTable` | `@/components/common/DataTable` | `<DataTable columns={cols} data={rows} />` |
| `ActionTableIcon` | `@/components/common/ActionTableIcon` | `<ActionTableIcon icon={TrashRegularIcon} iconSolid={TrashSolidIcon} tooltip="Delete" />` |
| `EmployeeStatusCard` | `@/components/common/EmployeeStatusCard` | `<EmployeeStatusCard name="John Doe" status="working" data={{clockin:"08:00"}} />` |
| `Icon` | `@/components/icons/IconWrapper` | `<Icon icon={UsersIcon} size="lg" className="text-primary" />` |

---

## Caveats

- This file is a **dated snapshot** (2026-05-08). If tokens change in `src/App.css`, re-run the SDD change `docs-migration-and-claude-design-kit` to refresh.
- The `claude-design-skill/colors.css` file is the canonical CSS-only version — use it when you need to paste tokens into a CSS file rather than a conversation.
- `src/components/icons-components/` is intentionally excluded — those components are not part of the current design system contract.
