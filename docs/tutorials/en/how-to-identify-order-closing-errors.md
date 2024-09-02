---
title: 'Identifying order closing errors'
id: 4VZvHbDMfuIo0gO6OscgKE
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.682Z
updatedAt: 2023-03-30T15:11:30.251Z
publishedAt: 2023-03-30T15:11:30.251Z
firstPublishedAt: 2019-01-24T22:02:42.931Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slug: how-to-identify-order-closing-errors
locale: en
legacySlug: how-to-identify-order-closing-errors
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Whenever a user clicks on Complete Order, the checkout immediately creates an order on the VTEX platform. At first this order’s status is **incomplete** and it can be found using [filters](https://help.vtex.com/en/tutorial/filtrar-todos-pedidos--tutorials_192). In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.

And since every order has at least one transaction, it is also possible to find this transaction in **Orders > Transactions**. Since this is an error situation, the transaction will probably have been cancelled.

>ℹ️ We recommend that whenever there is an order error, the first place to look is the transaction log in **Orders > Transactions**. Learn more in [Viewing the order's details in Orders](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).

The error message shown to the customer can be the result of different things. From internal errors, such as the failure to reserve an item, to problems with the card, such as incomplete data, or even a response from the gateway, with data input wrongly.
