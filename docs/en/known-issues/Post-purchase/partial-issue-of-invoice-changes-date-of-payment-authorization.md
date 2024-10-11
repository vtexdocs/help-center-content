---
title: 'Partial issue of Invoice changes date of payment authorization'
id: 3kjzXJNFj2miIeIMAW6uW2
status: PUBLISHED
createdAt: 2017-04-06T17:10:46.252Z
updatedAt: 2022-12-22T14:50:45.991Z
publishedAt: 2022-12-22T14:50:45.991Z
firstPublishedAt: 2017-05-26T19:37:55.792Z
contentType: knownIssue
productTeam: Post-purchase
author: D0eIlynYFqaWQOMM6mmY6
tag: Order Management
slugEN: partial-issue-of-invoice-changes-date-of-payment-authorization
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Our Workflow system is currently used by itself but also by Checkout. This creates competition within the system and in some situations - we are talking about very few - some order data is not registered. It is not that it doesn't exist, but along the stream it has been ignored and/or replaced. We are talking about the status `payment-approved`.

With the issue of the Partial Note, OMS needs to consult the Workflow to see if the invoice's total value has been reached. The order then returns to `payment-approved` status but Workflow has lost the first status - the one generated on the payment approval date on the PCI (you can check the transaction). This last date is then entered, thus changing the date field of the payment approval.

In the event that this change is made after the month in which the payment was originally approved, the application will be included within the authorization period of the new month. The customer ends up being charged again for this order, since the revenue considered for determining the value of the invoice depends on the Authorization Date of the orders.

## Simulation

- Access the OMS module
- Place the Authorization Date filter of the month  you want to consult (where the partial invoice issue occurred)
- Search by the order code and note the value (1)
- Find it
- Place the Authorization Date filter for the month in which the request was actually approved
- Check the value of income (2)
- Access the Billing module
- Enter details of the invoice for the month in which the order was actually approved
- Check the amount of revenue considered as consumption (3)
- Get the difference between values 2 and 3 (4)
- Check if value (1) and value (4) are equal
- If yes, the order is being charged twice

## Workaround

Ideally, this partial invoice issue should not be made in the month following the approval of the payment. In case it occurs, it's necessary to contact our financial team, so that the problem is verified and a discount is granted in the same amount that was charged in duplicate for the order.

