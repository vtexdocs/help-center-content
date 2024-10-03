---
title: 'Space in warehouse ID causes internal logistics requests to fail'
id: M8SsnABs2HgYsUvNnjCFx
status: PUBLISHED
createdAt: 2022-09-20T21:51:05.157Z
updatedAt: 2024-02-16T20:24:53.145Z
publishedAt: 2024-02-16T20:24:53.145Z
firstPublishedAt: 2022-09-20T21:51:05.702Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: space-in-warehouse-id-causes-internal-logistics-requests-to-fail
locale: en
kiStatus: No Fix
internalReference: 654370
---

## Summary


The logistics UI allows a user to create a Warehouse by registering an ID with space and this directly affects the requests made to this warehouse and may cause failures in the inventory update.


##

## Simulation



1- Enter Inventory & Shipping - Shipping Strategy - Warehouses

2- Click on create a Warehouse

3- Enter an Id with space between the characters and save.

4- Do a get with the List all Warehouse API, see that the ID was saved with space;



##

## Workaround


** **
To avoid or adjust these scenarios, when creating a warehouse, use underscores to separate characters, in case you need to have spaces between characters or words.





