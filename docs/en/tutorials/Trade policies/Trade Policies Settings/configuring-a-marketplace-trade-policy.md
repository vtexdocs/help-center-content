---
title: 'Configuring a marketplace trade policy'
id: tutorials_404
status: CHANGED
createdAt: 2017-04-27T22:06:38.350Z
updatedAt: 2024-06-14T14:19:35.130Z
publishedAt: 2024-05-15T00:18:56.253Z
firstPublishedAt: 2017-04-27T23:03:23.796Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: configuring-a-marketplace-trade-policy
locale: en
legacySlug: configuring-a-marketplace-sales-policy
subcategoryId: 5AxJjgQO1Uc0kWKMwyi08W
---

On the VTEX platform, you can use [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) to group catalog, prices, promotions, logistics, customer segmentation and payment settings for different sales strategies. Stores that operate as sellers configure trade policies to apply specific conditions for each marketplace in which they sell products. 

Learn how you can configure trade policies in the following modules when your store operates as a seller.

- [Store setup](#store-setup)  
- [Orders management](#orders-management)  
- [Promotions](#promotions)  
- [Payments](#payments)  
- [Catalog](#catalog)  
- [Prices](#prices)  
- [Shipping strategy](#shipping-strategy)  
- [Integrations](#integrations)  

To [request additional trade policies](https://help.vtex.com/en/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), contact our Growth Operations team through *[Support](https://help.vtex.com/en/support)* by selecting **Commercial** and `Create a trade policy`.

Requesting additional trade policies to integrate with [native connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-native-connector-vtex), [certified connectors](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrating-with-a-certified-connector-partner), or other VTEX stores is free of charge.

<div class=alert alert-warning> If the same trade policy is applied to a certified connector and a partner connector, there is no fee exemption.</div>

## Store setup
Creating a new trade policy is the first step in defining the conditions that apply to each marketplace in which a seller operates. Sellers can create multiple trade policies, or apply the same policy to more than one marketplace.

This configuration can be done in the *Store setup* module, on the *Trade policies* page. You must [create a new trade policy](https://help.vtex.com/en/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) when the settings for catalog, price, promotions, logistics and payments are different between the marketplaces in which sellers sell their products. 

![EN Add Politica comercial](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_1.jpg)

## Orders management
After creating a trade policy, you must associate it with each marketplace in which the seller sells products by adding them as [affiliates](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0). This is how sellers identify which trade policy operates in each marketplace. If your store sells products in three different marketplaces, you must create three affiliates: one for each marketplace.

This can be configured in the *Settings* page of the *Order management* module, where you can add affiliates. Even if you create several, it is important to note that only one trade policy will operate in the marketplace at a time. 

![EN Afiliado](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_2.jpg)
*In the example above, the affiliate "Amazon" is associated with trade policy "1".* 

## Promotions
Sellers can create promotions with different conditions for the marketplaces in which they sell products. When creating a promotion, the trade policies indicate to which marketplaces they will be applied. If you would like to create a promotion for your store in a marketplace that offers a lower commission on your products, you must indicate to which trade policy the promotion will be applied.

This configuration can be done in the *Promotions* module in all [promotions](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/4W2AA8MWwIy80z5UCYw0f9) your store offers as a seller. To do this:

1. Select the trade policy in the **Restrict trade policies **field. 
2. Configure the origin of the promotions to `fulfillment / Delivered by me`. 

If no trade policy is selected, the promotion will be available in all sales channels.

![EN Promoções Politica Comercial](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_3.jpg)

*In the example above, the promotion will only apply to orders from the "Marketplace-BRL" and "Argentina-ARS" trade policies, where the store operates as a seller. The promotion will not be available on the VTEX storefront.* 

## Payments
Sellers who process payment for their product sales in a marketplace can create [special payment conditions](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456) and apply them to specific marketplaces by using trade policies. If you want your store to offer more financing options for orders placed on partner marketplaces, you must create a special condition and associate it with the trade policy in place on these marketplaces.

This configuration can be done in the *Payments* module by [creating a special condition](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456) and associating it with the trade policies of your choice.

![EN Pagamento Politica comercial](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_4.jpg)

*In the example above, the payment condition is associated with the "Marketplace" trade policy. This makes the payment condition available only to sales channels associated with this commercial policy.*

## Catalog 
Sellers can restrict the availability of products in their catalog by using different trade policies. This is how sellers determine which products will be sold in each marketplace in which they operate. If your store sells electronics and clothing, in order to sell in an electronics-only marketplace, you must segment the product assortment and exclude clothing.

This configuration can be done in the VTEX *Catalog*, when [adding products](https://help.vtex.com/en/tutorial/cadastrando-produtos--tutorials_2567), by indicating which trade policies are associated with it. If no restrictions are set when adding the product, it will be available in all trade policies.

>⚠️ We do not recommend attaching trade policies to collections, when determining the product assortment, especially for external marketplaces. When a product is withdrawn from the collection associated to a trade policy, the VTEX system does not warn the marketplace of that update, making the product still available in the marketplace.

![EN Catálogo Politica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_5.jpg)

*In the example above, the product will only be available to sales channels using the "Carrefour" and "Marketplace" trade policies.*

## Prices
Sellers can define a different pricing strategy for each marketplace in which they operate. If, for example, marketplace A charges a 5% commission on the seller's products, and marketplace B charges 10%, you can adjust the prices to compensate for the markup difference.

This configuration can be done in the *Prices* module by means of trade policies. When entering prices for their products, sellers must take into account that each trade policy is created with its own price table. To differentiate prices between trade policies, you can use:

- [Price rules](https://help.vtex.com/en/tutorial/configurar-regra-de-preco-para-politica-comercial--5LQMLwcUcEGCWK6SMI6cEM): to determine a markup for specific categories and brands.
- [Fixed prices](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy): to differentiate prices for specific products.

![EN Regra de preço](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_6.jpg)

*In the example above, the price rule applied a markup to the "Marketplace" trade policy for products in the "Fera-Fashion category".*

## Shipping strategy

Sellers can set up specific [logistics routes](https://help.vtex.com/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/1xo0jmMDcnAUU5ZOavdQ7M) for each marketplace in which they sell their products. This means associating a combination of stock, inventory, shipping policy (carrier) and even pickup points with different trade policies. If your store provides products from *Stock 1* to *Marketplace A*, you must make this association when configuring loading docks and inventory.

Both settings can be configured on the *Shipping strategy* page. When creating a [loading dock](https://help.vtex.com/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj), you must indicate which trade policies will be associated with it. This makes the shipping policies associated with this loading dock available to the linked trade policies. Then, you must link the desired [inventory](https://help.vtex.com/en/tutorial/gerenciar-estoque) to a loading dock to make the inventory available to the trade policies associated with the loading dock.

![EN Doca politica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_7.jpg)

*In the example above, the loading dock is associated with the commercial policy "Marketplace", which will be linked to the carrier "Carrier A".*

![EN Estoque Politica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_8.jpg)
*In the example above, the inventory is associated with "Dock A", so this will be the inventory used by the trade policies linked to "Dock A".* 

## Integrations
Trade policies also apply to all integrations in which your store sells products. Through them, the sellers indicate which conditions of price, catalog, promotions, logistics, payment and shipping strategy will be available for the sales made in the integrations with Netshoes or Google Shopping, for example.

[Integrations](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete#vender-em-marketplace) can be configured in the *Settings* page of the *Integrations* module. Usually, each channel requires specific commercial conditions, but it is possible that different channels share the same trade policy.

![EN Integracao Politica](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Trade policies/Trade Policies Settings/configuring-a-marketplace-trade-policy_9.jpg)
*In the example above, the "Marketplace" trade policy applies to the Google Shopping integration.*

## Learn more

- [Creating a trade policy](https://help.vtex.com/en/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)  
- [How trade policies work](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)  
- [Marketplace strategies at VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)

