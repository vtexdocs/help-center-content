---
title: 'Checking for errors or problems in a transaction'
id: 3QecZEdmzumGKe8WGmeI8a
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.709Z
updatedAt: 2023-03-29T01:18:23.081Z
publishedAt: 2023-03-29T01:18:23.081Z
firstPublishedAt: 2019-01-24T21:38:43.264Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: checking-for-errors-or-problems-in-a-transaction
legacySlug: checking-for-errors-or-problems-in-a-transaction
locale: en
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

In order to solve a possible problem involving Payments transactions, the first step is to __check the transaction log__. The logs are the records of interactions between VTEX Payments module and our partner systems (other gateways, acquirers, anti-fraud, and so on). [Click here](/en/tutorial/how-to-view-the-orders-details/) to learn how to search for a transaction on Payments. Below, we'll take a look at how to analyze the transaction details in order to check if any errors are happening.

The steps of a transaction are logged in a timeline, with the most recent interactions being displayed at the top of the screen and the oldest interactions at the bottom.

VTEX gateway can communicate with acquirers, sub-acquirers, anti-frauds and other gateways. The __status changes in the transaction__ and the __partner's reply messages__ are displayed in boxes on the transaction details screen.

> ℹ️ You can [click here](/en/faq/credit-card-basic-payment-flow) to find out how the flow of a credit card transaction works. Also visit [our article](/en/faq/registered-ticket-flow) with the basic scheme of a bank slip transaction.

## Check the transaction status

To check the __current status__ of a transaction, search the timeline for the *box at the top of the screen with a green circle on the left side*. [In this article](/en/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ?locale=en "In this article"), there's an explanation of each status of a successful transaction. If the transaction has a problem, its final status will be __Cancelled__.

## Check the partner's reply messages

A transaction *changes its status* after VTEX receives a notification from the partner's system. To check which responses are sent by the partner, just look for the boxes that have *the name of the partner (Cielo V3, eRedev3, GetNet, Sitef, ClearSale etc.)*. These are the answers that tell us what is really happening with the transaction.

Many times cancellations happen because the issuing bank did not authorize the transaction or because the anti-fraud blocked the payment.

At other times, a communication failure may occur between VTEX and the partner. There are active security features, such as automatic retries, but human errors can also exist. For example, the partner can upgrade something on their platform and not in their integration with VTEX. Cases like this generate logs or keep the order in a loop.

These situations are usually indicated with a `.` in the partner's response. In such cases, VTEX is waiting for the partner's response so that the transaction can move to the next status. In such scenarios, we recommend contacting your partner so they can resolve this communication problem.

## Contact the partner

If you find in the Payments logs an error in the response of some partner, our recommendation is to get in touch with them so the problem is solved. [Search the TID](/en/faq/how-do-i-find-the-order-nsu-and-tid) of the transaction. This is the number that must be used to identify the transaction in the partner's system.
