---
title: 'Konduto AF cannot complete a request when the accountId is missing.'
id: CGHZoCfr01ATsbtiLU9ym
status: PUBLISHED
createdAt: 2022-03-03T22:09:57.638Z
updatedAt: 2022-11-25T22:05:52.845Z
publishedAt: 2022-11-25T22:05:52.845Z
firstPublishedAt: 2022-03-03T22:09:58.094Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: konduto-af-cannot-complete-a-request-when-the-accountid-is-missing
kiStatus: Backlog
internalReference: 496298
---

## Summary



Some transactions cannot be finished because Konduto anti-fraud doesn't make the proper request because the accountId used to get payment information from the account database table is missing. This can be validated by looking at the /payment route where the node "usedAccountId" is false in this case.

**{**"name": "usedAccountId","value": "False"**}**



## Simulation


This error cannot be reproduced at this time, it occurs intermittently.



## Workaround


No workaround is available.

