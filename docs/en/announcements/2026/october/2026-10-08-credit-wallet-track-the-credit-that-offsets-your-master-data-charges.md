---
title: 'Credit wallet: Track the credit that offsets your Master Data charges'
createdAt: '2026-10-08T00:00:00.000Z'
updatedAt: '2026-10-30T00:00:00.000Z'
contentType: updates
productTeam: Billing
slugEN: 2026-10-08-credit-wallet-track-the-credit-that-offsets-your-master-data-charges
locale: en
announcementSynopsisEN: 'Track your credit wallet through the new Credits page in the VTEX Admin and see how it offsets Master Data charges.'
tags:
  - New feature
  - Billing
---

The VTEX Admin now offers the **Credits** page under **Billing**, where you can check your company's [credit wallet](/en/docs/tutorials/credit-wallet) balance and usage. The credit wallet is a billing credit automatically granted by VTEX and used to offset [Master Data](/en/docs/tutorials/master-data) charges, which occur regardless of the version used (v1 or v2).

## What has changed?

**Billing** now includes a new page, **Credits**, alongside Contracts, Invoices, Registration Information, and Billing Contacts. To access it, click your avatar — identified by your email initial — in the top right corner of the screen, and then click **Billing > Credits**.

On the **Credits** page, you'll find:

- **Total balance**: Current balance of your credit wallet.
- **Estimated coverage for current consumption**: Estimate of how many months the current balance would cover, based on recent usage.
- **Annual credit summary**: Total credit generated and used during the period (**Inflow and outflow**) and the percentage of accumulated credit that was consumed (**Consumption rate**).
- **Credit statement**: Month-by-month statement with opening balance, credit generated, amount used, amount expired, and closing balance.
- **Master Data consumption**: Estimated cost for the next cycle, percentage of that cost covered by the credit, volume of stored documents, and the corresponding pricing tier.

The page also explains how credit is calculated and used. Each month, VTEX calculates the total amount paid in the previous month by all accounts grouped under the same company for billing purposes. The following month, VTEX grants credit equivalent to 2% of that total. This credit applies exclusively to offset Master Data charges, and unused balances continue to accumulate until the end of the current contractual cycle.

> ⚠️ Payments for Ads, Professional Services, and consultancy services in general aren't included in the credit calculation base.

## Why did we make this change?

Credit from the credit wallet is calculated and automatically applied to invoices, but until now there was no way to track it. The **Credits** page provides visibility into your available balance, usage history, and the relationship between this credit and Master Data costs, so you can predict whether the next cycle's consumption will be fully covered or generate an additional charge.

## What needs to be done?

Only users with the [Finance](/en/docs/tutorials/predefined-roles#finance) or [Finance - Full access](/en/docs/tutorials/predefined-roles#finance-full-access) role, or with the `View Credits` resource from [Billing](/en/docs/tutorials/predefined-roles#billing) linked to their role, can access the **Credits** page in the VTEX Admin.

Credit is granted and applied automatically. To check the balance and usage, go to **Billing > Credits** in the VTEX Admin.
