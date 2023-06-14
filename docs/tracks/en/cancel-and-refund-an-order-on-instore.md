---
title: 'Cancel and refund an order on VTEX Sales App'
id: UAahHrTwypk1HhoyyMd2W
status: PUBLISHED
createdAt: 2021-11-09T14:00:04.800Z
updatedAt: 2023-05-31T16:06:08.789Z
publishedAt: 2023-05-31T16:06:08.789Z
firstPublishedAt: 2021-11-09T14:09:59.855Z
contentType: trackArticle
productTeam: Shopping
slug: cancel-and-refund-an-order-on-instore
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: instore-using-the-app
---

When a customer requests the cancellation of an order placed through VTEX Sales App, the sales associate must follow the procedures described in this article.

## Scenario 1: the customer is no longer in the store

If the order was paid by **Direct Sales - Debit or Credit** and the customer is no longer in the physical store, meaning they cannot use their card in the terminal, the order must be canceled in **Orders** > **All Orders**, in the VTEX Admin. This can only be done by a user with [OMS - Full access profile](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access) by following the guidelines in the tutorial [How to cancel an order](https://help.vtex.com/en/tutorial/canceling-orders--tutorials_186).

In this case, the order will not be canceled immediately. The time range is determined by the acquirer and can take from 30 minutes to 24 hours.

## Scenario 2: the customer is in the store 

If the customer is in the store when requesting the cancellation, follow the steps below.

1. In the VTEX Sales App menu, click on <span id="svg-container"><svg alt="sprite-svg" xmlns="http://www.w3.org/2000/svg" style="width: 0px; height: 0px;"><symbol id="nc-bag-22" viewBox="0 0 16 16"><path fill="currentColor" d="M14 5.8c-.1-.5-.5-.8-1-.8h-1V4c0-2.2-1.8-4-4-4S4 1.8 4 4v1H3c-.5 0-.9.3-1 .8l-2 9c-.1.6.4 1.2 1 1.2h14c.6 0 1.1-.6 1-1.2l-2-9zM6 4c0-1.1.9-2 2-2s2 .9 2 2v1H6V4z"></path></symbol></svg><svg width="16" height="16" style="fill: rgb(125, 126, 128); color: rgb(125, 126, 128); vertical-align: middle;"><use xlink:href="#nc-bag-22"></use></svg></span> `Latest sales`.
2. In the order list, click on the order you want to cancel.
3. Click on `Cancel the whole sale` to cancel the entire order, or `Cancel sale of this package` to cancel only the items in a specific package.
4. In the confirmation screen, click on `Cancel the whole order` or `Cancel sale of this package` to proceed, depending on the option selected in the previous step.
5. Follow the specific instructions to refund the payment, according to the chosen payment method.

    * [Cash](#cash)
    * [Direct Sales - Debit or Credit](#direct-sales-debit-or-credit)

### Cash

If the canceled order was paid in cash, it must be manually refunded, which means the amount must be returned to the customer in cash.

After following the steps described in [Scenario 2](#scenario-2-the-customer-is-in-the-store), you will see a screen indicating that the **Cash** payment was refunded.

To return to the canceled order details page, click on the arrow <i class="fas fa-arrow-left"></i> at the top menu bar of VTEX Sales App.

### Direct Sales - Debit or Credit

In the case of orders paid by **Direct Sales - Debit or Credit** where the customer requests the cancellation while in the physical store, the payment must be manually refunded via the VTEX Sales App app.

After following the steps described in [Scenario 2](#scenario-2-the-customer-is-in-the-store) to cancel the order, you will see the list of payments for the order.

To refund a payment made by **Direct Sales - Debit or Credit**, follow the steps below.

1. Click on `Refund` to be redirected to the VTEX Payment app.
2. In the VTEX Payment app, wait for the following message: _Insira ou passe o cartão_ (Insert or swipe the card).
3. Insert the card used in the purchase in the same terminal where the payment was made.
4. Wait for the terminal to process the refund. When the payment terminal indicates that the refund was successful, remove the card from the terminal.
5. The VTEX Payment app will take you back to VTEX Sales App, where you will see a confirmation screen.
6. Click on `Select payments` to return to the list of payments for the order.
7. Repeat the procedure in case there are other payments for the order. Otherwise, to return to the canceled order details page, click on the arrow <i class="fas fa-arrow-left"></i> on the top menu bar of VTEX Sales App.

