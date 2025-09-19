---
title: 'Partial invoice settlements in OMS'
id: 57DxOPAIGassIOYDNPQftv
status: PUBLISHED
createdAt: 2022-06-27T20:36:59.586Z
updatedAt: 2022-08-26T18:00:02.539Z
publishedAt: 2022-08-26T18:00:02.539Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2022-06-27-partial-invoice-settlements-in-oms
locale: en
legacySlug: partial-invoice-settlements-in-oms
announcementImageID: 'undefined'
announcementSynopsisEN: 'Partial invoices added to orders trigger partial settlements in the transaction.'
---

When managing orders in OMS, the VTEX order management system, adding the invoice to the order is a required step for its status to change to Invoiced — which indicates that the order has been successfully completed. You can add a [complete](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) or a [partial invoice](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) in scenarios where items in the order or the order amount are changed. 

We improved the OMS so that partial invoices added to orders also trigger partial settlements in the transaction. The total order amount will be updated after adding the invoice, and it corresponds to the amount settled in the VTEX payment gateway. 

> ℹ️ The partial invoices feature is available to all VTEX stores, but the partial settlement in the gateway is in beta. Besides, for partial invoices to trigger partial settlements in the transaction, it is necessary to use a connector with the [Payment Provider Protocol](/en/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Legacy connectors do not support the functionality.

## What has changed?

Previously, adding a partial invoice triggered a total order settlement. This meant that even if the order was partially invoiced, the VTEX gateway recorded the settlement of the order's total amount before the change. This generated an inconsistency between what the store actually received as revenue and what the system logged.

Because of this behavior, the operator needed to anticipate all potential changes in an order before attaching any kind of invoices — even partial ones — considering this process triggered a total settlement of the order's original transaction amount. 

Now the gateway settles the value corresponding to the added invoice. This change also brought some new behaviors in order management:

* You can request changes in the order amount because when a partial invoice is added, the transaction remains open, waiting for the rest of the amount to be settled or canceled — as in the case of changing an order by discounting the amount.   
* The customer is automatically refunded if there is a chargeback of amounts. It is no longer necessary to send the amount difference outside VTEX.  
* Items can be progressively invoiced according to their availability. Suppose an operator detects an item whose value must be removed from an order. In that case, the order can be changed, discounting the item's value — only if the previous invoices settled the corresponding amounts and kept the remaining amount open.  

Learn more in the article [Partial invoice](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).

## Why did we make this change?

We changed the OMS architecture to suit our clients' use. We detected that this is an expected behavior in OMS when settling the updated amount after order invoicing.   

This way, we unlocked new actions and behaviors in the ecommerce routine of operators in charge of invoicing orders.

## What needs to be done?

No action or configuration is needed. The OMS has already been automatically updated to work using the new feature.

To replicate this behavior:

1. Add a [partial invoice to the order](/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe#sending-a-partial-invoice).

    > If you use the new [Order details page (Beta)](/en/tutorial/pagina-de-detalhes-do-pedido-beta--2Y75n54Cc9VizrlG1N6ZNl), access [How to manually invoice an order (Beta)](/en/tutorial/how-to-manually-invoice-an-order-beta--7p1h852V5t54KyscpgxE2v).

2. Make a [change in the order](/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190). 

    > If you use the Order details (Beta) interface, access [How to change items in an order (Beta)](/en/tutorial/how-to-change-order-items-beta--7jekq618QxgbsOxKkXBjE8).

3. After the order changes have been made, you can view all the transaction events, by clicking [See transaction details](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy). 

The same actions can also be done using our Orders API. To do so, check the endpoints:

* [Register Change on Order](https://developers.vtex.com/vtex-rest-api/reference/registerchange)  
* [Invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification)  
* [Retrieve Payment transaction](https://developers.vtex.com/vtex-rest-api/reference/getpaymenttransaction)  
