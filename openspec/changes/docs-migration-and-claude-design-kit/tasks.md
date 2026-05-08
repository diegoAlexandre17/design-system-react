# Tasks: Docs Migration & Claude Design Kit

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~900 total (PR1 ≈ 500, PR2 ≈ 400) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (docs migration) → PR 2 (claude-design-skill) |
| Delivery strategy | single-pr (user accepted 2-PR split) |
| Chain strategy | stacked-to-main |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Migrate + audit all existing docs | PR 1 | Independent, revertable |
| 2 | Create claude-design-skill folder | PR 2 | Targets main; standalone |

---

## PR 1 — Migration & Audit

### Phase 1: Root Index

- [ ] 1.1 Replace `/CLAUDE_DESIGN.md` — copy `docs/CLAUDE_DESIGN.md`, rewrite all `](Name.md)` links to `](docs/Name.md)`, add 3 new entries (ActionTableIcon, EmployeeStatusCard, AppLayout), add `## Layouts` section.

### Phase 2: Update `docs/CLAUDE_DESIGN.md`

- [ ] 2.1 Add `ActionTableIcon` entry under Componentes Compuestos.
- [ ] 2.2 Add `EmployeeStatusCard` entry under Componentes Compuestos.
- [ ] 2.3 Add new `## Layouts` section with `AppLayout` link.

### Phase 3: Rewrite `docs/Icons.md`

- [ ] 3.1 Replace content: document `IconWrapper` (`src/components/icons/IconWrapper.tsx`) — `Icon` component, `IconProps` interface, `IconSize` type, size table (`xs`→`5xl` mapped to Tailwind text class).
- [ ] 3.2 Add import pattern: `import MyIcon from "@/assets/icons-svg/name.svg?react"`.
- [ ] 3.3 Add 7-row SVG reference table: file name | import alias | viewBox | description. Files: `star-regular`, `star-solid`, `trash-regular`, `trash-solid`, `user-clock`, `users-slash`, `users`.
- [ ] 3.4 Add usage example with `ActionTableIcon` + star pair.
- [ ] 3.5 Add example page ref: `src/pages/IconsPage.tsx`.

### Phase 4: Update `docs/Tokens.md`

- [ ] 4.1 Add 8 missing semantic tokens to the `:root` block: `--working`, `--working-bg`, `--absent`, `--absent-bg`, `--permit`, `--permit-bg`, `--worked`, `--worked-bg` (values from `src/App.css` lines 105-112).
- [ ] 4.2 Add same 8 tokens to the `.dark` block (values from `src/App.css` lines 174-181).
- [ ] 4.3 Add corresponding `@theme inline` mappings: `--color-working`, `--color-working-bg`, `--color-absent`, `--color-absent-bg`, `--color-permit`, `--color-permit-bg`, `--color-worked`, `--color-worked-bg`.

### Phase 5: Create `docs/ActionTableIcon.md`

- [ ] 5.1 Create file — source path blockquote (`src/components/common/ActionTableIcon.tsx`), props list (`icon`, `iconSolid?`, `tooltip`, `disabled?`, `loading?`, `className?`, `onClick?`), hover-swap pattern note, tsx example, page ref.

### Phase 6: Create `docs/EmployeeStatusCard.md`

- [ ] 6.1 Create file — source path blockquote, `EmployeeStatus` values (`working | worked | absent | permit`), props list, `STATUS_TOKENS` note, `ROW_CONFIG` keys (`clockin | clockout | planned | hours | location`), `DEVICE_CONFIG` keys (`faceMobile | proximityBiometric | fingerprintBiometric`), tsx example, tokens used (`--working`, `--absent`, `--permit`, `--worked` + `-bg` variants).

### Phase 7: Create `docs/AppLayout.md`

- [ ] 7.1 Create file — source path blockquote (`src/layouts/AppLayout.tsx`), shell structure (topbar `h-14` + sidebar `w-52` + `<main>`), responsive behavior (drawer on mobile, static on `lg+`), tsx import example, key class tokens.

---

## PR 2 — Claude Design Skill

### Phase 8: Create `claude-design-skill/SKILL.md`

- [ ] 8.1 Add frontmatter: `name: myintelli-design-system` + `description:` (one-liner matching DS-Library-Team-v1 style).
- [ ] 8.2 Add `## When to use` section — triggers: new screens, marketing, component match, Spanish SaaS.
- [ ] 8.3 Add `## What's in the box` — list: SKILL.md, colors.css, README.md with roles.
- [ ] 8.4 Add `## Working rules / Always` — link colors.css first, use Lato, write Spanish (Latin-American), reuse component shapes, mirror Persons-page recipe.
- [ ] 8.5 Add `## Working rules / Never` — no second font/icon-set, no gradients/glassmorphism, no card shadows, no English UI text, no emoji as status.
- [ ] 8.6 Add `## Working rules / When you need an icon` — lucide-react default; for custom SVGs use `IconWrapper` + import `?react`; inline SVG for external prototypes.
- [ ] 8.7 Add `## Working rules / When the user wants a new screen` — Persons-page recipe: shell → header strip (`h-15`, white, `rounded-lg`) → 24-col chart grid → DataTable card.
- [ ] 8.8 Embed inline CSS tokens block — verbatim light+dark `@layer theme` from `src/App.css` lines 80-194 (all 8 semantic status tokens included).
- [ ] 8.9 Embed inline SVG paths — 7 SVGs from `src/assets/icons-svg/`: star-regular, star-solid, trash-regular, trash-solid, user-clock, users-slash, users (raw `<svg>` markup verbatim).
- [ ] 8.10 Add `## Caveats` — Geist is imported but Lato is the brand font; ApexCharts tooltip reset in App.css; `IconWrapper` uses `1em × 1em` + `fill="currentColor"`.

### Phase 9: Create `claude-design-skill/colors.css`

- [ ] 9.1 Create file — verbatim CSS custom properties from `src/App.css`: `@layer theme { :root { … } .dark { … } }`. Include all tokens (surfaces, primary, secondary, status, badge-bg, badge-text, chart, radius). Add file header comment crediting source.

### Phase 10: Create `claude-design-skill/README.md`

- [ ] 10.1 Create file — one-sentence description, table of contents (SKILL.md, colors.css, README.md), how to upload to Claude Design API, how to use as copy-paste prompt prefix.

---

## Verification Checklist (post-apply)

- [ ] V1 Grep `\](.*\.md)` on `/CLAUDE_DESIGN.md` — all links start with `docs/` or are absolute.
- [ ] V2 `test -f` each linked `.md` in root index — all 31+ resolve.
- [ ] V3 `grep -c -- '--working' docs/Tokens.md` ≥ 2 (light + dark blocks).
- [ ] V4 Diff inline SVG blocks in `claude-design-skill/SKILL.md` against `src/assets/icons-svg/*.svg` — no drift.
- [ ] V5 `claude-design-skill/colors.css` is verbatim match of `src/App.css` `:root` + `.dark` sections.
