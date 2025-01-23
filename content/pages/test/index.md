---
title: Component Test Page
description: A showcase of all available section types
template: page
sections:
  - type: hero
    title: Component Showcase
    description: Explore all available section types and their capabilities
    image: /images/hero.jpg
    background: gradient-primary
    padding: large
    width: full

  - type: richText
    content: |
      ## Rich Text Section
      This section supports **markdown** formatting, including:
      - Lists
      - *Italics*
      - [Links](#)
      - And more
    background: white
    padding: large
    width: default

  - type: textWithImage
    title: Text with Image
    description: A section that combines text content with an image
    image: /images/placeholder.jpg
    imagePosition: right
    background: gradient-light
    padding: large
    width: default

  - type: twoColumnText
    leftContent: |
      ### Left Column
      Content for the left side
    rightContent: |
      ### Right Column
      Content for the right side
    background: white
    padding: large
    width: default

  - type: features
    title: Feature Grid
    description: Display a grid of features with icons
    items:
      - title: Feature 1
        description: Description of feature 1
        icon: star
      - title: Feature 2
        description: Description of feature 2
        icon: bolt
      - title: Feature 3
        description: Description of feature 3
        icon: heart
    background: gradient-dark
    padding: large
    width: default

  - type: gallery
    title: Image Gallery
    description: A collection of images
    images:
      - /images/placeholder.jpg
      - /images/placeholder.jpg
      - /images/placeholder.jpg
    background: white
    padding: large
    width: full

  - type: video
    title: Video Section
    description: Embedded video content
    videoUrl: https://www.youtube.com/embed/dQw4w9WgXcQ
    background: gradient-light
    padding: large
    width: default

  - type: testimonials
    title: Testimonials
    description: What people are saying
    items:
      - quote: "This is an amazing product!"
        author: John Doe
        role: CEO
      - quote: "Couldn't be happier with the service"
        author: Jane Smith
        role: Customer
    background: white
    padding: large
    width: default

  - type: stats
    title: Statistics
    description: Key numbers and metrics
    items:
      - value: "100+"
        label: Customers
      - value: "95%"
        label: Satisfaction
      - value: "24/7"
        label: Support
    background: gradient-primary
    padding: large
    width: default

  - type: team
    title: Our Team
    description: Meet the people behind the scenes
    items:
      - name: John Doe
        role: CEO
        image: /images/placeholder.jpg
      - name: Jane Smith
        role: CTO
        image: /images/placeholder.jpg
    background: white
    padding: large
    width: default

  - type: logos
    title: Our Partners
    description: Companies we work with
    logos:
      - /images/placeholder.jpg
      - /images/placeholder.jpg
      - /images/placeholder.jpg
      - /images/placeholder.jpg
    background: gradient-light
    padding: large
    width: default

  - type: faq
    title: Frequently Asked Questions
    description: Common questions and answers
    items:
      - question: What is this?
        answer: This is a test page showcasing all available components.
      - question: Can I use these components?
        answer: Yes, all these components are available for use in your pages.
    background: white
    padding: large
    width: default

  - type: contactForm
    title: Contact Us
    description: Get in touch with our team
    fields:
      - label: name
        type: text
        placeholder: Your Name
        required: true
      - label: email
        type: email
        placeholder: Your Email
        required: true
      - label: subject
        type: text
        placeholder: Subject
        required: true
      - label: message
        type: textarea
        placeholder: Your Message
        required: true
    background: gradient-dark
    padding: large
    width: narrow

  - type: pricing
    title: Pricing Plans
    description: Choose the right plan for you
    items:
      - name: Basic
        price: $9
        features:
          - Feature 1
          - Feature 2
        buttonText: Get Basic
        buttonUrl: /pricing/basic
      - name: Pro
        price: $19
        features:
          - Feature 1
          - Feature 2
          - Feature 3
        buttonText: Get Pro
        buttonUrl: /pricing/pro
    background: white
    padding: large
    width: default

  - type: timeline
    title: Our Journey
    description: Key milestones
    items:
      - date: 2020
        title: Founded
        description: Where it all began
      - date: 2021
        title: Growth
        description: Expanded our team
      - date: 2022
        title: Success
        description: Reached key milestones
    background: gradient-light
    padding: large
    width: default

  - type: cta
    title: Ready to Get Started?
    description: Join us today and experience the difference
    buttonText: Sign Up Now
    buttonUrl: /contact
    background: gradient-primary
    padding: large
    width: default

  - type: richText
    title: Background Colors
    content: |
      ## Background Colors and Configuration Options

      This page demonstrates all available background colors and configuration options.
    background: white
    padding: large
    width: default

  - type: features
    title: Solid Colors
    description: Basic background color options
    items:
      - title: White Background
        description: Default clean background
        icon: sun
      - title: Light Background
        description: Subtle light gray
        icon: moon
      - title: Gray Background
        description: Medium contrast
        icon: cloud
      - title: Dark Background
        description: High contrast dark mode
        icon: star
    background: white
    padding: large
    width: default

  - type: features
    title: Primary Colors
    description: Brand color variations
    items:
      - title: Primary Background
        description: Main brand color
        icon: palette
      - title: Primary Solid
        description: Full opacity version
        icon: paint-brush
      - title: Secondary Colors
        description: Complementary options
        icon: swatchbook
      - title: Accent Colors
        description: Highlight elements
        icon: sparkles
    background: primary
    padding: large
    width: default

  - type: features
    title: Gradient Options
    description: Smooth color transitions
    items:
      - title: Primary Gradient
        description: Brand color fade
        icon: gradient
      - title: Light Gradient
        description: Subtle fade effect
        icon: sun
      - title: Dark Gradient
        description: Dramatic contrast
        icon: moon
    background: gradient-primary
    padding: large
    width: default

  - type: features
    title: Configuration Options
    description: Additional styling controls
    items:
      - title: Padding Options
        description: none, small, default, large
        icon: arrows-expand
      - title: Width Options
        description: narrow, default, full
        icon: arrows-h
      - title: Custom Colors
        description: Use any hex color code
        icon: palette
    background: gradient-dark
    padding: large
    width: default

  - type: richText
    content: |
      ## Examples of Width Options

      This section uses the 'narrow' width setting for a more focused layout.
    background: light
    padding: large
    width: narrow

  - type: richText
    content: |
      ## Examples of Padding Options

      This section uses 'small' padding for compact spacing.
    background: gray
    padding: small
    width: default

  - type: richText
    content: |
      ## Custom Background Colors

      This section uses a custom background color.
    background: custom
    customBackground: "#f0f7ff"
    padding: large
    width: default
--- 