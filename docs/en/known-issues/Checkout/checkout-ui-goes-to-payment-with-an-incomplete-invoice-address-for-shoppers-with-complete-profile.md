---
title: "Checkout UI goes to Payment with an incomplete invoice address for shoppers with complete profile"
id: NmN6oNKp1isyxssTE5jPR
status: PUBLISHED
createdAt: 2023-11-27T17:40:11.335Z
updatedAt: 2023-12-12T15:46:39.789Z
publishedAt: 2023-12-12T15:46:39.789Z
firstPublishedAt: 2023-11-27T17:40:12.008Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-goes-to-payment-with-an-incomplete-invoice-address-for-shoppers-with-complete-profile
locale: en
kiStatus: Fixed
internalReference: 937615
---

## Summary


When a shopper has a complete profile and the store is configured to use an invoice address for pick-up, UI will move forward to Payment with an incomplete invoice address.


##

## Simulation



- Configure the invoice address for pick-up;
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Checkout/checkout-ui-goes-to-payment-with-an-incomplete-invoice-address-for-shoppers-with-complete-profile_1.png)

- After adding products to the cart, use an email with a complete profile;
- UI will move forward to Payment even with an incomplete invoice address in the Profile System.


##

## Workaround


Update the invoice address via Master Data.




