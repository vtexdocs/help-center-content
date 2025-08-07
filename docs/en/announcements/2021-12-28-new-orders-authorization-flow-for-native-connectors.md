---
title: 'New Orders Authorization Flow for Native Connectors'
id: 3Y6aNbbRJRQxn7kykYPfU6
status: PUBLISHED
createdAt: 2021-12-28T20:44:32.579Z
updatedAt: 2022-01-03T15:38:03.027Z
publishedAt: 2022-01-03T15:38:03.027Z
contentType: updates
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2021-12-28-new-orders-authorization-flow-for-native-connectors
locale: en
legacySlug: new-orders-authorization-flow-for-native-connectors
announcementImageID: ''
announcementSynopsisEN: 'Orders from native connectors that present price divergence errors are now processed by Orders management.'
---

When the price set by a seller is different from the price offered by the marketplace, orders placed on marketplaces may not be processed correctly. In VTEX, the Orders Authorization flow allows the control and automatic approval of these orders, based on the configuration that the seller makes of a [Price Divergence rule](/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW).

This feature had global reach for VTEX marketplaces, external marketplaces, and [certified connectors (partners)](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-certified-connector-partner), but was in Beta phase for native connectors. It now applies to all integrations with [native connectors](/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex), with the exception of Zoom.

With the improvement, the seller [sets the Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe), and orders with native connector price difference errors are now processed by the Orders Authorization flow. This allows you to create automatic approval rules and rules that rely on manual approval. Another benefit is that it is easier to manage orders with price divergence, as this process is now done in **Orders management**.

## What has changed?

The [Price Divergence rule](/en/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) was valid for VTEX marketplaces, external marketplaces and certified connectors (partners). Now it is also valid for integrations with native connectors.

The following table compares the order processing flow for native connectors _before_ and _now_:

| **BEFORE** | **NOW** |
| ---------- | ---------- | 
| The configuration of an order processing rule with an error was done in the integration configuration step, by filling in a mandatory field in the connector's registration. | The processing of orders with an error is made in the [configuration of the Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe), in the Orders authorization flow. |
| Orders with price divergence error were not created automatically, only after manual reprocessing. | Orders with price divergence error are created automatically. [Manual approval](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#approving-orders-manually) of an order is only necessary when you configure an authorization rule that requires this action. |
| The order's stock reservation was not carried out. | The order's stock reservation is carried out automatically. |
| The configuration only allowed defining a percentage range of the order price to authorize and another range to deny the integration of an order with price divergence. | [Configuring the Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) allows you to create different automatic rules for various percentage ranges of the order price. You can create rules that require manual approval from an authorized user. |
| Any user with access permission to VTEX Admin could manually reprocess orders with price divergence error, in **MARKETPLACE > Integrations > Orders**. | Only authorized users can [manually approve](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#approving-orders-manually) orders with price divergence error. |
| Order management was performed in VTEX Admin, under **MARKETPLACE > Integrations > Orders**. | The management of orders with price divergence is carried out in the VTEX Admin, under **ORDERS > Orders management > All orders**. |

Mandatory fields for setting up order processing with price divergence error had different names in native connectors:

- **Mercado Libre Classic and Premium:** Acceptable price divergence percentage.
- **Amazon:** Price Divergence Rate (Percentage).
- **Dafiti:** Price Divergence Rate (Percentage).

These fields were removed from the connector registers and the following message was added: 

> Note: Orders with price divergence between the marketplace and VTEX will only be integrated after [configuring a Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

<div class = "alert alert-info">
When first integrating with a native connector, it is recommended that the seller create the Price Divergence rule before configuring the integration. Not following the recommendation does not prevent the integration from being completed.
</div>

For the seller that integrates with a native connector for the first time and does not create the Price Divergence rule, orders with price divergence error will be pending in the VTEX Admin, in **MARKETPLACE > Integrations > Orders**. The error message on the interface is as follows:

> The order price in the marketplace is different from the price determined by VTEX. To automatically integrate orders with price divergence in the OMS, go to _Orders > Orders management > Order authorization_ and [configure a Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

For sellers who are already integrated with native connectors, the previous configuration in the registration of the integration connector remains valid. To join the new flow, you need to [configure a Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

## Why did we make this change?

Orders with price divergence error can be frequent in integrations with native connectors. Since no stock was reserved for these orders in the old flow, the result was greater difficulty in managing the stock and a decrease in the conversion rate.

The main benefits of the new flow are:

- Versatile options for configuring automatic processing rules by [configuring the Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergenc). You can define different authorization rules for percentage ranges of the order price and create rules that require manual approval from an authorized user.
- Greater control over what percentage of the order price should rely on manual approval and which can be automatically approved or denied.
- More security in your operation, with the control of users with permission to [manually approve orders](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#approving-orders-manually).
- Guarantee that orders with price divergence error are created automatically. What may be pending is manual approval of the order, when an authorization rule is configured for this.
- Order stock reservation is assured, as the order creation is no longer pending.
- Easier management of orders with price divergence error, which is now made in **Orders management**.

## What needs to be done?

To activate the Orders Authorization flow for native connectors, you need to [configure a Price Divergence rule](/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). Only users with Super Admin (Owner) or OMS Full [roles](/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) can do this.

Once you have configured the Price Divergence rule, it will apply to all marketplaces where you are a seller.

For VTEX marketplaces, external marketplaces and certified connectors (partners), as long as the Price Divergence rule has not been created, orders with price divergence error are automatically approved.

<div class="alert alert-warning">
For <a href= "https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex">native connectors</a>, while the seller does not <a href= "https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe">configure the Price Divergence rule</a>, orders with price divergence are retained. You can track them in your VTEX Admin by clicking on MARKETPLACE > Integrations > Orders.
</div>

If you don't want native connectors to obey the Price Divergence Rule, you can keep the previous flow. In this case, [contact the VTEX support team](https://support.vtex.com/hc/en-us/requests).
