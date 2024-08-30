---
title: 'New Checkout settings for bot attack protection'
id: 3kA92hues6c2XgRe1uf2Or
status: DRAFT
createdAt: 2023-09-11T17:23:20.383Z
updatedAt: 2024-06-28T18:38:49.327Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slug: new-checkout-settings-for-bot-attack-protection
locale: en
legacySlug: new-checkout-settings-for-bot-attack-protection
announcementImageID: ''
announcementSynopsisEN: 'New Checkout settings improve security by preventing fraud and unauthorized orders.'
---


To improve the security of your store information, VTEX implemented new Checkout settings, boosting protection against possible attacks by software simulating human behavior (bots).

## What has changed?

The following settings are now available:

- [Require login when completing a purchase](#require-login-when-completing-a-purchase).
- [Minimum time between orders](#minimum-time-between-orders)
- [Minimum time a cart remains open to allow the use of a new credit card](#minimum-time-a-cart-remains-open-to-allow-the-use-of-a-new-credit-card)

### Require login when completing a purchase

The `requiresLoginToPlaceOrder` field allows only authenticated customers to proceed with a purchase.
The customer must be logged in using the same email provided when adding products to the cart.
 When you enable this field, the checkout without login option, known as [SmartCheckout](https://help.vtex.com/en/tutorial/smartcheckout-security--3SrJuuhrqwePUg1rp1exfB) remains disabled for all store customers.

### Minimum time between orders

The `minimumPurchaseDowntimeSeconds` field allows you to set the minimum time a customer must wait before placing another order.
This configuration reduces the risk of several accounts being created in a row to complete a purchase.

### Minimum time a cart remains open to allow the use of a new credit card

The `cartAgeToUseNewCardSeconds` field allows you to set a minimum time frame for a cart to remain active before a new credit card is authorized to be used for it.
This setting reduces the risk of creating multiple carts and adding new credit cards.
Activating this field does not affect orders placed with cards previously saved in the customer account.

## Why did we make this change?

We created these new settings to improve security against fraud attempts and unauthorized orders, boosting merchant security and customer account protection.

## What needs to be done?

The new settings are available in the [Update an account's orderForm configuration](https://developers.vtex.com/docs/guides/update-an-account-orderform-configuration) endpoint. For more information on activating the fields in each setting, go to [New Checkout Settings for Bot Attack Protection](https://developers.vtex.com/updates/release-notes/2023-09-12-new-checkout-settings-for-bot-attack-protection).
