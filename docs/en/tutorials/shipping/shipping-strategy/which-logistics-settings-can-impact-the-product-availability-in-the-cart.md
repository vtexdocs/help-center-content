---
title: 'Which logistics settings can impact the product availability in the cart?'
id: NAyBFToRdvlDyOzeeAeNw
status: PUBLISHED
createdAt: 2024-09-27T14:02:13.369Z
updatedAt: 2024-11-04T21:10:23.340Z
publishedAt: 2024-11-04T21:10:23.340Z
firstPublishedAt: 2024-09-27T14:48:21.163Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: which-logistics-settings-can-impact-the-product-availability-in-the-cart
legacySlug: which-logistics-settings-can-impact-the-product-availability-in-the-cart
locale: en
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

When you configure the product correctly and it [is displayed as available on the product listing page](/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382), the item may become unavailable when added to the cart. Different [logistics](/pt/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) aspects may contribute to the product unavailability in the cart, and the following topics help us identify the potential reasons:

* [Shipping Simulator](#shipping-simulator)
* [Inventory](#inventory)
* [Shipping strategy](#shipping-strategy)
* [Shipping policy settings:](#shipping-policy-settings)
    * [Carrier and shipping rate template](#carrier-and-shipping-rate-template)
    * [Dimensions and cubic weight factor](#dimensions-and-cubic-weight-factor)
    * [Modal](#modal)

> ⚠️ If your store uses the [seller regionalization](/en/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw) feature, the sellers able to ship the product to the customer's location must have the product available for sale. In addition, the status of these sellers must be active, as products from inactive sellers are not considered available.

## Shipping Simulator

A product may be unavailable in the cart because your store's [shipping strategy](/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) does not allow shipping to the customer's location or because there is not enough quantity of the product in the [inventory](/en/tutorial/gerenciar-inventario--tutorials_139), for example.

One way to test if there is a feasible delivery route is using the **Shipping Simulator** to validate specific logistical settings in your store and check your inventory.

> ℹ️ See the article [Shipping Simulator](/en/tutorial/simulador-de-envio--tutorials_144) to learn how to simulate product shipping.

## Inventory

By adopting any of the following inventory strategies, you can ensure product availability on the product listing page:

* Ensure sufficient item count for sales ([reserved](/en/tutorial/como-a-reserva-funciona--tutorials_92) items are not considered available).
    * In the VTEX Admin, go to **Catalog > Inventory > Inventory Management** and change the value in the `Update Count` column in the product row.
* Activate the [unlimited inventory](/en/tutorial/gerenciar-inventario--tutorials_139) option for the product.
    * In the VTEX Admin, go to **Catalog > Inventory > Inventory Management** and activate the toggle switch in the `Unlimited inventory` column in the product row.

If [future inventory](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-/supplyLots/-supplyLotId-) is configured for the SKU, the supply of this item could take longer than expected. In this period, the unavailability could be due to a lack of stock.

> ⚠️ If your store has [franchise accounts](/en/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex), for the inventory of these accounts to be available for sale, the products must be linked to the same [trade policy](/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) used in your storefront.

## Shipping strategy

On VTEX, [shipping strategy](/en/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) is the name of the relationship between the shipping policy, warehouse, and loading dock. When the platform [calculates shipping](/en/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) for an order, at least one combination of these logistics entities must make it possible to ship the product for a shipping route to be considered valid.

In terms of shipping strategy, the list below shows the main situations that lead to the product being unavailable in the cart:

* Inactive [shipping policy](/en/tutorial/politica-de-envio--tutorials_140).
* Inactive [warehouse](/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb).
* Inactive [loading dock](/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).
* Warehouse not associated with a dock.
* Loading dock not associated with the shipping policy.
* Loading dock not associated with the [trade policy](/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) that determines the products displayed on the product listing page.

> ℹ️ These situations must be considered in the context of the sale. Having an inactive warehouse does not make the product unavailable, but if it is the only one warehouse serving as the shipping route and is inactive, the product becomes unavailable in the cart.

## Shipping policy settings

[Shipping policy](/en/tutorial/politica-de-envio--tutorials_140) is a set of rules and settings that define the shipping options displayed to customers at checkout. The main shipping policy aspects that affect product availability in the cart are:

* [Carrier and shipping rate template](#carrier-and-shipping-rate-template)
* [Dimensions and cubic weight factor](#dimensions-and-cubic-weight-factor)
* [Modal](#modal)

From the VTEX Admin, these settings are configured under **Shipping > Shipping Strategy**, in the `Shipping Policies` tab, i.e., on the [shipping policy editing](/en/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) page. To create or change a shipping policy via API, use the [Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) and [Update shipping policy by ID](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/shipping-policies/-id-) endpoints.

### Carrier and shipping rate template

Each shipping policy is associated with a [shipping rate template](/en/tutorial/planilha-de-frete--tutorials_127), where you add the [carrier](/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) and its shipping rates.

The following list shows the main reasons for product unavailability in the cart related to carrier settings:

* The cart amount is below the minimum shipping value.
* The cart amount exceeds the maximum shipping value.
* The number of items in the cart does not meet the minimum number of items for shipping.
* The customer's postal code/location is not in the region served by the carrier.

> ℹ️ The above situations must be considered in the context of the sale. If there is only one eligible shipping policy for shipping the product and the characteristics of this product are not within the settings accepted by the carrier, then there is no valid shipping route, and the product becomes unavailable.

Other carrier settings that can impact product availability are related to item weight and volume, as mentioned below.

### Dimensions and cubic weight factor

For the [cubic weight factor](/en/tutorial/calcular-o-fator-cubico-de-peso--tutorials_128) not to affect product availability, you must ensure that the product falls within the **package dimensions** configured in the shipping policy, which are:

* Sum of all dimensions.
* Largest edge.
* Cubic weight factor.
* Minimum weight factor.

If the product is not within any of the configured limits, it will become unavailable in the cart.

> ⚠️ If two shipping policies are valid for the order, one for delivery and the other for [pickup](/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R), but the product does not meet the package size limits of one of them, only one shipping method will be displayed at checkout. For example, if the product's weight is lower than the minimum weight value in the shipping policy for delivery but within the limits set for pickup, the customer will only be offered the option to pick up the order.

### Modal

The [modal](/en/tutorial/como-funciona-o-modal--tutorials_125) is a configuration in the shipping policy that ensures products with special requirements are delivered by specialized carriers. For example, only a transportation company that offers refrigeration can deliver products requiring cooling.

The following situations related to the modal can make a product unavailable in the cart:

* There is no shipping policy for the type of modal configured in the product.
* The product has no modal configured, but there is no valid shipping policy for it, as the policies that would be valid have been configured only to deliver products with a modal.

