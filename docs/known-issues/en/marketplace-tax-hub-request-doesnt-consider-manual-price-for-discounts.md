---
title: "Marketplace tax hub request doesn't consider manual price for discounts"
id: 2pGgbPB7Qm4dXtQauohvx7
status: PUBLISHED
createdAt: 2023-11-08T17:59:41.102Z
updatedAt: 2023-12-06T19:27:50.006Z
publishedAt: 2023-12-06T19:27:50.006Z
firstPublishedAt: 2023-11-08T17:59:41.695Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: marketplace-tax-hub-request-doesnt-consider-manual-price-for-discounts
locale: en
kiStatus: Fixed
internalReference: 932657
---

## Summary


When the account has isMarketplaceResponsibleForTaxes configured, the tax hub request doesn't consider manual prices for item discounts.


##

## Simulation



- Configure taxConfiguration.isMarketplaceResponsibleForTaxes in the orderForm configuration;
- Set manual price for an item;
- The tax hub request won't apply the difference as a discount.


##

## Workaround


NA




