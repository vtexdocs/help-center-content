---
title: MELI error while sending the order tracking
id: 4wdzb5xjelAkFnbuRCFXAt
status: PUBLISHED
createdAt: 2023-03-06T10:06:58.255Z
updatedAt: 2023-03-06T10:06:59.162Z
publishedAt: 2023-03-06T10:06:59.162Z
firstPublishedAt: 2023-03-06T10:06:59.162Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: meli-error-while-sending-the-order-tracking
kiStatus: Backlog
internalReference: 764885
---

## Summary



We are currently logging an error message inside the menu Brige - Tracking, this error is being return by MELI when we send the tracking flow to them.

Important to note that this is not impacting the flow as the tracking is working properly, but the issue is that we are creating the log as an error message when it should be success instead.(due to what MELI returns)


##

## Simulation



Inside Bridge - Tracking menu an error message as below will be shown.

"Mensagem de erro não mapeada pela integração. Entre em contato com a VTEX informando o ocorrido para que o mapeamento seja realizado.
Mensagem de erro Mercado Livre:"


##

## Workaround



No action is required, important to note that although the error message is displayed this is not impacting the tracking flow, the XML is being sent to MELI and the order status is being updated.




