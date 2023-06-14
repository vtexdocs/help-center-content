---
title: 'Shipping policy not prioritized due "Reason: Dismissed as a matter of priority" even with better cost'
id: p1oTHG7CuYITViV4uFZEQ
status: PUBLISHED
createdAt: 2022-05-10T18:05:57.097Z
updatedAt: 2022-11-25T22:00:01.499Z
publishedAt: 2022-11-25T22:00:01.499Z
firstPublishedAt: 2022-05-10T18:05:57.473Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: shipping-policy-not-prioritized-due-reason-dismissed-as-a-matter-of-priority-even-with-better-cost
locale: en
kiStatus: Backlog
internalReference: 379685
---

## Summary


When the customer sets up a cost from the warehouse to the dock in the shipping rate, it can affect the selection of the shipping policy. This can happen because the cost of the dock is not included in the prioritization of shipping policies. Therefore, a shipping policy that is more expensive for the consumer can be prioritized, since the freight value calculation did not take into consideration the dock cost.



## Simulation


It is not simple to simulate this behavior. Here is an example:

We have two different shipping policies with the same shipping method: **X** and **Y**. The **Y** shipping policy was prioritized over the **X**, even though it is more expensive for the consumer.


- **X**: $7.00 shipping +$0.00 dock = **$7.00 <-- CHEAPEST**
- **Y**: $6.00 shipping +$2.00 dock = **$8,00 <-- SELECTED**

In this case, the shipping policy **Y** was selected, which by the calculations would not make any sense, since the final cost is higher than **X**. But since the math does not consider the cost of the dock, so:

- **X**: $7.00 shipping
- **Y**: $6.00 shipping **<-- CHEAPEST & SELECTED**



## Workaround



No workaround available for this issue.

