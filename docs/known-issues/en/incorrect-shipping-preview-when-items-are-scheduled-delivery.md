---
title: 'Incorrect Shipping preview when items are scheduled delivery'
id: 32RG7BjY9cScxj9e9bcDPS
status: DRAFT
createdAt: 2022-09-09T18:25:35.348Z
updatedAt: 2023-02-01T21:09:01.732Z
publishedAt: 
firstPublishedAt: 2022-09-09T18:25:35.902Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: incorrect-shipping-preview-when-items-are-scheduled-delivery
locale: en
kiStatus: Backlog
internalReference: 545697
---

## Summary


Delivery values display in shipping-preview (cart) is incorrect when items are scheduled delivery and all these items leave the same SLA. Even with the API returning the correct value, the UI does not reflect this information and displays the incorrect value.



## Simulation


Add two or more items in the cart with scheduled delivery, the UI will show a different value than the API return



## Workaround


N/A

