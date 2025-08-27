---
title: 'Seeing order details'
id: 204AjAQseJe8RLUi8GAhiC
status: PUBLISHED
createdAt: 2019-11-14T15:12:10.952Z
updatedAt: 2023-11-08T14:56:01.508Z
publishedAt: 2023-11-08T14:56:01.508Z
firstPublishedAt: 2019-11-18T12:20:18.851Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: seeing-order-details
locale: en
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: orders
order: 4
---

In the Admin side menu, within the Orders area, is the __Orders__ section. Clicking there you will find the option __All orders__, where you can see the store's order list.

In the default view of this screen, all store orders are listed starting from the most recent ones. You can change the sorting by clicking on the column names, as well as fetch orders using specific data, and also export this data.

In addition, the search offers a very flexible filter, which we will explain in detail in the [next article](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/3cjk655ZzDGICH4rVfgu7O).

To further explore the order list, see the [Order List Overview article](https://help.vtex.com/en/tutorial/orders-list--tutorials_200).

Besides searching for orders in **Orders > All Orders**, you can search for orders from any page in the VTEX Admin using the global search bar at the top bar. By default, the search is configured as `Pages`. To search for an order, click on the bar, select `Orders`, and use one of the following criteria:

- Order ID
- Customer name
- Customer email
- Customer document

## Viewing the Details of an Order

Clicking on an order takes you to the [order details](https://help.vtex.com/en/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl) screen, where you can review a range of order information and perform some actions, such as:
- Resend the last email to the customer.
- Manually cancel the order.
- Invoice the order items.
- Manually approve the payment.

Here's how to interpret the information in each area of the order details screen.

### Client's data

The ID information displayed on the card, as well as email and telephone, are your way of identifying the customer.

The __Resend last email__ button, when pressed, resends the last communication made to the customer by email. To make sure which email address it is, you can view them all in the Timeline area at the bottom of the page.

In VTEX platform there is also a feature to unify all email communication with the client: the Conversation Tracker.

All customer data is entered at the time of closing the order and cannot be changed here. To view and manage this data, you can access Master Data.

> ℹ️ If your store only acts as a seller of an order, the customer's email will not be displayed. We understand that the customer's relationship is with the marketplace, so it is not advisable to share your data with the seller without prior consent.

### Total Value

Here you can find the details of of the order values such as discounts, shipping, product value, coupon, etc.

### Sales and Marketing

This card displays promotions that were applied to the order value as well as the partnerships used for that order.

### Order status

This is the current order status, which indicates the point at which the order is in the [order flow](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8).

### Flow

The order flow can be viewed through a __Diagram__ or through __Interactions__. For a simpler overview, we recommend using the Diagram. Interactions are primarily useful for interpreting errors or finding specific flow details.

### Items not in package

This area displays information related to the order items. By clicking on the three dots, you can modify the invoice and take some actions related to the order. However, it's recommended that you redouble your attention when performing them.

The __Invoice package__ button sends the purchase tax documentation to the customer's email and should only be triggered when the entire transaction has already been approved.

The __Delivery address__ card shows the information regarding the order delivery.

This information was entered at the time of closing the order and cannot be changed. Like customer data, delivery data can be viewed and managed in Master Data.

### Payment

This area shows a summary of the order payment information.

### Timeline

This section illustrates the entire process of transitioning the status of an order, including the payment method used and emails exchanged with the customer.

One feature that may be useful for your operation is the __Comments__: You can enter comments on the Timeline, keeping them visible only to your store, never to the customer.
