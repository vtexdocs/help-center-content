---
title: "Offers Management sku's interactions are not stable"
id: 7o3IEgPiDB9vYVJ8RS50jl
status: PUBLISHED
createdAt: 2023-02-02T16:29:12.305Z
updatedAt: 2023-02-08T20:05:01.761Z
publishedAt: 2023-02-08T20:05:01.761Z
firstPublishedAt: 2023-02-02T16:29:12.925Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: offers-management-sku-status-is-not-reliable-in-vtexvtex-integrations
locale: en
kiStatus: Backlog
internalReference: 745738
---

## Summary

Currently the offer management system shows the status of the skus sent from a seller to a marketplace and it's interactions and logs from actions like price and stock updates.

These records are not stable on this system, sometimes they are sent correctly and sometimes they don't.

A more clear example is:

If at the attempt of sending the sku an error occurs, the status of the sku is changed to "error" on the UI.

After that, the seller can adjust the sku according to what needs to be corrected and reindex the sku in order to be sent again.

On this action, even if the sku is sent correctly to the marketplace and it becomes available for approval on their side, the sku on the offer management system remains (sometimes) with an error status.

This status is wrong, since the sku was already sent.

However, this doesn't happen everytime. Meaning the status is not reliable.


## Simulation

1. Create a sku on the seller side with some kind of error (without image, for instance);
2. Send the sku to the marketplace. Notice it will have an error status on the Offer Management UI;
3. Fix the error (in this case, add images) and reindex the sku;
4. It can happen that the error status won't disappear on the UI despite the sku have already been sent correctly to the marketplace.


## Workaround

There is no need to have a workaround, since the sku was actually sent correctly (or the updates were actually correctly made).


