---
title: "Delivery split with Lean Shipping offering invalid SLA"
id: 61Yq1WhmCclFtcum3YMtXn
status: PUBLISHED
createdAt: 2024-02-27T19:21:21.615Z
updatedAt: 2024-02-27T19:26:27.513Z
publishedAt: 2024-02-27T19:26:27.513Z
firstPublishedAt: 2024-02-27T19:21:22.667Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: delivery-split-with-lean-shipping-offering-invalid-sla
locale: en
kiStatus: Backlog
internalReference: 990155
---

## Summary


When a shopping cart includes products from different sellers, with different delivery channels, and SLA IDs among them, Checkout UI activates Lean Shipping, summarizing the available SLAs to display only the "fastest" and "cheapest" options for each item.

However, if there is a scheduled delivery option but it is not the fastest or cheapest one, the scheduling toggle will still appear in the UI, even though Lean Shipping will not select it as a viable option.


##

## Simulation



- Assemble a cart with at least 2 different sellers, where one item has 3 SLAs, where the scheduled one is neither the fastest nor cheapest option (and thus will not be offered through Lean Shipping).
- Select pickup-in-store.
- Use the UI's scheduling interface for the other item's delivery.
- Notice that it still applies the fastest/cheapest (non-scheduled) SLA, rather than the scheduled one, effectively ignoring your delivery window selection from the previous step.


##

## Workaround


N/A





