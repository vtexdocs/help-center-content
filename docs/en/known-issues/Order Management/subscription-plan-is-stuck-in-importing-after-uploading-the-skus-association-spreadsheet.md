---
title: "Subscription plan is 'stuck' in 'importing' after uploading the SKUs association spreadsheet"
id: 4BVj2X44OZMttG57vUryHb
status: PUBLISHED
createdAt: 2022-05-03T00:28:48.118Z
updatedAt: 2022-11-25T22:02:55.949Z
publishedAt: 2022-11-25T22:02:55.949Z
firstPublishedAt: 2022-05-03T00:28:48.887Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscription-plan-is-stuck-in-importing-after-uploading-the-skus-association-spreadsheet
locale: en
kiStatus: Fixed
internalReference: 571080
---

## Summary



It is important to note that the **Plans** section within the **Subscriptions module** is relatively new and is still in the **Beta** stage.

Within the **Plans** options for subscriptions, we have a functionality that allows you to import from an Excel spreadsheet all those SKUs that you want to associate with a specific plan.

For the import, the indicated base spreadsheet shows two columns with examples of the values that must be placed. In the first column the ID of the SKU and in the second the value defines whether or not this SKU is associated. Here is an example of how it is displayed:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Order Management/subscription-plan-is-stuck-in-importing-after-uploading-the-skus-association-spreadsheet_1.png)

In this case, the problem occurs because **our service** **currently only accepts a numerical value in the "associate" column**, that is, only **0 for false** or **1 for true**. When uploading the spreadsheet with text in the "**associate**" column, the plan will remain in the "**importing**" state indefinitely, which currently blocks the ability to edit or upload a new spreadsheet.



## Simulation



To simulate it, you can:

1. Upload the spreadsheet with the indicated text ("**TRUE**") in the "**associate**" column.
2. Validate the status of the plan that will remain "**importing**".
3. You can’t be able to edit the specific Plan.



## Workaround



To avoid this behavior, it is recommended to **upload the spreadsheet with the numerical format indicated (0 or 1) in the "associate" column** and ensure that this cell is in fact in number format. Here is an example:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Order Management/subscription-plan-is-stuck-in-importing-after-uploading-the-skus-association-spreadsheet_2.png)

In case the plan is "blocked", the idea is that for the moment a ticket is opened for the **Order Management** team, to try to "unblock" the specific Plan.

