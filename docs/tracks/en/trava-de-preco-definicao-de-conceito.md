---
title: 'Price Variation Limiter - Concept Definition'
id: 7JZhLmI3mjBVu0RMOueoy3
status: PUBLISHED
createdAt: 2019-07-04T13:54:19.429Z
updatedAt: 2020-02-13T15:45:22.885Z
publishedAt: 2020-02-13T15:45:22.885Z
firstPublishedAt: 2019-07-17T19:47:20.847Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: trava-de-preco-definicao-de-conceito
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

## Definition

Changing your store's SKU prices is a delicate operation that can cause unwanted consequences if not properly performed. Situations may arise in which, because of a pricing error on your part, SKUs are sold at a much lower price than intended.

To minimize these risks, you can configure an item's **maximum and minimum price limits**. This feature ensures that SKU prices are not altered beyond the desired value range.

If you try to either lower or increase an SKU's price beyond the configured limit, the UI will display the following message: 

`Price cannot be increased more than {{upperLimit}}% at a time, from {{currentValue}} to {{newValue}} ({{variation}}% increase)` 

or

`Price cannot be decreased more than {{lowerLimit}}% at a time, from {{currentValue}} to {{newValue}} ({{variation}}% decrease)`

## Examples

Let's say that you've configured a price variation limit with an **upper limit** of 50% and a **lower limit** of 10%. This means that if you try to increase the price by more than 50% or if you try to lower it by more than 10%, the price variation limit will be activated.

As example, let's use an SKU with a U$ 100,00 price tag.

If you try to change the its price to U$ 160,00, **the price variation limit will trigger**, since the price variation in this case is 60% and the **upper limit** only allows for a price variation of up to 50%. Therefore, the original U$ 100,00 is kept.

Looking at the lower limit, if you try to decrease the price to U$ 20,00, the **price variation limit** is also triggered, since the price variation attempt was equal to 80% and the **lower price variation limit** only allows for a 10% variation. Therefore, the price won't be changed.
