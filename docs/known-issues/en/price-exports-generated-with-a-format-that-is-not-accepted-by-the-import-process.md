---
title: Price Exports Generated With a Format That Is Not Accepted by The Import Process
id: 4qOqpaZe1aIrfgo7mXL15K
status: PUBLISHED
createdAt: 2022-05-24T18:13:38.306Z
updatedAt: 2022-11-25T22:12:17.633Z
publishedAt: 2022-11-25T22:12:17.633Z
firstPublishedAt: 2022-05-24T18:13:38.769Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: price-exports-generated-with-a-format-that-is-not-accepted-by-the-import-process
kiStatus: Fixed
internalReference: 584975
---

## Summary


Sometimes (there’s a 50% chance) prices are exported using a new format that is not accepted by the price import.




## Simulation


-Export a fixed price spreadsheet



## Workaround


**While we work on a solution for this issue, a workaround is:**
1. add a new row at the top of the price sheet with the text “FixedPrices” in the first cell
2. change the date format of the From and To columns to the following format 2022-05-24T07:20:50.52Z

If you need more information about the format this is the RFC3339 format

