---
title: 'Credit wallet: transfer credit between companies in the same economic group'
createdAt: 2026-11-24T12:00:00.000Z
updatedAt: 2026-11-24T12:00:00.000Z
contentType: updates
productTeam: Billing
slugEN: 2026-11-30-credit-wallet-transfer-credit-between-companies-in-the-same-economic-group
locale: en
tags:
  - New feature
  - Billing
announcementSynopsisEN: 'You can now transfer part of the credit wallet balance from one company to another in the same economic group on the Credits page in the VTEX Admin.'
---

In the VTEX Admin, you can now transfer part of the balance of the [credit wallet](/en/docs/tutorials/credit-wallet) of a company to another company in the same economic group. To do so, go to **Billing > Credits**. This helps you use the credit available across the group more efficiently.

## What has changed?

Previously, only the company that generated the credit wallet balance could use it. Now, on the **Credits** page in the VTEX Admin, the new `Transfer credit` button lets you move part of the balance of the current company to another company in the same economic group. You choose the destination company, enter the amount (greater than zero and up to the available balance), and confirm the transfer after reviewing the summary.

Each transfer creates an entry in the **Credit statement** of the source company and another in that of the destination company. The received credit follows the expiration policy of the destination company.

Consider the following rules:

- You can only transfer credit between companies in the same economic group.
- The transfer is partial, has no approval flow, and can't be undone.
- Only the source company can start the transfer.
- For the transfer to reduce the invoice amount, the credit must reach the destination company before VTEX generates the invoice on the first day of the following month.
- A transfer made after that date applies from the next invoice.

## Why did we make this change?

Each company generates and uses credit from the credit wallet at its own level, and this credit offsets that same company's Master Data charges. In economic groups with centralized financial management, some companies use large volumes of Master Data and generate little credit, while others generate surplus credit. With transfers, you use the credit available in the group where it's needed.

## What needs to be done?

To transfer credit, you must have the `Transfer Credit` permission in the source company. This rule applies to users and to API keys (`appKey`).

For detailed instructions, see [Transferring credit between companies in the same economic group](/en/docs/tutorials/transferring-credit-between-companies-in-the-same-economic-group).
