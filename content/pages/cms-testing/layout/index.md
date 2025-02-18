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
    - type: hero
      title: 'Welcome to Our Site'
      subtitle: 'A modern platform for building amazing websites'
      backgroundImage: '/images/mountains.jpg'
      style:
          - type: layout
            width: full
            fullContent: true
            padding:
                type: all
                size: none
            margin:
                type: bottom
                size: large
          - type: colors
            lightMode:
                background: '#111827'
                text: '#ffffff'
            darkMode:
                background: '#030712'
                text: '#ffffff'

    - type: richText
      content: >
          # Layout Width Examples2

          This page demonstrates the two layout configurations available in the CMS.
      style:
          - type: layout
            width: full
            fullContent: true
            margin:
                type: bottom
                size: large
          - type: colors
            lightMode:
                background: '#111827'
                text: '#ffffff'
            darkMode:
                background: '#030712'
                text: '#ffffff'

    - type: richText
      content: >
          ## Full Width Background, Contained Content

          This section extends the background to the full width of the screen,
          but keeps the content in a readable container.
      style:
          - type: layout
            width: full
            margin:
                type: both
                size: medium
          - type: colors
            lightMode:
                background: '#3b82f6'
                text: '#ffffff'
            darkMode:
                background: '#1d4ed8'
                text: '#ffffff'

    - type: richText
      content: >
          # Layout Width Examples

          This page demonstrates the two layout configurations available in the CMS.
      style:
          - type: layout
            # width: full
            fullContent: true
          - type: colors
            lightMode:
                background: '#111827'
                text: '#ffffff'
            darkMode:
                background: '#030712'
                text: '#ffffff'

    - type: richText
      content: >
          ## Contained Width & Content

          This section stays within the content container.
          Both the background and content respect the max-width.
      style:
          - type: layout
            width: contained
            margin:
                type: both
                size: large
          - type: colors
            lightMode:
                background: '#22c55e'
                text: '#ffffff'
            darkMode:
                background: '#15803d'
                text: '#ffffff'

    - type: richText
      content: >
          ## Full Width Everything

          This section demonstrates full width background AND content.
          Text will extend edge to edge.
      style:
          - type: layout
            width: full
            fullContent: true
            margin:
                type: both
                size: medium
          - type: colors
            lightMode:
                background: '#eab308'
                text: '#000000'
            darkMode:
                background: '#854d0e'
                text: '#ffffff'

    - type: richText
      content: >
          ## Back to Standard Layout

          And we're back to the default layout with contained content.
          This creates a nice rhythm between different section styles.
      style:
          - type: layout
            width: contained
            margin:
                type: top
                size: large
          - type: colors
            lightMode:
                background: '#ec4899'
                text: '#ffffff'
            darkMode:
                background: '#9d174d'
                text: '#ffffff'
---
