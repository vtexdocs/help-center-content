---
title: 'Precautions when setting the order numbering'
id: VAKKptfcaOxFxM8gfPobu
status: PUBLISHED
createdAt: 2019-10-23T16:53:33.949Z
updatedAt: 2023-03-30T15:56:41.331Z
publishedAt: 2023-03-30T15:56:41.331Z
firstPublishedAt: 2019-10-29T17:23:28.798Z
contentType: tutorial
productTeam: Post-purchase
author: 1E4UkWguFZAXjkguvNHPIv
slug: precautions-when-setting-the-order-numbering
locale: en
legacySlug: precautions-when-setting-the-order-numbering
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

When defining the order numbering format for a store, certain precautions must be taken, among which:

- The order structure such as prefix, suffix and sequence numbering, once chosen, is **irreversible**. This option is made when the store goes live, so it is important to exercise caution when choosing between the two formats: ** A ** or ** B **. By default, your store follows the 12-digit ** A ** option, but you can select the alphanumeric format when adding your store. However, once chosen, it cannot be changed.

- The numbering pattern ** B ** ** does not necessarily follow ** an alphanumeric sequence or option. The numbers can be distinct without necessarily having a logic in the order. Every order has an `orderId` and a `sequence`. `OrderId` has 12 digits, while the `sequence` always has 6, starting from `500001`.

- Regardless of format, numbers follow an ascending pattern, but the difference between one number and another (increment) is random. This ensures that no one outside the store can estimate how many orders have been placed in a given period.

- The `orderId` can be prefixed with `XYZ-` to distinguish affiliate orders. These letters are the affiliate ID given by the store and reported to the external marketplace. In such cases, it has an order ID that will be different than the numbering of the orders closed by the store. This means that the alphanumeric or numeric patterns we talked about above are for orders placed by the marketplace. External orders, which are integrated directly with the store's fulfillment, will have as default:  `{affiliate} - {externalId}`. `ExternalId` has no preset format, as it follows the marketplace standard.

