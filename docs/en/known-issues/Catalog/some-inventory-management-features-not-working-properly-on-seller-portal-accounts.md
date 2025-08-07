---
title: "Some Inventory Management features not working properly on seller portal accounts"
id: uJ4qws662c8pUnyfOV1fV
status: PUBLISHED
createdAt: 2024-03-18T17:54:20.400Z
updatedAt: 2024-03-18T17:54:21.597Z
publishedAt: 2024-03-18T17:54:21.597Z
firstPublishedAt: 2024-03-18T17:54:21.597Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: some-inventory-management-features-not-working-properly-on-seller-portal-accounts
locale: en
kiStatus: Backlog
internalReference: 1001665
---

## Summary


Inventory Management features (like the links to the products) does not behave as expected on seller portal accounts. This happens because these kind of accounts use a different version of the catalog.

The Logistics module use on this UI an API from catalogV1.

However, we don't have a proxy from seller portal catalog to this API on catalogV1.

The impact is that the links provided on the products do not open the catalog page, but instead it returns an error.


##

## Simulation



1. Try to open the links to the products on a seller portal inventory management.


##

## Workaround


N/A





