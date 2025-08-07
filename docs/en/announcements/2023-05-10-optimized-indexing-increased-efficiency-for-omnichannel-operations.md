---
title: 'Optimized indexing: Increased efficiency for omnichannel operations'
id: 5P6ydhXrf3HKVAISNSJSo5
status: PUBLISHED
createdAt: 2023-05-10T13:42:29.935Z
updatedAt: 2023-05-25T15:28:11.643Z
publishedAt: 2023-05-25T15:28:11.643Z
contentType: updates
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2023-05-10-optimized-indexing-increased-efficiency-for-omnichannel-operations
locale: en
legacySlug: optimized-indexing-increased-efficiency-for-omnichannel-operations
announcementImageID: ''
announcementSynopsisEN: 'Optimized indexing enables complex omnichannel operations and reduces time and processing costs.'
---

[Indexing](/en/tutorial/understanding-how-indexation-works--tutorials_256) is an automatic process that runs every time a product is created or updated on a VTEX store. This process ensures that the products displayed to the store customers are always up to date with the latest version.

To improve this flow, we redesigned indexing to process the minimum necessary information, significantly reducing time and processing costs. This allows VTEX stores to build complex [omnichannel](/en/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) operations with greater reliability and competitiveness.

## What has changed?

Previously, indexing required higher time and costs and was less stable, which could result in displaying outdated or unavailable products to store customers while the process ran. To increase the efficiency of this flow and prevent issues in the purchase experience, we optimized indexing so that it processes the minimum necessary information.

We implemented two main changes to achieve this:

| __Before__ | __After__ |
|---|---|
| __General indexing:__ Updating any product or SKU information, whether price or stock, required reprocessing all information. | __Granular indexing:__ We now differentiate changes to price, stock, and catalog and process only the modified information instead of processing the information in all modules every time. We also refined the changes that trigger indexing, which prevents unnecessary processing. |
| __Global indexing:__ To publish the latest version of an item to the store and search results, the information of all product SKUs had to be reprocessed in all sellers and linked trade policies. | __Indexing by seller:__ Now, we only process the SKU in the seller that had a change instead of reprocessing all SKUs in all sellers. |

Consider the following example: A seller changed the price of a SKU that is sold by 99 other sellers in a marketplace that has 10 trade policies. The product linked to that SKU has 4 other SKUs in addition to the one that was changed. The internal indexing flow in each case would be the following:

- __Before__: The indexing process required reprocessing price, stock, and catalog information for all SKUs of the related product (5) in each trade policy (10) and on each seller (100). In other words, part of the product indexing process was repeated 550 times due to a small change.
-	__After__: Optimized indexing allows you to reprocess just the price change in each trade policy, solely for the SKU that was modified. This way, the change is processed one time in each trade policy (10) on the marketplace side or one time on the seller that made the change.

During the month of May, we will apply optimized indexing to all accounts.

We have already made another adjustment in all stores, including those using the previous indexing: we have removed the **Indexing Pending** status from the **Catalog > Products & SKUs** page in the VTEX Admin. The date of the last indexing and the `View on website` button are still displayed to allow users to access the product even while updating information. 

In stores that already use the [new design of the Products & SKUs page (Beta)](/en/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By), the **Indexing Pending** status does not exist because the product remains **Published** even after changes.

## Why did we make this change?

The aim of the new indexing architecture is to increase conversion and prevent items from being unavailable for an invalid reason. Through this change, we are providing a more efficient and consistent solution, which improves the customer experience in your store.

This improvement allows VTEX stores to build and expand complex omnichannel operations at large scale, including [franchise](/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) models, [marketplaces](/en/tutorial/marketplace-strategies-at-vtex--tutorials_402) with a large number of sellers, and regionalized experiences.

## What needs to be done?

Optimized indexing will be automatically implemented in all VTEX stores in May. The removal of the **Indexing Pending** status on the **Catalog > Products & SKUs** page in VTEX Admin has now been applied to all accounts.

