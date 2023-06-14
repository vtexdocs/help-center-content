---
title: Lack of feedback while selecting gift items that aren't available
id: 2brpWqVbJLVoFlztAQPy3n
status: PUBLISHED
createdAt: 2022-09-30T16:40:09.600Z
updatedAt: 2022-11-25T21:49:21.033Z
publishedAt: 2022-11-25T21:49:21.033Z
firstPublishedAt: 2022-09-30T16:40:10.418Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: lack-of-feedback-while-selecting-gift-items-that-arent-available
kiStatus: Fixed
internalReference: 648767
---

## Summary


Selecting a gift item in the cart that doesn't have stock won't provide any feedback. After selecting the gift, the API request will be made, but when it responds, the gift selection is just removed.



## Simulation


- to register a new item or to update it to be without stock
- to create a gift promotion offering this item
- to create a cart where the item will be offered
- try to select the gift; the selection will be removed without any feedback



## Workaround


Ensure that gift items have high availability or infinite stock, and avoid offering items that may become unavailable as gifts.

