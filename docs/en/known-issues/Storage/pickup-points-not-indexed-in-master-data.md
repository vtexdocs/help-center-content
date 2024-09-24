---
title: 'Pickup Points not indexed in Master Data'
id: 6OHjbM6GXBEvgepaod3AyT
status: PUBLISHED
createdAt: 2023-12-14T22:29:26.240Z
updatedAt: 2024-04-30T12:56:14.390Z
publishedAt: 2024-04-30T12:56:14.390Z
firstPublishedAt: 2023-12-14T22:29:26.972Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: pickup-points-not-indexed-in-master-data
locale: en
kiStatus: Fixed
internalReference: 530824
---

## Summary


Currently, the logistics system uses MasterData to store Pickup Points information. As a result, we may have problems indexing this internal entity when using the search route. This can lead to outdated information, such as:

- Delete made in Logistics that is not reflected in the list;
- Pickup Point being activated/inactivated in Logistics but still returning with the previous status;
- Coordinate changes not being reflected;
- And others.


##

## Simulation


There is no reliable way to reproduce this issue.


##

## Workaround


The VTEX team must check the data and eventually re-index it, so that the data will be updated.




