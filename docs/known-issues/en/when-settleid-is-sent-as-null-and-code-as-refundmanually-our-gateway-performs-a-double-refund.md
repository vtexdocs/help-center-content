---
title: When settleId is sent as null and code as "refund-manually" our gateway performs a double refund.
id: 2PdRRjHDODY2Tk0VItO4Fo
status: PUBLISHED
createdAt: 2022-07-11T17:37:43.961Z
updatedAt: 2022-11-25T22:04:38.681Z
publishedAt: 2022-11-25T22:04:38.681Z
firstPublishedAt: 2022-07-11T17:37:44.954Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: when-settleid-is-sent-as-null-and-code-as-refundmanually-our-gateway-performs-a-double-refund
kiStatus: Backlog
internalReference: 615050
---

## Summary


The PPP documentation indicates that when the refund process did not work, the provider must respond with a `null` to this field, and also when the refund must be performed manually, the code field must have the value “refund-manually”.

The problem is that each triggers a refund, causing it to be doubled.



## Simulation


Send code="refund-manually" and settled=null in the settlement response with PPP.



## Workaround


Do not send "refund-manually" in the code field, rather just send the settled as null.

