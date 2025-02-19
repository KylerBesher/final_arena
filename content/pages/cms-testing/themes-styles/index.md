---
title: Theme & Styles Testing
metadata:
  title: Theme & Styles Testing
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
  --color-primary: #00FF9D;
  --color-secondary: #4F46E5;
  --color-accent: #FF3D6E;
  --color-background: #FFFFFF;
  --color-text: #0A0A0A;
}
```

And in dark mode:

```css
:root {
  --color-primary: #00FF9D;
  --color-secondary: #6366F1;
  --color-accent: #FF4E7E;
  --color-background: #0A0A0A;
  --color-text: #FFFFFF;
}
```

Use developer tools to inspect these values on a rendered page. 