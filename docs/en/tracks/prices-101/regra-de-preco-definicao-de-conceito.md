---
title: 'Price rule - Concept definition'
id: 2rBirbpB7wLnei4dQ9KGMW
status: PUBLISHED
createdAt: 2019-07-04T13:52:56.900Z
updatedAt: 2020-02-13T15:43:50.011Z
publishedAt: 2020-02-13T15:43:50.011Z
firstPublishedAt: 2019-07-17T19:42:03.230Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: regra-de-preco-definicao-de-conceito
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

## Definition

As previously mentioned, every SKU must have a registered *base price*. However, the Prices module has a functionality that allows you to *change a base price for certain price tables*. These modifiers are called __price rules__.

Price rules allow you to change the price of an SKU in a price table __without changing the base price of other price tables__. You will first need to create a price rule and link it to the desired price table.

However, when we combine this price rule with the SKU's base price, a new value is obtained. This value will represent the SKU's __computed price__ within a price table.

> ℹ️ Using price rules is **optional**. If an SKU is not linked to any modifiers, its price in the price table in question will be the registered base price.

Price rules have __five configuration settings__:

- Price tables
- SKUs
- Scheduling
- Markup range
- Price variation

While *price tables*, *SKUs*, *scheduling* and *markup range* determine when and where the price rule will be applied, the *price variation* is the modifier that will change the SKU price.

## Examples

Let's look at a scenario where you want to sell your __consumer electronics category__ SKUs on an external marketplace. To achieve this, you intend to create a __specific price rule for this context__.

Now let's suppose that one of the TVs available in this category has a __base price of U$ 1000__. If your strategy sets a __20% price variation__, this percentage will be applied to the base price, which will result in an __external marketplace sales price of U$ 1200__.

To configure this rule, your first step is to decide which __price table__ it will apply to. That price table must be linked to the trade policy that sends information to the external marketplace. 

If your strategy's aim is to only modify the __consumer electronics category prices__, you must specify this when creating the price rule. 

Lastly, you have to decide which __price variation__ will be applied to this rule. In our scenario, the modifier is __20%__. This change will be applied to the price of __every SKU within the consumer electronics category__.


