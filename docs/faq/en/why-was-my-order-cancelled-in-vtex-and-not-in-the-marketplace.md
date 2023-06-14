---
title: Why was my order cancelled in VTEX, and not in the marketplace?
id: frequentlyAskedQuestions_678
status: PUBLISHED
createdAt: 2017-04-27T22:30:17.232Z
updatedAt: 2023-03-31T18:41:40.538Z
publishedAt: 2023-03-31T18:41:40.538Z
firstPublishedAt: 2017-04-27T23:02:27.269Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: why-was-my-order-cancelled-in-vtex-and-not-in-the-marketplace
legacySlug: why-was-my-order-cancelled-in-vtex-and-not-in-the-marketplace
---

The integration with marketplaces does not expect that cancellations are carried out by the seller, since the communication of orders is made from the seller to the marketplace, and not the other way around.

Therefore, even if the order is cancelled with the seller, it will follow its flow in the marketplace, since it will not be notified about this change.

## In this case, how to cancel the order?

In this situation, the storeowner must carry out the cancellation manually, directly in the interface of each marketplace. This way, the order will be cancelled in the two interfaces.

## How go you identify who canceled the order?

Every action taken on an order is registered in the **Orders** module. To view this log, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Select the desired order.
3. In the **Order History** section, click `View Interactions`. 
