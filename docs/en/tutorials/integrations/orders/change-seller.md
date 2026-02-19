---
title: 'Change Seller'
id: 5TBAwO2kOAMw44uyaaQMQO
status: PUBLISHED
createdAt: 2018-02-05T21:31:15.704Z
updatedAt: 2023-06-13T14:35:00.451Z
publishedAt: 2023-06-13T14:35:00.451Z
firstPublishedAt: 2018-03-05T14:10:53.091Z
contentType: tutorial
productTeam: Channels
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: change-seller
legacySlug: how-to-use-the-change-seller
locale: en
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

The Change Seller is the feature that gives marketplaces the autonomy to change the seller that will fulfill an order. 

> ℹ️ The Change Seller feature can only be configured using APIs. For more information, see our [Change Seller documentations for developers](https://developers.vtex.com/vtex-rest-api/docs/change-seller).

Sellers can be changed in two situations: 

- Seller cancels the order.
- Marketplace decides to change the seller.

![seller_cancela_pedido_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/orders/change-seller_1.png)

You can [set the time window to change seller from 0 to 30 days](https://developers.vtex.com/vtex-rest-api/reference/updatewindowtochangeseller); by default, it is two days. When the window to change seller is set to 0 days, there is not an actual period for switching sellers, so even though the feature is configured, it does not work in practice, and the order proceeds to cancellation.

Upon being notified by the seller about the order cancellation, the marketplace can configure how many days they have to decide whether to cancel the purchase or change the seller. But pay attention: if the marketplace chooses to change sellers, the decision to inform customers of such changes is the marketplace’s responsibility.

![mkt_cancela_seller_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/orders/change-seller_2.png)

## Limitations

You can not change sellers in the following cases:

- Order items with services or attachments.
- Intermediate orders in the [Multilevel Omnichannel Inventory](/en/docs/tutorials/multilevel-omnichannel-inventory).
- Orders with other changes.
- Orders with taxes.
- Orders with [split payment](/en/docs/tutorials/split-payment) that did not use a credit card.
- Orders with split payment into multiple sellers.
- Orders that use the seller's payment method and do not use a tokenized credit card.
- Orders that use the seller's payment method and have more than one seller involved.
- Orders that use the seller's payment method and were paid in installments with interest.
- Orders that use the seller's payment method and do not have the same installment conditions and payment methods that the new seller accepts.
- Orders placed prior to the Change Seller announcement.
- Orders from an original non-VTEX seller.
- If the new seller is not from VTEX and there are services or [assembly options](/en/docs/tutorials/assembly-options) involved.
- If the new option is for pickup in [pickup points](/en/docs/tutorials/pickup-points).
- In case the marketplace decides to change sellers, it is only possible to do it if the order is in the following [statuses](/en/docs/tutorials/order-flow-and-status): `payment-pending`, or `waiting-for-authorization`.
- Orders from sellers external to VTEX.
- If the chosen carrier isn't associated with the order's [trade policy](/en/docs/tutorials/how-trade-policies-work).
