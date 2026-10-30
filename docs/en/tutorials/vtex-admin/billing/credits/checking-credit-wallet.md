---
title: 'Checking credit wallet'
createdAt: '2026-10-08T00:00:00.000Z'
updatedAt: '2026-10-08T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: checking-credit-wallet
locale: en
subcategoryId: credit-wallet
---

To access the credit wallet, click your avatar — identified by your email initial — in the top right corner of the screen. Then click **Billing > Credits**.

> ⚠️ Only users with the [Finance](/en/docs/tutorials/predefined-roles#finance) or [Finance - Full access](/en/docs/tutorials/predefined-roles#finance-full-access) role, or with the `View Credits` resource from [Billing](/en/docs/tutorials/predefined-roles#billing) linked to the profile, can access the **Credits** page in the VTEX Admin.

![credits-en](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/en/tutorials/vtex-admin/billing/credits/credits-en.png)

On the **Credits** page, you'll find the following information:

- **Total balance**: Current balance of your credit wallet.
- **Estimated coverage for current consumption**: The number of months the current balance is expected to last based on the recent consumption rate. This is a projection, not a guarantee, and may change as your operation grows or your consumption varies.
- **Annual credit summary**: Annual credit summary with two indicators:
  - **Inflow and outflow**: Total credit generated ("inflow") and actually used to offset Master Data charges ("outflow") in the period. Expired credit is accounted for separately (in the **Expired** column of the statement) and isn't included in this number.
  - **Consumption rate**: Percentage of accumulated credit that was consumed in the period. Since unused credit continues to accumulate over the following months, the lower this percentage is, the greater your balance cushion relative to Master Data consumption.
- **Credit statement**: Month-by-month statement with opening balance, credit generated, amount used, amount expired, and closing balance. Click the `>` icon next to a month to expand the row and view its individual entries, including the date, description, credit amount, and updated balance. If there was Master Data consumption in the month, the expanded row also displays the **Consumption by add-on** section in the lower-left corner of the screen, with one card per consumed add-on.

### Master Data consumption

![credits-master-data-en](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/en/tutorials/vtex-admin/billing/credits/credits-master-data-en.png)

> ⚠️ During the first week of each month, the document count in the Master Data drawer may show zero. This happens because the first update of the month occurs only after this period. Once the update occurs, the correct number of documents will be displayed.

To view Master Data consumption, expand a month's row in the **Credit statement** and, in the **Consumption by add-on** section, in the lower-left corner of the screen, click the **Master Data** card. This opens a drawer showing:

- **Estimated cost for next cycle**: Gross Master Data cost for the next cycle, calculated based on the number of documents stored at the last weekly dashboard update, before applying the credit from the credit wallet.
- **Coverage from credit**: Percentage of the estimated Master Data cost for the next billing cycle that's covered by the current credit wallet balance. If it's less than 100%, the difference is charged on the invoice.
- **Documents stored**: Current document volume and the corresponding price tier.
- **Document volume** (chart): Volume of documents stored per month. The bar for the current month shows the total as of the last dashboard update (last Monday), rather than the final monthly total. Bars for previous months show their final totals.

> ℹ️ **Estimated coverage for current consumption** on the general page estimates how many months the total balance will last. In contrast, Master Data's **Coverage from credit** only indicates whether the balance covers 100% of the current cycle's cost or whether an additional charge will apply.
