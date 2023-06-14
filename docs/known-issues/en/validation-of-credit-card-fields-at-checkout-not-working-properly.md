---
title: 'Validation of credit card fields at checkout not working properly'
id: 3eF0RQXpJWjAP1biEW9Qdy
status: DRAFT
createdAt: 2022-03-30T17:40:10.581Z
updatedAt: 2022-04-08T18:41:44.156Z
publishedAt: 
firstPublishedAt: 2022-03-30T17:40:11.195Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: validation-of-credit-card-fields-at-checkout-not-working-properly
kiStatus: Backlog
internalReference: 552897
---

## Summary


The fields validation of card data on checkout page is not working properly. Users can type spaces until the validation recognize it as a valid entry. So a purchase can be done in this scenario without any block from checkout side.

This problem happens to card number field, card holder name, street address, number, neighborhood and city.



## Simulation



1. Go to checkout by purchasing any item
2. Choose to pay it with credit card payment method
3. In the card number field and card holder name field fill in spaces until validation check appear
4. Uncheck the checkbox of billing address
5. Put a valid postal code
6. Delete the automatically filled address, neighborhood and city.
7. Then fill the address, number, neighborhood and city with spaces. The check validation will not appear but you can freely close the purchase anyway



## Workaround


N/A

