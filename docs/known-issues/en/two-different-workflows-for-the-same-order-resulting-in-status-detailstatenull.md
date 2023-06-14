---
title: 'Two different workflows for the same order resulting in status: detail.state.null'
id: 7GeeO1co0E04mY5MYt5R3f
status: PUBLISHED
createdAt: 2022-10-19T15:07:49.704Z
updatedAt: 2022-11-25T22:00:56.819Z
publishedAt: 2022-11-25T22:00:56.819Z
firstPublishedAt: 2022-10-19T15:07:51.777Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: two-different-workflows-for-the-same-order-resulting-in-status-detailstatenull
locale: en
kiStatus: Fixed
internalReference: 680919
---

## Summary


Due to a failure in the workflow creation step, some orders whose creation flow was completed correctly, may present the following value in the status field: `detail.state.null `and in the order listing they do not display any status value;

This error occurs due to the duplicate creation of the Workflow during the order creation process, Workflow is the object that manages the status change and once duplicated it ends up generating this inconsistency;



## Simulation


There is no way to simulate the error.




## Workaround


For this case, the applicable workaround is to request the analysis of the affected orders and also the adjustment of the status, through a ticket;

