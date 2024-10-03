---
title: 'Price Table - Concept Definition'
id: 1wAm5m3IUfIj6maBdaRJt8
status: PUBLISHED
createdAt: 2019-07-04T13:52:10.820Z
updatedAt: 2022-07-27T20:42:39.133Z
publishedAt: 2022-07-27T20:42:39.133Z
firstPublishedAt: 2019-07-17T19:40:46.639Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: tabelas-de-preco-definicao-de-conceito
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

## Definitions

A __price table__ is a set of SKU prices that can be applied to a specific context. These tables store the price information that is displayed on a store's page.

We can look at the price table as an entity that stores and delivers __computed prices__ of its SKUs.

## Relationship between price tables and trade policies

There is a difference between price tables that are created for *[trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)* and price tables that are created for *other contexts*.

Price tables that are not linked to trade policies can be used in contexts such as __promotions__ and __customer clusters__. Price tables that are created for trade policies *can only be linked to that trade policy itself*. What this means is that a price table that is linked to trade policy only informs SKU prices for that specific policy and cannot be linked or associated with another contexts.

It's important to highlight that the concepts of __price table__ and __trade policy__ are *not the same*. The trade policy is a *context* to which a price table is linked. 

## Example

Let's imagine a scenario in which you want to create a pricing strategy to sell SKUs in three different contexts. To achieve this, you'll need to create three price tables - one for each context.

The idea is to have a specific price for:

- applying a promotion;
- a customer cluster;
- a trade policy.

You must create __two generic price tables__, one for the customer cluster and another to apply a promotion. In addition, you must insert the desired price into the __price table linked to the trade policy__ in question.
