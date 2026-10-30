---
title: 'Credit wallet'
createdAt: '2026-10-08T00:00:00.000Z'
updatedAt: '2026-10-08T00:00:00.000Z'
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

The **credit wallet** is a billing credit automatically granted to your company, used to offset [Master Data](/en/docs/tutorials/master-data) charges.

This article explains how credit from the credit wallet is calculated, how it's applied to Master Data charges, and what happens to the unused balance.

> ℹ️ To learn how to check your credit wallet information, see [Checking credit wallet](/en/docs/tutorials/checking-credit-wallet).

## How credit is calculated

When a company operates with more than one account on VTEX (for example, [franchise accounts](/en/docs/tutorials/what-is-a-franchise-account) or additional environments), all of them are grouped under a single company for billing purposes. This company receives a consolidated invoice, and credit from the credit wallet is calculated and applied at this level, not by individual account.

Every month, VTEX adds up everything the company — meaning all accounts grouped under it — paid to VTEX during the previous month (from the 1st to the last day of the month) and grants a credit equal to 2% of that total in the following month.

> ⚠️ Payments related to Ads, Professional Services, and consulting in general aren't included in this calculation base.

## How credit is used

Credit from the credit wallet is applied exclusively to offset Master Data charges on the following month's invoice.

Master Data consumption occurs within each account, but VTEX aggregates it across all accounts within a company to calculate the total Master Data cost. Credit is applied to this consolidated total.

If the credit value is greater than the Master Data charge for the period, the remaining balance stays available for use in future months. Unused credit accumulates.

> ℹ️ Credit accumulated in the credit wallet is valid until the end of the current contractual cycle. It doesn't keep accumulating indefinitely.
