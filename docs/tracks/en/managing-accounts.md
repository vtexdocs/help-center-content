---
title: Managing Customer Credit accounts
id: 4eknoeqaj6EGC20amsm6Gc
status: PUBLISHED
createdAt: 2018-11-06T21:15:25.330Z
updatedAt: 2023-05-12T12:21:21.583Z
publishedAt: 2023-05-12T12:21:21.583Z
firstPublishedAt: 2018-11-07T17:10:45.883Z
contentType: trackArticle
productTeam: Financial
slug: managing-accounts
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugEN: customer-credit-getting-started
---

The Account Details screen shows everything you need to know about an account and its settings.

## Credit limit

The credit limit indicates the maximum value of outstanding invoices that a client can have at any given time. Establishing it is required, and the account’s super Admin can change this value as many times as he/she wants.

Also, remember that changes to the credit limit are updated in the system within minutes.

## Invoices 

Invoices are documents generated when customers conclude purchases using Customer Credit as a payment method.

In cases of installment purchases, the number of invoices is the same as the number of installments. For example, if the customer has chosen to pay the order in 10 installments, the system will generate 10 invoices related to that same order.

Regardless of the payment method, all invoices in the system can be viewed and managed through the Admin and, like the accounts, can also be exported and edited in bulk.

### Invoice status
Invoices have four possible statuses:

- Open;
- Paid;
- Overdue;
- Canceled.

When an invoice is created, its status is "open" and, depending on actions taken in the Admin or API calls, it can transition to “paid” or “canceled”.

#### Invoice settlement
The store controls the way in which invoices will be settled.

One of the invoice settlement options is to generate a payment link. In this case, once it is configured, the customer will see a "Pay" button next to the invoice on the My Credits screen, which will redirect him to the payment link.

In addition, payment links can be added via CSV file through the Admin or via API.

After receiving payment for an invoice, mark it as paid on our system. This can be done in three ways: individually, in bulk or via API.

#### Individual settlement
Settling an invoice through Admin is simple:

1. Access the __Admin__;
2. Click on the __Customer Credit__ module;
3. Then click on the __Invoices__ section;
4. Select the __invoice__ you want to edit;
5. Click on the __"Mark as paid"__ button.

This way, the invoice status will change to “paid”.

#### Bulk settlement
If your account has a lot of outstanding invoices, it is not feasible to change each status individually.

For that, you can use the bulk settlement feature, a process very similar to the accounts bulk update. The principle is the same: importing a CSV file with the new data to the Admin.

In this case, you must change the values in the status column from "open" to "paid" and save the changes.

Then follow the step by step below:

1. Access the __Admin__;
2. Click on the __Customer Credit__ module;
3. Click on the __Invoices__ section;
4. Then click on the __“Bulk update”__ button;
5. Click on the __“Choose file”__ button;
6. Select the desired __CSV file__.

Wait for the spreadsheet to be uploaded and the invoices will be settled all at once.

#### Settlement via API
To settle an invoice through an API, you can use the `PUT Change Invoice` [endpoint](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId- "endpoint"). This API can also be used to change the invoice’s status.

Fill in the body with the following information:

```json
{
"status": "string [Opened | Cancelled | Paid] (optional)", "observation": "string (optional)",
"paymentLink": "string (URL) (optional)"
}
```

For more details, check out our [technical documentation on Customer Credit](https://developers.vtex.com/docs/guides/customer-credit-api-overview "technical documentation on Customer Credit").

## Additional dependents
According to your business rules, you can share the account’s credit limit with other users.

This functionality allows you to add new dependents to an account. They will share the available credit to pay for purchases on SmartCheckout.

To add new dependents to an account, follow the step by step below:

1. Access the __Admin__;
2. Click on the __Customer Credit__ module;
3. Then click on the __Accounts__ section;
4. Select the __account__ you want to edit;
5. At the bottom of the page, click on the __“New”__ button;
6. Fill in the blank field with the new dependent’s __email__;
7. Click on the __Confirm__ button.

The newly added dependent will then appear in the box of additional dependents for that account.
