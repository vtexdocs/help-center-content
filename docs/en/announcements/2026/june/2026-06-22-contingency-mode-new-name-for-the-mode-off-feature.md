---
title: 'Contingency Mode: New name for the Mode-off feature'
status: PUBLISHED
createdAt: 2026-06-10T00:00:00.000Z
updatedAt: 2026-06-10T00:00:00.000Z
publishedAt: 2026-06-10T00:00:00.000Z
contentType: updates
productTeam: Payments
slugEN: 2026-06-22-contingency-mode-new-name-for-the-mode-off-feature
locale: en
announcementSynopsisEN: 'The Mode-off feature is now called Contingency Mode, with a clearer purpose and a faster retry process for eligible transactions after a payment connector recovers.'
tags:
  - Improvement
  - Payments
---

VTEX renamed the feature to make its purpose clearer: act automatically in temporary instability scenarios with payment connectors.

In addition to the name change, the feature was revised to make the retry process faster and more effective after the connector recovers.

## What has changed?

The **Mode-off** name was replaced with **Contingency Mode** in the documentation and communications about the feature.

The main behavior of the feature remains the same. When VTEX identifies repeated technical failures in a payment connector, **Contingency Mode** can be activated automatically to help protect eligible transactions while the provider recovers.

Additionally, VTEX implemented an improvement in the retry process: after the connector is reactivated, queued transactions are now reprocessed more quickly.

This improvement especially benefits orders with express shipping, which tend to be more sensitive to approval time and can now be reprocessed significantly faster after the connector recovers.

## What needs to be done?

No action is needed. Activation, connector recovery, and retries of eligible transactions continue to be managed automatically by VTEX.

For more details about this feature, see [Contingency Mode](https://help.vtex.com/docs/tutorials/mode-off-faq).