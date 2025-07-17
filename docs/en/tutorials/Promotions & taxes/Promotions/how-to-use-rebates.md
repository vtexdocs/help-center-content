---
title: 'How to use rebates'
id: aS9z4io3auDKisk7M0rq9
status: PUBLISHED
createdAt: 2020-12-01T15:45:19.840Z
updatedAt: 2021-02-01T15:43:17.159Z
publishedAt: 2021-02-01T15:43:17.159Z
firstPublishedAt: 2021-02-01T15:43:17.159Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: how-to-use-rebates
locale: en
legacySlug: how-to-use-rebates
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

The B2B scenario has various incentive strategies, and the rebate is one of the most commonly used. For more B2B incentive strategies, see the article [The most common promotions in B2B](/en/tutorial/the-most-common-promotions-in-b2b--XoM951AzUIvfaH71UdANf).

Rebates are credits provided to the store by suppliers. You can use them as exclusive discounts for selling pre-selected products and offer lower prices for the final customer and increased sales performance.

Besides strengthening the relationship between suppliers and resellers, this scenario helps you to foster customer loyalty.

## Configuring rebates on VTEX

The most suitable way to use rebates received from suppliers is through [Regular Promotions](/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) with usage restrictions enforcement. Learn more about the Regular Promotions possibilities in our article [Promotion examples](/en/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD).

<div class = "alert alert-warning">
  <p>The customer can eventually cancel the purchase of an order with a rebate discount. In this case, you have to redirect the discount to another client to reach the total number of credits. To check whether the rebate has been applied to an order, use the <a href = "https://developers.vtex.com/vtex-developer-docs/reference/user-orders#userorderslist">Retrieve User's orders</a> or <a href="https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder">Get Order</a> endpoints from the Orders API.</p>
</div>

## Example

The supplier and the store agreed to a discount of USD 10,000. This action aimed to encourage people to buy products in the Monitors category throughout the month. They granted a USD 100 discount on each monitor, limited to one per customer.

The discount will be applied as a VTEX Regular Promotion. To determine the rebate, you have to:

1. Set the promotion with a nominal discount of USD 100.
2. Specify that the promotion only applies to the Monitors category.
3. Limit the promotion to 100 uses at the store.
4. Limit the promotion to one use per customer.
5. Specify that the discount applies to a single product in an order.

To identify the promotion required fields, read our article [Regular Promotion fields](/en/tutorial/regular-promotion--tutorials_327). 
