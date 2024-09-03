---
title: 'Error exporting prices with metadata'
id: 7nYPmatUXq57ZUsKHvfYJo
status: PUBLISHED
createdAt: 2023-07-12T11:49:06.370Z
updatedAt: 2023-07-12T11:49:07.185Z
publishedAt: 2023-07-12T11:49:07.185Z
firstPublishedAt: 2023-07-12T11:49:07.185Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: error-exporting-prices-with-metadata
locale: en
kiStatus: Backlog
internalReference: 860290
---

## Summary


Sometimes when trying to export the prices with the metadata option enabled and without using filters, an error can occur. Checking the message on devTools something similar to "Polly broken circuit on service..." will appear.

This error happens due to throttling on the catalog module when trying to retrieve the metadata for a lot of skus.


##

## Simulation



1. Export the prices with metadata without using any filters;
2. Sometimes an error message will appear;
3. Check on inspect devtools if the message is similar to the one above.


##

## Workaround


Use the filters to reduce the amount of skus on the spreadsheet and the catalog module return the data without problems.





