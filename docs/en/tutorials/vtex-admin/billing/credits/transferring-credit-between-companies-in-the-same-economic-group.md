---
title: 'Transferring credit between companies in the same economic group'
createdAt: '2026-11-24T00:00:00.000Z'
updatedAt: '2026-11-24T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: transferring-credit-between-companies-in-the-same-economic-group
locale: en
subcategoryId: credit-wallet
seeAlso:
  - "/en/docs/tutorials/how-credit-transfer-between-companies-works"
  - "/en/docs/tutorials/credit-wallet"
  - "/en/docs/tutorials/checking-credit-wallet"
---

You can transfer part of the balance of the [credit wallet](/en/docs/tutorials/credit-wallet) of a company to another company in the same economic group on the **Credits** page in the VTEX Admin.

This is useful when some companies in the group have surplus credit and others use more [Master Data](/en/docs/tutorials/master-data) than the credit they have available. To understand the difference between account, company, and economic group, see [Credit wallet](/en/docs/tutorials/credit-wallet).

In this article, you'll learn how to transfer credit between companies and how to find the destination company by account name. To understand the transfer rules and the deadline to offset the invoice, see [How credit transfer between companies works](/en/docs/tutorials/how-credit-transfer-between-companies-works).

## Before you begin

Before starting the transfer, make sure you meet the following requirements:

- **Access to the Credits page:** You must have the [Finance](/en/docs/tutorials/predefined-roles#finance) role, the [Finance - Full access](/en/docs/tutorials/predefined-roles#finance-full-access) role, or the `View Credits` resource from [Billing](/en/docs/tutorials/predefined-roles#billing) linked to your role.
- **Permission to transfer:** You must have the `Transfer Credit` resource from Billing linked to your role and enabled in the source company. This requirement applies to users (email) and to API keys (`appKey`).

## Instructions

Here's an overview of the steps:

- [Transferring credit](#transferring-credit)
- [Finding the destination company by account name](#finding-the-destination-company-by-account-name)

### Transferring credit

To transfer credit from the source company to another company in the economic group, follow these instructions:

1. In the VTEX Admin, click your avatar — identified by your email initial — in the top right corner of the screen.
2. Click **Billing > Credits**.
3. Click `Transfer credit`.
4. In the modal that opens, complete the fields:
   - **Source:** Shows the source company with its available balance. You can't change this field.
   - **Destination:** From the list, select the company that will receive the credit. The list shows only companies in the same economic group, with the name saved in Billing. If two companies have the same name, the ID appears next to the name.
   - **Or find the company by account name:** If you don't know the company name but know the name of one of its accounts, enter the account name in this field. The screen shows which company the account belongs to, and that company becomes the transfer destination. If the account belongs to the source company, the screen shows a message that it's the same company and doesn't let you continue. If no account in the economic group matches the search, the screen shows a message that there are no results.

   > ℹ️ Credit belongs to the company, not to the account. For this reason, the transfer always goes to the company as a whole, even when you find it by account name.

   - **Amount:** Enter the amount to transfer. It must be greater than zero and up to the available balance of the source company.
5. Click `Continue`.
6. Review the transfer summary, which shows the source, the destination, the amount, and the new balance of the source company.

   > ⚠️ You can't undo the transfer after confirming it. Before confirming, check the destination company and the amount.

7. Click `Yes, transfer {amount}` to confirm the transfer.

   > ℹ️ The button shows the amount you entered. For example, if you entered **USD 500**, the button shows `Yes, transfer USD 500`.

The transfer is only sent after you confirm it. When the transfer is complete, the modal shows the transfer ID, the destination company, and the amount transferred. When you close the modal, the system updates the **Credit statement** and the balance of the source company.

> ℹ️ The transferred credit only offsets the invoice if it reaches the destination company before Billing generates the invoice on the first day of the following month. Learn more in [Deadline to offset the invoice](/en/docs/tutorials/how-credit-transfer-between-companies-works#deadline-to-offset-the-invoice).

## Common errors

If the system doesn't complete the transfer, the screen shows a message with the reason. These are the possible cases:

- **Insufficient balance:** The amount is greater than the available balance of the source company. Enter a smaller amount.
- **Destination company outside the economic group or that doesn't exist:** Select another company from the **Destination** list.
- **Invalid amount:** Enter an amount greater than zero.
- **Missing permission:** Check whether your role has the `Transfer Credit` resource enabled in the source company.
- **Duplicate transfer:** The message describes the transfer that was already made. Check the **Credit statement** before trying again.
