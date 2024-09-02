---
title: '"An item with the same key has already been added. Key: description"'
id: 5eGfoHuVu83bqGvSOvDF5z
status: PUBLISHED
createdAt: 2024-08-20T14:40:23.496Z
updatedAt: 2024-08-20T14:49:14.081Z
publishedAt: 2024-08-20T14:49:14.081Z
firstPublishedAt: 2024-08-20T14:40:25.093Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: an-item-with-the-same-key-has-already-been-added-key-description
locale: en
kiStatus: Backlog
internalReference: 1084015
---

## Summary


Currently, the sales app can face a problem in loading pages properly for products in which the "description" product field also has the word "description" itself registered in it.


##

## Simulation


1 - for a sales app account, create a product and fields for it, in them, add the word "description" to it.

2 - navigate through search result pages that contain this given product as a result, a "error loading search" error will be displayed.


##

## Workaround


remove the "description" string and replace it for something similar, such as productDescription.

