---
title: 'How to cancel orders'
id: tutorials_186
status: PUBLISHED
createdAt: 2017-04-27T22:15:47.296Z
updatedAt: 2024-04-01T17:34:46.564Z
publishedAt: 2024-04-01T17:34:46.564Z
firstPublishedAt: 2017-04-27T23:00:46.851Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: canceling-orders
locale: en
legacySlug: canceling-orders
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Orders on VTEX can be canceled at practically any status during their evolution. It must be stressed that once canceled, the order status cannot be altered.

<div class = "alert alert-warning">
Orders with <a href="https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">partial invoices</a> cannot be canceled. If the customer wants to replace or remove items from the order, it is possible to <a href="https://help.vtex.com/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190">change the order</a>.
</div>

There are two ways of doing this, through the VTEX Admin or API.

## Cancellation through Orders module

1. In the VTEX Admin, go to **Orders > All Orders**, or type *All orders* in the search bar at the top of the page.  
2. In **All orders**, access the desired order.
3. In the top pf the page, click `Cancel order`.
4. Fill in the fields.
5. Click `Confirm`.

When the status of the order is **Ready for Handling** or **Handling Shipping**, cancellation must be done twice. This is because when you click on the button for the first time the status is changed to **Cancellation requested**.
When the status of the order is **Cancellation requested**, just click again on **Confirm cancellation** to change the order to **Canceled**. If you want to continue with this order, just enter the tax receipt.

It is not possible to change an order when its status already shows `Invoiced`.

## Cancellation using the ERP

Using the ERP, this action can take place through our REST API, according to our [ERP Integration Guide](https://developers.vtex.com/docs/erp-integration-set-up-order-processing). You can use the [Cancel order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel) endpoint.

## Cancellation requested by the customer

When the order cancellation is requested by the customer, the flow is different. Refer to [this article](https://help.vtex.com/en/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo) to unserstand how cancellation happens in such case.
