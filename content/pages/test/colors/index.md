---
title: Color Tests
description: Testing background colors and styling
template: page
metadata:
  description: ""
  navigation:
    show_in_nav: true
    show_children: true
    page_weight: 10
sections:
  - type: hero
    title: Color Test Page
    description: Testing different background colors and styling options
    background: white
    padding: large
    width: full

  - type: richText
    content: |
      ## White Background (Default)
      This section uses the default white background.
    background: white
    padding: default
    width: default

  - type: richText
    content: |
      ## Light Gray Background
      This section uses the light gray background.
    background: light
    padding: default
    width: default

  - type: richText
    content: |
      ## Gray Background
      This section uses the gray background.
    background: gray
    padding: default
    width: default

  - type: richText
    content: |
      ## Dark Background
      This section uses the dark background.
    background: dark
    padding: default
    width: default

  - type: richText
    content: |
      ## Primary Color Background
      This section uses the primary brand color.
    background: primary
    padding: default
    width: default

  - type: richText
    content: |
      ## Secondary Color Background
      This section uses the secondary brand color.
    background: secondary
    padding: default
    width: default

  - type: richText
    content: |
      ## Accent Color Background
      This section uses the accent brand color.
    background: accent
    padding: default
    width: default

  - type: richText
    content: |
      ## Custom Color Background
      This section uses a custom hex color.
    background: custom
    customBackground: "#e0f2fe"
    padding: default
    width: default 