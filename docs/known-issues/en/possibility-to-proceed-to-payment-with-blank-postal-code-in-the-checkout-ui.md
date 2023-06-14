---
title: 'Possibility to proceed to payment with blank postal code in the checkout UI'
id: 32IVEgy5AgcFkCimUl87Rp
status: PUBLISHED
createdAt: 2023-01-18T21:46:19.613Z
updatedAt: 2023-01-18T21:47:44.853Z
publishedAt: 2023-01-18T21:47:44.853Z
firstPublishedAt: 2023-01-18T21:46:20.286Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: possibility-to-proceed-to-payment-with-blank-postal-code-in-the-checkout-ui
locale: en
kiStatus: Backlog
internalReference: 334310
---

## Summary


When you are a user who has a login and goes to checkout, where the data is masked, and in the shipping form, choose the option of delivering to other addresses, there is the possibility of going to the payment without the need to fill in the postal code. Thus, arriving at the payment process with empty delivery data on the UI.


##

## Simulation


You have to have your data masked and a product that is both delivery and pickup.


1. Add products to cart (without login)
2. Go to the checkout and fill with your email (user that have data completed, address and profile)
3. Get into checkout with your data masked
4. Go to the Shipping form and choose "Deliverer in another address"
5. Don't fill the postal code and press the button "Go to payment"
6. Now you have a blank shipping address


##

## Workaround


NA



