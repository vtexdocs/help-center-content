---
title: 'Orders without invoiceAddress created through native UI'
id: 1XjNZhcTJ5rZJP4w3kJtcW
status: PUBLISHED
createdAt: 2022-01-24T20:21:07.893Z
updatedAt: 2023-12-19T21:34:15.743Z
publishedAt: 2023-12-19T21:34:15.743Z
firstPublishedAt: 2022-06-27T19:49:05.878Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orders-without-invoiceaddress-created-through-native-ui
locale: en
kiStatus: Fixed
internalReference: 306140
---

## Summary


In some cases it is still possible to create orders without `invoiceAddress` via the checkout UI.
The invoice address must be mandatory in the UI of all stores that have the functionality enabled.


##

## Simulation


So far the known steps to reproduce the scenario are:


1. Access the store without being logged in/identified
2. Put a product in the cart
3. In the cart click on Close Order
4. On the email screen put an email from an existing buyer — the user will likely be directed to the payment step
5. Click to edit the delivery step and select "withdrawal"
6. Do not fill in the note address
7. Click to edit "Personal Data"
8. You will be asked to login.
9. After logging in, in the step of editing "Personal Data" the button will appear to go straight to payment, even if the invoice address is not filled in.

In addition to the above, the behavior can be observed when the user is in the shipping stage and when reloading the page, they are automatically taken to payment without filling out the Invoice data.
Another scenario that induces the behavior is to switch between the list of previously registered addresses and a new address, which allows the user to proceed to payment without filling in the zip code (of a new address).


##

## Workaround


There is no known workaround to avoid the root scenario.




