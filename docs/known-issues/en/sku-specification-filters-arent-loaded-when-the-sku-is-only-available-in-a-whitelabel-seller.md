---
title: 'SKU Specification filters aren't loaded when the SKU is only available in a Whitelabel seller'
id: 5SpoacD49oxDDGJjepUEoL
status: PUBLISHED
createdAt: 2022-03-21T17:41:20.048Z
updatedAt: 2022-11-25T21:58:05.886Z
publishedAt: 2022-11-25T21:58:05.886Z
firstPublishedAt: 2022-03-21T17:41:20.389Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: sku-specification-filters-arent-loaded-when-the-sku-is-only-available-in-a-whitelabel-seller
kiStatus: Backlog
internalReference: 431888
---

## Summary


Since a recent update in the Search behavior, unavailable SKUs' specification filters are not shown in the search result pages.

If a store's architecture rely solely on white label sellers for product availability, the specification filters aren't shown either, because the sellers' availability is not being considered in the search filters.



## Simulation


Have zero product availability for a specific search result (search term, department, brand, etc.) in the main store. Even if a white label seller's availability is being shown on the shelves, the filters related to SKU specifications won't show up.



## Workaround


Have product availability in the main store. This way, all SKU specification filters will be available.

If this doesn't suit the business' operation, it is possible to customize the front in order to not allow customers to buy items from the main storage.

