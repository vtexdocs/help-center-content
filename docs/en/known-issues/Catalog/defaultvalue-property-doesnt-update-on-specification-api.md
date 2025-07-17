---
title: "DefaultValue property doesn't update on specification API"
id: 6qNrQvBzrXMfVRdC2RGGOm
status: PUBLISHED
createdAt: 2025-05-14T16:25:21.841Z
updatedAt: 2025-05-14T16:25:22.706Z
publishedAt: 2025-05-14T16:25:22.706Z
firstPublishedAt: 2025-05-14T16:25:22.706Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: defaultvalue-property-doesnt-update-on-specification-api
locale: en
kiStatus: Backlog
internalReference: 1226096
---

## Summary


Describe the bug concisely.Currently, the API to update specifications https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/specification/-specificationId-, in its documented data, presents the field DefaultValue as a possible property that can be updated.

However, changing this field after the specification has been created yields no results.


##

## Simulation


1 - Fetch data, using the GET verb on the same route, for a specification that has a DefaultValue registered in it https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/specification/-specificationId- OR create a specification with one.

2 - Using the response body as a payload, try changing the DefaultValue field

3 - The response body will show no changes, despite the different informed request body.


##

## Workaround


Manually change these values via admin UI.





