---
title: 'Fixed Price - Concept Definition'
id: 3HxF2u5VwidqnUGnFoKdDy
status: PUBLISHED
createdAt: 2019-07-04T13:53:27.780Z
updatedAt: 2021-05-26T17:20:58.165Z
publishedAt: 2021-05-26T17:20:58.165Z
firstPublishedAt: 2019-07-17T19:42:19.813Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: preco-fixo-definicao-de-conceito
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
order: 9
---

## Definition

The __fixed price__ is a price that overlaps all other existing price configurations of a price table.

The fixed price therefore overlaps the __base price__, even when a __price rule__ has been set up. 

This means that for a price table, the fixed price has priority over both the base price and the configured price rule.

> ⚠️ Only [fixed prices](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj) are used by our native marketplace integrations. Other scenarios seen in our [price system architecture](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx) are available only in VTEX marketplaces.

## Functionalities

The fixed price has three functionalities:

- Scheduling
- Minimum number of items in the cart
- List price

The __Scheduling__ allows a fixed price to be valid for a set period of time. After the scheduled end date, the previous price configuration comes into effect as a computed price.

The __minimum number of items in the cart__ allows for a fixed price to be enabled when a certain number of items are included by the customer into the cart. If you fill out the __minimum quantity__ field with the value __1__ for example, the fixed price will be shown in the window display as the SKU's selling price. However, if you choose a value higher than __1__, the fixed price will only be applied when the minimum set number of items is added to the cart.

Lastly, we have the __List Price__. This price functions as a SKU's suggested selling value. The idea is to display the list price together with the __sales price__, to show the consumer that the SKU is being __undersold__. Usually, the list price is known as the __original price__, while the selling price is called __sales price__.

## Scheduling

Let's suppose that you have a clothing store and wanted to do a clearance sale for an old polo shirt collection. The objective is to sell as many items as possible, as fast as possible.

You can use scheduling to set a new price for your SKUs for the next 48 hours for example.

At the end of the established period, the items would thereby return to their original price configuration.

## Minimum items in the cart

Let's now look at a situation in which you are a retailer selling pet products. Let's also suppose that you want to create an incentive for customers to buy rations from a new brand.

In this case, you can set a fixed price so that an item is bought in larger quantities, giving customers who buy 5 or more ration packs a discount on each item's unit price:

- Package unit price: U$ 100,00
- Unit price per package when 5 or more are bought together: U$ 85,00.

## List Price

Let's now look at a scenario in which you buy your SKUs wholesale and where you supplier recommends a U$ 100,00 price for each item. You can, however, choose to undersell each SKU for U$ 80,00. The displayed __list price__ will be as follows: __original price: U$ 100,00__, while the __fixed price__ will be displayed as __sales price: U$ 80,00__.

## Competing fixed prices

You can set up more than one fixed price in the same price table. __In case of competition among the same criteria of the price configuration, the general rule is that the system displays the lesser price__.

If two prices are both eligible for the same *scheduling date*, the system will choose the __lower of the two prices__. The same is valid for two prices that can both be applied to *the same number of items in the cart*. In this case, the system will once again choose the __lower of the two fixed prices__ as sales price.

### Competing scheduling criteria

Let's suppose that an SKU has two fixed prices linked to it. In addition, both prices have different scheduling, *but partly overlapping*. Since these prices are competing for the same schedule, at least in part, the lower price will be considered for the overlapping schedule.

For example, the first fixed price is set at __U$ 50,00__ and its schedule runs from __10AM__ to __4PM__. The second price is set at __U$ 25,00__ and is scheduled from __noon__ to __8PM of the same day__. Therefore, the prices compete for the same schedule between *noon and 4PM*, which means that the __U$ 25,00__ SKU sales price will prevail during this time.

![fixed price - example2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/prices-101/preco-fixo-definicao-de-conceito_1.svg)

### Competing criteria for minimum number of cart items

For cases where two fixed prices have overlapping criteria when it comes to the __minimum number of items in the cart__, the lower price will be chosen as sales price.

Let's suppose that you've added a fixed price of U$ 200,00 for __two of more items__ and another fixed price of U$ 100,00 for __five or more items__. We can see that these prices compete for 5 or more items. 

Which price would in this case be applied to five or more items? The sales price would be the lower one, U$ 100,00. 

![fixed price - example1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/prices-101/preco-fixo-definicao-de-conceito_2.svg)

## Examples 

In this example, your store sells home appliances. In the Prices Module, you create __trade policy three price tables__ and __two price tables for other contexts__. 

You add __a base price__ of U$ 2000,00 for a fridge SKU. This implies that, *at this time*, all your price table give this SKU a __sales price__ of U$ 2000,00.

However, you decide to *apply a higher price* to a specific sales channel. You add a __fixed price__ of U$ 2500,00 to that sales channel specific trade policy table. The result is __sales price__ of U$ 2500,00 for this sales channel, since *the fixed price has priority over the base price in a price table*.
