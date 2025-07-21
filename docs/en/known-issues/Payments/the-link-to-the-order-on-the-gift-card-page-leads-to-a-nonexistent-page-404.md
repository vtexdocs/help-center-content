---
title: "The link to the order on the gift card page leads to a nonexistent page (404)"
id: 7dvqilr4AjHhPeasWXFtW6
status: PUBLISHED
createdAt: 2025-03-19T12:42:28.749Z
updatedAt: 2025-03-19T12:42:29.713Z
publishedAt: 2025-03-19T12:42:29.713Z
firstPublishedAt: 2025-03-19T12:42:29.713Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-link-to-the-order-on-the-gift-card-page-leads-to-a-nonexistent-page-404
locale: en
kiStatus: Backlog
internalReference: 1196298
---

## Summary


In some gift card statements, it is not possible to access the order directly. The issue is that the link is formatted as:
`https://.myvtex.com/admin/checkout#/orders/`

However, the correct format should be:
`https://.myvtex.com/admin/orders/`


##

## Simulation


Unable to reproduce.


##

## Workaround


Collect the desired `orderId` and use the correct route: `https://.myvtex.com/admin/orders/`





