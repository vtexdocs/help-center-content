---
title: 'Troubleshooting price divergence errors in marketplace orders'
id: 6MbmPX4SKyRkcTJxVhRna8
status: PUBLISHED
createdAt: 2021-08-03T21:56:44.320Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T21:22:43.831Z
firstPublishedAt: 2021-08-03T22:16:58.511Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: troubleshooting-price-divergence-errors-in-marketplace-orders
legacySlug: resolution-of-price-divergence-errors-in-marketplace-integration-orders
locale: en
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Prices
  - Integrations
symptomFilters:
  - Sync issue
  - Misconfiguration
---

When the price set by the seller differs from the price offered by the marketplace, the order may not be integrated. To check the error, in the VTEX Admin, go to **Marketplace > Connections > Orders**, or type **Orders** in the search bar.

The most common price divergence error in marketplace orders is:

- **Price different from the amount determined by VTEX**

## Solution

To fix price divergence errors in marketplace orders, consider the option in the following table:

|Error message|Meaning|Required action|
|---|---|---|
|**The order price in the marketplace is different from the price determined by VTEX.**|The seller price and the marketplace price diverge. For native connectors, the order is retained until a price divergence rule exists. For VTEX marketplaces, external marketplaces, and certified connectors, the order is approved automatically while the rule does not exist.|[Configure a Price Divergence rule](/en/docs/tutorials/configuring-price-divergence-rule). Only users with the Super Admin (Owner) or OMS Full [role](/en/docs/tutorials/roles) can do this. The rule applies to every marketplace where the store is a seller. Learn more in [Why was the order closed with the wrong price?](/en/troubleshooting/my-order-was-closed-with-the-wrong-price).|
