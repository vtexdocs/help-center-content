---
title: 'Not all skus are returned on the product/sku specification spreadsheet'
id: 3fo3A4mQ1YjyJH7yWETk8J
status: PUBLISHED
createdAt: 2022-08-31T20:34:22.708Z
updatedAt: 2022-11-25T21:43:32.209Z
publishedAt: 2022-11-25T21:43:32.209Z
firstPublishedAt: 2022-08-31T20:34:23.219Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: not-all-skus-are-returned-on-the-productsku-specification-spreadsheet
locale: en
kiStatus: Fixed
internalReference: 649316
---

## Summary


This behavior happens when a category has a lot of specifications and a lot of skus. That way, when exporting the spreadsheet eventually the excel limit is gonna be reached (around 65k).

When this happens, the spreadsheet won't return an error, it will only cut out the skus that are over this limit.

The result is that not all skus will be returned on this scenario.



## Simulation



1. Export a product/sku specification spreadsheet;
2. Verify that is on the excel limit;
3. Verify if the category has a large number of specifications and skus on it;
4. Check that some skus are missing on the spreadsheet.



## Workaround



A workaround would be to check if the specifications need to check if the specifications need to exist on a higher level of the category or just on a lower level. That way fewer skus and specifications would be returned and the limit would be harder to reach.

