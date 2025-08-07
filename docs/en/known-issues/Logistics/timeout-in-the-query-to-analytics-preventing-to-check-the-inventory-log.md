---
title: "Timeout in the query to Analytics preventing to check the inventory log"
id: 2gQhc3JF0bcm1JeLr0lluO
status: PUBLISHED
createdAt: 2024-02-19T20:54:22.012Z
updatedAt: 2024-07-03T15:26:48.484Z
publishedAt: 2024-07-03T15:26:48.484Z
firstPublishedAt: 2024-02-19T20:54:22.861Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: timeout-in-the-query-to-analytics-preventing-to-check-the-inventory-log
locale: en
kiStatus: Fixed
internalReference: 984482
---

## Summary


Update log in the inventory UI sometimes returns the error: Request failed with status code 500 for some specific SKUs, due to a timeout in the query to Analytics (where the data is stored), and no log for the SKU will be shown in the UI.

This timeout could be due a high volume of updates in the SKU, or any other factor that makes this query takes longer than the maximum time of 40s;


##

## Simulation


Due to the variable being the response time for the query to Analytics, it is not possible to replicate in a concise way.


##

## Workaround


There is no workaround available.




