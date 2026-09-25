---
title: 'Credit Wallet: Track the credit that offsets your Master Data charges'
createdAt: '2026-09-28T00:00:00.000Z'
updatedAt: '2026-09-28T00:00:00.000Z'
contentType: updates
productTeam: Billing
slugEN: 2026-09-28-credit-wallet-track-the-credit-that-offsets-your-master-data-charges
locale: en
announcementSynopsisEN: 'Track your Credit Wallet through the new Credits page in the VTEX Admin and see how it offsets Master Data charges.'
tags:
  - New feature
  - Billing
---

The VTEX Admin now offers the **Credits** page in **Billing Information**, where you can check your company's [Credit Wallet](/en/docs/tutorials/credit-wallet) balance and usage. Credit Wallet is a billing credit automatically granted by VTEX and used to offset [Master Data](/en/docs/tutorials/master-data) charges.

## What has changed?

**Billing** now includes a new page, **Credits**, alongside Contracts, Invoices, Registration Information, and Billing Contacts. To access it, click your avatar — identified by the initial of your email — in the upper right corner of the screen, and then go to **Billing > Credits**.

On the **Credits** page, you'll find:

- **Total balance**: current balance of your Credit Wallet.
- **Estimated coverage for current consumption**: estimate of how many months the current balance would cover, based on recent usage.
- **Annual credit summary**: total credit generated and used during the period (**Inflow and Outflow**) and the percentage of accumulated credit that was consumed (**Consumption rate**).
- **Credit statement**: month-by-month statement with opening balance, credit generated, amount used, expired amount, and closing balance.
- **Master Data consumption**: estimated cost for the next cycle, percentage of that cost covered by the credit, volume of stored documents, and the corresponding pricing tier.

The page also clarifies how credit is generated and consumed: every month, VTEX adds up everything the company — meaning all accounts grouped under it for billing purposes — paid to VTEX the previous month and grants, in the following month, a credit equivalent to 2% of that total. This credit is applied exclusively to offset Master Data charges, and unused balance keeps accumulating until the end of the current contract cycle.

> ⚠️ Payments for Ads, Professional Services, and general consulting do not count toward the credit calculation base.

## Why did we make this change?

Credit Wallet credit is calculated and applied automatically to invoices, but until now there was no way to track it. The **Credits** page provides visibility into the available balance, usage history, and the relationship between this credit and Master Data costs, making it possible to predict whether next cycle's usage will be fully covered or will generate an additional charge.

## What needs to be done?

Only users with the [Finance](/en/docs/tutorials/predefined-roles#finance), [Finance Full Access](/en/docs/tutorials/predefined-roles#finance-full-access) access profile, or with the `View Credits` resource from [Billing](/en/docs/tutorials/predefined-roles#billing) linked to their profile can access the **Credits** page in the VTEX Admin.

Credit is granted and applied automatically. To check the balance and usage, go to **Billing > Credits** in the VTEX Admin.
