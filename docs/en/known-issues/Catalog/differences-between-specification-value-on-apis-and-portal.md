---
title: "Differences between Specification Value on APIs and Portal"
id: 29Utcf4B7PBZitEHxrZwbE
status: PUBLISHED
createdAt: 2023-06-29T20:11:49.484Z
updatedAt: 2023-07-06T13:41:29.683Z
publishedAt: 2023-07-06T13:41:29.683Z
firstPublishedAt: 2023-06-29T20:11:50.157Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: differences-between-specification-value-on-apis-and-portal
locale: en
kiStatus: Backlog
internalReference: 853184
---

## Summary



Currently these two APIs ("api/catalog" and "api/catalog_system" GET Specification Value) are consulting different tables on the catalog database. The values are supposed to be the same on both tables, however scenarios with special characters may diverge.

This also reflects on the Portal and PDPs, since the information is being generated based on the wrong table. The special characters appear as "????" on the frontend.


##

## Simulation



1. Have a specification value with a special characters;
2. Check the results on the "api/catalog" and "api/catalog_system" APIs;
3. Check the PDP information;
4. Verify if they were equal.


##

## Workaround


N/A





