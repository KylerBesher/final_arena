---
title: Layout
metadata:
    title: Layout updates
    description: Test and review the theme settings and styles applied in the CMS.
    slug: themes-styles
    navigation:
        show_in_nav: true
        show_children: false
        page_weight: 20
seo:
    title: Theme & Styles Testing | CMS Testing Suite
    description: Examine how themes, colors, and styles are applied across the CMS.
---

# Theme & Styles Testing

This page is dedicated to testing how themes and style settings are implemented within the CMS.

## What to Test

- **Color Schemes:** Verify that the correct colors are applied based on CMS settings and dark mode activation.
- **CSS Variables:** Check that CSS variables (e.g., `--color-primary`) correctly reflect the theme colors.
- **Responsive Layouts:** Ensure style overrides for padding, margins, and widths work as expected.
- **Theme Switching:** Test toggling between light and dark modes.

## Example

When the theme updates, the following CSS variables may be applied:

```css
:root {
    --color-primary: #00ff9d;
    --color-secondary: #4f46e5;
    --color-accent: #ff3d6e;
    --color-background: #ffffff;
    --color-text: #0a0a0a;
}
```

And in dark mode:

```css
:root {
    --color-primary: #00ff9d;
    --color-secondary: #6366f1;
    --color-accent: #ff4e7e;
    --color-background: #0a0a0a;
    --color-text: #ffffff;
}
```

Use developer tools to inspect these values on a rendered page.
