---
title: Test Page
metadata:
  title: Test Page - All Section Types
  description: A demonstration of all available section types and their configurations
  image: /images/test-hero.jpg
  slug: test
  navigation:
    show_in_nav: true
    show_children: false
    page_weight: 999
  seo:
    title: "Test Page | {{site.name}}"
    description: "A comprehensive showcase of all section types available in {{site.name}}"
    keywords: test, sections, components, layout
    og:
      title: "Test Page - {{site.name}}"
      description: "Testing all section types"
      image: /images/test-og.jpg
    twitter:
      card: summary_large_image
      title: "Test Page | {{site.name}}"
      description: "Section type demonstration"
      image: /images/test-twitter.jpg
sections:
  - type: hero
    title: "Section Testing at {{site.name}}"
    subtitle: "A showcase of all available section types"
    backgroundImage: /images/hero-test.jpg
    buttonText: "Get Started"
    buttonLink: "#features"

  - type: richText
    content: |
      ## Rich Text Section

      This is a rich text section that supports **bold**, *italic*, and other markdown formatting.

      ### Lists
      - Item one
      - Item two
      - Item three

      ### Links
      [Learn more about {{site.name}}](/about)

      > This is a blockquote demonstrating quote formatting

  - type: features
    title: "Feature Showcase"
    items:
      - title: Feature One
        description: Description of the first feature
        icon: star
      - title: Feature Two
        description: Description of the second feature
        icon: heart
      - title: Feature Three
        description: Description of the third feature
        icon: bolt
      - title: Feature Four
        description: Description of the fourth feature
        icon: flag

  - type: stats
    title: "Statistics Display"
    items:
      - value: "1,000+"
        label: Happy Customers
      - value: "24/7"
        label: Support Available
      - value: "99.9%"
        label: Uptime
      - value: "50+"
        label: Features

  - type: team
    title: Team Section
    description: "Meet our amazing team members"
    members:
      - name: John Doe
        role: CEO
        image: /images/team/john.jpg
      - name: Jane Smith
        role: CTO
        image: /images/team/jane.jpg
      - name: Bob Wilson
        role: Designer
        image: /images/team/bob.jpg

  - type: twoColumn
    title: Two Column Section
    leftContent: |
      ## Left Column
      This is the content that appears in the left column.
      - Point one
      - Point two
      - Point three
    rightContent: |
      ## Right Column
      This is the content that appears in the right column.
      1. First item
      2. Second item
      3. Third item

  - type: testimonials
    title: Testimonials
    items:
      - quote: "This is an amazing service!"
        author: "John Smith"
        role: "Customer"
      - quote: "Best experience ever!"
        author: "Jane Doe"
        role: "Client"
      - quote: "Highly recommended!"
        author: "Bob Johnson"
        role: "Partner"

  - type: timeline
    title: Our Journey
    items:
      - year: 2020
        title: Founded
        description: Where it all began
      - year: 2021
        title: Growth
        description: Expanded our services
      - year: 2022
        title: Innovation
        description: Launched new features
      - year: 2023
        title: Present
        description: Continuing to evolve

  - type: cta
    title: Ready to Get Started?
    subtitle: Join us today and experience all these features
    buttonText: "{{cta.default_button}}"
    buttonLink: "/contact"
--- 