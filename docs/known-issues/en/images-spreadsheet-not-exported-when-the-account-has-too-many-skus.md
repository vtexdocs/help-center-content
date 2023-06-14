---
title: Images spreadsheet not exported when the account has too many skus
id: 61QPFKVJfCSIMyX1iLuJbQ
status: PUBLISHED
createdAt: 2022-08-02T19:05:25.641Z
updatedAt: 2022-11-25T21:44:08.083Z
publishedAt: 2022-11-25T21:44:08.083Z
firstPublishedAt: 2022-08-02T19:05:26.808Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: images-spreadsheet-not-exported-when-the-account-has-too-many-skus
kiStatus: Backlog
internalReference: 623183
---

## Summary


Despite the success message on the Admin of the images spreadsheet being processed and that soon will be sent to the email, the report never actually arrives.
This behavior happens due to a timeout depending if the amount of skus being exported exceeds the 10k suggested limit.



## Simulation



1. Try to export a images spreadsheet report with more than 10.000 skus;
2. Verify that the message on the admin is successful;
3. Verify if the email actually arrives.



## Workaround


Use APIs to get the necessary information:
https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file
https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-variations

