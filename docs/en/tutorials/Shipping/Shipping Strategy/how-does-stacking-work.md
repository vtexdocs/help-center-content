---
title: 'How does stacking work?'
id: tutorials_124
status: PUBLISHED
createdAt: 2017-04-27T22:18:33.952Z
updatedAt: 2023-02-28T01:53:40.922Z
publishedAt: 2023-02-28T01:53:40.922Z
firstPublishedAt: 2017-04-27T23:00:43.968Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: how-does-stacking-work
locale: en
legacySlug: how-does-stacking-work
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

When calculating the sum of measures of more than one SKU, the system presents a stacking intelligence, which mantains the value of two measures (Width and Length), and multiplies the smallest corner/side by the number of SKUs, as shown below:

`(Smallest side x Number of SKUs) + Width + Length`

Be aware that package division is allowed only if the [cargo splitting](/en/tutorial/configuring-cargo-splitting) is enabled.

## Largest edge measure

This feature allows you to limit the stacking of a package to a defined value.

### Example

Largest edge measure registered: 80 cm

- Purchase of 1 unit with a total height of 20 cm = delivery in 1 shipment (1 trip).
- Purchase of 8 units with a total height of 160 cm = delivery in 2 shipments (2 trips).
- Purchase of 1 unit of another product, with a total height of 100 cm = the purchase cannot be completed, since these dimensions exceed the registered limit (maximum height permitted= 80 cm, product height = 100 cm).
