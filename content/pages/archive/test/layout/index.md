---

title: Layout Tests
description: Testing padding and width options
template: page
metadata:
description: ""
navigation:
show_in_nav: true
show_children: true
page_weight: 10
sections:

- type: hero
  title: Layout Test Page
  description: Testing different padding and width configurations
  background: white
  padding: large
  width: full

- type: richText
  content: |

    ## No Padding

    This section has no padding.
    background: light
    padding: none
    width: default

- type: richText
  content: |

    ## Small Padding

    This section uses small padding.
    background: white
    padding: small
    width: default

- type: richText
  content: |

    ## Default Padding

    This section uses default padding.
    background: light
    padding: default
    width: default

- type: richText
  content: |

    ## Large Padding

    This section uses large padding.
    background: white
    padding: large
    width: default

- type: richText
  content: |

    ## Narrow Width

    This section uses narrow width constraint.
    background: light
    padding: default
    width: narrow

- type: richText
  content: |

    ## Default Width

    This section uses default width constraint.
    background: white
    padding: default
    width: default

- type: richText
  content: |

    ## Full Width

    This section uses full width with no constraints.
    background: light
    padding: default
    width: full

- type: richText
  content: |
    ## Combined Options
    This section uses large padding with narrow width.
    background: white
    padding: large
    width: narrow
