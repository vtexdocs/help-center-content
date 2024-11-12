---
title: "When trying to approve payment, Orders Managment returns 'authorize-fulfillment' error. What to do?"
id: 1cbaJI69pSMWkugoUkmQ8O
status: PUBLISHED
createdAt: 2017-12-21T14:02:07.873Z
updatedAt: 2023-03-31T12:47:47.903Z
publishedAt: 2023-03-31T12:47:47.903Z
firstPublishedAt: 2017-12-21T14:35:13.955Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slugEN: when-trying-to-approve-payment-orders-managment-returns-authorize-fulfillment-error-what-to-do
locale: en
legacySlug: when-trying-to-approve-payment-oms-returns-authorize-fulfillment-error-what-to-do
---

A common mistake in payment approval at the **Orders** module is the lack of inventory for a particular SKU included in the cart. It can occur when an order is approved and the item reservation had been previously released.

In such case, when you try to approve the payment in **Orders**, you will see the following error:

![error authorize fulfillment](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

To confirm that this is the problem, in the [order details page](https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), click `View Interactions` to see the order details.

If there is an error such as "The requested reservation *00-abc* could not be guaranteed for the *00-xyz* order", it is because one or many of the SKUs included in the cart doesn't have available inventory, which prevents the purchase from being approved. In this case, correcting the inventory should allow the order to move on.

For more information, see [Checking error details in the orders](/en/faq/how-to-check-error-details-in-the-orders).
