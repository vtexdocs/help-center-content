---
title: 'PUT Brand API does not update "LinkID" property'
id: 7IK10cFmwCLVUdroqFNXYp
status: PUBLISHED
createdAt: 2025-05-07T16:06:45.066Z
updatedAt: 2025-05-07T16:06:45.722Z
publishedAt: 2025-05-07T16:06:45.722Z
firstPublishedAt: 2025-05-07T16:06:45.722Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: put-brand-api-does-not-update-linkid-property
locale: en
kiStatus: Backlog
internalReference: 1222015
---

## Summary


Currently, the API available to update brand data, is not receiving the info to correctly update the "LinkId" property.

If data is sent modifying this information in the request body, the API's response will show as if it was updated, but in reality, nothing has changed.


##

## Simulation


1 - For an existing brand, update its linkId data using the aforementioned API.

2 - Check the response body, it will falsely show that the data was updated.

3 - Use the GET Brand and Context API to fetch data and it will not have been updated https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/brand/-brandId-


##

## Workaround


The only workaround is to create a new brand with the already correct linkId





