---
title: 'The transaction flow'
id: 1xjzgJZvqwaI1rfxLMCC3Y
status: PUBLISHED
createdAt: 2019-11-26T17:45:13.678Z
updatedAt: 2024-08-21T14:18:31.189Z
publishedAt: 2024-08-21T14:18:31.189Z
firstPublishedAt: 2019-11-26T18:08:32.132Z
contentType: trackArticle
productTeam: Financial
slugEN: the-transaction-flow
locale: en
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: payments
---

The path that money travels when it is exchanged for a product or service is what we call a __transaction__.

In a VTEX store, a transaction begins every time a user chooses a [payment condition](/en/tutorial/difference-between-payment-methods-and-payment-conditions) and completes the order. From there, the purchase data is sent to be validated by each member of the process.

Transactions performed by VTEX payments module go through various statuses, from the beginning of the authorization process through the settlement of the value and the conclusion of the transaction.

See below an example timeline with the transaction statuses.

![Transaction Flow](https://images.contentful.com/alneenqid6w5/4AvpkJnEN2ImKkIgQQoIKK/e031cc030d5e1da745fac51137c4d4b2/Transaction_Flow.jpg)

1. __Authorizing__: This is the first status of a Payments transaction. At this stage, Payments indicates that the process of sending information to an acquirer or to another gateway has begun.
2. __Authorized__: Upon the initiation of the authorization process, the acquirer or other gateway sends the transaction information to the issuing bank. The bank responds if the transaction should be authorized or not. If it denies the transaction, the payment is __canceled__. If it authorizes, the transaction status changes to __Authorized__.
3. __Analyzing Risk (optional)__: Upon the authorization by the issuing bank, the __anti-fraud__ system acts by analyzing the risk of the transaction. This step is optional. However, we recommend using an anti-fraud to verify your transactions.
4. __Risk Approved (optional)__: If the anti-fraud responds positively, the transaction receives the __risk approved__ status. If the anti-fraud identifies any evidence of fraud, the transaction is __canceled__.
5. __Approved__: This status indicates that the transaction has gone through all possible verifications. It was authorized by the issuing bank and approved by the anti-fraud system. Thus, the transaction gains the __approved__ status.
6. __Settlement of $__: This status indicates that the __settlement__ process of a specific ammount will start. It's important to note that, at this stage, the value __has not been settled yet__. There is only a warning that the process of settling this value will be carried out in the next status.
7. __Settling__: In this status, the __settlement__ attempt actually starts. The systems responsible for that begin the process by which the ammount of the transaction will be settled.
8. __Settled__: When the transaction reaches this status, it means that the ammount was __successfully settled__. From here, the __connector__ becomes entirely responsible for the flow. It is up to the retailer to monitor if the payment amount will be properly deposited in his account.
9. __Finished__: The transaction reaches the __finished__ status when the invoice with the payment ammount is issued and linked to the order in the OMS. You should note that even after the settlement finishes successfully, [it's necessary to include the invoice in the order](/en/faq/why-has-a-transaction-been-successfully-captured-but-not-finalized-in-the-pci-gateway--5kOSpUYvTyuUKOOws2A8Me).
