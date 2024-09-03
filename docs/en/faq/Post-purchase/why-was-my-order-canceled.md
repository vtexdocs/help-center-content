---
title: 'Why was my order canceled?'
id: frequentlyAskedQuestions_493
status: PUBLISHED
createdAt: 2017-04-27T22:34:39.200Z
updatedAt: 2023-03-31T15:02:05.031Z
publishedAt: 2023-03-31T15:02:05.031Z
firstPublishedAt: 2017-04-27T23:02:22.347Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: why-was-my-order-canceled
locale: en
legacySlug: why-was-my-order-cancelled
---

To identify the reason for cancellation, you must check all communications carried out between the payment integrations. This is so because, for a purchase to be invoiced, it has to go through several steps that may cause its cancellation.

Smart Checkout supports the "Pre-Auth" feature of some acquirers. That is, still in the checkout environment the platform validates card data. If there is a problem, the user is notified so that they can change the payment method and the store doesn't miss the sale.

To save time, an order is created. In the case of denial, this transaction is automatically canceled.

See below how to identify the reasons for cancellation.

## Check the payment 

In your VTEX Admin, in **Orders > Transactions**, you can find the records of all interactions made with the operator/gateway or the antifraud system. These two agents account for most cancellations. 

When a cancellation occurs, the agent in charge logs in a message identifying the reason for the action in the order transaction events.

For more information, check out the article about [viewing the transactions details](http://help.vtex.com/en/tutorial/how-to-view-the-orders-details/).

## Check the order's interactions 

On **Orders** module, you may analyze the origin of the order's cancellation. This means it is possible to verify if the cancellation was made by the marketplace or by the store itself.

To see the order's interaction, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. click the desired order, going to the [order's details page](https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
3. In the **Order History** section, click on the button `View Interactions`.

### Cancellation made by marketplace

You may identify on the order interactions if the cancellation was made by the marketplace through the key that was used in the cancel request (`Cancel requested`) where the origin of the request is displayed:

`vtexappkey-marketplacename-mktpkey`

When an order is not canceled by the marketplace, either the name of the user who performed the cancellation (`Cancel Requested`), or the key of the VTEX integration (`Cancel requested by vtexappkey-appvtex`) is displayed.

### Cancellation made by the store

On **Orders** module, the store's users are able to make cancellations manually, and the ERP may send cancellation requests at any time. Also, the `Cancellation grace` status enables users to request the store approval for cancellation of the order.

In these cases, the order status will be `Cancellation requested`. Upon approval, or a new cancellation request sent by store users, the status will change to `Canceled`.

All these changes can be viewed on the order's interactions, on the [order's details page](https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
