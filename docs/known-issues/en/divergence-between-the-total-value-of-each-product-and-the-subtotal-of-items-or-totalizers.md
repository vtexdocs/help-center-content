---
title: 'Divergence between the total value of each product and the subtotal of items or totalizers'
id: 2Z8vR0cKkaSYQqF9MUX8PX
status: PUBLISHED
createdAt: 2022-01-24T20:46:09.666Z
updatedAt: 2022-11-25T22:40:22.075Z
publishedAt: 2022-11-25T22:40:22.075Z
firstPublishedAt: 2022-08-15T17:25:50.536Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: divergence-between-the-total-value-of-each-product-and-the-subtotal-of-items-or-totalizers
locale: en
kiStatus: Backlog
internalReference: 331188
---

## Summary


In some cases, the total value of the order differs from the sum of the total value of the products (also adding the shipping cost and possible discounts, if any). This happens because the displayed value for the items is part of the "sellingPrice", an orderForm information that loses precision due to rounding reasons.

Note: The known cause may also be related to the existence of products with a multiplier unit other than 1 in the order.

A small complement is that this generates the side effect that discounts/promotions will not appear applied to the items, which will continue with their original price, appearing only in the totalizers.

The details entered also affect the UI of orders in the admin (OMS, which displays the same type of divergence) and can affect the JSON of orders.

In the case of the JSON of orders, the "sellingPrice" information should not be used due to its lack of precision. It must be replaced by the "price" (unit price) of the items, along with the quantity purchased and possible existence of a unit multiplier, and also added/subtracted from the "priceTags" (which are price modifiers, then discounts/additions). However, getting the unit value from this total value calculation can also result in rounding issues.

Note: Just like the "sellingPrice", the "price" of the "priceTags" is rounded and can be inaccurate! To look for precision and have values corresponding to the totalizers, the rawValue of the "priceTags" must be used, which has 5 decimal places of precision.



## Simulation


N/A



## Workaround


Customizing CSS to hide/show the different values that the platform already provides. Example:

.cart-items .best-price .new-product-real-price,
.cart-items .quantity-price .total-price,
.mini-cart .item-price {
    display: inline-block !important;
}
.cart-items .best-price .new-product-price,
.cart-items .best-price .discount,
.cart-items .quantity-price .total-selling-price,
.mini-cart .price {
    display: none !important;
}

As a result, the checkout cart and minicart will be based on **price** and not **sellingPrice**.

