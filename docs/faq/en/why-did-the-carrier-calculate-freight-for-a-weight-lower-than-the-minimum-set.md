---
title: 'Why did the carrier calculate freight for a weight lower than the minimum set?'
id: frequentlyAskedQuestions_164
status: PUBLISHED
createdAt: 2017-04-27T22:39:17.904Z
updatedAt: 2019-12-31T14:25:25.374Z
publishedAt: 2019-12-31T14:25:25.374Z
firstPublishedAt: 2017-04-27T23:01:43.295Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: why-did-the-carrier-calculate-freight-for-a-weight-lower-than-the-minimum-set
locale: en
legacySlug: why-did-the-carrier-calculate-freight-for-a-weight-lower-than-the-minimum-set
---

Freight calculation always considers two parameters: product weight and volume. The priority in calculation is always given to the real or cubed weight &#8211; the one with highest value. However, if the weight of a product is lower than the minimum registered for a carrier, volume will be considered.

## Examples

- The carrier previews a weight range of 30 to 100 kg, and a maximum volume of 1000 m³.
- The product to be delivered weighs 10 kg, and has a volume of 10 m³.

When calculating freight, the platform will understand that the carrier won&#8217;t consider the weight, since it is lower than the minimum registered (30 kg). It will, however, calculate freight considering that the product has a smaller volume than the maximum registered for that ZIP code range. So, freight price will be considered according to the first weight range. That also occurs because it is implied that, if one carrier is capable of carrying 100 kg, it can carry 10 kg without problems.

On the other hand, if a product is heavier than the maximum weight registered for the carrier, freight won&#8217;t be available, even if the volume is smaller than the maximum volume registered.

- The carrier previews a weight range of 30 to 100 kg, and a maximum volume of 1000 m³.
- The product to be delivered weighs 101 kg, and has a volume of 100 m³.

In this situation, the platform will understand that, because the weight of the product is heavier than the transport capacity (100 kg), it can&#8217;t be delivered, even though it is a package that fits into the truck.

## Go further

[Understand how the cubed weight is calculated.](/en/tutorial/understanding-the-cubic-weight-factor/)
[Learn how to perform a freight simulation.](/en/tutorial/freight-simulation/)
