---
title: 'Capturing the IP of an order'
id: 3WSy36WlOEk8Oc6escGmEy
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.278Z
updatedAt: 2021-09-21T16:38:08.036Z
publishedAt: 2021-09-21T16:38:08.036Z
firstPublishedAt: 2019-01-24T21:55:45.541Z
contentType: tutorial
productTeam: Post-purchase
author: authors_41
slugEN: how-to-capture-the-ip-of-an-order
locale: en
legacySlug: how-to-capture-the-ip-of-an-order
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

To retrieve the IP of a customer that placed an order at your store, you can analyze information on the payment made, which will inform it. 

## Retrieve the IP manually

When you open an order, click "See transaction details" in the payment box:

![ip pedido1 EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Finally, the IP is visualized on the top right corner:

![ip pedido2 EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

See more details on [How to visualize the order detail](/en/tutorial/how-to-view-the-orders-details)

## Get the IP by API

To capture the IP by integration, it is possible to check the API Get Order with the orderID.

>ℹ️ [See documentation of API OMS](https://developers.vtex.com/reference/orders#getorder)

Once the Order Json is obtained, it is possible to capture the `transactionId` and check the API **Get Transaction Details** with the transaction ID.

>ℹ️ [See documentation of API Transaction](https://developers.vtex.com/reference/transaction-process#transactiondetails)

Finally, from this last call it is possible to check the `ipAddress` field.
