---
title: 'How the Order Replacement works'
id: 3aBxdbUPKgweug68YyK8oQ
status: DRAFT
createdAt: 2017-05-25T18:12:10.611Z
updatedAt: 2021-12-07T18:16:14.226Z
publishedAt: 
firstPublishedAt: 2017-05-30T20:52:49.085Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: how-the-order-replacement-works
legacySlug: how-the-order-replacement-works
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

**The Order Replacement** allows customers in your store to change data of orders already made. The goal is to help them fix bugs without the need to manually reorder or contact your support, making your store's operation easier.

### How to enable Order Replacement

The functionality is available to all stores, but for active this feature it will be necessary to change the initial configuration of your Order Manager:

- Access **Settings** from **Order Management**;
- In Settings **General** check the option **Allow customers to make changes to requests**;
- In 15 minutes, after automatic cache update, the feature will be available.


### Feature Specification



The following data may be changed:
- Address
- Freight
- Paymet method
- SKU

Most importantly, **the commercial conditions of the original order are maintained**. That is, if the customer had discounts or promotions applied to the original order, they are still valid in the replaced order. In cases where it is not possible to maintain the commercial conditions for an order, the replacement is unavailable.

But beware: commercial conditions will only be maintained if three aspects remain the same: same products, same quantity of SKUs per product and same SKU base price. If these aspects are not met, the request is no longer a substitution, characterizing a new request.

### Cases that don't allow replacement

The following cases don't allow replacement:
- Incomplete orders
- Orders with a shared transaction (orders with more than one Seller where payment is made to the Marketplace)
- Orders with some modification made by the store
- Orders made before May 27, 2017

Also, it's not possible to replace orders in the following statuses:
- Billing
- Billed
- Cancel
- Canceled
- Cancellation request
- Replaced
- Processing

## New layout

With this feature, your store users get a redesigned My Orders page with change and cancellation options:

![meus pedidos1 EN](//images.contentful.com/alneenqid6w5/6qCTCcaC2WSE8AgcGuI2YM/c435205525f59c10f5c04c664229044b/meus_pedidos1_EN.png)

![meus pedidos3 EN](//images.ctfassets.net/alneenqid6w5/r8wqLRzyGOEmGcMuWQYMg/3fa6aaad6bd888246457d9e96e704516/meus_pedidos3_EN.png)

When you select **Change order**, the customers are taken to a screen where they choose which information they would like to replace:

![meus pedidos2 EN](//images.contentful.com/alneenqid6w5/5ivhWzwvD2UMGEmiWUkcM2/888904d626fd46212329ab5ca423019f/meus_pedidos2_EN.png)

To complete the change, customers are taken to the cart and the Checkout, where they can alter address, freight, payment method and SKU.

<div class = "alert alert-warning">The purchase must be closed for the process to be completed, but <em>customers are never charged twice</em>. In some cases the previous payment will be reused; when this is not possible, the previous charge on the credit card will automatically be reversed.</div>

Payment reuse can only be applied if the value of the new order is the same as the original order. Also, if the payment expires within 2 days, it can not be reused.
