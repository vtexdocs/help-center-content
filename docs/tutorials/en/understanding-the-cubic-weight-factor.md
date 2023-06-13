---
title: Calculating the Cubic Weight Factor
id: tutorials_128
status: PUBLISHED
createdAt: 2017-04-27T22:17:52.970Z
updatedAt: 2022-11-08T19:15:57.550Z
publishedAt: 2022-11-08T19:15:57.550Z
firstPublishedAt: 2017-04-27T23:00:44.419Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: understanding-the-cubic-weight-factor
legacySlug: understanding-the-cubic-weight-factor
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

The cubic factor is used to calculate a new weight for a package. This new weight will take into consideration, besides the weight of the products, their volume. This is necessary so that the price to be charged for freight is in a fair ratio between weight and occupied volume.

## Cubage

Cubage is the relationship between the volume and weight of the goods, which is measured by a mathematical calculation that verifies in what proportion the cargo will match in weight to the volume it occupies in the vehicle.

The function of cubage in transport is to avoid filling the entire physical space of the vehicle without using all its capacity in terms of weight or vice versa. Thus, the concept is linked to the ability to complete the loading of a vehicle using its entire volume available for load and weight or tonnage capacity.

- __Real weight:__ is the one indicated on the scale.
- __Cubed Weight:__ is the calculation that determines the actual space occupied by the package on the vehicle.

## Cubic Factor

Is the resulting coefficient of the relationship between weight and volume that is more suitable and commercially fair to aircraft cubage, as recommended by IATA (international organization that congregates all airlines).

## Calculation

The calculation of the cubed weight is performed by multiplying Length x Width x Height, and dividing the result by the cubic factor provided by the carrier.

Check out the following example:

![](//images.contentful.com/alneenqid6w5/3KZDUQlPBYEY8mSwqQgW6k/15cef41598f4fc1359f482cddbcca756/pesocubado.jpg)

- __Package size:__ `50cm x 15cm x 60cm`
- __Actual package weight:__ `9kg`
- __Cubic factor:__ `6.000`
- __Cubed Weight__: `50cm * 60cm * 15cm / 6.000= 7,5kg`

By comparing the real weight to the cubed weight of the package, the carrier will charge for the actual weight, because it is larger than the cubed weight.

However, the calculation above is merely illustrative. For the carrier, the value registered as cubic factor will be multiplied to the result of `Length x Width x Height`. Which means the calculation is `Length x Width x Height x Cubic Factor`.

That is, if the value offered by your carrier is `6,000`, you must perform the division by 1000. Example: `1.000 / 6.000 = 0,167`.

When registering a carrier, this is the value you must fill out the __Cubic Weight Factor__ field with:

![Cubic Weight](//images.contentful.com/alneenqid6w5/1hQDHg79Z8QaGCiIc0wekq/1d1eef7297b59f508ce508e0b926961f/Cubic_Weight.png)

Therefore, the final calculation will be:

- __Package size:__ `50cm x 60cm x 15cm`
- __Actual package weight:__ `9kg`
- __Cubed Weight:__ `50cm x 60cm x 15cm x 0,167= 7,515kg`

<div class="alert alert-info">
  <p>Check with your carrier if the unit of measure is in grams, which is the unit used by VTEX.</p>
</div>
