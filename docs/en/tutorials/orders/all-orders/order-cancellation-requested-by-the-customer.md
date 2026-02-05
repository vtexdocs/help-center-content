---
title: 'Order cancellation requested by the customer'
id: 3wEI6DUNtecooG2Ki4Akqo
status: PUBLISHED
createdAt: 2019-01-24T21:42:57.276Z
updatedAt: 2024-04-01T15:51:58.098Z
publishedAt: 2024-04-01T15:51:58.098Z
firstPublishedAt: 2019-01-24T21:42:57.707Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-cancellation-requested-by-the-customer
legacySlug: how-does-cancellation-work-when-requested-by-the-customer
locale: en
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Customers may request to cancel their order for various reasons. They can [cancel an order automatically](/en/tutorial/order-cancellation-requested-by-the-customer--3wEI6DUNtecooG2Ki4Akqo#cancellation-within-the-grace-period) within the **grace period for cancellation**, or after that period upon the [retailer cancellation approval](/en/tutorial/order-cancellation-requested-by-the-customer--3wEI6DUNtecooG2Ki4Akqo#cancellation-approved-by-the-retailer). 

> ❗ Once an order is canceled, it is no longer possible to change its status.

> ⚠️ Orders with [partial invoices](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) cannot be [canceled](/en/tutorial/como-cancelar-pedido--tutorials_186). If the customer wants to replace or remove items from the order, it is possible to [change the order](/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

## Cancellation within the grace period

When the customer requests to cancel an order during the [grace period](/en/tutorial/setting-the-grace-period-for-order-cancellation--jYFdnPDtNm4WCEkYWqqC), the order is automatically canceled without needing the store's authorization. Until that moment, following the [order flow](/en/tutorial/order-flow-on-the-oms--tutorials_196), the retailer did not have to take any action regarding that order.

* Customers must request the cancellation in __My Orders__, by clicking `Request order cancellation`.

> ℹ️ When the customer requests the order's cancellation within the grace period, the notification of this action is sent only to the [Sponsor user](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) (admin master) of the account.

## Cancellation approved by the retailer

When the customer requests to cancel an order outside the grace period, the retailer must approve the cancellation. To do that, the platform shows the cancellation request to the store's admin in the following ways:

* On the order flow screen, you will find the cancellation request with the reason indicated by the customer, and the order status `Cancellation requested`. 
* Via an email sent by the platform informing about the cancellation request. This is a [VTEX DO](/en/tutorial/vtex-do--tutorials_203) task called `Cancellation requested`. With VTEX DO, retailers can manage pending cancellation requests. 

The retailer must approve or reject the cancellation request. If the retailer does not approve it, we recommend telling the customer about the impossibility of canceling the order.

Even if the retailer uses the [VTEX DO](/en/tutorial/vtex-do--7KMbRL4OslN8DTX9oiuCiu) to deny the cancellation requested by the customer, the retailer must proceed with the order's [billing](/en/tutorial/faturar-um-pedido--7p1h852V5t54KyscpgxE2v), which is what makes the order follow its flow.

> ⚠️ If the [Order replacement](/en/tutorial/order-replacement--2IK9mwQjBKseQmE8K8saO8#enabling-the-feature) feature is enabled, customers will be able to change or cancel orders at any time, including after the grace period for cancellation.

## Cancellation reason

When canceling the order, the shopper can inform the reason for the cancellation. This configuration is customizable, with some options as default. 

To change the options, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Checkout**, or type *Checkout* in the search bar at the top of the page and select *Store Settings / Storefront*.
2. On the desired site's card, click on the gear icon.
3. Click the **Orders** tab.
4. Select the desired language.
5. Edit the available options, or add a new option by clicking `Add Another Reason`.
6. Click **Save**.

## Related articles

- [Why was my order canceled?](/en/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493)
- [Setting the grace period for order cancellation](/en/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido)
- [Why was my order canceled on the VTEX platform, and not in the marketplace?](/en/faq/por-que-meu-pedido-foi-cancelado)
- [Order replacement](/en/tutorial/order-replacement--2IK9mwQjBKseQmE8K8saO8)

