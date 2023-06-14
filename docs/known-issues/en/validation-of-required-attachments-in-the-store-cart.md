---
title: 'Validation of required attachments in the store cart'
id: 5im16SzH3qkyeGCUW4UC2M
status: PUBLISHED
createdAt: 2018-10-10T17:35:48.675Z
updatedAt: 2022-12-22T20:43:13.901Z
publishedAt: 2022-12-22T20:43:13.901Z
firstPublishedAt: 2018-10-10T18:11:01.257Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: validation-of-required-attachments-in-the-store-cart
kiStatus: Backlog
internalReference: 
---

## Summary

The validation of mandatory attachments is done only when the order is created, in the last "end purchase" button. This field requirement is not expressed in the cart (`/checkout/#/cart`), where fields are displayed.

This is visible only in attachments that do not have predefined values, so they are manually filled fields. In the case of attachments with predefined values, a selection list is displayed, already with some of them preselected.

Ideally, the fields requirement should be expressed together with it so that the customer gives attention to this before attempting to close the order, avoiding the error message.

## Simulation

1. Create an SKU with a mandatory attachment;
2. Add this SKU to the cart;
3. Follow the steps of the purchase without filling in the attachment fields;
4. Watch for the error message when trying to complete the order.

## Workaround

You can do a custom validation of these fields using Javascript in the cart page - in case the required field is not filled, it's enough to block the continue button.

