---
title: 'SLA errors in marketplace integration orders'
id: X8lSfxT44OyxkxwvnRk1X
status: PUBLISHED
createdAt: 2021-08-02T22:55:49.181Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:48:42.116Z
firstPublishedAt: 2021-08-02T23:29:49.747Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sla-errors-in-marketplace-integration-orders
legacySlug: sla-errors-in-marketplace-integration-orders
locale: en
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Logistics
  - Integrations
symptomFilters:
  - Sync issue
  - Misconfiguration
---

When a marketplace order is not integrated into VTEX because of an SLA error, an error message is displayed for each order. To check the errors, in the VTEX Admin, go to **Marketplace > Connections > Orders**, or type **Orders** in the search bar.

SLA is the service agreement between the store and the marketplace. The error means that something is preventing delivery to the end customer. To identify the cause, run a [shipping simulation](/en/tutorial/simulacao-de-frete).

The most common SLA errors in marketplace order integration are:

- **Out of stock**
- **Item not in the collection or sales channel**
- **Delivery zip code not covered**
- **Loading dock without a sales channel**
- **Inactive SKU**

## Solution

To fix SLA errors in marketplace order integration, consider the options in the following table. After fixing the cause, reprocess the order under **Marketplace > Connections > Orders** by clicking **Actions > Reprocess**. If the error persists, open a [VTEX support ticket](/en/docs/tutorials/opening-tickets-to-vtex-support).

|Error message|Meaning|Required action|
|---|---|---|
|**Out of stock**|One or more SKUs in the order are unavailable.|See [Out-of-stock errors in marketplace integration orders](/en/troubleshooting/out-of-stock-errors-in-marketplace-integration-orders).|
|**Item not in collection or sales channel**|The SKU is not included in the collection or sales channel defined for the marketplace.|Associate the SKU as described in [Associate a SKU to a sales channel](/en/docs/tutorials/associate-a-sku-to-a-trade-policy).|
|**Delivery zip code not covered by the shipping strategy**|Delivery to the order address is not included in the shipping policy.|Update the [shipping policy](/en/tutorial/politica-de-envio--tutorials_140?&utm_source=autocomplete) so it covers the zip code.|
|**Loading dock not associated with sales channel**|The dock used for delivery is not linked to the marketplace sales channel.|When [adding the dock](/en/docs/tutorials/managing-loading-docks), link it to the marketplace sales channel.|
|**Inactive SKU**|The SKU is not active, and only active SKUs are integrated.|Check the status under **Catalog > Products and SKUs** and activate the SKU.|
