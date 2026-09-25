---
title: 'Credit Wallet'
createdAt: '2026-09-28T00:00:00.000Z'
updatedAt: '2026-09-28T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: credit-wallet
locale: en
subcategoryId: credit-wallet
seeAlso:
  - "/en/docs/tutorials/billing-module-overview"
  - "/en/docs/tutorials/master-data"
  - "/en/docs/tutorials/checking-master-data-usage-in-the-vtex-admin"
---

**Credit Wallet** is a billing credit automatically granted to your company, used to offset Master Data charges.

This article explains how Credit Wallet credit is calculated, how it's applied to Master Data charges, and what happens to unused balance.

> ℹ️ To learn how to query your Credit Wallet information, see [Query Credit Wallet](/en/docs/tutorials/query-credit-wallet).

## How credit is calculated

When a company operates more than one account on VTEX (for example, franchise accounts or additional environments), all accounts are grouped under one company for billing purposes. This company receives a consolidated invoice, and Credit Wallet credit is calculated and applied at this level, not by individual account.

Every month, VTEX adds up everything the company — meaning all accounts grouped under it — paid to VTEX in the previous month (from the 1st to the last day of the month) and grants a credit equivalent to 2% of that total value in the following month.

> ⚠️ Payments for Ads, Professional Services, and consulting in general are not included in this calculation base.

## How credit is used

Credit Wallet credit is applied exclusively to offset Master Data charges on the following month's invoice.

Master Data consumption happens within each account, but VTEX adds up Master Data consumption from all accounts in a company to calculate the total Master Data cost. Credit is applied to this consolidated total.

If the credit value is greater than the Master Data charge for the period, the remaining balance stays available for use in future months. Unused credit accumulates.

> ℹ️ Credit accumulated in Credit Wallet is valid until the end of the current contract cycle. It doesn't continue to accumulate indefinitely.
