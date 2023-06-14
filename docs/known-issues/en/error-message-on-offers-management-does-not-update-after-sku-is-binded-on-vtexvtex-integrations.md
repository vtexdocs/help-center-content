---
title: 'Error message on offers management does not update after sku is binded on VTEX<>VTEX integrations'
id: 5tMKDMsFTZlXQrkVM4WeJD
status: PUBLISHED
createdAt: 2022-12-08T14:02:22.948Z
updatedAt: 2022-12-08T14:03:27.764Z
publishedAt: 2022-12-08T14:03:27.764Z
firstPublishedAt: 2022-12-08T14:02:23.384Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: error-message-on-offers-management-does-not-update-after-sku-is-binded-on-vtexvtex-integrations
kiStatus: Backlog
internalReference: 712956
---

## Summary



When the sku is sent to the marketplace and there is an error on the process a interaction will be open as an error on the offer management UI. That way the offer will be set as error status.

However, if the error is corrected on the seller side and the sku is sent again to the marketplace, this time successfully, the error message does not update to success, given the wrong impression to the seller that the sku still have problems.

This behavior is happening on VTEX<>VTEX integrations (seller and marketplace are VTEX accounts).


##

## Simulation




1. On a seller portal account (or any account with offer managements interface) send a sku with an error to the marketplace;
2. Check on the offer management that there is an error message on this sku;
3. Correct the sku and send again to the marketplace;
4. Check on the marketplace that the sku is correctly binded;
5. Check that the error message did not go away on the seller sku offer management UI.


##

## Workaround


No workaround, but this not affect sales, the sku is already correctly binded to the marketplace;

