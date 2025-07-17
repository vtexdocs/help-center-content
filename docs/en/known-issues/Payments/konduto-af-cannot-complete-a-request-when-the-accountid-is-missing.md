---
title: "Konduto AF cannot complete a request when the accountId is missing."
id: CGHZoCfr01ATsbtiLU9ym
status: PUBLISHED
createdAt: 2022-03-03T22:09:57.638Z
updatedAt: 2023-06-20T17:54:26.840Z
publishedAt: 2023-06-20T17:54:26.840Z
firstPublishedAt: 2022-03-03T22:09:58.094Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: konduto-af-cannot-complete-a-request-when-the-accountid-is-missing
locale: en
kiStatus: Backlog
internalReference: 496298
---

## Summary


There's an issue to approve some transactions that is related to the Konduto anti-fraud system. This issue arises when the system fails to make the necessary request due to the absence of the accountId, which is required to retrieve payment information from the account database. You can verify this by examining the "/payment" route, where you will find the node "usedAccountId" with a value of "False" in such cases.

**{**"name": "usedAccountId","value": "False"**}**

Furthermore, this problem is commonly observed when a user removes their own card from the MyAccount page immediately after placing an order.


##

## Simulation


Follow the aforementioned step, which involves deleting a card immediately after placing an order utilizing Konduto Antifraud.


##

## Workaround


N/A





