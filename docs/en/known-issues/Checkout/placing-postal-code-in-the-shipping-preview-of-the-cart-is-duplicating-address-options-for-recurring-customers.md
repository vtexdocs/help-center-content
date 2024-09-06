---
title: 'Placing postal code in the Shipping Preview of the cart is duplicating address options for recurring customers'
id: 4J8TMlhGmMtnHKXGES4qie
status: PUBLISHED
createdAt: 2023-12-20T21:36:52.612Z
updatedAt: 2023-12-20T21:36:53.238Z
publishedAt: 2023-12-20T21:36:53.238Z
firstPublishedAt: 2023-12-20T21:36:53.238Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: placing-postal-code-in-the-shipping-preview-of-the-cart-is-duplicating-address-options-for-recurring-customers
locale: en
kiStatus: Backlog
internalReference: 956338
---

## Summary


We have some problems when it comes to placing postal codes in the **Shipping Preview** module in the cart, some of them are described in these KIs:


- Ref. 1: [KI]  Pasting postal code in shipping preview cart sometimes returns null API result
- Ref. 2: [KI] Shipping preview's postal code input field is not hidden

In this case, what happens is that for customers who already have addresses registered in their profile (recurring buyers), when placing a postal code in the Shipping Preview already used in a past purchase, in the API An additional delivery address option is being placed (`shippingData.availableAddresses`), when advancing through the Checkout steps and reaching the address selection (`/checkout/#/shipping`), it turns out that instead of selecting the address corresponding to said postal code, it opens a new incomplete selection option, and in some cases hidden, forcing the client to select one in the list or complement the "new one" to get to the next step.


##

## Simulation



1. Use a user that already made some purchases and whose profile has some address for delivery.
2. Add some items to the cart, then go to the checkout.
3. In the cart use the Shipping Preview to place a postal code of one in your profile.
  1. Try to review the `orderForm`, and search for the `shippingData.availableAddresses`
  2. The address in your profile will be listed with a key detail, the address has already the number of the street (`shippingData.availableAddresses.[].number`)
  3. The new option in the array that generates the problem doesn’t have the `number`, which converts it into an incomplete address option.
4. Try to go to the shipping step of the checkout (`/checkout/#/shipping`) and you will see that you cannot pass to the payment step if you do not complete de address selected, or select another one of the options.


##

## Workaround


In the shipping step of the checkout, try to select the desired listed address (force select one of the previous ones of the client).





