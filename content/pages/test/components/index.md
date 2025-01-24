---
title: Component Tests
description: Testing different component types
template: page
metadata:
  description: A showcase of all available components and their variations
  navigation:
    show_in_nav: true
    show_children: true
    page_weight: 10
  slug: asdf
  seo:
    title: components test
    description: description
    og:
      title: The title
      description: asdfads
      image: /images/mountains.jpg
    twitter:
      card: summary
      title: adsf
      description: adsf
      image: /images/silhouette_2.jpg
sections:
  - type: richText
    content: >
      # Component Testing


      This page demonstrates each component in our library individually, showing its features and configuration options. We'll go through each component type one by one, explaining:


      - Available props and options

      - Different styling variations

      - Common use cases

      - Best practices


      Each component will be shown with multiple examples to demonstrate its flexibility and proper usage.


      > Note: Components are shown with different background colors, padding sizes, and width options to demonstrate their adaptability.


      Let's explore each component type in detail.
    style:
      container: true
      align: left
      width: narrow
      text: white
      verticalSpacing: default
      background: primary
      fontSize: default
      padding: large
      listStyle: default
      linkStyle: default
      prose: true
  - type: richText
    content: >-
      ## Rich Text Component


      The Rich Text component is our most versatile text component, supporting full markdown syntax. Here's what it can do:


      ### Text Formatting


      * **Bold text** for emphasis

      * *Italic text* for subtle emphasis

      * ~~Strikethrough~~ for outdated content

      * `Inline code` for technical terms


      ### Lists and Quotes


      1. Ordered lists for steps

      2. With multiple levels

         * Nested items
         * With bullets

      > Blockquotes for highlighting important information or testimonials

      > Can span multiple lines


      ### Code Blocks


      ```javascript

      // With syntax highlighting

      function example() {
        return "Hello, World!";
      }

      ```


      ### Background Colors


      This section demonstrates a different background color scheme, with:


      * Light mode using a subtle gray

      * Dark mode using a deep blue
    background:
      light: gray-50
      dark: gray-800
    padding: large
    width: default
    style:
      background:
        light: light
        dark: primary
      padding: medium
      width: wide
      verticalSpacing: relaxed
      fontSize: default
      linkStyle: default
      listStyle: minimal
      align: right
---
