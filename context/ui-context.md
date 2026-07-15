# UI Context

## Theme
Dark only. No light mode. The design language is a premium creative agency aesthetic—near-black backgrounds, layered surfaces, and vibrant accent colors for interactive elements. The entire experience will be brought to life using constant, fluid animations powered by `react-bits`.

## Colors
Use CSS custom properties. All components must use these tokens no hardcoded hex values.

| Role            | CSS Variable       | Value    |
| --------------- | ------------------ | -------- |
| Page background | `--bg-base`        | `#050505`|
| Surface         | `--bg-surface`     | `#121212`|
| Primary text    | `--text-primary`   | `#F5F5F5`|
| Muted text      | `--text-muted`     | `#A3A3A3`|
| Primary accent  | `--accent-primary` | `#E60000`|
| Border          | `--border-default` | `#262626`|
| Error           | `--state-error`    | `#EF4444`|
| Success         | `--state-success`  | `#22C55E`|

## Typography
| Role      | Font              | Variable         |
| --------- | ----------------- | ---------------- |
| Headings  | Syne              | `--font-heading` |
| UI text   | Geist Sans        | `--font-sans`    |

## Border Radius
| Context           | Class            |
| ----------------- | ---------------- |
| Inline / small UI | `rounded-sm`     |
| Cards / panels    | `rounded-xl`     |
| Modals / overlays | `rounded-2xl`    |

## Component Library
- shadcn/ui on top of Tailwind. Components live in `components/ui/`.
- `react-bits` will be utilized extensively for animated text, backgrounds, and image reveals.

## Layout Patterns
- **Animated Hero**: Full-viewport split with `react-bits` background animations and dynamic text reveals.
- **Service Cards**: Grid layout where every card entry and hover state utilizes `react-bits` image and container animations.
- **Navigation**: Top bar with bottom border, featuring animated links.
- **Continuous Motion**: Utilize `react-bits` scroll components to ensure the page feels alive as the user navigates downward.

## Icons
Lucide React. Stroke-based icons only. Sizes: h-4 w-4 for inline, h-5 w-5 for buttons.