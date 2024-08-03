---
title: 'Registered users (not logged in) cannot finish checkout when changing from delivery to pick-up on the checkout page'
id: hmQ2riW1Ptjxyhk6gcWxN
status: PUBLISHED
createdAt: 2023-07-28T19:49:16.993Z
updatedAt: 2024-04-17T15:46:57.958Z
publishedAt: 2024-04-17T15:46:57.958Z
firstPublishedAt: 2023-07-28T19:49:17.732Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: registered-users-not-logged-in-cannot-finish-checkout-when-changing-from-delivery-to-pickup-on-the-checkout-page
locale: en
kiStatus: Fixed
internalReference: 870845
---

## Summary


When an registered user (not logged in) start the checkout with Delivery as the shipping option, and later changes to pickup, when trying to finish the checkout the error message "The Number field in the shipping attachment is invalid" will appear and not allow to place the order.


##

## Simulation



1. Go to checkout and add a new item
2. Input a zipcode to calculate shipping and keep **Delivery** selected
3. Proceed to checkout and when asked to input an email use one from a registered user
4. Checkout will show a pop-up message informing your personal data was retrieved from past purchases
5. Change from Delivery to Pick-Up and try to complete the order (the error message will show)


##

## Workaround


N/A




