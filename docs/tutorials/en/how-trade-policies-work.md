---
title: How trade policies work
id: 6Xef8PZiFm40kg2STrMkMV
status: PUBLISHED
createdAt: 2021-05-25T20:05:42.155Z
updatedAt: 2022-12-08T14:39:11.093Z
publishedAt: 2022-12-08T14:39:11.093Z
firstPublishedAt: 2021-05-25T20:17:12.408Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slug: how-trade-policies-work
legacySlug: how-does-a-trade-policy-work
subcategory: 6J3wx7KM4oysymsWuUACyY
---

On the VTEX platform, trade policies contain configurations of catalog, pricing, promotions, logistics, customer segmentation, and payments for different sales strategies. You have to [create a new trade policy](https://help.vtex.com/en/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) when one of these settings is different between the sales channels in which your store operates. The response time (SLA) for creating a trade policy is three business days.

Trade policies differentiate between sales conditions for [marketplaces](https://help.vtex.com/en/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404), sellers, stores with their own ecommerce, physical stores, or B2B stores, for example. 

They adapt your ecommerce website navigation according to the type of user who accesses it, segmenting sales conditions for each audience. Therefore, even though different sales channels can share the same trade policy, it is not possible to have more than one trade policy per sales channel.

See how different VTEX configurations relate to trade policies:

- [Catalog](#catalog)    
- [Prices](#prices)    
- [Promotions](#promotions)    
- [Shipping strategy](#shipping-strategy)    
- [Payments](#payments)    
- [Master data](#master-data)  
- [Account management](#account-management)  

To [request additional trade policies](https://help.vtex.com/en/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), contact our Growth Operations team through Support by selecting **Commercial** and `Create a trade policy`.

Additional trade policies to integrate with [native connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex), [certified connectors (partners)](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-certified-connector-partner), or other VTEX stores are free of charge.

## Catalog
You can restrict which products are available for certain trade policies when [adding new products](https://help.vtex.com/en/tutorial/cadastrando-produtos--tutorials_2567) to the catalog. In doing so, the catalog will be segmented according to different business strategies. These strategies can have products segmented by region, marketplace, or specific types of customers, such as employees. Learn more about how to configure your [catalog](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ).

## Prices
You can set different prices for the same SKU based on the trade policy. This use of the trade policy is not equivalent to creating a promotion, as it depends on your business's pricing strategy. Trade policies can be used to differentiate prices between B2C and B2B customers or between physical stores and marketplaces. There is also the option to apply [pricing rules](https://help.vtex.com/en/tutorial/configurar-regra-de-preco-para-politica-comercial--5LQMLwcUcEGCWK6SMI6cEM) and [fixed prices](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) to differentiate prices and markups between specific products, categories, or brands. Learn more about how to configure [prices](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP).

## Promotions
You can restrict which promotions are available for certain trade policies. When creating an exclusive promotion for your sales app, physical stores, or selected marketplaces, the trade policy is what determines [which products will be included in the promotion](https://help.vtex.com/en/tutorial/promocao-regular--tutorials_327?&utm_source=autocomplete#politica-comercial). Learn more about how to configure [promotions](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/4W2AA8MWwIy80z5UCYw0f9). 

## Shipping strategy
You can define specific [logistics routes](https://help.vtex.com/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/1xo0jmMDcnAUU5ZOavdQ7M) for each sales channel by linking them to different trade policies. [Loading docks](https://help.vtex.com/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj) and [warehouses](https://help.vtex.com/en/tutorial/gerenciar-estoque) connect logistics routes with the trade policies in which they will be applied. Through this connection, the different features of the Inventory & shipping module identify to which products they apply. Learn more about how to configure your [shipping strategy](https://help.vtex.com/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx). 

## Payments
When you create a payment condition, you can restrict its availability in certain trade policies by creating [special conditions](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456). This allows you to determine a specific installment payment condition for employees, restrict a payment method to certain sellers, or provide specific payment methods to your store's acquiring partners.

When you create different payment conditions for the same product, the checkout system will select the most suitable option according to the audience. If there are no restrictions, the trade policy will be applied to all sales channels. Learn more about how to configure [payments](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG). 

## Master data
You can limit access to the store to specific audiences, for example, a B2B site where only registered companies can browse, or a site that has an exclusive area for certain customers. This can be set by creating a [customer cluster in Master Data](https://help.vtex.com/en/tutorial/como-criar-um-cluster-de-clientes) or via trade policy. Learn more about [Master Data](https://help.vtex.com/en/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw) settings. 

## Account management

<div class="alert alert-warning">
If you have many sub-accounts, or physical store operations that offer in-store pickup or ship from store, creating multiple trade policies is not the best solution. We suggest creating new <a href="https://help.vtex.com/en/tutorial/o-que-e-store-name">store names</a> for each store within an <a href="https://help.vtex.com/en/tutorial/o-que-e-account-name">account</a>. 
</div>

Having too many trade policies in a VTEX environment slows down the process of indexing products and displaying them on your website, as well as simulating shipping rates at checkout, which might affect your order conversion rates. By segmenting the catalog based on multiple trade policies instead of creating store names with separate inventories, the store restricts its product offer, which leads to lost sales opportunities and worse delivery conditions. Learn more about [how to create a store name](https://help.vtex.com/en/tutorial/como-criar-um-store-name).

## Learn more

- [Configuring a marketplace trade policy](https://help.vtex.com/en/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)  
- [Creating a trade policy](https://help.vtex.com/en/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)

