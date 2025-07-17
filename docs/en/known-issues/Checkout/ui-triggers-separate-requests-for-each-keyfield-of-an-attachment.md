---
title: "UI triggers separate requests for each key/field of an attachment"
id: 5IF3veMFTFi9dERoEokokt
status: PUBLISHED
createdAt: 2024-03-01T21:05:37.154Z
updatedAt: 2024-03-01T21:07:41.105Z
publishedAt: 2024-03-01T21:07:41.105Z
firstPublishedAt: 2024-03-01T21:05:37.941Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-triggers-separate-requests-for-each-keyfield-of-an-attachment
locale: en
kiStatus: Backlog
internalReference: 336371
---

## Summary


When you set the value for an item attachment field through the UI, this triggers a request to update the orderForm, even if there are still more fields left.
This request will then be processed, and the response with the updated orderForm.

In cases where the attachment has multiple open text fields, this may cause subsequent fields to be overwritten while you're typing their values.
This happens because the update request will have been sent when this field was still blank, so it will also be blank in the response.

In cases where the item has a subscription attachment with multiple keys, it may trigger an error message like "unable to communicate with seller" / "não foi possível se comunicar com o seller".
This happens because the subscription will expect multiple keys to have been filled, but the first request will only have sent one.


##

## Simulation


Create an attachment with at least two keys/fields.
Add an item linked to this attachment to your cart, then add the attachment.
Finally, set the value for one field, and observe the behavior that follows.


##

## Workaround


N/A




