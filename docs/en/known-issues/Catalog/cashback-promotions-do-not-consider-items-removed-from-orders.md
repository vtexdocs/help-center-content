---
title: "Cashback promotions do not consider items removed from orders"
id: lm9v37jvUSCeh9FVFHjsr
status: PUBLISHED
createdAt: 2024-04-19T13:50:10.264Z
updatedAt: 2024-04-19T13:50:11.130Z
publishedAt: 2024-04-19T13:50:11.130Z
firstPublishedAt: 2024-04-19T13:50:11.130Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: cashback-promotions-do-not-consider-items-removed-from-orders
locale: en
kiStatus: Backlog
internalReference: 1019864
---

## Summary


Currently, when using cashback promotions, the calculations are entirely performed in the moment the items are inserted in the cart.

Hence, any changes to the orders done after that are not considered. Consequently, orders that had removed items and only consider the application of cashback after an invoice, the main case for this issue, will still take into account the removed item's cashback even though it was removed.


##

## Simulation


1 - Create a 10% cashback promotion, restricted to only yourself (to avoid incorrect applications) and with the invoiced condition to apply the credits.

2 - Close a $100 order composed of 2 items: one that costs $80 and the other $20.

3 - The applied credits should be $10. Remove the $8 item from the order and invoice it.

4 - You will still be credited $10 as a cashback, despite the expected value now being $2, which happens because the promotion calculations are done during the checkout simulation, before the order is closed.


##

## Workaround


There is no workaround.





