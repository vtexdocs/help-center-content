---
title: 'Canceling an order'
id: 4ts2ItvjYo8wm5gg76miS3
status: PUBLISHED
createdAt: 2019-11-18T11:50:32.691Z
updatedAt: 2024-04-01T18:04:36.603Z
publishedAt: 2024-04-01T18:04:36.603Z
firstPublishedAt: 2019-11-18T12:20:50.741Z
contentType: trackArticle
productTeam: Post-purchase
slug: canceling-an-order
locale: en
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: orders
---

You can cancel an order with VTEX in three different ways:
- Through the **Orders** module in VTEX Admin.
- Through API.
- Following the customer's request.

>⚠️ Once an order is canceled, you cannot change its status. Orders that have **invoiced** status can not be canceled.

>ℹ️ Orders with [partial invoices](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) cannot be [canceled](https://help.vtex.com/en/tutorial/como-cancelar-pedido--tutorials_186). If the customer wants to replace or remove items from the order, it is possible to [change the order](https://help.vtex.com/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

## Cancellation through Orders module

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Click the desired order.
3. On the top bar, click `Cancel order`. 
4. Click `Confirm`.

- When the order is in `Ready for handling` or `Preparing Delivery` status, cancellation must be done twice. When you first click **Cancel**, the status changes to `Cancellation requested`.
- When the order is already in the `Cancellation requested` status, simply click **Cancel** again to change the order to `Canceled`.
- To continue with this order, simply enter the invoice.

## Cancellation through API Rest

You can cancel through your ERP using the [Cancel order API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel). 

Check out our [ERP integration guide](https://developers.vtex.com/docs/erp-integration-set-up-order-processing) for the full walkthrough.

## Cancellation requested by the customer

The customer can request the cancellation of the order through the **My orders** screen.

If the customer requests cancellation within the grace period of the order, which is [configurable](https://help.vtex.com/en/tutorial/setting-the-grace-period-for-order-cancellation), the store does not need to approve cancellation. It is considered that the picking, packing and delivery flow has not yet started, so the cancellation would not bring any burden to the store.

After the grace period, it is understood that the store is already acting on the order. In such case, the store must confirm the cancellation request.

Check out our article [customer requested full cancellation](https://help.vtex.com/en/tutorial/how-does-cancellation-work-when-requested-by-the-customer).
