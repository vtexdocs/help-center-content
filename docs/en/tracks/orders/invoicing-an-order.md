---
title: 'Invoicing an order'
id: 2WgQrlHTyVo4hLjhUs1LMT
status: PUBLISHED
createdAt: 2019-11-14T16:05:32.413Z
updatedAt: 2023-03-21T20:52:23.012Z
publishedAt: 2023-03-21T20:52:23.012Z
firstPublishedAt: 2019-11-18T12:20:37.060Z
contentType: trackArticle
productTeam: Post-purchase
slug: invoicing-an-order
locale: en
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: orders
---

Entering the invoice in the order is a required step for its status to change to `Invoiced` - a sign that the order has been successfully completed. Remember that once an order is read as invoiced by the system, this status cannot be changed.

You can invoice orders in two ways:
- __Manually:__ In the *VTEX Admin > Orders > All Orders*, click the order and then click the `Invoice` button. Learn more in [How to manually invoice an order](https://help.vtex.com/en/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v).
- __Via API:__ If you have an ERP integration, use the [Order invoice notification request](https://developers.vtex.com/vtex-rest-api/reference/invoice).

## Changing the order status to Invoiced

Only after reaching the total order value will the status change to `Invoiced`, that is, when the order's value matches the invoiced amount. There are three scenarios for invoicing, depending on the order's situation:

- __Unchanged order:__ you must enter an invoice with an amount equivalent to the total value.  
- __Changed order > discounting the amount > followed by a separate invoice:__ you must insert an invoice with the amount remaining after the change. The invoice can be [partial](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe), or complete, if it contains all the amount remaining after the change.  
- __Order with partial invoice > followed by change with discount:__ you must make a [change](https://help.vtex.com/en/tutorial/changing-items-from-a-complete-order--tutorials_190), discounting the remaining amount. To do this, calculate the total amount, minus the partial invoice amount.

## Invoice

The invoice requires attention to the following points:
- __Invoice Number__: This number must be unique per invoice per order. If you enter two invoices with the same number, the system will understand it as a change of invoice.
- __Tracking Number__: This number, along with the tracking URL, enables tracking of the delivery by the customer through emails that are sent with each change to that tracking.
- __Password__: This is the access key for the NF-e (electronic invoice) consultation on the internet. This field must be filled in for electronic invoice cases only.

When the URL and tracking code are entered, with each delivery status update the customer will receive an email notifying them that the delivery has advanced.

Conversation Tracker - the system that manages emails exchanged with the customer - depends on entering some value in this field. If you do not have a tracking number, simply enter any value to activate the notification system.

You can also enter the invoice via the[ Orders API](https://developers.vtex.com/vtex-rest-api/reference/invoice).

