---
title: 'Untitled'
id: 23f5tQp4aND2R6CSU9P1S6
status: CHANGED
createdAt: 2023-11-07T19:59:34.320Z
updatedAt: 2023-11-09T20:45:57.445Z
publishedAt: 2023-11-07T20:04:35.252Z
firstPublishedAt: 2023-11-07T19:59:35.068Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: untitled
locale: en
kiStatus: Fixed
internalReference: 631970
---

## Summary



Currently, the SNO (Shipping Notification Order) accepts receiving an invoice number with a "space" (special character) at the end, for example: "123456 ", but when receiving the invoice number in this way some flows carried out post-purchase such as update tracking, giftcard system that use this data fail because the system cannot use the data correctly.


##

## Simulation


1- Invoice an order, inserting the following example invoice number: "**123456**"; (space at the end of the number)
2- Try to insert a tracking update, according to the Update order tracking status API: https://developers.vtex.com/vtex-rest-api/reference/updatetrackingstatus
2.1- Informing the invoice number **without** the "space", for example: "**123456**", we will have the following error: "message": "**Invoice Not Found**"
2.2- Informing the invoice number **with** the "space", for example: "123456 " (space at the end of the number), we will have the following error: "**500 Internal Server Error**"


##

## Workaround


For these cases, the workaround would be not to use the "space" at the end of the invoice number.





