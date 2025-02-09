---
title: Revalidation
description: Learn about Next.js revalidation on Netlify
---

# On-demand Revalidation

Next.js 13.4+ has built-in support for [on-demand revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#on-demand-revalidation) of static pages.

## How it works

1. A page is rendered at build time and cached
2. When you need to update it, call the revalidation API
3. Next.js will regenerate the page in the background
4. Once complete, it will invalidate the cache and show the new version

## Try it out

The timestamp below was generated at build or revalidation time:

[Current Time Placeholder]

Click the button below to trigger revalidation of this page:

[Revalidate Button Placeholder]

## Implementation

The revalidation endpoint is implemented as a [Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) and deployed as a Netlify Function.
