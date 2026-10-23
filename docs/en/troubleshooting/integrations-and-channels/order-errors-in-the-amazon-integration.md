---
title: 'Order errors in the Amazon integration'
id: QCOquR8cai882HhDOqNm7
status: PUBLISHED
createdAt: 2021-08-31T15:43:51.365Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:46:13.266Z
firstPublishedAt: 2021-08-31T16:03:20.021Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-amazon-integration
legacySlug: order-errors-in-the-amazon-integration
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

When an order integration error occurs between **Amazon** and a store, an error message is displayed for each order. To check the errors, in the VTEX Admin, go to **Marketplace > Connections > Orders**, or type **Orders** in the search bar.

The most common Amazon order integration errors are:

- **SLA error**
- **SKU out of stock**
- **Inactive SKU or SKU outside the sales channel**
- **Unidentified SKU**

## Solution

To fix Amazon order integration errors, consider the options in the following table:

|Error message|Meaning|Required action|
|---|---|---|
|**No available sla to deliver this order**|Something is preventing the delivery of the order to the end customer.|See [SLA errors in marketplace integration orders](/en/troubleshooting/sla-errors-in-marketplace-integration-orders) to identify the cause and apply the fix.|
|**Order with SKU out of stock**|One or more SKUs in the order are out of stock or do not have enough inventory.|See [Out-of-stock errors in marketplace integration orders](/en/troubleshooting/out-of-stock-errors-in-marketplace-integration-orders) and follow the corresponding fix.|
|**Order with SKU inactive or out of sales channel**|The SKU is not active, or it is not associated with the sales channel used on Amazon.|Check the status under **Catalog > Products and SKUs**. Activate the SKU by [filling in the SKU registration fields](/en/docs/tutorials/adding-or-editing-skus) or by [activating SKUs in bulk](/en/docs/tutorials/activating-skus-in-bulk). If the SKU is already active, [associate it with the sales channel](/en/docs/tutorials/associate-a-sku-to-a-trade-policy).|
|**Sku in order don't belong to a VTEX Store, sku id it's not an integer**|The SKU was not identified on VTEX because it was removed from the catalog or because Amazon sent incorrect information.|If the SKU is listed in the catalog, contact Amazon. If the item no longer exists, the order cannot be integrated.|
