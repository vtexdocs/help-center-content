---
title: "How is shipping cost calculated when there's an item with shipping benefit on the cart?"
id: 3EaQjxkErC6OKAWCWYSMiw
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.018Z
updatedAt: 2023-03-29T19:56:11.668Z
publishedAt: 2023-03-29T19:56:11.668Z
firstPublishedAt: 2019-01-24T22:04:11.324Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-is-shipping-cost-calculated-when-theres-an-item-with-shipping-benefit-on-the-cart
legacySlug: how-is-shipping-cost-calculated-when-theres-an-item-with-shipping-benefit-on-the-cart
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

This article aims to clarify how the distribution of the cost of freight between the items of a cart when one of these items has a freight promotion works.

## Division of shipping cost between items

The shipping cost takes into account the __weight of the products__ added to a cart. These weights are listed on the [freight worksheet of a carrier](/en/tutorial/building-a-freight-spreadsheet).

When there is more than one item in the cart, the shipping cost divided by each item is __proportional to its weight__, based on the total weight of the cart.

Let's look at how the cost of shipping calculation would be calculated on a cart with 5 items, with a total shipping cost of 200 currency units:

> ℹ️ To find out the cost of shipping a cart, please make [shipping simulation](http://help.vtex.com/en/tutorial/freight-simulation). To find out the weight of a SKU, access the **Products and SKU** page in the Catalog menu and look for **Shipping Weight**.

- __Total Cost of Shipping:__ 200
- __Product A Weight:__ 20
- __Product B Weight:__ 25
- __Product C Weight__: 15
- __Product D Weight__: 10
- __Product E Weight__: 30
- __TOTAL WEIGHT__ = 100

The calculation of the shipping cost of each item will be given by the following formula:

__ Total Shipping Cost x (Product Weight / TOTAL WEIGHT) __

Applying the above formula, we have:

__200 x (20/100) = 40__

The * Total Cost of Shipping * is __200__. We see that * Product Weight A * represents __20% __ of the total weight of the cart (__20 / 100__).

Therefore, the * Shipping Cost of Product A * will be __40__.

## Shipping cost breakdown when there is promotion of freight in the cart

When there is a __promotion of freight__ for some items in the cart, the costing calculation for the shipping cost occurs as described in the previous section.

Let's assume a scenario where __Product B__ receives a promotion of * 10% in the value of your freight *.

Applying the formula, we have:

__200 x (25/100) = 50__

The * Total Cost of Shipping * is __200__. We see that the __Poso of Product A__ represents __25% __ of the total weight of the cart (__25 / 100__).

Therefore, the * Cost of Shipping of Product B * will be __50__.

As product B has a 10% promotion on the value of your freight, the shipping cost will be:

__50 - (50 x 10%) = 45__

If product B had a Free Shipping promotion, its shipping cost would be __zero__:

__50 - (50 x 100%) = 0__

Therefore, to calculate the impact of a freight promotion on the cost of shipping an item, it is necessary to calculate the shipping cost proportional to the weight of the item and apply the discount percentage to this value.
