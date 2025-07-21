---
title: "Special character in Seller name Report"
id: 13FMy6rGbNacrS7MUYTT48
status: PUBLISHED
createdAt: 2023-02-17T13:18:20.237Z
updatedAt: 2023-02-17T13:18:20.925Z
publishedAt: 2023-02-17T13:18:20.925Z
firstPublishedAt: 2023-02-17T13:18:20.925Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-character-in-seller-name-report
locale: en
kiStatus: Backlog
internalReference: 756243
---

## Summary


Specifically for the special character ":", when we have a seller with this special character in the name, and we try to filter it for reporting, we have the following when we view it in "devtools":

"Cannot return null for non-nullable field ReportDetails.rowNumber."


##

## Simulation


To simulate this behavior, it is necessary to select a seller that contains this special character in the name and try to remove a report from it.


##

## Workaround


For Workaround, this special character must be removed from the seller's name.





