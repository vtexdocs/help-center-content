---
title: "Shipping policy that does not deliver on weekends is being considered"
id: 25bhUZXA9sZvyFVNeMUSJl
status: PUBLISHED
createdAt: 2022-06-08T18:32:07.971Z
updatedAt: 2024-02-16T20:25:34.078Z
publishedAt: 2024-02-16T20:25:34.078Z
firstPublishedAt: 2022-06-08T18:32:08.836Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-policy-that-does-not-deliver-on-weekends-is-being-considered
locale: en
kiStatus: No Fix
internalReference: 594828
---

## Summary


Before, the functionality "**Weekends and Holidays**" and "**Business hours**" worked together, in other words, one information was dependent on the other.
However, as some architectures have chosen to use the "Business hours" as dock hours, then there was the need to break apart this information.
So with this, the "Weekends and Holidays" does not disregard shipping policies that would not deliver on a certain day. And consequently, shipping policies that don't deliver on weekends and holidays are considered to have a much longer SLA than expected, disregarding other shipping policies of the same shipping method that would cover the order.



## Simulation


Have a shipping policy that the option "**Weekends and Holidays**" is **unchecked** (Saturday delivery, Sunday delivery and/or Holiday delivery) and the only delivery option (business hours) of this shipping policy is Saturday and/or Sunday. Here is an example:

No delivery on Saturdays, Sundays and holidays:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Logistics/shipping-policy-that-does-not-deliver-on-weekends-is-being-considered_1.png)

The business hours are set for Saturday only:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Logistics/shipping-policy-that-does-not-deliver-on-weekends-is-being-considered_2.png)

Even though the shipping policy is not able to deliver on Saturdays, it is available because Saturday is included in its hours of operation, but the time is much longer than the defined:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Logistics/shipping-policy-that-does-not-deliver-on-weekends-is-being-considered_3.png)



## Workaround


It is possible to enable the option "Weekends and Holidays" according to the "Business hours" of the shipping policy. That is, if the shipping policy delivers only on Saturday, the Saturday option of "Weekends and Holidays" must be enabled.

