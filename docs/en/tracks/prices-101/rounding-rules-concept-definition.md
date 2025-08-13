---
title: 'Rounding Rules - Concept Definition'
id: 1tUIUvF6BUkDgMsknGaMkF
status: PUBLISHED
createdAt: 2019-07-04T13:53:48.537Z
updatedAt: 2024-08-27T17:14:21.711Z
publishedAt: 2024-08-27T17:14:21.711Z
firstPublishedAt: 2019-07-17T19:47:01.156Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: rounding-rules-concept-definition
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

## Definition

Rounding Rules is a pricing strategy based on __price rounding__. This method's objective is to influence the consumer's decision to buy by displaying prices in a friendlier format.

A common use of this technique is seen when products are sold with a *"one cent discount"*. Instead of selling a TV for U$ 4000,00, the store displays a price of U$ 3999,99.

The idea is to create the impression that the product is being sold at a more accessible price.

## Rounding Rules

A rounding rule's creation depends on three conditions:

- The price range
- The number of digits being rounded
- The rounding methods.

The rounding rules for prices are applicable only to the initial value of the product before the application of any discounts or promotions (base price). They do not apply to fixed prices and promotions. In these cases, the amounts are considered final and exact, being displayed to customers exactly as they were defined, without any additional adjustments.

## Price range

The __price range__ is the criteria that determines which SKUs will be eligible for the rounding rules. You will have to decide which price ranges will be affected by the rounding.

## Number of digits

You have to define have many digits will be rounded based on a specific rule's established price range.

If, for example, the price range is between U$ 100,00 and U$ 500,00, the __maximum number of digits that can be rounded is four__, since the upper limit of U$ 500,00 is made up of *five digits*. In this scenario, you can also choose to round just __three, two or one digit__.

The __maximum number__ of digits affected by the rounding rules varies, depending on the number of digits within a rule's established price range.

## Rounding methods

To complete the rounding rules configuration, you should choose between one of three possible __rounding methods__: the *rule of nine*, the *rules of nines* or the *rule of zero*.

To simplify each method's explanation, we will consider that the rounding applies to the first __two digits__, *from right to left*:

- *Rule of Nine*: the second digits, from right to left, will be __replaced with 9__ and the first will be __replaced with 0__. As an example, let's use a price of *U$ 100,00*. the system will consider the two closest values which end in *"90"*, which in this case are *100,90* and *99,90*. Since the difference between 100,00 and 99,90 is __smaller__ than that between 100,00 and 100,90, __the price will be rounded to 99,90__.

- *Rule of Nines*: the second digit, from right to left, will be __replaced with 9__ and the first digit will also be __replaced with 9__. Let's use the same example as before, *U$ 100,00*. The system will consider the two closest values which end in *"99"*, which in our case are *100,99* and *99,99*. Since the difference between 100,00 and 99,99 is __smaller__ than that between 100,00 and 100,99, __the price will be rounded to 99,99__.

- *Rule of Zero*: the second digit, from right to left, will be __replaced with 0__ and the first digit will also be __replaced with 0__. Let's use a price of *U$ 100,25* as example. The system will consider the two closest values which end in *"00"*, which in our case are *200,00* and *100,00*. Since the difference between 100,25 and 100,00 is __smaller__ than that between 100,25 and 200,00, __the price will be rounded to 100,00__.

<div class=“alert alert-info”>
If the difference between the original price and the higher value is equal to that between the original price and the lower value, **the value will be rounded up**.
</div>

## Example

Let's assume that a new TV is sold for U$ 5000,00. However, you notice that this product's sales volume is not as high as expected. 

To turn this situation around and attract new customers, you can use a rounding rules strategy by potentially applying the __*Rule of Nine*__ functionality together with a __three digits__ rounding method.

This would result is a lower price of U$ 4999,00, giving the impression of the product having a more accessible price.
