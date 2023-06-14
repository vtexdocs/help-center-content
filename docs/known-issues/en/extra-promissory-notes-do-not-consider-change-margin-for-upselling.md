---
title: 'Extra promissory notes do not consider change margin for upselling'
id: 4PwQpQ07NHthtUyfJibNmV
status: PUBLISHED
createdAt: 2022-02-16T17:44:28.486Z
updatedAt: 2022-11-25T22:08:49.657Z
publishedAt: 2022-11-25T22:08:49.657Z
firstPublishedAt: 2022-02-16T17:44:28.968Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: extra-promissory-notes-do-not-consider-change-margin-for-upselling
kiStatus: Fixed
internalReference: 525987
---

## Summary


The max value for upselling is only calculated for default promissory notes, when adding extra ones, our gateway does not consider the changing margin range field in the calculation



## Simulation


Place an order using any default slots for promissory notes and then place a new order after adding and using new slots for promissory



## Workaround


In the case of using the change margin range field, this field only works for the first five default slots

