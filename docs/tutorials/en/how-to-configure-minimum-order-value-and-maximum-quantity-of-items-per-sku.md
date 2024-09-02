---
title: 'How to configure minimum order value and maximum quantity of items per SKU'
id: 7JqipPUBxtKz0m4OlAyKs9
status: PUBLISHED
createdAt: 2020-05-29T16:17:01.837Z
updatedAt: 2023-03-23T16:58:55.153Z
publishedAt: 2023-03-23T16:58:55.153Z
firstPublishedAt: 2020-05-29T17:17:02.105Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: how-to-configure-minimum-order-value-and-maximum-quantity-of-items-per-sku
locale: en
legacySlug: how-to-configure-minimum-order-value-and-maximum-quantity-of-items-per-sku
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

In ecommerce operations, the logistical cost of delivering products is essential for maintaining competitiveness. And this cost is strongly impacted by two variables:

- The value of the cart
- The number of items of the same SKU per cart

For stores that carry out frequently, the delivery of items in batches (tens or hundreds of units), delivering an order with few items or low value, can be less profitable and inefficient from a logistical point of view. Thus, setting a minimum order value can help to improve both factors.

In B2B operations, there is a need to maintain relationships with buyers who require periodic or previously agreed deliveries, even if demand exceeds expectations. In this situation, setting a maximum number of items of the same SKU for each order helps in not committing an excessive number of items of the same SKU in stock. Just like when your store has a scarce product, sold at a competitive price, and you want to ensure that all your customers will have access to that product.

## Setting a minimum order value

1. In the VTEX Admin, go to __Store Settings > Orders > Settings__, or type __Orders__ in the search bar at the top of the page and look for the option __Store Settings / Orders__.
2. On the tab __General__, fill in the desired value in the field __Minimum total amount in cart__.
3. Click `Save`.

![Minimum Order Value - EN](https://images.ctfassets.net/alneenqid6w5/6bJ49E109ewRg9VUoP16rP/871fa991d270c1e64c12f0cdf3c5a4ab/Minimum_Order_Value_-_EN.png)

<div class="alert alert-warning">
The customer is allowed to assemble a cart with a value less than that specified in the "Minimum total amount in cart" rule. However, at the time of closing the purchase, only orders that are equal to or greater than the specified amount will be completed.
</div>

## Setting a maximum number of items of the same SKU per cart

1. In the VTEX Admin, go to __Store Settings > Storefront > Settings__, or type __Settings__ in the search bar at the top of the page and look for the option __Store Settings / Storefront__.
2. On the tab __General__, fill in the desired value in the field __Max quantity of the same SKU in cart__.
3. Click `Save`.

![Max quantity of the same SKU in cart](https://images.ctfassets.net/alneenqid6w5/Tb4rS7FposwzygY5HlEpr/0a8cf8d7955ae90cea6332cafb6990ed/Quantidade_Maxima_de_um_mesmo_SKU_no_carrinho_EN.png)

<div class="alert alert-warning">
There are no limits on the maximum number of <b>same SKU</b> items per cart. The only restriction refers to the maximum number of items from <b>different SKUs</b>, which must be a maximum of 300 items per cart.
</div>

If you want to use actions that prevent the user from exceeding the specified values even during the purchase flow (for example, create a cart button lock when the maximum amount of items is reached), it will be necessary to create a customization in the front-end of the store.

