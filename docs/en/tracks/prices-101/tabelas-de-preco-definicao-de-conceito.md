---
title: 'Price Table - Concept Definition'
id: 1wAm5m3IUfIj6maBdaRJt8
status: PUBLISHED
createdAt: 2019-07-04T13:52:10.820Z
updatedAt: 2024-12-04T18:04:10.370Z
publishedAt: 2024-12-04T18:04:10.370Z
firstPublishedAt: 2019-07-17T19:40:46.639Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: tabelas-de-preco-definicao-de-conceito
locale: en
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: prices-101
---

## Definitions

A price list is a set of SKU prices for a specific context. This table stores the price information that will be visible in the store.

A price table can be considered an entity that calculates and provides the [computed prices](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx) for its SKUs.

## Relationship between price tables and trade policies

Price tables and [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) serve distinct purposes. Price tables contain the SKU prices, determining how much each item costs in a particular context. Trade policies define the sales context, specifying who will see the price and where it will be displayed.

When not linked to trade policies, price tables can be applied in contexts such as [promotions](https://help.vtex.com/en/tutorial/lista-de-promocoes-beta--4yB7nNdliiFxBTXE19GCIi) and [customer clusters](https://help.vtex.com/en/tutorial/criando-promocao-para-um-cluster-de-clientes--tutorials_342). However, if a table is created to support a trade policy, it must be exclusively associated with that policy. 

<div class = "alert alert-info">
A table linked to a trade policy defines the SKU prices for that specific sales context and cannot be used in other contexts.
</div>

## Practical example

Imagine you need to define different prices for a SKU for three distinct contexts: a specific promotion, a customer cluster, and a trade policy.

To do this, you'll need to create three separate price tables:

- A table for the promotional price.
- A table for the price associated with the customer cluster.
- A table linked to the trade policy, defining the specific price for that sales context.

The first two price tables are generic and can be used for other promotions or clusters. The third table is exclusive to the trade policy and can only be applied within that specific context.
