---
title: 'Coupons created as archived temporarrily'
id: 783FJICQzATVkJ2uPgk9Mq
status: PUBLISHED
createdAt: 2023-09-01T13:34:21.842Z
updatedAt: 2023-09-01T13:34:22.607Z
publishedAt: 2023-09-01T13:34:22.607Z
firstPublishedAt: 2023-09-01T13:34:22.607Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: coupons-created-as-archived-temporarrily
locale: en
kiStatus: Backlog
internalReference: 892041
---

## Summary


Currently, when a coupon is created, the UI/API shows it is archived for a few minutes (~2) when it actually (on the pricing database), the coupon is active.

After a few minutes, the coupons displays its correct data.

It is important to note that this doesnt affect the "real" coupon info, even when it is incorrectly shown as "archived" on the UI due to this issue, it'll be useable on the checkout.


##

## Simulation


Simply creating a coupon and checking its daata already shows it as archived.


##

## Workaround


There is no workaround other than waiting for a short time.





