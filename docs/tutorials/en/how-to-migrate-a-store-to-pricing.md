---
title: 'Pricing Features'
id: 2b4KuARqwsUw0i8AwqYauK
status: DRAFT
createdAt: 2019-01-24T20:45:36.290Z
updatedAt: 2020-11-26T20:02:41.784Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:09:39.222Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: how-to-migrate-a-store-to-pricing
locale: en
legacySlug: how-to-migrate-a-store-to-pricing-v2
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

Pricing is VTEX's new pricing module. This version introduces new features that allow the evolution of your store's price management.

## Pricing features

Pricing has some important differences over the first version. Here are its features:

- Scheduled price
- Import/Export of prices through worksheet
- Price by minimum quantity
- Cost price and Markup range
- Price rules by trade policy
- Rounding Rules
- Price variation lock
- Conditional prices (coming soon!)
- Price table with hierarchy (coming soon!)


## Compatibility between APIs

- Pricing v1 APIs are compatible with Pricing v2, which allows your store to migrate without impacting integration. However, you should keep in mind that Pricing v1 APIs have lower performance and don't take advantage of all Pricing v2 features.
- Pricing v1 APIs only know how to deal with fixed prices, which, by definition, overlap with dynamic prices. Using the old APIs, you can not take advantage, for example, of the price rules used for automatic price composition from the cost price.
- Pricing v1 APIs override any fixed price that exists in Pricing v2. This means that prices created through the administrative environment will be replaced by whatever is sent by the compatibility APIs.
- Old APIs always have their route started with `/api/pricing/pvt/price-sheet`. With the evolution of Pricing v2, they are expected to be discontinued, but no date has been set so far.
- Note that Webservice also changes prices. It's common that price values are passed in the `StockKeepingUnitInsertUpdate` method (current path to Catalog integration), since they are required fields. However, it's possible to pass the price field as `null` so that no price changes are made.
- The Pricing v2 APIs are all documented in our Postman collection. You can access the documentation [through this link](https://developers.vtex.com/reference/pricing-api-overview).

## Migrating a store to Pricing v2

>ℹ️ Every new VTEX store is already created with Pricing v2.

Pricing v2 is available for stores that wish to migrate to the new module. Currently, we have an automatic migration process, in which we verify the compatibility of Pricing v2 features with the features currently used by the store.

If your store is not using Pricing v2 yet, you can request that our support team migrate it to the new module. You should take into account the current features of Pricing v2 at the time of migration. If your store uses some of the features of the old Pricing that is not already present in Pricing v2, we suggest that you wait before migrating.

In the future, features that are not yet present in Pricing v2 will be available and all VTEX stores will be migrated.
