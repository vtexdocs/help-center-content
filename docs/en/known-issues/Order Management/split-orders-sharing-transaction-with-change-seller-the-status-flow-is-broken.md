---
title: 'Split Orders sharing transaction with Change Seller the status flow is broken'
id: 7mWWQxEPrb6c4xDnZVakK5
status: PUBLISHED
createdAt: 2024-08-15T21:15:41.792Z
updatedAt: 2024-08-15T21:15:42.663Z
publishedAt: 2024-08-15T21:15:42.663Z
firstPublishedAt: 2024-08-15T21:15:42.663Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: split-orders-sharing-transaction-with-change-seller-the-status-flow-is-broken
locale: en
kiStatus: Backlog
internalReference: 1082298
---

## Summary



Split Orders sharing the transaction with change sellers cannot advance to invoiced. Although all orders from intermediate sellers go to cancelled correctly and the last seller goes to invoiced. Even so, the marketplace order cannot complete the entire flow and progress to invoiced. And possibly after the timeout ends up going to cancellation.
This is happens because the gateway with the connector used cannot just "settle" the part of the payment corresponding to the seller who went ahead and settle the full payment for the order.
When the other order makes a change seller, it tries to carry out a step that communicates with the gateway to inform this change of seller (associated with the minicart) as for the Gateway the payment has already been fully captured due to the error in this call, and the order cannot be processed and progressing on Workflow.


##

## Simulation


Splited Orders sharing the transaction and one of those orders needs more than one change sellers.
Once the transaction is settled full value will be settled.
So at the end of all progress the original marketplace from order splited with change seller dont move to invoiced. And will be cancelled after timeout workflow.


##

## Workaround


Unfortunately, there is currently no workaround for this scenario.





