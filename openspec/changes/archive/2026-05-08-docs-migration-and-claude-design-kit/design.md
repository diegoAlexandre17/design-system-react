# Design: Docs Migration & Claude Design Kit

## Technical Approach

Pure documentation change shipped in two PRs. PR1 migrates `docs/CLAUDE_DESIGN.md` → root with `docs/`-prefixed links, fixes `Icons.md` to match the real `IconWrapper` + `src/assets/icons-svg/` system, adds 8 missing semantic tokens to `Tokens.md`, and creates 3 missing component docs. PR2 ships a single self-contained `CLAUDE_DESIGN_KIT.md` at root, structured after `DS-Library-Team-v1/SKILL.md` + `README.md` but consolidated into one file. All authoring is hand-driven from the actual source — no auto-generation.

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|---|---|---|---|
| Root index strategy | Replace `/CLAUDE_DESIGN.md` with copy of `docs/CLAUDE_DESIGN.md` + rewritten links | Merge with stale content; symlink | Stale root file is misleading. Clean replace = single source of truth. Symlinks break on Windows + GitHub render. |
| Link rewrite mechanic | Regex transform `](Name.md)` → `](docs/Name.md)` applied only to root copy | Keep relative + move root into `docs/` | Root must stay at repo root for tooling discoverability. Prefix rule is mechanical and verifiable. |
| Icons.md scope | Document `Icon`/`IconWrapper` + 7 SVGs in `src/assets/icons-svg/` only | Also document `src/components/icons-components/` | Proposal explicitly excludes `icons-components/`. `IconsPage.tsx` imports SVGs directly with `?react`. |
| Kit format | Single `CLAUDE_DESIGN_KIT.md` (~400 lines) | Two-file SKILL.md + CSS pair | Self-contained = portable. User pastes into another repo and Claude has full context. |
| Kit SVG embedding | Inline raw SVG markup verbatim | Reference paths only | Kit must work without filesystem access; consumer copies block into `src/assets/icons-svg/`. |
| Token list source | Read `src/App.css` lines 80–194 verbatim, group by theme | Re-derive from Tailwind config | App.css is the canonical source; copy preserves comments and order. |

## Data Flow

    src/App.css ─────────────► docs/Tokens.md (full block)
                       │
                       └─────► CLAUDE_DESIGN_KIT.md (full block, snapshot)

    docs/CLAUDE_DESIGN.md ──[regex prefix `docs/`]──► /CLAUDE_DESIGN.md

    src/assets/icons-svg/*.svg ──► docs/Icons.md (table) + KIT (inline)
    src/components/icons/IconWrapper.tsx ──► docs/Icons.md (Icon section) + KIT

    src/components/common/{ActionTableIcon,EmployeeStatusCard}.tsx ──► docs/<Name>.md
    src/layouts/AppLayout.tsx ──► docs/AppLayout.md
    src/pages/Persons/* ──► CLAUDE_DESIGN_KIT.md (recipe section)

## File Changes

| File | Action | Template/Content |
|------|--------|-----------------|
| `/CLAUDE_DESIGN.md` | Replace | T1: copy `docs/CLAUDE_DESIGN.md`, prefix every `(Name.md)` with `docs/`, add links to 3 new docs |
| `docs/CLAUDE_DESIGN.md` | Modify | Add 3 lines under `## 🧩 Componentes Compuestos`: ActionTableIcon, EmployeeStatusCard. Add `## 🏗 Layouts` section with AppLayout |
| `docs/Icons.md` | Rewrite | T2: Icon component + size table + SVG table (7 rows) + import pattern + IconsPage reference |
| `docs/Tokens.md` | Modify | Insert 8 semantic tokens after `--success-foreground` line in `:root` block and `.dark` block |
| `docs/ActionTableIcon.md` | Create | T3: standard component template |
| `docs/EmployeeStatusCard.md` | Create | T3: standard component template |
| `docs/AppLayout.md` | Create | T3: standard component template |
| `/CLAUDE_DESIGN_KIT.md` | Create | T4: kit outline (10 sections) |

### Template T2 — Icons.md

```
# Icons
> `src/components/icons/IconWrapper.tsx` + `src/assets/icons-svg/`
## Icon component (IconWrapper)
- size prop table: xs→5xl mapped to text-xs→text-5xl (em-based)
- import: `import { Icon } from "@/components/icons/IconWrapper"`
- usage: `<Icon icon={MyIcon} size="lg" className="text-primary" />`
## Available SVGs
| File | Import | viewBox | Notes |
|---|---|---|---|
| star-regular.svg | `@/assets/icons-svg/star-regular.svg?react` | 0 0 576 512 | FA outline |
| star-solid.svg | … | 0 0 576 512 | FA filled |
| trash-regular.svg | … | 0 0 448 512 | FA outline |
| trash-solid.svg | … | 0 0 448 512 | FA filled |
| user-clock.svg | … | 0 0 511 414 | custom (PendingIcon) |
| users.svg | … | 0 0 497 334 | custom |
| users-slash.svg | … | 0 0 497 385 | custom |
## Example page: `src/pages/IconsPage.tsx`
```

### Template T3 — Component doc

```
# {ComponentName}
> `src/{path}/{File}.tsx`
{One-paragraph purpose}
**Props:** bullet list with type and description (read from interface)
**Tokens used:** list (only for tokenized components like EmployeeStatusCard)
**Ejemplo:** ```tsx … ```
**Página de ejemplo:** `src/pages/{...}`
```

### Template T4 — CLAUDE_DESIGN_KIT.md outline

1. Header (snapshot date, "self-contained kit")
2. When to use (activation triggers, Spanish-first product context)
3. Visual Foundations — full CSS block from App.css (light + dark)
4. Typography (Geist + Lato fallback)
5. Custom SVGs — inline `<svg>` markup × 7
6. Icon system — IconWrapper code snippet + size table
7. Layout shell — AppLayout structure (sidebar + topbar)
8. Component vocabulary — Button/Badge/Card/Input/DataTable usage one-liners
9. Persons-page recipe — full structure: header strip → 24-col chart grid → DataTable card
10. Anti-patterns (no second font, no shadows on cards, no emoji indicators)

## Interfaces / Contracts

No code interfaces. Documentation contracts:
- Every `docs/*.md` MUST start with `# Name` heading + `> source path` blockquote
- Every component doc MUST list Props from the actual TypeScript interface
- Kit MUST be standalone (no relative links into `docs/`)

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Link integrity | All 31 links in `/CLAUDE_DESIGN.md` resolve | `grep -oP '\]\([^)]+\)' /CLAUDE_DESIGN.md` then `test -f` each |
| Token completeness | All `--working/absent/permit/worked*` in `Tokens.md` | `grep -c '\-\-working' docs/Tokens.md` returns ≥2 |
| SVG fidelity | Kit SVG paths byte-equal to source | `diff <(extract-svg KIT) src/assets/icons-svg/*.svg` |
| Visual review | Component docs match real props | PR reviewer reads source + doc side by side |

## Migration / Rollout

No migration. Pure docs. PR1 merges first, PR2 second. Each `git revert`-able independently.

## Open Questions

None.
