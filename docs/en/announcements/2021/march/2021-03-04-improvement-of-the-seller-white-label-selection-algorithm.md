---
title: 'Improvement of the White Label Seller selection algorithm'
id: 2BI2ZElxvLvsfZsly9lLsx
status: PUBLISHED
createdAt: 2021-03-04T00:33:02.559Z
updatedAt: 2021-03-12T00:14:09.119Z
publishedAt: 2021-03-12T00:14:09.119Z
contentType: updates
productTeam: Shopping
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: 2021-03-04-improvement-of-the-seller-white-label-selection-algorithm
locale: en
legacySlug: improvement-of-the-seller-white-label-selection-algorithm
announcementImageID: 'undefined'
announcementSynopsisEN: 'Understanding how the seller selection logic works for delivery or pickup'
---

When a store has multiple sellers to increase its product offering and logistic capabilities, there could be infinite combinations for price and delivery time available for the same SKU. To ensure showing the customer the best alternatives, we coded different filters and business rules in the [seller selection algorithm](/en/tutorial/algoritmo-de-selecao-de-white-label-sellers--3MemNQ4pKkWCpMdzI27AHa?&utm_source=autocomplete) at checkout.

The seller selection algorithm was modified in order to tailor the delivery and pickup options to the client, prioritizing the greatest coverage of cart items. That means that before applying value and delivery time criteria, or pickup distance, the algorithm will try to ensure that all the items in the cart are in stock.

Additionally, the algorithm minimizes the number of selected sellers to optimize order delivery costs.

## What changed?

The seller selection algorithm was updated to ensure the maximum possible coverage of cart items in the delivery and pickup options. Now, the algorithm ensures that no product is unavailable at checkout for orders needing up to 6 sellers for delivery.

Also, for selecting sellers that offer a pickup option, the algorithm will always prioritize distance to the reference location over price and pickup time criteria.

> ⚠️ Note: The algorithm update applies to White Label Seller, and it includes [Franchise Accounts](/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa). The seller selection algorithm is applied when the client checks the delivery options. That means that it is applied in the delivery preview in the cart or in the delivery and pickup stage at checkout.

## Why did we make this change?

The objective of the change is to help reduce the cart abandonment rate by customers in VTEX clients’ stores, having a direct impact on the conversion rate.

The modification in the algorithm makes the seller selection logic more intelligent, showing more assertive delivery and pickup options for the customers.

Main benefits:
- Greater availability of items in the cart.
- Better delivery and pickup options that take into account speed and lesser cost.

## What needs to be done?

No action is necessary. The algorithm will be automatically updated in all stores.

