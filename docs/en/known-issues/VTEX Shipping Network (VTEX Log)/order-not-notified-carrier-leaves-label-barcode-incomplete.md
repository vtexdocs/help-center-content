---
title: 'Order not notified carrier leaves label barcode incomplete'
id: 2QjxFv2Ul2wKCdnYtrlF0T
status: PUBLISHED
createdAt: 2023-08-01T16:55:39.774Z
updatedAt: 2023-09-18T22:52:54.573Z
publishedAt: 2023-09-18T22:52:54.573Z
firstPublishedAt: 2023-08-01T16:55:40.545Z
contentType: knownIssue
productTeam: VTEX Shipping Network (VTEX Log)
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shipping Network (VTEX Log)
slug: order-not-notified-carrier-leaves-label-barcode-incomplete
locale: en
kiStatus: Backlog
internalReference: 872530
---

## Summary


Customers who use Shipping Network partner carriers, when requesting the label issue in Ready to Ship, may get the file with the incomplete barcode, which may prevent the package from being posted.


##

## Simulation


It was not possible to reproduce, only to verify by checking the labels sent by customers with the incomplete barcode and confirming via API that the package was not notified.


##

## Workaround


Notifying the order manually again, makes sure that the carrier is notified and the barcode is complete and the label can be used.





