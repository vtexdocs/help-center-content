---
title: On List Orders pages the Export Orders is not working when the filter selected has special characters
id: 2eA1rykmTHxhUsiCQmeNoA
status: PUBLISHED
createdAt: 2022-09-21T17:54:38.517Z
updatedAt: 2022-11-25T22:01:23.310Z
publishedAt: 2022-11-25T22:01:23.310Z
firstPublishedAt: 2022-09-21T17:54:39.474Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: on-list-orders-pages-the-export-orders-is-not-working-when-the-filter-selected-has-special-characters
kiStatus: Backlog
internalReference: 662821
---

## Summary


New UI has a limitation to export some orders once the filter selected has on name special character example ("&" and "á" or "ú") it happens because even the new UI can filter the orders it calls old OMS route to export the orders.
And this limitation actually is in the old route of OMS, because the auto correction can not handle all cases of names.



## Simulation



1 - Go to orders page;

2 - Select for example a seller with & in the name;

3 - The list orders will be able to see; (using orders route)

4 -But when you click to export you will receive a message: (at this moment the orders call old oms route with problem)

`Export completed. 0 orders have been sent to your email!`



## Workaround


There is no workaround for this issue.

