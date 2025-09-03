---
title: 'Configuring a promotion for an SKU'
id: frequentlyAskedQuestions_347
status: PUBLISHED
createdAt: 2019-01-24T20:45:52.891Z
updatedAt: 2023-03-31T17:14:40.140Z
publishedAt: 2023-03-31T17:14:40.140Z
firstPublishedAt: 2019-01-24T21:53:56.366Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-configure-a-promotion-for-an-sku
legacySlug: how-to-configure-a-promotion-for-a-sku
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

A promotion is always configured as a discount related to a product, encompassing all its SKUs. However, there is a way to configure **Buy One Get One** and **Discount Percentage** promotions for a specific SKU of the product.

## Percentage discount for an SKU

For this configuration, you must set up a Take More for Less promotion, and select the desired SKU. Follow the instructions below.

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Click on `Create Promotion`.
3. Click on **More for Less**.
4. Fill out the fields according to the documentation on [Creating a More for Less promotion
](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325 "Creating a More for Less promotion").
5. At **SKUs**, fill it out with the SKU to which the promotion will be applied.
6. At **Every _ product (s)**, fill it out with the value **1**.
7. At **The client will take _ products**, fill it out with the value **1**.
8. For the promotion option, select **With a discount of**, and fill it out with the discount amount you wish to grant to the SKU.
9. Click on `Save`.

In this configuration, the SKU will be sold with a percentual discount. This promotion will not be applied in the shelf, only to the product page.

## Buy One Get One (gift) for an SKU

This configuration is performed for Buy One Get One promotions, where you can select which SKU will offer the gift.

1. In the VTEX Admin, go to *Promotions > Promotions*, or type *Promotions* in the search bar at the top of the page.
2. Click on `Create Promotion`.
3. Click on **Buy One Get One**.
4. Fill out the fields according to the documentation on [How the Buy One Get One (BoGo) promotion works
](http://help.vtex.com/tutorial/como-criar-promocoes/ "How the Buy One Get One (BoGo) promotion works").
5. At **What type and value of discount**, select the **Gift** option, and fill it out with the ID of the SKU you want to give as a gift.
6. At **SKUs**, select the SKU to which the promotion will be applied.
7. Click on `Save`.

In this promotion, the Gift will appear on the product page.

