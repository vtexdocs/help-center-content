---
title: "Suggestions transforming UnitMultiplier less than 1 to 0"
id: 3TC3n2xGTDGFKZUoooJOTR
status: PUBLISHED
createdAt: 2022-11-21T19:45:52.096Z
updatedAt: 2022-12-13T16:14:04.817Z
publishedAt: 2022-12-13T16:14:04.817Z
firstPublishedAt: 2022-11-21T19:45:52.855Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: suggestions-transforming-unitmultiplier-less-than-1-to-0
locale: en
kiStatus: Fixed
internalReference: 702056
---

## Summary



The seller can send unitMultilplier values for it's skus that are bellow 1.

Example:
 ![](https://vtexhelp.zendesk.com/attachments/token/HqXCaizs03DZbMVT2tcufZM6K/?name=image.png)

The same info is sent to the marketplace correctly:
 ![](https://vtexhelp.zendesk.com/attachments/token/zImMl1BVZHLG6zc45x4XwrZpB/?name=image.png)

However, once the product is processed by the Matcher, the value is rounded to 0:
 ![](https://vtexhelp.zendesk.com/attachments/token/j5FMl4AJJ0R5IP3FcStUo7DDi/?name=image.png)

And once is approved to the marketplace catalog, the value continues as 0. That way a wrong value is set on the marketplace's catalog.


##

## Simulation



1. Create a sku with a unitMultiplier value as less than 1;
2. Send it to the marketplace;
3. Approve the sku on the marketplace's received skus area;
4. Check on the marketplace's catalog that the value is set as 0.


##

## Workaround


Adjust the value directly on the marketplace's catalog via Admin, spreadsheet or API.

