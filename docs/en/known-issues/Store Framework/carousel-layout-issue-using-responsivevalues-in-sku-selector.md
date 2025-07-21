---
title: "Carousel layout issue using responsive-values in SKU Selector"
id: vfRSj9rxABgitt0xkH96Y
status: PUBLISHED
createdAt: 2025-04-29T14:09:08.352Z
updatedAt: 2025-04-29T14:09:09.087Z
publishedAt: 2025-04-29T14:09:09.087Z
firstPublishedAt: 2025-04-29T14:09:09.087Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: carousel-layout-issue-using-responsivevalues-in-sku-selector
locale: en
kiStatus: Backlog
internalReference: 1217421
---

## Summary


SKU Selector width value breaks when `displayMode="slider"` is used for unavailable products and `sliderItemsPerPage` is configured using `min-width` values.


##

## Simulation




1.

Install the vtex.responsive-values app in the workspace, or configure a responsive-values block in your theme to provide values based on min-width breakpoints.



2.

Configure the sliderItemsPerPage prop of the SKU Selector using the responsive-values pattern:

This configuration uses min-width breakpoints and is based on the responsive-values app, which is not officially supported by the SKU Selector.



3.

Deploy this configuration to a product detail page (PDP) that has no available SKUs (i.e., all SKUs are out of stock).



4.

Access the PDP in the workspace and confirm that the SKU Selector renders in displayMode="slider".



5. Observe the result: the SKU carousel will break — items will have incorrect widths, often overflowing or not rendering as expected.


##

## Workaround


Replace the `sliderItemsPerPage` configuration using `min-width` keys with the expected format using the standard `desktop`, `tablet`, and `mobile` keys.





