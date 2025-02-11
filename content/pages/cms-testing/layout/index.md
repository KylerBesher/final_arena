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
sections:
    - type: richText
      content: >
          # Theme & Styles Testing

          This page is dedicated to testing how themes and style settings are implemented within the CMS.

          ## What to Test

          - **Color Schemes:** Verify that the correct colors are applied based on CMS settings and dark mode activation.
          - **CSS Variables:** Check that CSS variables (e.g., `--color-primary`) correctly reflect the theme colors.
          - **Responsive Layouts:** Ensure style overrides for padding, margins, and widths work as expected.
          - **Theme Switching:** Test toggling between light and dark modes.

    - type: richText
      content: >
          ## Container Widths

          The CMS supports different container width configurations:

          ```json
          {
              "layout": {
                  "maxWidth": 1280,
                  "contentWidth": 768,
                  "sidebarWidth": 280
              }
          }
          ```

          ### Testing Container Layouts

          - **Full Width:** Content spans the entire container width
          - **Content Width:** Text and main content areas
          - **Sidebar Width:** Navigation and supplementary content
          - **Responsive Behavior:** How widths adapt on different screen sizes
      style:
          - type: colors
            lightMode:
                background: '#f5f5f5'
            darkMode:
                background: '#1a1a1a'

    - type: richText
      content: >
          ## Typography Settings

          Typography can be configured globally:

          ```json
          {
              "typography": {
                  "fontFamily": {
                      "sans": "Inter, system-ui, sans-serif",
                      "serif": "Merriweather, Georgia, serif",
                      "mono": "JetBrains Mono, monospace"
                  },
                  "fontSize": {
                      "base": "16px",
                      "scale": 1.25
                  }
              }
          }
          ```

          ### Typography Testing Points

          - Font loading and fallbacks
          - Heading size hierarchy
          - Line heights and spacing
          - Responsive font scaling
      style:
          - type: colors
            lightMode:
                background: '#e6f7ff'
            darkMode:
                background: '#003a66'

    - type: richText
      content: >
          ## Dark Mode Variables

          When the theme updates, these CSS variables are applied:

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
      style:
          - type: colors
            lightMode:
                background: '#fff5e6'
            darkMode:
                background: '#663c00'
---
