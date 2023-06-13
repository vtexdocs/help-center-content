---
title: Order tracking via JadLog returns delivery confirmation without the order being delivered
id: 6tu2YbryI8gkiWiE0Ioe2g
status: PUBLISHED
createdAt: 2017-10-02T19:59:26.648Z
updatedAt: 2022-12-22T14:52:58.644Z
publishedAt: 2022-12-22T14:52:58.644Z
firstPublishedAt: 2017-10-02T20:37:26.997Z
contentType: knownIssue
productTeam: Post-purchase
author: 1nsS1IgG3WWQ4cA8e2qsw6
tag: Order Management
slug: order-tracking-via-jadlog-returns-delivery-confirmation-without-the-order-being-delivered
kiStatus: Backlog
internalReference: 
---

## Summary

JadLog order tracking is returning the delivery confirmation to VTEX without the order actually being placed. That is, when we receive the information that the delivery was finished we automatically send customers the confirmation email, even if the product hasn't reached the delivery address.

## Simulation

Upon completion of the order the tracking emails are sent to the client. However, with the error of information exchange, you may note that __the delivery confirmation emails are sent at the same time as order sending emails (or even before)__.

Example:

- 10/02 3:21:57 - Order is made
- 10/02 3:22:02 - Order is paid and its payment is approved
- 10/02 3:22:31 - Order delivery confirmation email
- 10/02 3:22:54 - Email cnfirming that the products were sent

## Workaround

For now, the best option is to inactivate tracking via JadLog.

