---
title: "Attachment's permitted values are not updated when it's added to items"
id: 1JjFJJGsUaLWvthJ7kxSBw
status: PUBLISHED
createdAt: 2023-10-17T20:16:40.973Z
updatedAt: 2023-10-17T20:16:41.571Z
publishedAt: 2023-10-17T20:16:41.571Z
firstPublishedAt: 2023-10-17T20:16:41.571Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachments-permitted-values-are-not-updated-when-its-added-to-items
locale: en
kiStatus: Backlog
internalReference: 920970
---

## Summary


Attachment's permitted values are not updated if it was added to an item before changing their values in the admin. This will cause an error in the cart with the message "Unable to communicate with seller".


##

## Simulation



- Create an attachment with permitted values;
- Add an item with the attachment;
- Change the attachment's permitted values;
- Refresh the cart.


##

## Workaround


N/A



