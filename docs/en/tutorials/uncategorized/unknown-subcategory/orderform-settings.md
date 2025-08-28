---
title: 'orderForm settings'
id: 7EAqNk48KP2QHnCxu856jT
status: DRAFT
createdAt: 2024-06-18T13:34:07.902Z
updatedAt: 2025-06-24T15:08:23.220Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slugEN: orderform-settings
legacySlug: orderform-settings
locale: en
subcategoryId: 
---

# orderForm settings

In the following sections, you'll find some of the security settings available in Checkout that can be enabled by the [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) endpoint.

## Require login when placing an order

Setting the `requiresLoginToPlaceOrder` field to `true` allows purchases to be made only by customers who have gone through the authentication process. The customer must be logged in using the same email address provided when products were added to the cart.

When you choose to enable this field, [SmartCheckout](https://help.vtex.com/en/tutorial/smartcheckout-security--3SrJuuhrqwePUg1rp1exfB) will be disabled for all your customers.

## Minimum time between orders

By setting a numeric value for the `minimumPurchaseDowntimeSeconds` field, you can determine the minimum time in seconds a buyer must wait before placing another order. This setting prevents customers from creating multiple orders in a short time.

We recommend setting this field to 90 seconds and using this setting in combination with [Require login to place order](#require-login-to-place-order).

## Minimum time for a cart to exist before a new credit card can be used

Setting a numeric value in the `cartAgeToUseNewCardSeconds` field specifies how many seconds a new cart needs to exist before a new credit card can be used.

This setting reduces the risk of creating multiple carts and adding new credit cards. Activating this field does not affect orders placed with cards previously saved in the customer account.

We recommend setting this field to 30 seconds.

### Require login to add a new credit card

When the `requiresLoginToUseNewCard` field is set to `true`, the system requires the customer to be logged into the store in order to add a new credit card as a payment method. This setting enhances transaction security and helps prevent unauthorized use of credit cards.
