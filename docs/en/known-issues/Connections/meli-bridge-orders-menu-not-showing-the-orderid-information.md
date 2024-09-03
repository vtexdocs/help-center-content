---
title: 'MELI Bridge Orders menu, not showing the orderID information'
id: ZBc9ny043rVpYFqkZIQ1K
status: PUBLISHED
createdAt: 2023-08-16T10:46:52.015Z
updatedAt: 2023-10-05T18:51:13.700Z
publishedAt: 2023-10-05T18:51:13.700Z
firstPublishedAt: 2023-08-16T10:46:53.089Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: meli-bridge-orders-menu-not-showing-the-orderid-information
locale: en
kiStatus: Fixed
internalReference: 881733
---

## Summary



Currently we have an issue that only affects the visibility of some MELI Orders, what happens is that we are currently logging the ShipmentID in order bridge menu, but some error messages are missing the OrderID, and it's necessary for some cases as the orderID is the information the sellers have in MELI Portal


##

## Simulation



Inside the bridge orders menu, some error messages are not logging the orderID, which gives the impressions some orders are not in VTEX brige, but the sellers can find the orders by searching for the shipmentID.


##

## Workaround


Search for the shipmentID instead of the orderID





