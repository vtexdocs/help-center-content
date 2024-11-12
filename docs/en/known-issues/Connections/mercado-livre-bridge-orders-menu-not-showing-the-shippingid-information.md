---
title: '[Mercado Livre] Bridge Orders menu, not showing the shippingID information'
id: 2fXDbejpPJ04NDfPCCcr0j
status: PUBLISHED
createdAt: 2024-03-18T20:56:17.859Z
updatedAt: 2024-03-18T20:56:18.697Z
publishedAt: 2024-03-18T20:56:18.697Z
firstPublishedAt: 2024-03-18T20:56:18.697Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-bridge-orders-menu-not-showing-the-shippingid-information
locale: en
kiStatus: Backlog
internalReference: 1001903
---

## Summary


Currently we have an issue that only affects the visibility of some MELI Orders, what happens is that we are currently logging the ShipmentID in order bridge menu, but some error messages are missing the OrderID, and it's necessary for some cases as the orderID is the information the sellers have in MELI Portal

Mercado Livre  > Bridge  > OrderId


##

## Simulation


Inside the bridge orders menu, some error messages are not logging the orderID, which gives the impressions some orders are not in VTEX brige, but the sellers can find the orders by searching for the shipmentID.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)


##

## Workaround


GET the OrderID, and get the ShipmentID and look for it in the bridge





