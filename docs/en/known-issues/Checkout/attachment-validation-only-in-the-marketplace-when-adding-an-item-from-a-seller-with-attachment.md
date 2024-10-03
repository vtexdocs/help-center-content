---
title: 'Attachment validation only in the marketplace when adding an item from a seller with attachment'
id: 638N4urP08NY7v8jdH7U5N
status: PUBLISHED
createdAt: 2023-12-22T18:18:59.194Z
updatedAt: 2023-12-22T18:18:59.909Z
publishedAt: 2023-12-22T18:18:59.909Z
firstPublishedAt: 2023-12-22T18:18:59.909Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachment-validation-only-in-the-marketplace-when-adding-an-item-from-a-seller-with-attachment
locale: en
kiStatus: Backlog
internalReference: 957343
---

## Summary


Adding an item from a seller with an attachment in the same API request, the attachment validation happens only in the marketplace.

**Scenario 1:**
If the marketplace has the same attachment name and the keys differ from the seller's, the error message "Item attachment has an invalid value for key" will be shown, and the item won't be added to the cart.

**Scenario 2:**
If the marketplace doesn't have the same attachment, the error message "The name of attachment is invalid" will be shown, and the item won't be added to the cart.

This behavior happens in both APIs to add items: Add cart items and Handle cart items.


##

## Simulation



- Configure the same attachment in the marketplace and seller with different field keys;
- Associate with an item;
- Add the item via Add cart items or Handle cart items, with attachments.


- Configure an attachment in the seller and associate it with an item;
- Add the item via Add cart items or Handle cart items, with attachments.


##

## Workaround



- Add the item first and the attachment later in different requests. To send the attachment, you can:
  - send the attachments via Handle cart items;
  - send the attachments via Add an attachment to an item, for example:

    curl --location 'https://{accountName}.{environment}.com.br/api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/attachments/{attachmentName}' \--header 'Content-Type: application/json' \--data '{  "content": {      "key": "value"  },  "noSplitItem": true}'



