# DESIGN.md

> A living design system document for consistent UI across design and code.

## Overview

This design system uses a sophisticated, premium color palette centered around deep charcoal/navy, warm neutrals, and refined gold accents. The deep navy serves as the primary action color for buttons, CTAs, and chips, while gold provides secondary highlights. It is designed to convey trust, professionalism, and an established presence — ideal for higher-end bookkeeping or fractional CFO-type services.

## Colors

### Semantic Color Roles

| Role                  | Token Name            | Hex       | Usage                                      | Notes |
|-----------------------|-----------------------|-----------|--------------------------------------------|-------|
| **Background**        | `bg-base`             | `#F8F7F4` | Main page / surface background             | Warm off-white |
| **Surface**           | `surface`             | `#FFFFFF` | Cards, panels, elevated surfaces           | Clean white |
| **Primary**           | `primary`             | `#1F2937` | Headings, primary text, buttons, CTAs, chips, strong UI elements | Deep Navy (main action color) |
| **Text Primary**      | `text-primary`        | `#1F2937` | Main body text and headings                | Same as Primary |
| **Warm Gray**         | `warm-gray`           | `#57534E` | Secondary text, subtle UI elements         | Warm neutral gray |
| **Neutral**           | `neutral`             | `#64748B` | Borders, dividers, secondary elements      | Cool slate gray |
| **Accent Gold**       | `accent`              | `#B8860B` | Secondary accents, subtle highlights, decorative icons | Refined gold |
| **Accent Gold Hover** | `accent-hover`        | `#9A7209` | Hover states for gold elements             | Darker gold |

### Design Tokens (YAML – for AI agents & code)

```yaml
colors:
  bg-base: "#F8F7F4"
  surface: "#FFFFFF"
  primary: "#1F2937"
  text-primary: "#1F2937"
  warm-gray: "#57534E"
  neutral: "#64748B"
  accent: "#B8860B"
  accent-hover: "#9A7209"