---
title: 'Order replacement'
id: 2IK9mwQjBKseQmE8K8saO8
status: PUBLISHED
createdAt: 2018-02-20T19:29:21.502Z
updatedAt: 2024-07-08T14:22:27.104Z
publishedAt: 2024-07-08T14:22:27.104Z
firstPublishedAt: 2018-02-20T20:24:08.083Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-replacement
locale: en
legacySlug: allow-to-change-already-closed-orders, how-the-order-replacement-works
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

**Order replacement** is the feature that allows customers to change order information without having to contact support or place a new order.

[Changing items](/en/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190) is different from replacing orders. When replacing an order, the customer requests changes to the order, and when changing items, the store modifies the order.

<div class="alert alert-danger">
The feature is available for all stores. You must enable it so that your customers can use it. 
</div>

This article will cover:

* [How to enable the feature](#enabling-the-feature)
* [The conditions for making changes to an order](#conditions)
* [How your customers will use the feature](#restrictions)

## Enabling the feature

<div class="alert alert-danger">
If Order Replacement is enabled in stores whose My Orders page has customization, you must recreate the customization. The feature replaces the previous version of the page (which is customized) with a new, non-customized page. For these cases, we recommend that before activating the feature in your store, you use a <a href="https://help.vtex.com/en/tutorial/accessing-the-beta-environment--3BHM289568gcSwk2O80Asu">beta environment</a> and validate the activation with customization.
</div>

To enable the feature, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Orders > Settings**, or type *Orders* in the search bar at the top of the page and select *Store Settings / Orders*.
2. On the **General** tab, check the <i class="far fa-check-square"></i> on **Order replacement**, next to _Allow customers to make changes to orders_.
3. Click `Save`.

## Conditions

With the feature enabled, please observe the following conditions and restrictions for customers to make changes to orders.

For the customer to be able to make changes to the order, the original commercial conditions must be maintained. This means that the promotions and discounts must remain the same in the replaced order. Please note that the commercial conditions are only maintained if the order includes the same products, number of SKUs, and SKU base price. If the commercial conditions are not maintained, the order becomes a new order instead of a replacement.

Customers can change an order until it is invoiced, unlike cases where they need store approval to cancel an order (as in the case of an order with status `Ready for Handling`).

The information that can be modified using the Order replacement feature are:

* Delivery address
* [Type of delivery](/en/tutorial/how-does-the-type-of-delivery-work--tutorials_126)
* Payment method
* [SKU](/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u)

### Restrictions

Orders cannot be modified in the cases of:

* [Incomplete orders](/en/tutorial/understanding-incomplete-orders--tutorials_294): when the order does not contain all the information necessary to be completed on the platform.
* Shared transaction: orders with one or more sellers and payment made to the marketplace.
* Orders already modified by the store.
* Orders with status:
    * Verifying invoice
    * Invoiced
    * Request cancellation
    * Cancellation requested
    * Canceling
    * Canceled
    * Replaced
    * Processing

## How your customers will use the feature 

With the feature enabled, your store customers have access to a new order tracking page. They can make changes on the **My Orders** page by doing the following:

* The customer selects an order and clicks on `Change order`.
* A new page is displayed, and they can make the desired changes.

After clicking on `Change order` , the customer will be redirected to the shopping cart, and then to checkout. At checkout, they can make changes to the address, type of delivery, payment method, and SKU. The process is only finished when the purchase is completed. The customer is not charged twice for the same order.

<div class="alert alert-warning">
 Reusing the original payment is only allowed if the amount of the new order is the same as the original order. If the previous credit card payment is not used, the charge is automatically refunded.
<p>For payment methods that expire within 2 days, such as boleto bancário (Brazilian payment method), the payment cannot be reused.
</div>

