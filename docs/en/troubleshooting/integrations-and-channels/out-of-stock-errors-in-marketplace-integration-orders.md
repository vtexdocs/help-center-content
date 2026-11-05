---
title: 'Out-of-stock errors in marketplace integration orders'
id: s1i5OCcPFslrMkZJLDnfP
status: PUBLISHED
createdAt: 2021-07-28T19:50:13.475Z
updatedAt: 2026-10-07T22:21:00.000Z
publishedAt: 2023-03-28T14:41:11.666Z
firstPublishedAt: 2021-07-28T19:55:21.464Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: out-of-stock-errors-in-marketplace-integration-orders
legacySlug: out-of-stock-errors-in-marketplace-integration-orders
locale: en
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Orders
  - Integrations
symptomFilters:
  - Sync issue
  - Misconfiguration
---

When a marketplace order is not integrated into VTEX because of an out-of-stock error, an error message is displayed for each order. To check the errors, in the VTEX Admin, go to **Marketplace > Connections > Orders**, or type **Orders** in the search bar.

To check whether the SKU is available, run a [shipping simulation](/en/tutorial/simulacao-de-frete). The simulator shows the product's delivery conditions without placing an order.

The most common out-of-stock errors in marketplace order integration are:

- **Items unavailable**
- **Inactive SKU**
- **Negative inventory**
- **Item not in the collection or sales channel**

## Solution

To fix out-of-stock errors in marketplace order integration, consider the options in the following table. After fixing the cause, reprocess the order under **Marketplace > Connections > Orders** by clicking **Actions > Reprocess**. If the error persists, open a [VTEX support ticket](/en/docs/tutorials/opening-tickets-to-vtex-support).

|Error message|Meaning|Required action|
|---|---|---|
|**Items unavailable**|One or more SKUs in the order have no available quantity.|[Update the quantity of SKUs in stock](/en/docs/tutorials/updating-the-quantity-of-items-in-inventory).|
|**Inactive SKU**|The SKU is not active, and only active SKUs are integrated.|Check the item status in the VTEX Admin, under **Catalog > Products and SKUs**, and activate the SKU.|
|**Negative inventory**|There are more reserved items than the total quantity available in stock.|See [why inventory is negative](/en/docs/tutorials/updating-the-quantity-of-items-in-inventory#why-is-my-inventory-negative) and adjust the available quantity.|
|**Item not in collection or sales channel**|The SKU is not included in the collection or sales channel defined for the marketplace.|Associate the SKU with the integration sales channel, as described in [Associating SKUs with a sales channel](/en/docs/tutorials/associate-a-sku-to-a-trade-policy).|
