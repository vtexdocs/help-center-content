---
title: 'Delivery method selector does not appear in some scenarios'
id: 3TmHGPquZnxXZnnnNrofSi
status: PUBLISHED
createdAt: 2022-07-22T14:03:10.696Z
updatedAt: 2022-11-25T21:49:57.025Z
publishedAt: 2022-11-25T21:49:57.025Z
firstPublishedAt: 2022-07-22T14:03:11.255Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: delivery-method-selector-does-not-appear-in-some-scenarios
kiStatus: Fixed
internalReference: 293784
---

## Summary


Stores that have scheduled delivery options may have a malfunction regarding the delivery method selection. This can happen with or without the use of Lean Shipping.
Generally speaking, after unchecking the "schedule all" option (which is naturally checked) no other SLA option is displayed.



## Simulation


**For stores that do not use Lean Shipping:**

- create a cart where there are items with the scheduled delivery SLA
- At checkout, in the shipping step, fill in all necessary data — Note that after the delivery "calculation" the "schedule all" option will be checked, however, it will show unscheduled options (the button should be unchecked)
- uncheck and check "schedule all" to see scheduling options
- choose a scheduling option (with delivery date and window)
- remove "schedule all" to revert to unscheduled — no delivery forms will be displayed

**For stores using Lean Shipping:**

- create a cart where there are items with the scheduled delivery SLA
- At checkout, in the shipping step, fill in all the necessary data — Note that after the "calculation" of the delivery the "schedule all" option will be checked
- choose a scheduling option (with delivery date and window)
- remove "schedule all" to revert to unscheduled — no delivery forms will be displayed



## Workaround


There is no known workaround.

