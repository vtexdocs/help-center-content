---
title: 'Price Waterfall'
id: 2USbESztvGi80WMUEawMGq
status: ARCHIVED
createdAt: 2018-06-20T21:23:23.445Z
updatedAt: 2019-12-31T15:28:12.188Z
publishedAt: 
firstPublishedAt: 2018-06-20T22:08:14.680Z
contentType: tutorial
productTeam: Others
author: 7kumplNTMIsWYGeeegCqO8
slugEN: price-waterfall
locale: en
legacySlug: price-waterfall
subcategoryId: unknown-subcategory
---

Recently, the **Conditional Prices** feature was added to the *Pricing* module. (Read the article [How to create Conditional Prices](/en/tutorial/how-to-create-conditional-prices).)

With this new feature, we now have a new price entity called *Conditional Prices*, besides the existing ones *Fixed Price* and *Base Price*.

Below we have an illustration showing how this price waterfall works:

![priceWaterfall](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Untitled%20category/Untitled%20subcategory/price-waterfall_1.png)

When a price for a specific SKU is requested to the *Pricing* module:
1. A *Fixed Price* is selected according to its criteria like **scheduling** and **minimum quantity**.
2. It checks if there is any *Conditional Price* defined and if it applies to the user that is buying. If there is, the *Conditional Price* is delivered.
3. If no *Conditional Price* was defined, or if it doesn't apply to the user, the *Fixed Price* is delivered.
4. If no *Fixed Price* is active, then the *Base Price* is delivered.
5. If there is no *Base Price* defined, the SKU will be shown as **inactive** on the shelf.

**Notes:**
* If more than 1 *Conditional Prices* applies to an user, the delivered price will be the cheapest.
* The *Fixed Price* can contain at most **3 conditional prices**.
