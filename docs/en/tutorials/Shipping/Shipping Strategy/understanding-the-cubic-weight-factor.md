---
title: 'Calculating the Cubic Weight Factor'
id: tutorials_128
status: PUBLISHED
createdAt: 2017-04-27T22:17:52.970Z
updatedAt: 2023-12-19T17:17:26.713Z
publishedAt: 2023-12-19T17:17:26.713Z
firstPublishedAt: 2017-04-27T23:00:44.419Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-cubic-weight-factor
locale: en
legacySlug: understanding-the-cubic-weight-factor
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

The cubic factor is used to calculate a new weight for a package. This new weight will take into consideration, besides the weight of the products, their volume. This is necessary so that the price to be charged for freight is in a fair ratio between weight and occupied volume.

## Cubage

Cubage is the relationship between the volume and weight of the goods, which is measured by a mathematical calculation that verifies in what proportion the cargo will match in weight to the volume it occupies in the vehicle.

The function of cubage in transport is to avoid filling the entire physical space of the vehicle without using all its capacity in terms of weight or vice versa. Thus, the concept is linked to the ability to complete the loading of a vehicle using its entire volume available for load and weight or tonnage capacity.

- __Minimum weight:__ is the one indicated on the scale.
- __Cubic Weight:__ is the calculation that determines the actual space occupied by the package on the vehicle.

## Cubic Factor

Is the resulting coefficient of the relationship between weight and volume that is more suitable and commercially fair to aircraft cubage, as recommended by IATA (international organization that congregates all airlines).

## Calculation

The calculation of the cubic weight is performed by multiplying Length x Width x Height, and dividing the result by the cubic factor provided by the carrier.

<div class="alert alert-warning">
When calculating the cubic weight factor, VTEX platform does not consider measurement units, and the numbers generated are absolute. Therefore, the measurement units you consider for the calculation will be those of the final result. Notice that the your measurement unit must be the same one used by the carrier.
</div>

Check out the following example:

![example_cubic_weight_en](https://images.contentful.com/alneenqid6w5/3KZDUQlPBYEY8mSwqQgW6k/15cef41598f4fc1359f482cddbcca756/pesocubado.jpg)

- __Package size:__ `50cm x 15cm x 60cm`
- __Minimum weight:__ `9kg`
- __Cubic factor:__ `6.000`
- __Cubic weight__: `50cm * 60cm * 15cm / 6.000= 7,5kg`

By comparing the minimum weight to the cubic weight of the package, the carrier will charge for the minimum weight, because it is larger than the cubic weight.

However, the calculation above is merely illustrative. For the carrier, the value registered as cubic factor will be multiplied to the result of `Length x Width x Height`. Which means the calculation is `Length x Width x Height x Cubic Factor`.

That is, if the value offered by your carrier is `6,000`, you must perform the division by 1000. Example: `1000g/6000 cm³ = 0,167`.

This is the value you must fill out the **Cubic weight factor** field in your [shipping policy](/es/tutorial/politica-de-envio--tutorials_140).

![cubic_weight_EN](https://images.ctfassets.net/alneenqid6w5/44WaAckgByWYgyYGXtEoOj/dc63a437a83448eaafd90e0fb545879e/cubic_weight_EN.png)

Therefore, the final calculation will be:

- __Package size:__ `50cm x 60cm x 15cm`
- __Minimum weight:__ `9kg`
- __Cubic weight:__ `50cm x 60cm x 15cm x 0,167= 7,515kg`
