---
title: Test Pages
description: Collection of test pages for components and styling
template: page
metadata:
    description: 'A comprehensive testing ground for components, layouts, and styling options'
    navigation:
        show_in_nav: true
        show_children: true
        page_weight: 10
sections:
    - type: hero
      title: Test Pages
      subtitle: Explore different test pages for components and styling options
      background: white
      padding: large
      width: full

    - type: richText
      content: |
          # Component Testing Pages

          Welcome to our component testing area. This section demonstrates various markdown capabilities while explaining our testing structure.

          ## What's Available

          We've organized our tests into three main categories:

          1. **Colors Test** - Explore background colors and styling
          2. **Layout Test** - Test padding and width configurations
          3. **Components Test** - Try different component types

          ### Why Test Pages?

          Testing pages help us:
          - Verify component functionality
          - Ensure consistent styling
          - Test responsive design
          - Check accessibility features

          > These test pages serve as both documentation and validation for our component library.

          Here's a simple code example:
          ```javascript
          const TestComponent = ({ title }) => {
            return <h1>{title}</h1>;
          };
          ```

          #### Additional Features

          * Links work like [Colors Test](/test/colors)
          * *Italic text* for emphasis
          * **Bold text** for strong emphasis
          * ~~Strikethrough~~ for deprecated items

          ---

          Visit each test page to explore specific aspects of our component system.
      background: white
      padding: large
      width: narrow

    - type: features
      title: Available Tests
      description: Choose a test page to explore
      items:
          - title: Colors Test
            description: Test different background colors and styling options
            icon: palette
            url: /test/colors
          - title: Layout Test
            description: Test padding and width configurations
            icon: ruler
            url: /test/layout
          - title: Components Test
            description: Test different component types and their options
            icon: puzzle-piece
            url: /test/components
      background: light
      padding: large
      width: default
---
