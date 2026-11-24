---
title: 'How credit transfer between companies works'
createdAt: '2026-11-19T00:00:00.000Z'
updatedAt: '2026-11-19T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: how-credit-transfer-between-companies-works
locale: en
subcategoryId: credit-wallet
seeAlso:
  - "/en/docs/tutorials/transferring-credit-between-companies-in-the-same-economic-group"
  - "/en/docs/tutorials/credit-wallet"
  - "/en/docs/tutorials/checking-credit-wallet"
---

Credit transfer lets a company send part of the balance of its [credit wallet](/en/docs/tutorials/credit-wallet) to another company in the same economic group. This way, the group makes better use of the available credit.

Each company generates and uses its own credit from the credit wallet, which offsets the [Master Data](/en/docs/tutorials/master-data) charges of that same company. In many economic groups, some companies generate surplus credit while others use more Master Data than the credit they have available. Credit transfer solves this imbalance.

Learn when you can transfer credit, which rules apply, and how a transfer affects the invoice and the credit statement. To make a transfer, see [Transferring credit between companies in the same economic group](/en/docs/tutorials/transferring-credit-between-companies-in-the-same-economic-group).

## Transfer rules

Credit belongs to the company, not to the account. For this reason, a transfer always happens between companies. To understand how accounts, companies, and economic groups relate to each other, see [Credit wallet](/en/docs/tutorials/credit-wallet).

You choose the amount and don't need approval. However, you can only transfer between companies in the same economic group, and you can't reverse the transfer. The following table presents the rules that apply to every credit transfer:

| Aspect | How it works |
| --- | --- |
| Allowed companies | Only between companies in the same economic group. You can't transfer between different groups. |
| Group with a single company | There's no destination company, so you can't transfer credit. |
| Source and destination | The **source company** sends the credit and loses that amount from its balance. This is the company that owns the account you're accessing in the VTEX Admin. The **destination company** is the one that receives the credit. |
| Transfer destination | Always a company, never an account. An account name is only used to find the company it belongs to. |
| Who starts the transfer | Only the source company. The destination company can't withdraw credit from another company. |
| Balance visibility | The source company can't see the balance of the destination company, and vice versa. |
| Amount | You choose how much to transfer. It can be any amount greater than zero, up to the available balance of the source company. |
| Approval | There's no approval flow. The transfer is completed when you confirm it. |
| Reversal | Transfers can't be reversed. To get the balance back, the destination company must make a new transfer. |
| Chained transfers | Allowed. For example, company A transfers to company B, and company B transfers to company C. |
| Expiration of received credit | Follows the expiration policy of the destination company. Each company configures its own policy, not each credit. |
| Effect on group credit | The transfer doesn't create a shared credit pool for the economic group. It also doesn't change how credit is generated or how VTEX applies credit to Master Data charges. To learn how the system calculates and uses credit, see [Credit wallet](/en/docs/tutorials/credit-wallet). |

> ⚠️ A transfer can't be undone.

## Deadline to offset the invoice

Credit appears on the **Credits** page as customers of the company make payments throughout the month. You can transfer it as soon as it appears.

VTEX generates the invoice on the first day of the following month, and the credit the company has at that moment offsets the Master Data charges. For this reason:

- A transfer only offsets the invoice if the credit reaches the destination company before VTEX generates the invoice.
- A later transfer doesn't change an invoice that VTEX has already generated. It applies from the next invoice.

> ℹ️ When customers make payments in the last days of the month, you may not have enough time to transfer the credit before VTEX generates the invoice.

## How the transfer appears in the credit statement

Each transfer creates two entries in the **Credit statement**, one in each company:

- **Source company:** Shows the transfer sent to the destination company, with the amount, date, and who made it.
- **Destination company:** Shows the transfer received from the source company, with the amount, date, and who made it. When an integration makes the transfer, the statement shows the API key (`appKey`) instead of the email.

Each company only sees its own entry. To learn how to check the credit statement, see [Checking credit wallet](/en/docs/tutorials/checking-credit-wallet).
