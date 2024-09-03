---
title: 'Error when changing an index if the fields are identical.'
id: Ckic7QH3kKyW3IA92A3Cm
status: PUBLISHED
createdAt: 2023-07-03T18:48:49.070Z
updatedAt: 2023-07-03T18:48:49.971Z
publishedAt: 2023-07-03T18:48:49.971Z
firstPublishedAt: 2023-07-03T18:48:49.971Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: error-when-changing-an-index-if-the-fields-are-identical
locale: en
kiStatus: Backlog
internalReference: 854634
---

## Summary


An update of a schema index can result in a 500 Internal Server error when there are no changes to be made, this means that the field values are identical to the current ones.
Performing a GET request on the API to check the indices reveals that no update is required, as the index is identical to the body provided in the PUT request.


##

## Simulation



1. Send a PUT request to update a schema index through the API, providing the necessary payload in the request body.
2. Verify the response from the API and observe if it returns a **500 Internal Server Error**.
3. Perform a subsequent GET request on the API to retrieve the schema indices and compare them to the body provided in the PUT request.


##

## Workaround


N/A

