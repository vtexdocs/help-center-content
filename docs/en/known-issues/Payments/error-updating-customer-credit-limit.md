---
title: "Error updating Customer Credit limit"
id: 5JFf84sPhezlexXG7HvQrV
status: PUBLISHED
createdAt: 2024-09-06T13:22:57.385Z
updatedAt: 2024-09-06T13:22:58.275Z
publishedAt: 2024-09-06T13:22:58.275Z
firstPublishedAt: 2024-09-06T13:22:58.275Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-updating-customer-credit-limit
locale: en
kiStatus: Backlog
internalReference: 1093711
---

## Summary


When trying to change the Credit Limit (increase or decrease) of a creditAccount an error can occur (via Admin and API) with the message:

`Request failed with status code 500`


##

## Simulation


We were not able to simulate or identify the cause.


##

## Workaround


If the action keep failing we advise deleting the creditAccount and creating a new one.




