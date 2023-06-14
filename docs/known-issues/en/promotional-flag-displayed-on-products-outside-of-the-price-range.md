---
title: 'Promotional flag displayed on products outside of the price range'
id: 7kJl5tyxAAOoiqW2sQcY6u
status: PUBLISHED
createdAt: 2018-04-10T15:21:04.585Z
updatedAt: 2022-12-22T20:49:01.265Z
publishedAt: 2022-12-22T20:49:01.265Z
firstPublishedAt: 2018-04-10T15:30:02.137Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: promotional-flag-displayed-on-products-outside-of-the-price-range
kiStatus: Backlog
internalReference: 
---

## Summary

The viewports `$product.DiscountHightLight` and `<vtex.cmc:discountHightLight/>` are based on the teasers provided by checkout as a rule for displaying promotional flags. However, the checkout does not filter "ItemMinPrice" rules if other rules are configured.

As a consequence, promotions that are based on ranges of values for items and have other restrictions, such as payment methods, appear as a promotional flag for other products, even if they are outside the price range for the promotion.


## Simulation

1. From the Admin, choose Rates and Benefits > Benefits.
2. In the upper right corner, click the __New Benefit__ button > __Regular__.
3. Choose any type of discount.
4. Under Product Highlight, choose __Highlight__.
5. Apply some restriction, for example: by price range of the item.
6. Restrict it by some payment method, such as Bank Slip.
7. Activate and save the promotion.

## Workaround

Use the checkout API (orderForm Simulation) to fetch information from available teasers for the product, and then render the promotional flag with the desired business rule in a custom way.


