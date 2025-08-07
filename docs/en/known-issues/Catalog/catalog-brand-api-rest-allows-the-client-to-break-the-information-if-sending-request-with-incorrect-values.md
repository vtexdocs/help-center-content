---
title: "Catalog Brand API REST allows the client to break the information if sending request with incorrect values"
id: 6yIs7KNTiS1oghcobXNnVD
status: PUBLISHED
createdAt: 2024-10-30T18:59:26.880Z
updatedAt: 2024-10-31T12:51:32.710Z
publishedAt: 2024-10-31T12:51:32.710Z
firstPublishedAt: 2024-10-30T19:20:04.320Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-brand-api-rest-allows-the-client-to-break-the-information-if-sending-request-with-incorrect-values
locale: en
kiStatus: Backlog
internalReference: 1126473
---

## Summary


There are a lot of routes that support some type of value, but if the costumer uses another type of value (for example, insert null instead of boolean) can broke the product / SKU / category / brand interface. Denying the client to update the information through admin.



##

## Simulation


For the routes `api/catalog/pvt/brand?an=`or` /api/catalog/pvt/brand/?an=`, the documentation says that the field `MenuHome` only accepts boolean values. But if we send a request with "null" for example, the route will return a 200 and we are able ti insert this value. After this, if we try to edit the brand on the admin interface, we will not be able. It will return a Something Went Wrong error with the `exception_message="Object cannot be cast from DBNull to other types."`



##

## Workaround


Update the information again, through the API.






