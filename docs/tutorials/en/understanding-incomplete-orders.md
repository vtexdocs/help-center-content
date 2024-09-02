---
title: 'How incomplete orders work'
id: tutorials_294
status: PUBLISHED
createdAt: 2017-04-27T22:09:39.566Z
updatedAt: 2023-03-29T23:26:00.473Z
publishedAt: 2023-03-29T23:26:00.473Z
firstPublishedAt: 2017-04-27T23:03:13.801Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: understanding-incomplete-orders
locale: en
legacySlug: understanding-incomplete-orders
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Whenever an order is not listed on the [All Orders](https://help.vtex.com/en/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi) page with no filter, it may be incomplete.

The incomplete status arises when all the information about the order has not been completed for finalization on the platform.

In addition, all incomplete orders do not have Workflow and this behavior is expected by the system.

Because an incomplete order was interrupted, activating a Workflow for an inactive situation would not be functional.

<div class="alert alert-danger"> 
If there is an incomplete order, we recommend placing it again in the store. The platform will record the incomplete orders, but not process them. So if an order is incomplete and the customer still wants to purchase the items, they need to create a new order with the same items.
</div>

Hence, the process proceeds as usual.

## Most common reasons

### Order refused during prior authorization by the credit card operator 

After finalizing the purchase, we do the processing in real time with the credit operator. If payment is refused, we return the message that payment has been denied and request that a new method of payment be chosen. For example: Insufficient credit or incorrect card data. At this time, we register the order as incomplete. 

If the customer chooses a new payment method and this is approved, a new order will be created and registered in **All Orders** page.

### Payment made in an external environment 

When payment is being made in an external environment as PayPal, for example, the order will remain as incomplete until our Payments module receives a return approval.

### Customer desistance

Customer desists from finalizing the purchase after clicking on the finalize purchase button.

## How to identify these orders?

On the **All Orders** page, the [filters](https://help.vtex.com/pt/tutorial/filtrar-todos-pedidos--tutorials_192) include the tab **Status**, with the **Completed Status** options. If you mark the option `Incomplete`, all orders in this situation will be displayed.
