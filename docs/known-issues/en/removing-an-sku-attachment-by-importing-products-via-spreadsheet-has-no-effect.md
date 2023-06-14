---
title: Removing an SKU attachment by importing products via spreadsheet has no effect
id: 3BgRi2HNCwYEAKuOc0G4Se
status: PUBLISHED
createdAt: 2018-05-03T19:24:21.455Z
updatedAt: 2022-12-22T20:46:01.489Z
publishedAt: 2022-12-22T20:46:01.489Z
firstPublishedAt: 2018-05-03T19:34:26.219Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: removing-an-sku-attachment-by-importing-products-via-spreadsheet-has-no-effect
kiStatus: Backlog
internalReference: 
---

## Summary

When importing a spreadsheet of products and SKUs by removing the attachment from an SKU (that is, leaving the "\_Anexos" column blank in the spreadsheet), this change is not reflected in the SKU registration. It remains with the linked attachment.

## Simulation

1. Access the catalog.
2. Navigate to Product Registration > Products and SKUs > Import/Export Products and SKUs.
3. Open the Export/Import dropdown > Import.
4. Select a spreadsheet of products and SKUs that contain SKUs with previously linked attachments and leave the value of \_Anexos blank.
5. Click __Import__.

## Workaround

First, [create a new attachment](/en/tutorial/registering-an-attachment) and leave this attachment inactive. Then fill in the spreadsheet with the value of the new attachment you created and import the products.

