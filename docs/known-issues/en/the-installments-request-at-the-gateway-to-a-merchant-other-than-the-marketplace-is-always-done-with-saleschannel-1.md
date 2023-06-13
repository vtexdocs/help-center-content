---
title: The installments request at the gateway to a merchant other than the marketplace is always done with salesChannel = 1
id: Xo2YO6ZM9Jj0ONZjXrrrJ
status: PUBLISHED
createdAt: 2022-03-27T21:08:39.176Z
updatedAt: 2022-11-25T22:05:55.885Z
publishedAt: 2022-11-25T22:05:55.885Z
firstPublishedAt: 2022-03-27T21:08:39.738Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: the-installments-request-at-the-gateway-to-a-merchant-other-than-the-marketplace-is-always-done-with-saleschannel-1
kiStatus: Backlog
internalReference: 391197
---

## Summary


Requests to get external installments at the gateway to a merchant other than the marketplace are always made with salesChannel = 1.
The behavior was observed in a Seller-whitelabel scenario for a franchise account, but it also seems applicable to the context of common sellers, to the foreign market.

**Expected behavior**
Requests made from the marketplace to a seller's gateway/merchant must follow the fulfillment endpoint's business policy in order to maintain context.

**current behavior**
Even though the "fulfillment endpoint" is done with salesChannel=2, the installments request is done in the context of salesChannel=1.



## Simulation



1. Choose a seller whose final destination is different from salesChannel=1
2. Simulate a cart with an item from this seller
3. Observe the request for installments that is made to the Merchant of this seller.




## Workaround


N/A

