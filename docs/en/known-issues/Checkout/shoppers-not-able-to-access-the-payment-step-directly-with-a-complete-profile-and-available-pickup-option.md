---
title: "Shoppers not able to access the payment step directly with a complete profile and available pickup option"
id: 4cRa7KS8AHmNpwEBUDFRdM
status: PUBLISHED
createdAt: 2025-06-12T20:55:53.412Z
updatedAt: 2025-06-12T20:55:54.242Z
publishedAt: 2025-06-12T20:55:54.242Z
firstPublishedAt: 2025-06-12T20:55:54.242Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shoppers-not-able-to-access-the-payment-step-directly-with-a-complete-profile-and-available-pickup-option
locale: en
kiStatus: Backlog
internalReference: 1243953
---

## Summary


When trying to access checkout's payment step directly through the URL (`/checkout?orderFormId={orderFormId}#/payment`) the shopper is taken to the shipping step.

This happens if the user (email) present in the clientProfileData information of the orderForm has a complete profile **and** there is a pickup option available for the cart.


##

## Simulation



- Create a cart of an user that has a complete profile and copy it's orderFormId;
- In a new incognito tab try to access the payment page for this cart directly using the link `/checkout?orderFormId={orderFormId}#/payment`;
- If there is an available pickup option the shopper will be directed to the shipping step.


##

## Workaround


N/A





