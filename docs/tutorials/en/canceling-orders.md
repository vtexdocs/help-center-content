---
title: How to cancel orders
id: tutorials_186
status: PUBLISHED
createdAt: 2017-04-27T22:15:47.296Z
updatedAt: 2023-03-31T00:26:08.605Z
publishedAt: 2023-03-31T00:26:08.605Z
firstPublishedAt: 2017-04-27T23:00:46.851Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: canceling-orders
legacySlug: canceling-orders
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Orders on VTEX can be canceled at practically any status during their evolution. It must be stressed that once canceled, the order status cannot be altered.

There are two ways of doing this, through the VTEX Admin or API.

## Cancelation through Orders module

1. In the VTEX Admin, go to **Orders > All Orders**, or type *All orders* in the search bar at the top of the page.  
2. In **All orders**, access the desired order;
3. Click on the button **Confirm cancelation** beside the main status card;
4. You will be asked if you want to proceed with this action.

When the status of the order is **Ready for Handling** or **Handling Shipping**, cancellation must be done twice. This is because when you click on the button for the first time the status is changed to **Cancellation requested**.
When the status of the order is **Cancellation requested**, just click again on **Confirm cancellation** to change the order to **Canceled**. If you want to continue with this order, just enter the tax receipt.

**Remember!** It is impossible to change an order when its status already shows **Invoiced**.

## Cancelation using the ERP

Using the ERP, this action can take place through our REST API, according to our [ERP Integration Guide](https://developers.vtex.com/docs/erp-integration-set-up-order-processing).

## Cancelation requested by the customer

When the order cancelation is requested by the customer, the flow is different. Refer to [this article](https://help.vtex.com/en/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo) to unserstand how cancelation happens in such case.
