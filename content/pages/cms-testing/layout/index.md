---
title: Layout & Spacing
metadata:
    title: Layout & Spacing Examples
    description: Examples of different layout widths, padding, and spacing configurations.
    slug: layout-spacing
    navigation:
        show_in_nav: true
        show_children: false
        page_weight: 20
seo:
    title: Layout & Spacing Examples | CMS Testing Suite
    description: Explore different layout configurations available in the CMS.
sections:
    - type: richText
      content: >
          # Layout Width & Spacing Examples

          This page demonstrates the various layout configurations available in the CMS.
      style:
          - type: layout
            width: full
            padding: none
          - type: colors
            lightMode:
                background: '#111827'
                text: '#ffffff'
            darkMode:
                background: '#030712'
                text: '#ffffff'

    - type: richText
      content: >
          ## Full Width, No Padding

          This section extends to the full width of the screen with no padding.
          Notice how the text reaches the edges of the viewport.
      style:
          - type: layout
            width: full
            padding: none
          - type: colors
            lightMode:
                background: '#3b82f6'
                text: '#ffffff'
            darkMode:
                background: '#1d4ed8'
                text: '#ffffff'

    - type: richText
      content: >
          ## Container Width, Medium Padding

          This section uses the default container width with medium padding.
          It provides a comfortable reading experience for longer content.
      style:
          - type: layout
            width: container
            padding: medium
          - type: colors
            lightMode:
                background: '#22c55e'
                text: '#ffffff'
            darkMode:
                background: '#15803d'
                text: '#ffffff'

    - type: richText
      content: >
          ## Narrow Width, Large Padding

          This section demonstrates a narrow width with large padding,
          ideal for focused reading experiences like blog posts or articles.
      style:
          - type: layout
            width: narrow
            padding: large
          - type: colors
            lightMode:
                background: '#eab308'
                text: '#000000'
            darkMode:
                background: '#854d0e'
                text: '#ffffff'

    - type: richText
      content: >
          ## Custom Width & Spacing

          This section shows how to use custom maximum widths and padding values.
          You can fine-tune these settings in the CMS.

          ```yaml
          style:
            - type: layout
              width: custom
              maxWidth: 800
              padding: custom
              paddingSize: 48
          ```
      style:
          - type: layout
            width: custom
            maxWidth: 800
            padding: custom
            paddingSize: 48
          - type: colors
            lightMode:
                background: '#ec4899'
                text: '#ffffff'
            darkMode:
                background: '#9d174d'
                text: '#ffffff'
---
