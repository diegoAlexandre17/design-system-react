# Proposal: Docs Migration & Claude Design Kit

## Intent

The design-system docs are out of sync with the real code: root `/CLAUDE_DESIGN.md` is a stale monolithic dump that diverges from the clean index in `docs/CLAUDE_DESIGN.md`, `docs/Icons.md` documents the wrong icon system, three real components and eight semantic tokens are undocumented, and there is no portable kit a teammate can drop into another repo to bootstrap Claude Code with this design system. This change closes those gaps in two reviewable parts.

## Scope

### In Scope

**Part 1 — Migration & audit**
- Replace root `/CLAUDE_DESIGN.md` with the clean index from `docs/CLAUDE_DESIGN.md` (links rewritten with `docs/` prefix — 28 links).
- Rewrite `docs/Icons.md` to document the REAL icon system: `IconWrapper.tsx` (`Icon` component, `size` prop xs→5xl, em-based scaling), the 7 SVGs in `src/assets/icons-svg/`, and the `?react` import pattern shown in `src/pages/IconsPage.tsx`.
- Add `docs/ActionTableIcon.md`, `docs/EmployeeStatusCard.md`, `docs/AppLayout.md`.
- Update `docs/Tokens.md` with the 8 missing semantic tokens (`--working`, `--working-bg`, `--absent`, `--absent-bg`, `--permit`, `--permit-bg`, `--worked`, `--worked-bg`).
- Update `docs/CLAUDE_DESIGN.md` index to link the 3 new component docs.

**Part 2 — Claude Design Kit**
- Create `CLAUDE_DESIGN_KIT.md` at repo root: single self-contained markdown that bootstraps Claude Code in another project. Includes: full CSS tokens block (light + dark), inline SVG paths for the 7 icons, `IconWrapper` snippet, atomic-design + shadcn conventions, and an end-to-end "Persons page" recipe (charts + DataTable).

### Out of Scope

- Refactoring or renaming any component in `src/`.
- Auto-generating docs from source (still hand-authored).
- Touching `src/components/icons-components/` (per user clarification, that directory is ignored).
- Storybook, Chromatic, or any new tooling.
- Translating docs to other languages.

## Capabilities

### New Capabilities

None. This change is documentation-only — no runtime behavior or product capability is introduced.

### Modified Capabilities

None. No `openspec/specs/` exists yet and no product spec changes.

## Approach

1. **Audit-then-write**: read each target source (`IconWrapper.tsx`, `ActionTableIcon.tsx`, `EmployeeStatusCard.tsx`, `AppLayout.tsx`, `App.css` token block) and author docs from real code, not from memory.
2. **Index-first migration**: copy `docs/CLAUDE_DESIGN.md` to `/CLAUDE_DESIGN.md`, then rewrite the 28 relative links by prefixing `docs/`. Do NOT merge the stale root file — replace it cleanly.
3. **Kit as snapshot**: `CLAUDE_DESIGN_KIT.md` is a frozen snapshot at the moment of creation; it duplicates content intentionally so it works in another repo without `docs/`.
4. **Two PRs**: ship Part 1 (migration + audit) before Part 2 (kit) so the kit can quote the corrected docs.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `/CLAUDE_DESIGN.md` | Replaced | Stale monolithic file replaced by clean index with `docs/`-prefixed links |
| `docs/CLAUDE_DESIGN.md` | Modified | Add entries for ActionTableIcon, EmployeeStatusCard, AppLayout |
| `docs/Icons.md` | Rewritten | Document real `Icon`/`IconWrapper` system + `src/assets/icons-svg/` |
| `docs/Tokens.md` | Modified | Add 8 semantic tokens (working/absent/permit/worked + `-bg` variants) |
| `docs/ActionTableIcon.md` | New | Tooltip + loading icon button |
| `docs/EmployeeStatusCard.md` | New | Employee card with status/devices |
| `docs/AppLayout.md` | New | Sidebar + topbar shell layout |
| `/CLAUDE_DESIGN_KIT.md` | New | Self-contained portable kit |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Broken links after migration | Med | Grep for each linked filename after rewrite; verify in PR review |
| Kit drifts from `docs/` over time | High | Add note in kit header stating it is a snapshot dated YYYY-MM-DD; refresh on demand |
| Icon docs misrepresent `size` prop scaling | Low | Quote actual code from `IconWrapper.tsx` verbatim |
| Token list misses a future token | Med | Document the audit method so next maintainer can re-run it |

## Rollback Plan

Pure docs change, no runtime impact. To revert: `git revert` the merge commit(s). No data migration, no deploy coordination, no feature flags. Each PR can be reverted independently — Part 2 has no runtime dependency on Part 1.

## Dependencies

- Read access to `src/App.css`, `src/components/icons/IconWrapper.tsx`, `src/assets/icons-svg/`, `src/components/common/*`, `src/layouts/AppLayout.tsx`, `src/pages/Persons/*`. All in-repo, no external dependencies.

## Success Criteria

- [ ] Root `/CLAUDE_DESIGN.md` matches `docs/CLAUDE_DESIGN.md` content with `docs/`-prefixed links; all 28 links resolve.
- [ ] `docs/Icons.md` documents `Icon`/`IconWrapper` with `size` table and 7 SVG entries; `src/components/icons-components/` is NOT mentioned.
- [ ] `docs/Tokens.md` lists all 8 new semantic tokens with light + dark values.
- [ ] Three new docs exist and are linked from `docs/CLAUDE_DESIGN.md`.
- [ ] `CLAUDE_DESIGN_KIT.md` is self-contained — pasting it into a fresh repo gives Claude Code enough context to scaffold a Persons-style page without reading anything else.

## Delivery Plan

- **PR 1 — Migration & audit**: root `CLAUDE_DESIGN.md` replacement + `docs/Icons.md` rewrite + `docs/Tokens.md` update + 3 new component docs + index update. Estimated ~500 changed lines (mostly new content).
- **PR 2 — Claude Design Kit**: single new `CLAUDE_DESIGN_KIT.md`. Estimated ~400 lines.

400-line budget risk: Medium for PR 1. If forecast exceeds during tasks phase, split PR 1 into 1a (root + index + Icons.md) and 1b (Tokens + 3 new component docs).
