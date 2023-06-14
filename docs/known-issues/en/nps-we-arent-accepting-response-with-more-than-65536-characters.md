---
title: "NPS - we aren't accepting response with more than 65536 characters"
id: 11XAxAg1dG2aKQc9lzRsfp
status: PUBLISHED
createdAt: 2022-03-03T18:45:54.398Z
updatedAt: 2022-11-25T22:05:24.116Z
publishedAt: 2022-11-25T22:05:24.116Z
firstPublishedAt: 2022-03-03T18:45:54.787Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: nps-we-arent-accepting-response-with-more-than-65536-characters
locale: en
kiStatus: Backlog
internalReference: 317389
---

## Summary


We aren't accepting NPS response with more than 65536 characters



## Simulation


Make a purchase with more than 223 items using the NPS connector. The gateway does not support orderList so long and shows this message:

Message: Unknown Error on AutoSettleThe maximum message size quota for incoming messages (65536) has been exceeded. To increase the quota, use the MaxReceivedMessageSize property on the appropriate binding element.



## Workaround


There is no workaround.

