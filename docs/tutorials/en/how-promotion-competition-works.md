---
title: 'How promotion competition works'
id: tutorials_2270
status: PUBLISHED
createdAt: 2017-04-27T21:55:27.997Z
updatedAt: 2023-11-14T16:52:38.320Z
publishedAt: 2023-11-14T16:52:38.320Z
firstPublishedAt: 2017-04-27T23:03:50.791Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: how-promotion-competition-works
locale: en
legacySlug: understanding-competition-of-promotions
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

The Promotions module uses a specific logic to determine which promotion should be applied to a purchase, similar to how the [Checkout](https://help.vtex.com/en/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) selects a seller to fulfill the order. This logic is called promotion competition.

Promotion competition occurs in the following situations:

- Promotions with the same type of discount.
- More than one promotion applied to the same item.
- Promotions not [configured](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restrictions-and-limitations-of-use) to allow cumulative promotions.

To understand how the selection of the promotion that will be applied works, it's important to understand some concepts used in the Promotions module.

- [Promotion effects](#promotion-effects)
- [Promotion sorting rule](#promotion-sorting-rule)
- [Cumulative promotions](#cumulative-promotions)
- [Promotion competition strategies](#promotion-competition-strategies)

## Promotion effects

The promotion effects are related to the benefit the promotion offers. There are four types of benefits:

- **Price discount:** Promotions that apply a percentage or nominal discount to the product price. This includes various discounts such as [regular promotions](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), [progressive discounts](https://help.vtex.com/en/tutorial/desconto-progressivo--tutorials_324), and any other mechanisms that affect the price of an item.
- **Shipping discount:** [Promotions with a discount applied to the shipping cost.](https://help.vtex.com/en/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW)
- **Giveaway:** Promotions that offer one or more giveaways to the customer.
- **Formula:** Promotions with nominal discount based on [formula](https://help.vtex.com/en/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV), which is one of the options of a regular promotion.

## Promotion sorting rule

Sorting is the process that defines in which order promotions will be applied to the cart. This is important to understand the final price of the items in the shopping cart. The sorting rule is based on two criteria:

- [Sorting by promotion and discount type](#sorting-by-promotion-and-discount-type)
- [Sorting by discount amount](#sorting-by-discount-amount)

### Sorting by promotion and discount type

The promotions applied to the cart respect the following order:

1. Percentage
2. Nominal
3. Maximum price
4. Buy Together (not a regular promotion)
5. Percentage shipping
6. Nominal shipping
7. Giveaway
8. Formula

### Sorting by discount amount

Promotions of the same type applied to the cart are compared by their discount amount. At this point, the Promotions module always tries to apply the most advantageous promotion for the buyer.

For giveaway promotions, the sorting is by the highest number of giveaways granted by the promotion.

Example:

- Promotion 1: 30% discount on the product price.
- Promotion 2: 50% discount.

Priority is given to the promotion that grants the highest discount, i.e., the cart will apply **Promotion 2** and then **Promotion 1**.

The **Promotion 1** will be applied to the product price already discounted by **Promotion 2**.

## Cumulative promotions

Promotions that are [configured](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restrictions-and-limitations-of-use) to Apply with other promotions in this field will always be applied if their conditions are met, regardless of their type.

However, they will be applied to the amount that has already been discounted by the promotion that won over non-cumulative promotions. The order of selected promotions will follow the sorting by type and value, as described in item 1. 

Therefore, promotions will be applied in the following order:

![promocao3 EN](https://images.ctfassets.net/alneenqid6w5/6nz2KJuFk4aS0eU0OGg0sM/7cf285654ec80894e0a346c90918cd33/promocao3_EN.png)

<div class="alert alert-warning">
Orders originating from the <a href="https://help.vtex.com/en/tutorial/configurar-promocao-para-marketplace--tutorials_406">Marketplace</a> (provided by the store) or Fulfillment (delivered by the store) do not support cumulative promotions. This is because the use of promotions is restricted to specific types on both VTEX and external marketplaces.</div>

## Promotion competition strategies

After understanding how promotions are sorted and applied, you will be able to comprehend how non-cumulative promotions compete with each other.

The selection of each promotion only considers promotions of the same discount type (as described in [Promotion effects](#promotion-effects)) that apply to at least one common product.

Promotions that have different discount types, or that apply to different products, do not compete with each other. So they are automatically applied together.

Here are the two strategies for promotion competition: 

- [Competition by scenario](#competition-by-scenario)
- [Competition by item](#competition-by-item)

<div class="alert alert-info">
By default, all accounts follow the competition by scenariostrategy. In case the competition by item strategy is better suited for your business needs, please <a href="https://help.vtex.com/en/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM">open a ticket</a> with our support team and request the change.</div>

### Competition by scenario

The competition by scenario follows the logic of grouping promotions that do not compete with each other on the same products. With each group created, a comparison is made to determine whether the group or an individual promotion offers a greater advantage to the customer. 

The one that gives the best discount will be applied to the cart. See the examples below:

#### Example 1

James is planning to purchase a t-shirt priced at $10, with an additional $4 for shipping. Up to five promotions can be applied to the order. All applicable promotions were [configured](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restrictions-and-limitations-of-use) in the `Apply with other promotions` field as non-cumulative, except for the first one.

| Cumulative promotions | Non-cumulative promotions |
| ----------- | ----------- |
| 10% off | Maximum shipping cost of $20 |
| X | 80% off on the shipping cost |
| X | Nominal discount of $5 |
| X | Buy the shirt and get a giveaway |

The cart will show a final price of $4.50 for the t-shirt and $0.80 for shipping. The promotion system starts by applying the promotion competition logic:

- T-shirt: **$10**.
   - Receives a nominal discount of *$5*. New price: **$5**. 

- Shipping cost: **$4**.
   - Receives a discount of *80%*. New price: **$0.80**.
   - The maximum shipping cost of **$20** is applied but is not valid as the shipping cost is already below that.

Then, cumulative promotions are applied:

- T-shirt from ~~$10~~ now for **$5**.
   - Receives a percentage discount of **10%**. New price: **$4.50**.

Therefore, the final amounts for James' purchase are: 

- T-shirt: **$4.50**.
- Shipping cost: **$0.80**.
- Giveaway for buying the t-shirt.

#### Example 2

Linda created a cart with 1 t-shirt and 1 pair of shoes. These items are part of collections:

| Collection | Items | Prices |
| ----------- | ----------- |  ----------- |
| 1 | T-shirt | $ 10 |
| 1 | Shoes | $ 50 |
| 2 | T-shirt | $ 10 |

- Promotions:
   1. **10%** off on the first collection. Configured as non-cumulative in the `Apply with other promotions field`.
   2. **25%** off on the second collection. Configured as non-cumulative in the `Apply with other promotions field`.
   3. **5%** off on the product price. Configured as cumulative in the `Apply with other promotions field`. Applies to all the products in the shopping cart.

As the first two promotions apply to the t-shirt and are not marked as cumulative, they compete with each other.

When promotions compete, the Promotions module will choose the promotion that provides the best discount for the customer. See below for an example of competition by scenario.

##### Scenario 1: Applying Promotion 1 of 10% 

| Items | Promotions applied | Amounts |
| ----------- | ----------- |  ----------- |
| T-shirt | Promotion 1 and Promotion 3 | $8.55 |
| Shoes | Promotion 1 and Promotion 3 | $42.75 |

The t-shirt would be priced at **$8.55** with a *discount of 10% from Promotion 1* and 5% on the product price. The pair of shoes would be priced at **$42.75** with a *discount of 10% from Promotion 1* and a *discount of 5% on the product price*.

The order total would be **$51.30**.

##### Scenario 2: Applying Promotion 2 of 25%

| Items | Promotions applied | Amounts |
| ----------- | ----------- |  ----------- |
| T-shirt | Promotion 2 and Promotion 3 | $7.12 |
| Shoes | Promotion 2 and Promotion 3 | $47.50 |

The t-shirt would be priced at **$7.12** with a *discount of 25% from Promotion 2 and 5% on the product price*. The pair of shoes would be priced at **$47.50**, considering only the *5% discount on the product price*, as it is not in the Promotion 2 collection.

In this scenario, the order total would be **$54.62**.

In short, since in scenario 1 the order total is cheaper for the customer, it fits the premise of offering the best possible discount. So VTEX chooses to apply Promotion 1 of 10% for both items. This is because promotions 1 and 2 could not be applied together since they are non-cumulative. 

### Competition by item

The Promotions module can also consider the highest discount for the customer on each item in the cart. To do this, the system considers the promotions that can be applied to an item and selects the best among them, rather than considering a combination of promotions at the cart level.

In the competition by item, this is what would happen following the data from the previous example:

| Collection | Items | Amounts |
| ----------- | ----------- |  ----------- |
| 1 | T-shirt | $ 10 |
| 1 | Shoes | $ 50 |

- Promotions:
   1. **10%** off on the first collection. Configured as non-cumulative in the `Apply with other promotions field`.
   2. **25%** off on the second collection. Configured as non-cumulative in the `Apply with other promotions field`.
   3. **5%** off on the product price. Configured as cumulative in the `Apply with other promotions field`. Applies to all the products in the shopping cart.

Applying the promotion, the amounts would be:

| Items | Promotions applied | Amounts |
| ----------- | ----------- |  ----------- |
| T-shirt | Promotion 2| $7.50 |
| Shoes | Promotion 1 | $45 |

The t-shirt would be priced at **$7.50** with a *discount of 25% from Promotion 2*. The pair of shoes would be priced at **$45** with a *discount of 10% from Promotion 1*.

In this scenario, the order total would be **$52.50**.

This option would offer a smaller discount to the customer than the selection from the [competition by scenario](#competition-by-scenario). Therefore, this configuration depends on the business goals set by the store. 

In case the competition by item strategy is better suited for your business needs, please [open a ticket](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) with our support team and request the change.
