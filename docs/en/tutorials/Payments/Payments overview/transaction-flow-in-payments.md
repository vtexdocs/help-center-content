---
title: 'Transaction flow in Payments'
id: Er2oWmqPIWWyeIy4IoEoQ
status: PUBLISHED
createdAt: 2019-01-24T21:42:55.722Z
updatedAt: 2024-08-22T13:13:32.815Z
publishedAt: 2024-08-22T13:13:32.815Z
firstPublishedAt: 2019-01-24T21:42:56.197Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: transaction-flow-in-payments
locale: en
legacySlug: transaction-flow-in-pci-gateway
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Transactions performed by VTEX Payments go through a variety of statuses, from the beginning of the authorization process, through settling, to completion of the transaction. The purpose of this article is to explain each of these different stages of a transaction.

See below an example timeline with the transaction statuses.

![Transaction Flow](//images.contentful.com/alneenqid6w5/4AvpkJnEN2ImKkIgQQoIKK/e031cc030d5e1da745fac51137c4d4b2/Transaction_Flow.jpg)

1. __Authorizing__: This is the first status of a Payments transaction. At this stage, Payments indicates that the process of sending information to an acquirer or to another gateway has begun.
2. __Authorized__: Upon initiation of the authorization process, the acquirer or other gateway sends the transaction information to the issuing bank. The bank responds whether or not the transaction should be authorized. If it denies the transaction, the payment is __canceled__. If it authorizes, the transaction status changes to __Authorized__.
3. __Analyzing Risk (optional)__: Upon authorization by the issuing bank, the __anti-fraud__ system acts by analyzing the risk of the transaction. This step is optional. However, we recommend using an anti-fraud to verify your transactions.
4. __Risk Approved (optional)__: If the anti-fraud responds positively, the transaction goes to the __risk approved__ status. If the anti-fraud identifies any evidence of fraud, the transaction is __canceled__.
5. __Approved__: This status indicates that the transaction has passed all possible checks. It was authorized by the issuing bank and was approved by the anti-fraud system. With that, the transaction gains the status of __approved__.
6. __Settlement of $__: This status indicates that the __settlement__ process of a specific ammount will be started. It's important to note that, at this stage, the value __has not yet been settled__. What exists is a warning that the process of settling this value will be carried out in the next status.
7. __Settling__: In this status, the __settlement__ attempt actually starts. The systems responsible for that begin the process by which the ammount of the transaction is settled.
8. __Settled__: When the transaction reaches this status, it means that __the ammount was successfully settled__. Now, the payment has already been sent to the store's account.
9. __Finished__: The transaction reaches the __finished__ status when the invoice with the payment ammount is issued and linked to the order in the OMS. You should note that even after the settlement finishes successfully, [it's necessary to include the invoice in the order](https://help.vtex.com/en/faq/why-has-a-transaction-been-successfully-captured-but-not-finalized-in-the-pci-gateway).
