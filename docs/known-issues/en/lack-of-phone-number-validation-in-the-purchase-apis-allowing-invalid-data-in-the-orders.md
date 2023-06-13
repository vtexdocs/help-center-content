---
title: Lack of phone number validation in the purchase APIs allowing invalid data in the orders
id: 141uMln6PSWcm2YSE5UpSI
status: PUBLISHED
createdAt: 2022-10-18T22:35:54.297Z
updatedAt: 2022-11-25T21:49:30.758Z
publishedAt: 2022-11-25T21:49:30.758Z
firstPublishedAt: 2022-10-18T22:35:54.732Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: lack-of-phone-number-validation-in-the-purchase-apis-allowing-invalid-data-in-the-orders
kiStatus: Backlog
internalReference: 680500
---

## Summary


The validation of a phone number is restricted to the form where it's inserted or edited through the interface in the checkout profile step. Values inserted directly through the REST APIs to an orderForm or to an order, or which came from the customer profile (which, in their way, can be inserted through different ways) aren't validated by the platform.

Due to the nature of these flows, origins inserting invalid values can't be traced back.



## Simulation



- create a cart
- advance until the payment step
- change the "phone" property from the "clientProfileData" section from an orderForm through API to an invalid value
- finish the purchase

The order will be created with the invalid phone number without further validations.



## Workaround


The phone number should be validated on the client side, like in the user interface, their custom functions, or any middleware or backend that does these requests to the orderForm and order REST APIs or feeds the customer profile in the Profile System/Master Data services.

