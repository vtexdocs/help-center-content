---
title: "The order was billed in the ERP but remains in the 'Preparing Delivery' status. What to do?"
id: 4szpXviNMAkwOe2cCiMiMe
status: PUBLISHED
createdAt: 2017-12-19T13:00:23.800Z
updatedAt: 2023-03-31T21:05:01.214Z
publishedAt: 2023-03-31T21:05:01.214Z
firstPublishedAt: 2017-12-19T13:25:22.289Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_24
slugEN: the-order-was-billed-in-the-erp-but-remains-in-the-preparing-delivery-status
locale: en
legacySlug: the-order-was-billed-in-the-erp-but-remains-in-the-preparing-delivery-status
---

If an order has been successfully billed in your ERP but is stuck in the `Preparing Delivery` status at VTEX, the product may be unavailable in the marketplace API, which prevents the status from changing.

To verify that this is your case, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Click the desired order to go to the [order's details page](https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
3. In the **Order Status** section, click `Try Again`.

Check if a message appears, and if it describes the error.

The normal behavior of the system, in cases where the marketplace returns an error information such as `500` (internal server error), is to make automatic retries to process the status.

But if the message informs you that `the request to the service resource returned HTTP status '404 (not found)'`, it means that the route was not found - that is - the product was not found in the marketplace.

In this case, you should contact the marketplace and ask that they check the integration service.
