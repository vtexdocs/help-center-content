---
title: '"An error has occurred" when adding tracking information'
id: 1gmlrPh9P1KbNI5NNXuImO
status: PUBLISHED
createdAt: 2023-02-08T18:38:55.699Z
updatedAt: 2023-02-08T18:42:05.822Z
publishedAt: 2023-02-08T18:42:05.822Z
firstPublishedAt: 2023-02-08T18:38:56.178Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: an-error-has-occurred-when-adding-tracking-information
kiStatus: Backlog
internalReference: 409225
---

## Summary


When entering the tracking information when the invoice number contains spaces, the following error occurs (either via UI or API) "`An error has occurred`".

## Simulation


To simulate or perform the analysis of this scenario, just:

1. Insert an invoice (via API) to an order with spaces in the invoice number (make sure that the invoice doesn't contain any tracking information);
2. Add tracking information via UI or API:
3. Notice that you receive an error code 500 along with the "`An error has occurred`" message.

## Workaround


For orders that are already invoiced with the space, and tracking is informed later, unfortunately there is no way to enter tracking data. However, to avoid this type of issue, the ideal is not to send space on the invoice, or inform the tracking data when inserting the invoice.

