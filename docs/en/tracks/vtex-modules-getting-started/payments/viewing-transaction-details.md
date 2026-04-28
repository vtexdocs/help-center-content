---
title: 'Viewing transaction details'
id: 3Nt40DMEWkvhlpaL5PlBy
status: PUBLISHED
createdAt: 2019-11-26T17:51:49.079Z
updatedAt: 2023-03-30T15:01:36.099Z
publishedAt: 2023-03-30T15:01:36.099Z
firstPublishedAt: 2019-11-26T20:29:18.064Z
contentType: trackArticle
productTeam: Financial
slugEN: viewing-transaction-details
locale: en
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: payments
order: 7
---

Every transaction that is made in a VTEX store is recorded in the **Orders** module. To see the details of all of these transactions, do the following:

1. In the VTEX Admin, go to **Orders** > **Transactions**, or type **Transactions** in the search bar at the top of the page.

2. You will see then the list of transactions, where you can search for specific ones. To filter, click on the funnel icon. You can filter by:
- Channel
- Transaction Start Date
- Authorization Date
- Commitment Date
- Cancellation Date
- Payment System
- Installments number
- Transaction Status (examples: `cancelled`, `authorizing`, `approved` or `finished`)

Once you find the wanted transaction, just click on it.

In the transaction screen, you will find two boxes containing the main information concerning the payment of the order. This information is updated as the transaction proceeds in its flow.

On the right side of the screen there is a box containing:
- The total order amount
- Client's data
- The order ID
- The anti-fraud identification number (in case it is included in the operation)

In the top bar there is a link to the order details page within the **Orders Management** module.

In the left part of the screen you will find the information related to the payment method of the order.

For transactions made with credit cards, each payment (in case the order was completed using two cards) has a VTEX-generated ID. In addition, the acquirer also creates an identifier number, called __Transaction ID (TID)__. The TID is specific to each card, so if an order is paid with two cards, there will be two transactions and thus two TIDs.

Just below is located the __Transaction Events__ timeline, one of the most useful parts of this screen.

All communications between VTEX and the affiliates - anti-fraud, gateways and acquirers - are recorded here, including success and error messages and their respective codes.

In this timeline you can see all the transaction status changes and the exact moment they occurred, and check for possible problems.

Reading the description of a cancellation event you can find out, for example, who was the author of that cancellation, or you might find that the connector was the one who denied payment authorization.

Read the __Viewing the order's details in Orders__ article for [examples of events recorded in this timeline](/en/docs/tutorials/how-to-view-the-orders-details).

