# DESIGN.md

> A living design system document for consistent UI across design and code.

## Overview

This palette is built from a set of earthy, muted tones with both warm and cool neutrals. It creates a calm, sophisticated, and grounded feel suitable for modern web interfaces, content-heavy sites, or professional service platforms.

## Colors

### Semantic Color Roles

| Role              | Token Name         | Hex       | Usage                                      | Notes |
|-------------------|--------------------|-----------|--------------------------------------------|-------|
| **Background**    | `bg-base`          | `#d5cbbb` | Main page / surface background             | Warm cream base |
| **Surface**       | `surface-1`        | `#d5cbbb` | Cards, panels, elevated surfaces           | Same as bg for now |
| **Text Primary**  | `text-primary`     | `#474034` | Headings, body text, strong emphasis       | Deep warm brown |
| **Text Secondary**| `text-secondary`   | `#9d8c85` | Supporting text, captions, secondary info  | Muted warm taupe |
| **Accent**        | `accent`           | `#9d8c85` | Buttons, links, highlights (warm accent)   | Warm taupe accent |
| **Neutral Cool**  | `neutral-cool`     | `#acb3b3` | Borders, dividers, subtle UI elements      | Cool gray |
| **Neutral Cool 2**| `neutral-cool-2`   | `#939ba7` | Alternative cool tone for variety          | Blue-gray |

### Design Tokens (YAML - for AI agents & code)

```yaml
colors:
  bg-base: "#d5cbbb"
  surface-1: "#d5cbbb"
  text-primary: "#474034"
  text-secondary: "#9d8c85"
  accent: "#9d8c85"
  neutral-cool: "#acb3b3"
  neutral-cool-2: "#939ba7"