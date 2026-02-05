---
title: 'My order was closed with the wrong price'
id: 5an0m7uLMwxWRlJlsyKxvl
status: PUBLISHED
createdAt: 2025-05-07T13:03:46.201Z
updatedAt: 2025-08-14T22:08:07.983Z
publishedAt: 2025-08-14T22:08:07.983Z
firstPublishedAt: 2025-05-07T13:25:11.579Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: my-order-was-closed-with-the-wrong-price
legacySlug: my-order-was-closed-with-the-wrong-price
locale: en
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags:
  - Orders
  - Integration
  - Marketplace
---

In the VTEX Admin, under **Marketplace > Connections > Orders**, you can check the status of orders closed by certified marketplaces. Orders closed with the wrong price will show the status **Processed with error**. 

> ℹ️ To prevent orders from being closed with the wrong price, you can create [Price Divergence rules](/en/docs/tutorials/price-divergence-rule).

There are three possible causes for an order to be closed with the wrong price:
- [Product price assumed by the marketplace](#product-price-assumed-by-the-marketplace)
- [Shipping calculated by the marketplace](#shipping-calculated-by-the-marketplace)
- [SKU price changed before order integration](#SKU-price-changed-before-order-integration)

> ℹ️ See other marketplace order integration errors [in this article](/en/tutorial/porque-os-pedidos-do-marketplace-nao-integram-com-minha-loja--275YvF8dyry5KmfY9epoET).

## Product price assumed by the marketplace

This occurs when there's an issue sending the price from VTEX to the marketplace. This can happen for two reasons:
- An integration error, which will be reported on the integrations dashboard.
- A problem on the marketplace side when calculating the new price, even after successfully receiving the update from VTEX.

### Solution 	

In this case, you must reprocess the order ignoring the divergence. To do this, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Connections > Orders**, or type **Orders** in the search bar at the top of the page.
2. Click the `Actions` button.
3. Select `Ignore divergence and reprocess`.
4. Go to the **Orders** tab and click `All orders`.
5. Go to the reprocessed order page.
6. At the top, click `Approve`.

> ⚠️ This integration doesn't change the order amount. It will only process the order despite the price divergence.

## Shipping calculated by the marketplace

In the logistics settings for marketplace sales, VTEX stores can choose to use the shipping calculation of the partner. When this option is selected, VTEX doesn't calculate shipping. However, this may lead to price differences.

Even if your store is using the VTEX shipping calculation, an order may still be closed with the marketplace shipping cost. This happens when the marketplace doesn't request VTEX to calculate shipping or when an error occurs in this process. In this case, the marketplace may use contingency values to avoid losing the sale. If these values differ from those calculated by VTEX, the order may be closed with the wrong price.

### Solution

In this case, you must reprocess the order. To do this, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Connections > Orders**, or type **Orders** in the search bar at the top of the page.
2. Click the `Actions` button.
3. Select `Reprocess`.

## SKU price changed before order integration

This occurs when an order is closed and, shortly afterward, the store changes the price of a SKU included in that order. Since the integration of a completed order takes a few minutes, by the time the integration finishes, the SKU price on VTEX may already be different. As a result, the VTEX calculation no longer matches the calculation of the marketplace, leading to a price divergence.

### Solution

In this case, you must reprocess the order. To do this, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Connections > Orders**, or type **Orders** in the search bar at the top of the page.
2. Click `Actions`.
3. Select `Reprocess`.

