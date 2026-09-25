---
title: 'Checking Credit Wallet'
createdAt: '2026-09-28T00:00:00.000Z'
updatedAt: '2026-09-28T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: checking-credit-wallet
locale: en
subcategoryId: credit-wallet
---

To access Credit Wallet, click your avatar — identified by your email initial — in the upper-right corner of the screen. Then click **Billing information > Credits**.

> ⚠️ Only users with the [Finance](/en/docs/tutorials/predefined-roles#finance), [Finance Full Access](/en/docs/tutorials/predefined-roles#finance-full-access) access profile, or with the `View Credits` resource from [Billing](/en/docs/tutorials/predefined-roles#billing) linked to the profile can access the **Credits** page in the VTEX Admin.

![credits-en](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/en/tutorials/vtex-admin/billing/credits/credits-en.png)

On the **Credits** page, you'll find the following information:

- **Total balance**: your Credit Wallet current balance.
- **Estimated coverage for current consumption**: estimate of how many months the current balance would cover, maintaining the recent consumption rate. It's a projection, not a guarantee — it changes as your operation grows or consumption varies.
- **Annual credit summary**: annual credit summary with two indicators:
  - **Inflow and outflow**: total credit generated ("inflows") and actually used to offset Master Data charges ("outflows") in the period. Expired credit is accounted for separately (in the **Expired** column of the statement) and isn't included in this number.
  - **Consumption rate**: percentage of accumulated credit that was consumed in the period. Since unused credit continues to accumulate for the following months, the lower this percentage, the greater your balance cushion relative to Master Data consumption.
- **Credit statement**: month-by-month statement with opening balance, credit generated, amount used, amount expired, and closing balance. Click the `>` icon next to a month to expand the row and see that period's individual entries (date, description, credit amount, and updated balance). If there was Master Data consumption in that month, the expanded row also shows the **Consumption by add-on** section in the lower-left corner of the screen.

### Master Data breakdown

![credits-master-data-en](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/en/tutorials/vtex-admin/billing/credits/credits-master-data-en.png)

To open the Master Data breakdown, expand a month's row in the **Credit statement** and, in the **Consumption by add-on** section, in the lower-left corner of the screen, click the **Master Data** card. This opens a side panel with:

- **Estimated cost for next cycle**: gross Master Data cost in the next cycle, calculated based on the volume of documents stored at the last dashboard update (weekly) — before applying Credit Wallet credit.
- **Credit coverage**: percentage of the estimated Master Data cost for the next cycle that's covered by the current Credit Wallet balance. If it's less than 100%, the difference is charged on the invoice.
- **Stored documents**: current document volume and the corresponding price tier.
- **Document volume** (chart): volume of documents stored per month. The current month bar shows the total up to the last dashboard update (last Monday), not the final month volume — unlike the bars for closed months, which show the final total for that month.

> ℹ️ Unlike the **Estimated coverage for current consumption** on the general page, which projects the duration of the total balance in months, Master Data's **Credit coverage** only indicates whether the balance covers 100% of the cost in the current cycle or if there will be an additional charge.