---
title: 'Slider-layout bug when using prop infinite as always on mobile'
id: 4JERnak05tr2K8ICjjPjrN
status: PUBLISHED
createdAt: 2023-10-17T17:38:34.443Z
updatedAt: 2023-10-17T17:38:35.106Z
publishedAt: 2023-10-17T17:38:35.106Z
firstPublishedAt: 2023-10-17T17:38:35.106Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sliderlayout-bug-when-using-prop-infinite-as-always-on-mobile
locale: en
kiStatus: Backlog
internalReference: 920725
---

## Summary


When the slider-layout is set to `infinite: "always"` on the mobile the component presents an intermittent bug. After a while scrolling the shelf the products will stop to appear and a blank space will appear instead.


##

## Simulation



- Set the prop `infinite: "always"`
- On mobile, try to scroll the products
- Eventually the products will stop to appear and the slider will become blank


##

## Workaround


Use the `showNavigationArrows: "always"`, the problem only happens when scrolling





