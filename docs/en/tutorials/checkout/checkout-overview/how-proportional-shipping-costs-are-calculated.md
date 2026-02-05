---
title: 'How proportional shipping costs are calculated'
id: frequentlyAskedQuestions_155
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.013Z
updatedAt: 2021-09-01T13:37:27.000Z
publishedAt: 2021-09-01T13:37:27.000Z
firstPublishedAt: 2019-01-24T22:13:11.668Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: how-proportional-shipping-costs-are-calculated
legacySlug: how-to-make-freight-apportionment
locale: en
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

The proportional shipping cost refers to when the shipping cost is split between the products in the shopping cart. It is used to break down the shipping cost on the invoice and to justify the total amount charged.

The calculation considers the weight of each product in relation to the total weight of the shopping cart, in percentage terms. The total shipping cost is then divided proportionally according to this percentage, i.e., each item's weight.

For example, suppose the total shipping cost is US$ 25 for five items (product A, product B, product C, product D, and product E) totaling 10 kg. See below how the shipping cost for each product is calculated:

- Product A, whose mass is 2 kg, corresponds to 20% of the total cart weight. The shipping cost for this item is US$ 5, which represents 20% of the total shipping cost.
- Product B, whose mass is 1.75 kg, corresponds to 17.5% of the total cart weight. The shipping cost for this item is US$ 4.38, which represents 17.5% of the total shipping cost.
- Product C, whose mass is 500 g, corresponds to 5% of the total cart weight. The shipping cost for this item is US$ 1.25, which represents 5% of the total shipping cost.
- Product D, whose mass is 4.5 kg, corresponds to 45% of the total cart weight. The shipping cost for this item is US$ 11.25, which represents 45% of the total shipping cost.
- Product E, whose mass is 1.25 kg, corresponds to 12.5% of the total cart weight. The shipping cost for this item is US$ 3.13, which represents 12.5% of the total shipping cost.

For readability purposes, the term "weight" was sometimes used to refer to "mass" in this documentation. Even though they have different meanings, we opted to use this terminology according to everyday use.

> ❗ The weight of the product cannot be zero. This can cause problems when calculating the shipping cost in the cart.

## Viewing proportional shipping costs

You can see how proportional weight-based shipping costs are calculated in the Admin or via API. In the Admin, go to the **Inventory & shipping** module, simulate a delivery, and you will see detailed shipping values. You can also use an API and view these values in the order's JSON — as returned by the route[ Get order](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder) — for each item in the logisticsInfo field of their details.

Learn more in our article[ Shipping simulator](/en/docs/tutorials/shipping-simulation).
