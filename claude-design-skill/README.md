# claude-design-skill

Self-contained design-system kit for the MyIntelli Design System.  
Upload once, use in every Claude conversation — no extra files needed.

---

## Contents

| File | Purpose |
|------|---------|
| `SKILL.md` | Full skill: tokens, SVGs, icon system, layout shell, component vocabulary, recipes |
| `colors.css` | Token palette only — paste into a CSS file or Tailwind config |
| `README.md` | This file |

---

## How to upload to Claude Projects

1. Open **Claude Projects** → your project settings.
2. Go to **Project knowledge → Add files**.
3. Upload `SKILL.md` (and optionally `colors.css`).
4. Claude will reference the skill automatically in every conversation within the project.

---

## How to use as a copy-paste prompt prefix

If you don't have Claude Projects, paste the contents of `SKILL.md` at the top of any conversation:

```
[paste SKILL.md content here]

---

Now, using the design system above, please create a ...
```

The skill is self-contained — it requires no other files to be useful.

---

## Keeping it fresh

This kit is a **dated snapshot**. When the design system evolves:

1. Run the SDD change `docs-migration-and-claude-design-kit` → `sdd-apply`.
2. The `colors.css` and `SKILL.md` will be regenerated from the live `src/App.css` and component sources.
3. Re-upload to Claude Projects.
