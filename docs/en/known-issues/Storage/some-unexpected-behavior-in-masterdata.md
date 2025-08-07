---
title: "Some unexpected behavior in MasterData"
id: 4E9jB5vkUMucnAuwUMOGQL
status: PUBLISHED
createdAt: 2023-09-18T21:27:15.291Z
updatedAt: 2023-10-10T21:16:04.759Z
publishedAt: 2023-10-10T21:16:04.759Z
firstPublishedAt: 2023-09-18T21:27:15.908Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: some-unexpected-behavior-in-masterdata
locale: en
kiStatus: Backlog
internalReference: 669048
---

## Summary


Even with data available (documents), the information is not returned as expected.
This behavior can impact some of the following functionalities:

- Images in the Site Editor (CMS) are not available, due error message "_Something went wrong. Please try again._";
- It is not possible to access entities and its documents due error message "_An unexpected error has occurred. Please try again. If the problem persists, contact support._";
- The `_sort` is not respected on Search documents API;
- No information is returned when using Search Documents API (an empty response, like `[]`), even when they contain documents.


##

## Simulation


As this is an occasional behavior (cluster-related event), it cannot be simulated.


##

## Workaround


The VTEX team must check the cluster and eventually re-index the data or change the cluster, so that the data will be available again.




