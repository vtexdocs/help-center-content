---
title: 'LINK SERVICE VALUES TO SKUS spreadsheet only returning active services'
id: 1FqAokiJLWwWnsPodyTMKY
status: PUBLISHED
createdAt: 2023-08-23T17:51:58.839Z
updatedAt: 2023-08-23T17:51:59.677Z
publishedAt: 2023-08-23T17:51:59.677Z
firstPublishedAt: 2023-08-23T17:51:59.677Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: link-service-values-to-skus-spreadsheet-only-returning-active-services
locale: en
kiStatus: Backlog
internalReference: 886486
---

## Summary


When exporting service values from a specific category on the admin the result is only bringing the active services. Not enabling the merchant to activate previously inactive services by spreadsheet.


##

## Simulation



1. Create a service and associate to an sku;
2. Inactivate the service on the sku;
3. Export the LINK SERVICE VALUES TO SKUS spreadsheet;
4. Check that the previously service is not returned.


##

## Workaround


Use API or go directly on the sku - services admin in order to update the service:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-





