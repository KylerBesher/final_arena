---
title: Content Sections Testing
metadata:
  title: Content Sections Testing
  description: Explore how various content sections are rendered and tested within the CMS.
  slug: sections
  navigation:
    show_in_nav: true
    show_children: false
    page_weight: 10
seo:
  title: Content Sections Testing | CMS Testing Suite
  description: Test and review various content section types such as hero, rich text, features, and more.
---

# Content Sections Testing

This page demonstrates the different section types available in the CMS. Our system supports various content sections which you can mix and match to build dynamic page layouts.

## Section Types

- **Hero Section**: A full-width introductory section (often with a background image).
- **Rich Text Section**: For rich formatted text, markdown content, and embedded media.
- **Features Section**: Highlights key features with icons and short descriptions.
- **Team Section**: Showcases team members with bios and images.
- **CTA Section**: A call-to-action block to drive user engagement.

## Example Usage

Content sections are defined in a page's front matter under the `sections` key. For instance:

```yaml
sections:
  - type: hero
    title: "Welcome to Our Site"
    subtitle: "Your gateway to awesome content"
    backgroundImage: "/images/hero.jpg"
  - type: richText
    content: |
      ## Example Rich Text
      This is some sample rich text content.
```

Explore this page to see how section data is interpreted and rendered. 