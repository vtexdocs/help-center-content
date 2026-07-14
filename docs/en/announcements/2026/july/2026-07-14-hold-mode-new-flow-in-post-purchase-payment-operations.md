---
title: 'Hold mode: New flow in post-purchase payment operations'
createdAt: 2026-07-14T00:00:00.000Z
updatedAt: 2026-07-14T00:00:00.000Z
contentType: updates
productTeam: Payments
slugEN: 2026-07-14-hold-mode-new-flow-in-post-purchase-payment-operations
locale: en
announcementSynopsisEN: 'VTEX has launched Partial mode, enabling partial settlements, cancellations, and refunds directly with the payment connector.'
tags:
  - New feature
  - Payments
---

To provide more flexibility and control over post-purchase payment operations, VTEX has launched the **Hold** payment processing mode.

## What has changed?

Previously, post-purchase payment operations (settlements, cancellations, and refunds) were only performed in **Total** or **Hold** modes, without the option to perform partial operations (with amounts lower than the order total) directly with the payment provider connector.

With the new **Partial mode**, each settlement, cancellation, or refund request is automatically sent to the connector, enabling faster financial management, lower operational costs, and a better post-purchase experience for customers. This mode doesn't support [split payment](https://help.vtex.com/docs/tutorials/split-payment) transactions.

For more information on how each mode works, see [Post-purchase payment operations](https://help.vtex.com/docs/tutorials/post-purchase-payment-operations).

## What needs to be done?

This feature is already available for all VTEX accounts. If you want to use the **Partial mode** in any of the payment connectors configured in your store, contact [VTEX Support](https://help.vtex.com/docs/tutorials/opening-tickets-to-vtex-support#log-in-to-your-account) to request activation in your account.

> ⚠️ Before requesting the **Partial mode** configuration, check with your payment provider to see if the connector you are using supports multiple partial operations.
