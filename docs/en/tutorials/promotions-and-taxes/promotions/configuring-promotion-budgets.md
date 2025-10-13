---
title: 'Configuring promotion budgets'
id: 3ZCbnELZdMNykXhqBYdFOa
status: PUBLISHED
createdAt: 2025-09-10T10:30:37.848Z
updatedAt: 2025-10-13T13:56:04.974Z
publishedAt: 2025-10-13T13:56:04.974Z
firstPublishedAt: 2025-09-10T11:43:30.901Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: configuring-promotion-budgets
legacySlug: configuring-promotion-budgets
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

> ℹ️ This feature is in testing phase (closed beta). If you are interested in joining, please open a ticket with the [ VTEX Support team ](https://help.vtex.com/en/support).

The Promotions module in the VTEX Admin allows you to configure a budget to limit the discounts in a promotion. This feature helps control benefit spending by ensuring that discounts don't exceed a predefined maximum amount.

Additionally, the module allows merchants to monitor, adjust, or pause promotions based on budget usage. It also gives merchants real-time visibility of the remaining balance, enabling more informed decisions when adjusting or extending the promotion.

Currently, budget control only supports the following types of benefits:

- **Buy Together:** Applies to the entire promotion.
- **Buy One Get One:** Maximum price.
- **More for Less:** Applies to the entire promotion.
- **Progressive Discount:** Applies to the entire promotion.
- **Regular:** Fixed amount price, percentage price, maximum price, and price table.

> ⚠️ If the promotion benefit is changed to a type that doesn't support budget control, the promotion will be automatically paused, but the setup won't be removed. The promotion will continue to be active without applying the spending threshold. If the promotion benefit changes to a supported type again, budget control will be reactivated, resuming the spending threshold.

## How the budget works
The budget sets the maximum discount that can be applied while the promotion is active.
With each discount application, the amount deducted from the budget is calculated as follows:

Original SKU price – Price after discount = Amount deducted from the budget

> ℹ️ When duplicating an existing promotion, all settings are copied except for the budget. This field can't be automatically duplicated and must be completed manually in the new promotion.

To use this feature, set a budget when creating the promotion in the VTEX Admin.

## Creating a promotion with a budget
1. In the VTEX Admin, go to Promotions > Promotions, or type Promotions in the search bar at the top of the page.
2. Click `Create promotion`.
3. Select the type of promotion you want.
4. Click the <i class="fas fa-plus" aria-hidden="true"></i> button next to the Budget heading.
5. In the Promotion budget field, define the total amount available for discounts — the maximum amount that can be applied during this promotion.
6. Click `Apply` to link the budget with the promotion.
7. Complete all other promotion details.
8. Click `Save`.

> ❗ In scenarios of high competition between simultaneous orders, the final amount used from the budget may slightly exceed the expected amount due to the high volume of requests processed at once.

## Editing the budget of a promotion
If a promotion's budget reaches the limit and the promotion is paused, you can adjust it by increasing or decreasing the budget, following these steps:

1. In the VTEX Admin, go to Promotions > Promotions, or type Promotions in the search bar at the top of the page.
2. Select the desired promotion.
3. Change the budget as desired.
4. In the panel at the right, click <i class="fas fa-pencil-alt" aria-hidden="true"></i> next to **Budget**.
5. Update the Promotion budget field with the new limit.
6. Click **Apply**. 
7. Click **Save**.

## Removing a budget from a promotion
To remove the budget from a promotion, follow the steps below:

1. In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Select the desired promotion.
3. Change the budget as desired.
4. On the right, click the “Trash bin" <i class="far fa-trash-alt" aria-hidden="true"></i> icon next to **Budget**.
5. In the confirmation window, click `Continue`.
6. Click `Save`.

## What happens after the promotion budget is reached
The Active status indicates that the promotion can be applied. However, its application also depends on budget availability.

If the budget is fully used, the promotion will automatically stop being applied, even if the status remains Active and the end date wasn't reached. This means the promotion won't be applied until the budget is updated.

> ⚠️ Make sure to review or remove any active communications related to the promotion.

