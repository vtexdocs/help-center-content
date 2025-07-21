---
title: "NIF field at checkout in Portugal allows special characters and causes problem in order flow"
id: 5xQ3fPZq4oUk8QsY0KUEYm
status: PUBLISHED
createdAt: 2018-03-28T12:47:56.181Z
updatedAt: 2022-12-22T20:48:54.967Z
publishedAt: 2022-12-22T20:48:54.967Z
firstPublishedAt: 2018-03-28T13:14:18.633Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: nif-field-at-checkout-in-portugal-allows-special-characters-and-causes-problem-in-order-flow
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The NIF field (document) in the checkout for Portugal (UI) is allowing special characters to be entered as value. However, orders that are closed with special characters get stuck with error in the OMS.

![OMS](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Shopping/nif-field-at-checkout-in-portugal-allows-special-characters-and-causes-problem-in-order-flow_1.png)

## Simulation

To simulate the problem, place an order at a checkout in Portugal, including a special character in the NIF (document) field. Then check the OMS error similar to the example above.

## Workaround

As a temporary solution, we recommend that the developer responsible for the store includes a customization javascript at the checkout, validating the value entered according to the mask and the NIF rules.

Orders that have already been completed and have this error in the OMS will need to be canceled. So we suggest that the store contact the customer to explain the situation and help redo the order.

