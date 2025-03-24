---
title: 'Promotions microrounding divergence'
id: 603ZTMtdgi9olc6UiWLfmX
status: PUBLISHED
createdAt: 2023-12-22T18:48:32.438Z
updatedAt: 2023-12-22T18:48:33.176Z
publishedAt: 2023-12-22T18:48:33.176Z
firstPublishedAt: 2023-12-22T18:48:33.176Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promotions-microrounding-divergence
locale: en
kiStatus: Backlog
internalReference: 957369
---

## Summary


The promotions module rounds discounts in up to 3 significative digits, which can, in very specific scenarios, amount to slight divergences in the final price of a cart.

For instance, let's say we have the following, example scenario:

Item 1 - $10
Item 2 - $20
Item 3 - $32
____________
Total - $62

And 2 promotions applying in all of them:

Promotion A - $15 OFF
Promotion B - 10% OFF.


Usually, the discount to be calculated is sequential, with the nominal value off coming first:

$62 - $15 = $47
Then
$47 * 0.9 = $42.3


However, the discounts are distributed, even for the nominal discount, proportionally in the cart, so what really happens is:

`item 1`:
Original value = $10
Nominal discount (15 * 10/62 of the cart) = -$2.41935484
Percentual expected discount (12.5806452 * 0.9) = -$1.25806452
Percentual real discount = -$1.258

`item 2`:
Original value = $20
Nominal discount (15 * 20/62 of the cart) = -$4.83870968
Percentual expected discount (15.1612903 * 0.9) = -$1.51612903
Percentual real discount = -$1.516

`item 3`:
Original value = $32
Nominal discount (15 * 32/62 of the cart) = -$7.74193548
Percentual expected discount (24.2580645 * 0.9) = -$2.42580645
Percentual real discount = -$2.426


🔎 total diference: 0.00006452 + 0.000012903 + 0.000019355 = 0.0000270973

We can see, above, that a "micro" difference was created.

If, several items were added, with distinct prices, to this example cart, this difference could amount to 1 cent (0.01) or more.



##

## Simulation


There are a multitude of ways to eventually recreate the case Fortunately, all of them are extremely specific.

Given that, it's hard to replicate the issue, but, mostly, it's necesary to create a cart with several (~10+) different items and all of them with 2+ promotions, ideally, one of them being a nominal discount and the other one, a percentual discount.



##

## Workaround


n/a





