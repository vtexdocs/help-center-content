---
title: In the partial return, the Tax values in the UI appear the total
id: 2I5a9hwrUo6s1htxOg8H1U
status: PUBLISHED
createdAt: 2022-04-11T13:15:06.455Z
updatedAt: 2022-11-25T22:03:40.667Z
publishedAt: 2022-11-25T22:03:40.667Z
firstPublishedAt: 2022-04-11T13:15:07.028Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: in-the-partial-return-the-tax-values-in-the-ui-appear-the-total
kiStatus: Backlog
internalReference: 559458
---

## Summary


In an order where we have two identical items, and one of the items is returned, the rates for both items are displayed in the UI, rather than just the rates for the item that was returned being displayed in the UI. This information on fees is for information only, as what will actually be returned is what is filled in on the Return Note.




## Simulation


To simulate this scenario, it will be necessary to place an order with two equal Items (SKU), we will see that in the order, the rates for the two items will be added and displayed in the UI. However, when returning only one of the items, we will see that the return referring to the total of fees will be displayed in the UI, instead of showing the fees referring to only one item.






## Workaround


We don't have a workaround for this case.

