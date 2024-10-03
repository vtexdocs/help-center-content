---
title: 'Calculated Price Table export not bringing all skus'
id: 3pJcwSnZG1nO0YjIPCnfyV
status: PUBLISHED
createdAt: 2022-12-23T13:41:21.656Z
updatedAt: 2022-12-23T13:41:22.123Z
publishedAt: 2022-12-23T13:41:22.123Z
firstPublishedAt: 2022-12-23T13:41:22.123Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: calculated-price-table-export-not-bringing-all-skus
locale: en
kiStatus: Backlog
internalReference: 722005
---

## Summary



When exporting the calculated price table on the pricing module UI sometimes not all skus are being exported.

The spreadsheet size can change if you export more than once, bringing fewer results than the expected.


##

## Simulation



This scenario is tricky to reproduce because it doesn't always happens.


1. Go to the pricing module UI and make sure you're not using any filters
2. Export the Calculated Price Table more than once
3. Check the amount of lines on the spreadsheet.
4. Export again the Calculated Price Table and check if the size is the same as the previous one. Sometimes it won't be.


##

## Workaround



Since the scenario does not happen every time, make sure to download more than once the spreadsheet to know the real size of the Calculated Price Table. You can use that one as the reference.

