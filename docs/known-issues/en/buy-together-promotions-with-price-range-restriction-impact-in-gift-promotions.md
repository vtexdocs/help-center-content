---
title: Buy Together promotions with price range restriction impact in gift promotions
id: 6tjViVNzlWgfLOLsUEtYSF
status: PUBLISHED
createdAt: 2022-10-11T19:54:05.862Z
updatedAt: 2022-11-25T22:11:38.748Z
publishedAt: 2022-11-25T22:11:38.748Z
firstPublishedAt: 2022-10-11T19:54:06.433Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: buy-together-promotions-with-price-range-restriction-impact-in-gift-promotions
kiStatus: Backlog
internalReference: 676382
---

## Summary



For this scenario to happen, the following must be set:

1. Create a Buy together promotion with a price range restriction, like minimum price value.
2. Create a gift promotion.
3. The gift in the second promotion must be one of the Buy Together products on the first promotion.

When this is set, when the client is at the checkout trying to add the gift promotion, it receives an error:

    message="Ocorreu um erro de comunicação com o Rates and Benefits"


This happens because now the system is trying to recognize the price range restriction when it shouldn't.



## Simulation


Recreate the steps mentioned above.
PS: related scenarios - https://help.vtex.com/known-issues/regular-promotion-using-gift-conflicts-with-value-filters-on-the-cart--oUDvaZPL0fjbN3v18QQIM



## Workaround


Remove the price range restriction on the Buy Together promotion.

