---
title: 'Regular promotion with nominal discount based on formula'
id: 2Pwrq6THyGViNedQG381jV
status: PUBLISHED
createdAt: 2022-04-18T16:51:30.736Z
updatedAt: 2022-04-18T23:30:41.740Z
publishedAt: 2022-04-18T23:30:41.740Z
firstPublishedAt: 2022-04-18T20:27:39.893Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: regular-promotion-with-nominal-discount-based-on-formula
locale: en
legacySlug: regular-promotion-with-nominal-discount-based-on-formula
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---


When you create a [regular promotion](https://help.vtex.com/en/tutorial/regular-promotion--tutorials_327) in **Promotions & Taxes** > **Promotions** > <code>New promotion</code> > <code>Regular</code>, one of the available options when choosing the discount type and amount is **Nominal discount based on formula**.

By selecting this type of discount, you need to create a formula defining how the applied discount will be calculated. In this article, we’ll explain how to build a formula which meets your promotion's objectives.

![discount-type-formula](https://images.ctfassets.net/alneenqid6w5/5NTM35GkPQtUzA6CKDco9q/c7e753bddc57ad9ec18b30f05f654688/desc.PNG)

The formula used to calculate the nominal discount generally follows the same logic as the [Microsoft Excel formulas](https://support.microsoft.com/pt-br/office/f%C3%B3rmulas-e-fun%C3%A7%C3%B5es-294d9486-b332-48ed-b489-abe7d0f9eda9), which means you can use [variables](#variables) (`total`, `freight` and `quantity`), make [operations](#operations) (sum, subtraction, multiplication and division) and apply (`min` and `max` [functions](#functions).

## Variables

To build the formula for your promotion, you can use the variables described below.

| **Variable** | **Description** |
|---|---|
| `total` | Sum of the selected product prices. |
| `freight` | Shipping value. The shipping rate used in the formula will be the lowest available for a specific order, regardless of what the customer selects. |
| `quantity` | Total number of all items in the cart. |

## Operations

Use the conventional signs in your formula to make mathematical operations.

| **Operation** | **Sign** |
|:---:|:---:|
| Sum | `+` |
| Subtraction | `-` |
| Multiplication | `*` |
| Division | `/` |

You can do a multiplication to calculate the desired discount percentage using [variables](#variables). For example: To apply a 50% discount on the total price of the selected products, the formula would be `total * 0.5`.

To indicate the order in which calculations should be done, write the calculation which comes first between parenthesis `()`. For example: If a store wants to apply a 40% discount on the total price of the order plus the shipping cost, the formula must be `(total + freight) * 0.4`.

>ℹ️ You must always use the dot (`.`) as a decimal separator.

## Functions

If you want to [limit the discount](#limiting-the-discount), you can use the `min` function. Use the `max` function if you want to [prioritize the highest discount possible](#prioritizing-the-highest-discount-possible). Read on for more details about these functions.

>ℹ️ When using functions, there must be a space between the function and the opening parenthesis. For example: `min (total * 0.2, 10)`.

### Limiting the discount

If you want to limit the maximum value of the discount, you can use the `min` function, which returns the lowest value from a set of amounts.

Imagine the following scenario: A store wants to apply a 20% discount, limited to $ 10, on the cart total price.

In this case, the formula must specify that if `total * 0.2` is higher than `10`, the applied discount will only be `10`. To do that, you can structure the formula using the `min` function as shown below:

```
min (total * 0.2, 10)
```

The promotion will apply the lowest discount in each case, comparing the 20% calculation of the total to the limited amount of $ 10. Check out how to apply this promotion in the following scenarios.

#### Scenario 1

A customer added a $ 45 item to the cart. By calculating 20% of the total price, the result is 9, as per `total * 0.2 = 9`. Since 9 is below the discount limit value, the applied discount will be $ 9.

![scenario1-en](//images.ctfassets.net/alneenqid6w5/22tobaXfukykfntCXBpISS/7cedfaa3ffa9b54192807f47a4b1fe18/scenario1-en.png)

#### Scenario 2

Another customer added a $ 2600 item to the cart. By calculating 20% of this amount, the result is 520, as per `total * 0.2 = 520`. Since this value is above the limit ($ 10), the discount will be $ 10.

![scenario2-en](//images.ctfassets.net/alneenqid6w5/6M3rMa2VKBXNtDV44J3x5w/7bd025f1787a20a9fdc1332c54e73568/scenario2-en.png)

#### Scenario 3

A third customer added two items to the cart: One costs $ 100 and the other $ 2600. Their sum is $ 2700, as per `total = 2700`. By calculating 20% of the total amount, the result is 540, according to `total * 0.2 = 540`. Since this value is above the limit ($ 10), the applied discount will be $ 10.

![scenario3-en](//images.ctfassets.net/alneenqid6w5/2lYHI6Iw0pZ8sOyN282TDr/11a3e761ff2194ad9e63ee9a575cd62c/scenario3-en.png)

The total discount of $ 10 is proportionally distributed among the items, based on each item's price and quantity. The platform makes this distribution automatically, as explained below.

First, the total value of the discount ($ 10) is divided by the total value of the items ($ 2700), as follows: `10 / 2700 = 0,0037037`.

Next, multiplying 0,0037037 by the value of the first item ($ 100) will return the following result: `0,0037037 * 100 = 0,37037037`. Consequently, the amount discounted on the first item will be rounded to $ 0,37. The final price of the first item will be $ 99,63.

Then, multiplying 0,0037037 by the value of the second item will return the following result: `0,0037037 * 2600 = 9,62962962963`. Therefore, the amount discounted on the price of the second item will be rounded to $ 9,63. The final price of the second item will be $ 2590,37.

### Prioritizing the highest discount possible

To prioritize the highest discount possible, you can use the `max` function, which returns the highest value from a set of amounts.

Suppose a store wants to make a promotion which applies a 10% discount on the order total price plus the shipping cost, setting a minimum discount of $ 5.

The formula must specify that if (`total + freight) * 0.1` is lower than `5`, then the applied discount will be `5`. Hence, the structure will be the following:

```
max ((total + freight) * 0.1, 5)
```

The promotion will apply the highest discount in each case, comparing the minimum value of $ 5 to the calculation of 10% of the order total price plus the shipping cost.

