---
title: Auto approve API accepts any values
id: kLl4mtwKPPqW6jk5hZMWs
status: PUBLISHED
createdAt: 2022-12-12T14:18:51.059Z
updatedAt: 2022-12-12T14:18:51.733Z
publishedAt: 2022-12-12T14:18:51.733Z
firstPublishedAt: 2022-12-12T14:18:51.733Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: auto-approve-api-accepts-any-values
kiStatus: Backlog
internalReference: 713704
---

## Summary


Currently, the autoapprove API is not checking if the seller exists, potentially leading to incorrect configurations.

/suggestions/configuration/autoapproval/toggle/seller/1a?sellerId=

If the seller id above is sent, for instance, using a different case sensitive character: Myseller instead of myseller, the API will respond with 200OK and the autoapprove will, misleadingly, be set as true. However, the seller itself will not have its autoapprove activated, since the string needs to be an exact match for it to work.




##

## Simulation



1. Using the autoapprove settings API, set a string similar to the seller, but not an exact match
2. Check that this value will be set as true and the API will not respond with a message indicating that there is not existing seller for that value
3.


##

## Workaround


If your autoapprove is not working, double check if there's any character with a different case or slight difference.

