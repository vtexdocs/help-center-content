---
title: 'Information available within the order'
id: tutorials_197
status: DRAFT
createdAt: 2017-04-27T22:14:25.383Z
updatedAt: 2023-03-23T15:47:38.588Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:47.961Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: information-within-the-order
locale: en
legacySlug: information-within-the-order
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

When a customer clicks the __Buy__ button on your store, an order is automatically opened in Orders Management - the VTEX module responsible for displaying and managing your orders. In Orders Management various informations are displayed and available for consultation. To facilitate your understanding, see the detail of each area:

## Customer data

The information displayed on the card, CPF for customer and CNPJ for company, as well as e-mail and telephone, are your way of identifying that customer.

The __Resend last email__ button, when triggered, resends the last communication made with the client via email. To make sure which email you are dealing with, you can view all of them in the __Timeline__ area at the bottom of the page.

In VTEX platform there's also a feature that unifies email communication with clients, the [Conversation Tracker](/pt/tutorial/conversation-tracker).

All customer data is entered at the time of order closure and can not be changed here. To view and manage this data, you can access Master Data. 

## Total value

Displays details of order values such as discounts, freight, product value, coupon, etc.

## Sales and Marketing

This part shows the benefits that were applied on the order value as well as the partnerships used for that order.

## Order status

This is the current status of the order. At each time, it may be onw of the following:

- Waiting for Seller Confirmation
- Processing
- Payment Pendind
- Waiting for order authorization
- Payment approved
- Payment denied
- Cancellation request
- Waiting for Seller decision
- Authorize Fulfillment
- Error creating order
- Window to Cancellation
- Ready for handling
- Start handling
- Handling Shipping
- Requested cancellation
- Invoice cancellation denied
- Verify Shipping
- Invoiced
- Cancel
- Cancelled

## Order flow

The order flow can be displayed through Diagrams or Interactions. The first view is recommended for you to have a view of the whole, and the second, when you need to find some specific error or detail.

To see all the steps of the order flow, check the article that explain the [order flow on the OMS](/en/tutorial/order-flow-on-the-oms).

## Items not in package

This section displays information related to the items contained in the order made by the customer. You may modify the invoice by changing these items. However, we recommend that you redouble your attention when doing this.

The __Invoice Package__ button sends the invoice of the purchase to the customer's email and should be activated only when the entire transaction is already approved.

The **Delivery address** card contains information related to the delivery of the order. This information was entered at the time of order closure and can not be changed. Like customer data, delivery data can be viewed and managed in the Master Data. 

## Payment

Summary of information related to the order payment.

## Timeline

Displays the email history sent to the customer during the purchase process.

### Related articles

- [What is Master Data?](/es/tutorial/what-is-master-data)
- [Order flow on the OMS](/en/tutorial/order-flow-on-the-oms)
- [From/to for order status](/en/tutorial/order-status-table-oms--frequentlyAskedQuestions_773)
