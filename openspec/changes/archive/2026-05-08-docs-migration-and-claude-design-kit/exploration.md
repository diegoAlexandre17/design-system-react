# Exploration: docs-migration-and-claude-design-kit

## Current State

### PART 1 — Docs Landscape

#### Root-level `CLAUDE_DESIGN.md` (already exists)
`/CLAUDE_DESIGN.md` **already exists** at the project root. It is an older, auto-generated file produced by the `design-system` skill. Its format is a single monolithic document with inline component stubs (e.g. `<avatar size="default" />` pseudo-code), token dumps, layout patterns, and raw page source code. It is **not** a clean index with relative links. It is a different document from `docs/CLAUDE_DESIGN.md`.

#### `docs/CLAUDE_DESIGN.md` — clean index
`docs/CLAUDE_DESIGN.md` is a proper navigable index with relative links (`[Avatar](Avatar.md)`, etc.). This is the one that needs to move to root and have its links updated to `docs/Avatar.md`, etc.

#### Docs coverage summary (30 component `.md` files in `docs/`)

| doc file | maps to actual file | status |
|---|---|---|
| `Avatar.md` | `src/components/ui/avatar.tsx` | ✅ exists |
| `Badge.md` | `src/components/ui/badge.tsx` | ✅ exists |
| `Breadcrumb.md` | `src/components/ui/breadcrumb.tsx` | ✅ exists |
| `Button.md` | `src/components/ui/button.tsx` | ✅ exists |
| `ButtonGroup.md` | `src/components/ui/button-group.tsx` | ✅ exists |
| `Card.md` | `src/components/ui/card.tsx` | ✅ exists |
| `Checkbox.md` | `src/components/ui/checkbox.tsx` | ✅ exists |
| `Combobox.md` | `src/components/ui/combobox.tsx` | ✅ exists |
| `Dialog.md` | `src/components/ui/dialog.tsx` | ✅ exists |
| `Field.md` | `src/components/ui/field.tsx` | ✅ exists |
| `Input.md` | `src/components/ui/input.tsx` | ✅ exists |
| `InputGroup.md` | `src/components/ui/input-group.tsx` | ✅ exists |
| `InputPhone.md` | `src/components/ui/input-phone.tsx` | ✅ exists |
| `Label.md` | `src/components/ui/label.tsx` | ✅ exists |
| `Select.md` | `src/components/ui/select.tsx` | ✅ exists |
| `Separator.md` | `src/components/ui/separator.tsx` | ✅ exists |
| `Switch.md` | `src/components/ui/switch.tsx` | ✅ exists |
| `Table.md` | `src/components/ui/table.tsx` | ✅ exists |
| `Text.md` | `src/components/ui/text.tsx` | ✅ exists |
| `Textarea.md` | `src/components/ui/textarea.tsx` | ✅ exists |
| `Tooltip.md` | `src/components/ui/tooltip.tsx` | ✅ exists |
| `DataTable.md` | `src/components/common/DataTable.tsx` | ✅ exists |
| `EmployeeNameInfo.md` | `src/components/common/EmployeeNameInfo.tsx` | ✅ exists |
| `IconsChartCard.md` | `src/components/common/charts/IconsChartCard.tsx` | ✅ exists |
| `PieChart.md` | `src/components/common/PieChart.tsx` + `PieChartApex.tsx` | ✅ exists |
| `RingsChart.md` | `src/components/common/RingsChart.tsx` + `RingsChartApex.tsx` | ✅ exists |
| `ToolbarButton.md` | `src/components/common/ToolbarButton.tsx` | ✅ exists |
| `Icons.md` | `src/components/icons/` | ⚠️ WRONG PATH (see gaps) |
| `Tokens.md` | `src/App.css` | ✅ matches |
| `Patterns.md` | layout patterns | ✅ matches |

### GAPS IDENTIFIED

#### Gap 1 — Icons.md has wrong paths (critical)
`docs/Icons.md` references:
- `src/components/icons/StarIcon.tsx` → **does NOT exist there**
- `src/components/icons/TrashIcon.tsx` → **does NOT exist there**

Actual locations:
- `src/components/icons-components/all-icons/StarIcon.tsx` (re-exports from SVG)
- `src/components/icons-components/all-icons/TrashIcon.tsx` (re-exports from SVG)
- `src/components/icons-components/all-icons/PendingIcon.tsx` (inline SVG, NOT documented)
- `src/components/icons-components/all-icons/Users.tsx` → `UsersIcon` (NOT documented)
- `src/components/icons-components/all-icons/UsersSlashIcon.tsx` (NOT documented)

Old docs/icons path `src/components/icons/` contains only the infrastructure:
- `iconDefaultProps.ts` — default fill/xmlns props
- `IconWrapper.tsx` — generic `<Icon icon={...} size="md" />` component
- `types.ts` — `SvgIconComponent` type

The `IconWrapper.tsx` / `Icon` component is NOT documented anywhere.

Raw SVG source files (in `src/assets/icons-svg/`):
- `star-solid.svg` (FontAwesome style, `viewBox="0 0 576 512"`)
- `trash-solid.svg` (FontAwesome style, `viewBox="0 0 448 512"`)
- `users.svg` (custom, `viewBox="0 0 497 334"`)
- `users-slash.svg` (custom, `viewBox="0 0 497 385"`)
- `user-clock.svg` (custom, `viewBox="0 0 511 414"`) — this IS the PendingIcon SVG

#### Gap 2 — Undocumented components (new, no docs)
These components exist in the codebase but have **no doc file** in `docs/`:

| component | file | significance |
|---|---|---|
| `ActionTableIcon` | `src/components/common/ActionTableIcon.tsx` | Icon button with tooltip + loading/disabled states; used heavily in tables |
| `EmployeeStatusCard` | `src/components/common/EmployeeStatusCard.tsx` | Full employee card with Avatar, role badges, status, devices — complex DS component |
| `IconWrapper` / `Icon` | `src/components/icons/IconWrapper.tsx` | Generic SVG icon renderer (like FontAwesome's `<Icon>`); SIZE_CLASSES system |
| `AppLayout` | `src/layouts/AppLayout.tsx` | The entire shell (sidebar+header+main scroll) — not documented |

#### Gap 3 — Undocumented pages
`src/pages/ActionTableIconPage.tsx` exists and has a route, but no mention in `docs/CLAUDE_DESIGN.md` index.

#### Gap 4 — Root CLAUDE_DESIGN.md is stale and misleading
The existing `/CLAUDE_DESIGN.md` at root is a completely different format — it's the old monolithic Claude Design auto-generated format. It contains:
- Pseudo-code component stubs (not real TSX API docs)
- Duplicate token list (copied from App.css but with minor differences)
- Raw page source code as examples
- References to `ChartsIconPage`, `ChartsPage`, `ColorsPage` as components (they're pages, not components)
- Wrong variant list for Button (duplicates "hover" entries that don't exist as named variants)
- Missing dark mode token values for several vars (`secondary-light`, `destructive-light`, etc.)

This file will be REPLACED by the migrated `docs/CLAUDE_DESIGN.md` (the clean index).

#### Gap 5 — Tokens.md missing new tokens
`App.css` has working/absent/permit/worked semantic tokens that are NOT in `docs/Tokens.md`:
```
--working: #5ec85e      --working-bg: #5ec85e33
--absent: #fd5656       --absent-bg: #fd565633
--permit: #fc9245       --permit-bg: #fc924533
--worked: #5d5d5d       --worked-bg: #5d5d5d33
```
These drive `EmployeeStatusCard`. Also missing from `CLAUDE_DESIGN.md` root.

#### Gap 6 — docs/Icons.md import path inconsistency
The IconsPage imports from `../components/icons/StarIcon` (relative path, not alias). Real export is in `icons-components/all-icons/StarIcon.tsx`. These are different directories.

---

### PART 2 — Claude Design Kit Analysis

#### Reference system structure (`DS-Library-Team-v1/`)
The reference at `/home/necrowolf/Documentos/Intellinext/systemas/DS-Library-Team-v1/` is a complete Claude Design system package with:

```
DS-Library-Team-v1/
├── README.md          ← Full skill reference (colors, type, spacing, layout rules, iconography)
├── SKILL.md           ← Front-matter skill file for Claude Code/Design
├── colors_and_type.css ← All CSS vars + @font-face (Lato) — standalone, no Tailwind needed
├── assets/            ← logo-myintelli-horizontal.png
├── fonts/             ← Lato TTFs (Thin → Black)
├── src/               ← Imported reference React/TS code (read-only)
│   ├── App.css
│   ├── components/ui/
│   ├── components/common/
│   └── pages/Persons/
├── preview/           ← HTML visual reference cards
└── ui_kits/
    └── myintelli/     ← index.html (Persons page clone) + components.jsx
```

**Key insight**: The reference system already exists and is well-structured. The Claude Design Kit deliverable for Part 2 should be a `SKILL.md`-style agent file that:
1. Points to the GitHub repo as source of truth
2. Embeds/references the CSS tokens directly (no build step needed)
3. Documents the Persons page layout recipe precisely
4. Covers all custom SVGs with their actual path data
5. Covers the Icon system (IconWrapper + icons-components)
6. Covers the new undocumented components (ActionTableIcon, EmployeeStatusCard)

**Best format decision**: A standalone `SKILL.md`-style Markdown file is the right format. The reference DS-Library already shows this works. The deliverable should be a `CLAUDE_DESIGN_KIT.md` (a new file, distinct from the index `CLAUDE_DESIGN.md`) that is self-contained enough for Claude Design to use without needing the full repo.

---

### Affected Areas

- `/CLAUDE_DESIGN.md` — REPLACE with migrated `docs/CLAUDE_DESIGN.md` content (links updated)
- `docs/CLAUDE_DESIGN.md` — source for migration; relative links need updating to `docs/` prefix
- `docs/Icons.md` — WRONG paths for StarIcon/TrashIcon; missing 3 icons (PendingIcon, UsersIcon, UsersSlashIcon); missing IconWrapper docs
- `docs/Tokens.md` — missing working/absent/permit/worked semantic token group
- New: `CLAUDE_DESIGN_KIT.md` (root) — standalone Claude Design deliverable
- New: `docs/ActionTableIcon.md` — undocumented component
- New: `docs/EmployeeStatusCard.md` — undocumented component
- New: `docs/AppLayout.md` — undocumented layout

---

### Token Count

**CSS custom properties in `src/App.css`:**
- `@theme inline` mappings: ~47 `--color-*` entries
- `:root` light theme: ~55 tokens (including badge palette)
- `.dark` theme: ~25 tokens (partial override)
- New semantic tokens in App.css not in docs: 8 (working/absent/permit/worked + bg variants)
- **Total distinct tokens: ~60** (light + overrides in dark)

### Custom SVG Icons

5 SVG files in `src/assets/icons-svg/`:
1. `star-solid.svg` — FontAwesome star (576×512 viewBox)
2. `trash-solid.svg` — FontAwesome trash (448×512 viewBox)
3. `users.svg` — Custom users group (497×334 viewBox)
4. `users-slash.svg` — Custom users-slash/disabled (497×385 viewBox)
5. `user-clock.svg` — Custom user with clock/pending (511×414 viewBox)

5 icon components in `src/components/icons-components/all-icons/`:
1. `StarIcon.tsx` — wraps star-solid.svg
2. `TrashIcon.tsx` — wraps trash-solid.svg
3. `Users.tsx` → `UsersIcon` — wraps users.svg
4. `UsersSlashIcon.tsx` — wraps users-slash.svg
5. `PendingIcon.tsx` — inline SVG (same as user-clock.svg path data)

Plus the `Icon` / `IconWrapper` component system in `src/components/icons/`.

### Claude Design Reference Structure (from DS-Library-Team-v1)

The reference uses a SKILL.md + README.md dual-file pattern:
- `SKILL.md` — front-matter with activation triggers + condensed working rules (65 lines)
- `README.md` — full reference (206 lines): content fundamentals, visual foundations, spacing, borders, radii, shadows, animation, layout rules, iconography

The kit is designed to work WITHOUT a Tailwind build step (CSS vars as plain CSS).

---

## Approaches

### Approach for PART 1 — Migration

**Single clear path** (no real tradeoff):
1. Copy `docs/CLAUDE_DESIGN.md` to root, replacing `/CLAUDE_DESIGN.md`
2. Update the 28 relative links inside from `Avatar.md` → `docs/Avatar.md`
3. Fix `docs/Icons.md`:
   - Correct import paths to `icons-components/all-icons/`
   - Add PendingIcon, UsersIcon, UsersSlashIcon
   - Add IconWrapper/Icon documentation
4. Fix `docs/Tokens.md` — add working/absent/permit/worked token group
5. Create `docs/ActionTableIcon.md`, `docs/EmployeeStatusCard.md`, `docs/AppLayout.md`
6. Update the migrated root `CLAUDE_DESIGN.md` index to include the new docs

### Approach for PART 2 — Claude Design Kit

**Option A: Single `CLAUDE_DESIGN_KIT.md`** — Self-contained, rich reference file
- Pros: easy to hand off, no dependencies, Claude Design can load it directly
- Cons: longer file (~300-400 lines)
- Effort: Medium

**Option B: Replicate DS-Library pattern (`SKILL.md` + `colors_and_type.css`)** — Two-file system
- Pros: matches proven reference structure, CSS vars work without Tailwind
- Cons: requires a separate CSS file; more complex handoff
- Effort: High

**Option C: Update DS-Library-Team-v1 directly** — Sync the existing reference
- Pros: existing Claude Design workflows already use it
- Cons: outside this project's repo; not the deliverable asked for
- Effort: Medium (but wrong scope)

**Recommendation: Option A** — A single `CLAUDE_DESIGN_KIT.md` at the root, following the DS-Library SKILL.md structure but self-contained. It should embed the full CSS token block (no import needed), all custom SVG paths verbatim, and the Persons-page layout recipe. This is the deliverable the change asks for: "a standalone `.md` deliverable that can be handed to Claude Design."

The file should NOT be a SKILL.md (that's for Claude Code agents). It should be a rich `.md` prompt/spec document structured like:
```
# myIntelli Design System — Claude Design Kit
## Activation / When to use
## Visual Foundations (tokens embedded)
## Typography & Font
## Layout Recipe (Persons page)
## Component Vocabulary (each component with props + real TSX example)
## Custom Icons (SVG paths embedded)
## Content & Copy Rules
## Anti-patterns (Never do)
```

---

## Recommendation

**PART 1**: Straightforward migration. Migrate `docs/CLAUDE_DESIGN.md` → root, fix links (28 replacements, pattern: `(Name.md)` → `(docs/Name.md)`). Audit and fix `docs/Icons.md` (wrong paths + 3 missing icons + IconWrapper undocumented). Add missing token group to `docs/Tokens.md`. Create 3 missing doc files (ActionTableIcon, EmployeeStatusCard, AppLayout). Update the root index to include new docs.

**PART 2**: Create `CLAUDE_DESIGN_KIT.md` at root — single self-contained file following the structure proven in DS-Library-Team-v1, with embedded tokens, SVG paths, Persons-page recipe, and full component vocabulary. NOT a SKILL.md (Claude Code format) — a `.md` prompt file for Claude Design.

---

## Risks

- **Risk 1** — Root `CLAUDE_DESIGN.md` replacement: the existing root file is stale/wrong format but might be referenced by external tools or CI. Replacing it (not just overwriting) is safe since `docs/CLAUDE_DESIGN.md` is the authoritative source.
- **Risk 2** — `docs/Icons.md` path corrections: the old import paths (`src/components/icons/StarIcon`) are WRONG in docs but used in older pages (`src/pages/IconsPage.tsx` uses relative `../components/icons/StarIcon` which also points wrong). The doc fix is correct; the IconsPage import path issue is a pre-existing bug NOT in scope.
- **Risk 3** — Claude Design Kit size: embedding all SVG paths + full token set + component examples may make `CLAUDE_DESIGN_KIT.md` verbose (~400+ lines). This is acceptable for a reference prompt file.
- **Risk 4** — EmployeeStatusCard undocumented complexity: this component is the most complex in the system (5 status types, 3 device types, role badge system). Documenting it accurately requires reading the source carefully — already done in exploration.

---

## Ready for Proposal

**Yes.** Scope is clear. No blockers. The change has two well-defined deliverables with known affected files and known gaps to fill.

**Tell the orchestrator:**
- PART 1 touches: root `CLAUDE_DESIGN.md` (replace), `docs/Icons.md` (fix), `docs/Tokens.md` (update), 3 new doc files
- PART 2 creates: `CLAUDE_DESIGN_KIT.md` at root
- No code changes. Documentation only.
- Estimated changed lines: ~400 (PART 1 docs fixes) + ~400 (CLAUDE_DESIGN_KIT.md) = ~800 lines total → **budget risk: Medium** (over 400-line single-PR budget if combined)
- Recommend splitting into 2 PRs: PR1 = PART 1 migration+audit, PR2 = PART 2 kit
