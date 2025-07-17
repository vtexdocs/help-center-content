---
title: "Order Stuck in Payment Pending Due to Unexpected Transaction Status"
id: NiojkaM32e07VzydweKqx
status: PUBLISHED
createdAt: 2025-03-17T20:50:16.017Z
updatedAt: 2025-03-17T20:50:16.558Z
publishedAt: 2025-03-17T20:50:16.558Z
firstPublishedAt: 2025-03-17T20:50:16.558Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-due-to-unexpected-transaction-status
locale: en
kiStatus: Backlog
internalReference: 1195265
---

## Summary


Sometimes, when the OMS checks the gateway for the transaction status before changing the order to Payment Approved, the status is previous from the expected one, which should be **Approved.** Making the order stays stuck in Payment Pending status.


##

## Simulation


The error is intermittent and cannot be simulated.


##

## Workaround


Open a ticket with VTEX requesting the payment approved notification to be resent to OMS.





