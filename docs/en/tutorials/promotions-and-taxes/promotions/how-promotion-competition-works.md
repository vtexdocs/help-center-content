---
title: 'How promotion competition works'
id: tutorials_2270
status: PUBLISHED
createdAt: 2017-04-27T21:55:27.997Z
updatedAt: 2025-10-28T13:19:16.349Z
publishedAt: 2025-10-28T13:19:16.349Z
firstPublishedAt: 2017-04-27T23:03:50.791Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: how-promotion-competition-works
legacySlug: understanding-competition-of-promotions
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

The Promotions module defines which promotion will be applied to a purchase. Similarly, the [Checkout](/en/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) module selects which seller will fulfill an order. This logic is called promotion competition.  

Promotion competition occurs when:  

- The applied promotions have the same type of discount.  
- More than one promotion is applied to the same item.  
- These promotions aren't [configured](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) to allow combination.

Learn more about some concepts of the Promotions module to understand how the promotion selection that will be applied works.  

- [Promotion effects](#promotion-effects)  
- [Promotion sorting rule](#promotion-sorting-rule)  
- [Combined promotions](#combined-promotions)  
- [Promotion competition strategies](#promotion-competition-strategies)

## Promotion effects

Promotion effects are related to the benefits the promotion offers, which can be of four types:  
   - **Price discount**: Promotions that apply a percentage or nominal discount to the product price. This includes multiple discounts, such as [regular promotions](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) and other mechanisms affecting the item price.  
- **Shipping discount**: [Promotions with a discount applied to the shipping cost](/en/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW).  
- **Gift**: Promotions that offer customers one or more gifts.  
- **Formula**: Promotions with nominal discount based on [formula](/en/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV), which is one of the options of a regular promotion.

## Promotion sorting rule

Sorting defines the order in which promotions are applied to the cart and impacts final product prices. This sorting considers two criteria:  

- [Sorting by promotion, discount, and surcharge type](#sorting-by-promotion-discount-and-surcharge-type)  
- [Sorting by discount amount](#sorting-by-discount-amount)

### Sorting by promotion, discount, and surcharge type

Promotions in the cart follow a predefined order to ensure consistency when calculating discounts and surcharges. This sorting directly influences the final item prices and how benefits are applied.

The table below shows how this sorting works by effect type, including surcharges. It describes each stage and the corresponding promotion types.

| Sort | Type of effect | Description | Type |
| ----- | ----- | ----- | ----- |
| 1 | Price | Progressive discount applied based on the number of items purchased. | Progressive Discount |
| 2 | Price | Percentage discount applied to the total order amount. | Regular |
| 3 | Price | Percentage discount applied only to items from the promotion. | Regular |
| 4 | Price | Fixed amount deducted from the total order amount. | Regular |
| 5 | Price | Fixed amount deducted directly from the item price. | Regular |
| 6 | Price | Discount applied for buying products together.    | Buy Together \- Bundle |
| 7 | Price | Sets a maximum price per item in the order. | Regular |
| 8 | Shipping | Percentage discount applied to the shipping cost. | Regular |
| 9 | Shipping | Fixed amount deducted from the shipping cost. | Regular |
| 10 | Shipping | Maximum shipping cost | Regular |
| 11 | Gift | Applies a gift item as a discount. | Regular |
| 12 | Formula | Discount calculated using a custom expression or formula. | Regular |
| 13 | Surcharge | Surcharge calculated based on a custom formula. | Surcharge |
| 14 | Surcharge | Surcharge calculated as a percentage of the order total. | Surcharge |
| 15 | Surcharge | Surcharge calculated as a fixed amount on the order total. | Surcharge |
| 16 | Surcharge | Percentage surcharge calculated on the shipping cost. | Surcharge |
| 17 | Reward amount | Fixed cashback amount granted as a reward. | Regular |
| 18 | Reward amount | Percentage of cashback granted as a reward. | Regular |

### Sorting by discount amount

Promotions of the same type are compared by the discount provided. The Promotions module always chooses the promotion that provides the greatest discount to the shopper.  

For gift promotions, sorting is based on the highest number of gifts provided by the promotion.  

For example:  

-  Promotion A: 30% discount on the product price.  
-  Promotion B: 50% discount.  

Priority is given to the promotion that gives the greatest discount. For example, the cart will apply **Promotion B** and then **Promotion A**.  

**Promotion A** will be applied to the item price already discounted by **Promotion B**.

## Combined promotions

When promotions are [configured](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) to allow combination, they're always applied if their conditions are met.  

They're applied to the amount already discounted by the promotion that won among non-combinable promotions. The promotion application order follows the type and value sorting criteria described.  

The application sequence is:  

![promoção](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/promotions-and-taxes/promotions/how-promotion-competition-works_1.png)

<div style="background-color: #fff8e1; border-left: 4px solid #ffecb3; padding: 12px 16px; margin: 16px 0; font-family: sans-serif; overflow: auto;">
  <p style="margin: 0;">
    Orders originating from 
    [Marketplace](/en/tutorial/configurar-promocao-para-marketplace--tutorials_406) 
    or Fulfillment don't support combined promotions, as the use of promotions on VTEX or external marketplaces is restricted to specific types.
  
</div>

## Promotion competition strategies

After understanding the sorting and combination of promotions, see how competition among non-combinable promotions works.  

The selection of each promotion only considers promotions of the same discount type (as described in [Promotion effects](#promotion-effects)) that apply to at least one common product.  

Promotions of different types, or of the same type that apply to different products, don't compete. They're automatically combined.  

There are two competition strategies:  

-  [Competition by scenario](#competition-by-scenario)
-  [Competition by item](#competition-by-item)

<div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 12px 16px; margin: 16px 0; font-family: sans-serif; overflow: auto;">
  <p style="margin: 0;">
    By default, all accounts follow the competition by scenario strategy. If the item-based competition strategy better suits your business needs, 
    [please open a ticket with our Support team](/en/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) 
    and request the change.
  
</div>

### Competition by scenario

This strategy groups promotions that don't compete for the same products. Then, the system compares each group or individual promotion and applies the option that gives the greatest discount to the cart.

#### Example 1

James added a $100 T-shirt to their cart, with a shipping cost of $30:  

| Items | Quantity | Prices |
| ----- | ----- | ----- |
| T-shirt | 1 | $100 |
| Shipping | 1 | $30 |

The available promotions are:  

| Promotion | Discounts | Combinable |
| ----- | ----- | ----- |
| A | 10% discount applied to all products | Combinable for all products |
| B | Maximum shipping cost of $20 | Non-combinable |
| C | 80% discount on shipping | Non-combinable |
| D | Fixed amount discount of $50 | Non-combinable |
| E | Gift for buying the T-shirt. | Non-combinable |

After applying the available promotions:  

| Items | Quantity | Prices |
| ----- | ----- | ----- |
| T-shirt | 1 | $45 |
| Shipping | 1 | $6 |

The order total would be **$51**.  

**Detailed calculation analysis:**  

- **T-shirt** (original price: $100)  
  - Applying the non-combinable promotion (Promotion D):  
    - Discount from Promotion D: **$50**.  
    - Price after Promotion D: $100 − $50 = **$50**.  
  - Applying the combinable promotion (Promotion A):  
    - Price after Promotion D: $50  
    - Applying Promotion A (10%): $50 × (1 − 0.10) = $50 × 0.90 = **$45**.  

- **Shipping** (original price: $30)  
  - Applying the non-combinable promotion (Promotion C):  
    - Discount from Promotion C (80%): $30 × (80/100) = $30 × 0.80 = **$24**.  
    - Price after Promotion C: $30 − $24 = **$6**.  
  - Discount from Promotion B:  
    - The "Maximum shipping of $20" promotion is analyzed, but since the shipping price ($6) is less than $20, this promotion doesn't give any additional advantage over the 80% discount already calculated.  
    - **Final shipping price = $6**.  

- **Gift**  
  - Applying the non-combinable promotion (Promotion E):  
    - **Gift for buying the t-shirt**.  

- **Order total**  
  - Final price of the t-shirt: **$45**  
  - Final shipping price: **$6**  
  - Additional benefit: **Gift for buying the t-shirt**  
  - **Order total: $45 + $6 = $51**

#### Example 2

Mary created a cart with 1 t-shirt and 1 pair of shoes:  

| Items | Quantity | Prices |
| ----- | ----- | ----- |
| T-shirt | 1 | $100 |
| Shoes | 1 | $500 |

These items are part of collections:

| Items | Collections to which they belong |
| ----- | ----- |
| T-shirt | Collection 1 and Collection 2 |
| Shoes | Collection 1 |

The available promotions are:  

| Promotion | Discounts | Rules | Combinable |
| ----- | ----- | ----- | ----- |
| A | 10% | Applied to products in Collection 1 | Non-combinable |
| B | 25% | Applied to products in Collection 2 | Non-combinable |
| C | 5% | Applied to all products | Combinable for all products |

Promotions A and B compete because they affect the same product (t-shirt). When promotions compete, the Promotions module selects the one that offers the best discount to the shopper, leading to the lowest possible order total. See below an example of competition in this scenario.  

##### Scenario 1: Applying Promotion A of 10%

In this scenario, Promotion A will apply a 10% discount to the t-shirt and shoes (both from Collection 1), followed by a 5% discount from Promotion C.  

| Items | Applied promotions | Prices |
| ----- | ----- | ----- |
| T-shirt | Promotion A and Promotion C | $85.50 |
| Shoes | Promotion A and Promotion C | $427.50 |

In this scenario, the order total would be **$513**.  

**Detailed calculation analysis:**  

- **T-shirt** (original price: $100)  
  - Applying the non-combinable promotion (Promotion A):  
    - Discount from Promotion A (10%): $100 × (10/100) = $100 × 0.10 = **$10**.  
    - Price after Promotion A: $100 − $10 = **$90**.  
  - Applying combinable promotion (Promotion C):  
    - Price after Promotion A: $90.  
    - Applying Promotion C (5%): $90 × (1 − 0.05) = $90 × 0.95 = **$85.50**.  

- **Shoes** (original price: $500)  
  - Applying the non-combinable promotion (Promotion A):  
    - Discount from Promotion A (10%): $500 × (10/100) = $500 × 0.10 = **$50**.  
    - Price after Promotion A: $500 − $50 = **$450**.  
  - Applying combinable promotion (Promotion C):  
    - Price after Promotion A: $450.  
    - Applying Promotion C (5%): $450 × (1 − 0.05) = $450 × 0.95 = **$427.50**.  

- **Order total in scenario 1**  
  - Final t-shirt price: **$85.50**  
  - Final shoes price: **$427.50**  
  - **Order total: $85.50 + $427.50 = $513.00**

##### Scenario 2: Applying Promotion B of 25%

In this scenario, Promotion B will apply a 25% discount to the t-shirt (the only item from Collection 2), and Promotion C will apply a 5% discount. The shoes, as they don't belong to Collection 2, will only get the 5% off from Promotion C.  

| Items | Applied promotions | Prices |
| ----- | ----- | ----- |
| T-shirt | Promotion B and Promotion C | $71.25 |
| Shoes | Promotion C | $475 |

In this scenario, the order total would be **$546.25**.  

**Detailed calculation analysis:**  

- **T-shirt** (original price: $100)  
  - Applying the non-combinable promotion (Promotion B):  
    - Discount from Promotion B (25%): $100 × (25/100) = $100 × 0.25 = **$25**.  
    - Price after Promotion B: $100 − $25 = **$75**.  
  - Applying combinable promotion (Promotion C):  
    - Price after Promotion B: $75.  
    - Applying Promotion C (5%): $75 × (1 − 0.05) = $75 × 0.95 = **$71.25**.  

- **Shoes** (original price: $500)  
  - Applying the non-combinable promotion:  
    - Promotion B isn't applicable as the shoes don't belong to Collection 2.  
  - Applying combinable promotion (Promotion C):  
    - Price before Promotion C (not affected by Promotion B): $500.  
    - Applying Promotion C (5%): $500 × (1 − 0.05) = $500 × 0.95 = **$475**.  

- **Order total in scenario 1**  
  - Final price of the t-shirt: **$71.25**  
  - Final price of the shoes: **$475.00**  
  - **Order total: $71.25 + $475.00 = $546.25**

VTEX applies the strategy that gives the greatest discount. Since the final order amount in scenario 1 is the lowest for the shopper, this will be the chosen strategy.  

### Competition by item

The Promotions module can be configured to apply the greatest discount on each item in the cart, rather than combining promotions at the cart level. Stores can choose this configuration based on their business strategy. If you want to use this model and it's not enabled yet, [open a ticket](/en/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) with the Support team to request the change.  

Competition by item works like this:  

| Items | Quantity | Prices |
| ----- | ----- | ----- |
| T-shirt | 1 | $100 |
| Shoes | 1 | $500 |

These items are part of collections:

| Items  | Collections to which they belong |
| ----- | ----- |
| T-shirt | Collection 1 and Collection 2 |
| Shoes | Collection 1 |

The available promotions are:

| Promotion | Discounts | Rules | Combinable |
| ----- | ----- | ----- | ----- |
| A | 10% | Applied to products in Collection 1 | Non-combinable |
| B | 25% | Applied to products in Collection 2 | Non-combinable |
| C | 5% | Applied to all products | Combinable for all products |

Applying competition by item:  

| Items | Applied promotions | Prices |
| ----- | ----- | ----- |
| T-shirt | Promotion B and Promotion C | $71.25 |
| Shoes | Promotion A and Promotion C | $427.50 |

In this scenario, the order total would be **$498.75**.  

**Detailed calculation analysis:**  

- **T-shirt** (original price: $100)  
  - Applying the non-combinable promotion:  
    - Promotion A (10% on Collection 1): Discount of $10 (new price: $90).  
    - Promotion B (25% on Collection 2): Discount of $25 (new price: $75).  
    - Promotion B is more advantageous for the t-shirt. Price after Promotion B = **$75**.  
  - Applying combinable promotion (Promotion C):  
    - Price after Promotion B: $75.  
    - Applying Promotion C (5%): $75 × (1 − 0.05) = $75 × 0.95 = **$71.25**.  

- **Shoes** (original price: $500)  
  - Applying the non-combinable promotion:  
    - Promotion A (10% on Collection 1): Discount of $50 (new price: $450).  
    - Promotion B (25% on Collection 2): Not applicable.  
    - Promotion A is the only and therefore the best non-combinable promotion for the shoes. Price after Promotion A = **$450**.  
  - Applying combinable promotion (Promotion C):  
    - Price after Promotion A: $450.  
    - Applying Promotion C (5%): $450 × (1 − 0.05) = $450 × 0.95 = **$427.50**.  

- **Order total in the "competition by item" strategy**  
  - Final price of the t-shirt: **$71.25**  
  - Final price of the shoes: **$427.50**  
  - **Order total: $71.25 + $427.50 = $498.75**

