---
title: 'How to configure Subscriptions'
id: 5BprgE9RwKPcfBMYoaWZu4
status: ARCHIVED
createdAt: 2019-01-28T19:22:39.047Z
updatedAt: 2021-04-30T14:37:54.626Z
publishedAt: 
firstPublishedAt: 2019-01-28T19:23:44.020Z
contentType: tutorial
productTeam: Post-purchase
author: authors_61
slugEN: configuring-order-recurrence
locale: en
legacySlug: configuring-order-recurrence
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

A recurrent order is an excellent opportunity to increase the revenues of your store by increasing customer loyalty, letting automatic orders be created, which are scheduled according to the customer’s needs.

The purpose of this article is to explain, step by step, how to configure the recurrence system.

Apart from the __Credit Card__ payment method, your store only needs a “special attachment” to support recurrent orders.

## How to configure the attachment

1. Access __Catalog__
2. Click on __Attachments__
3. In **Services and SKUs** tab, click on __New Attachment__
4. Register the attachment __Recurrence__
5. Mark the __Status__ flag and save the attachment
6. After its creation, in the same page, click on the __Change__ button and edit the attachment with the __Key name__ = "Period". Then set the __Permitted Values__ according to the available frequencies

### Available values

Recurring requests are available in values that can be:

- Daily
- Weekly
- Biweekly
- Monthly
- Bimonthly
- Quarterly
- Yearly

## How to configure a product for recurrence

1. Still in the **Catalog**, access **Products and SKU**
2. Select the **SKU** you want to configure for recurrence
3. Click on the tab __Advanced Settings__
4. Associate the **Recurrence attachment** and click on **Save**

## How to generate a recurrent order

When adding a product configured for recurrence at checkout, the customer selects the frequency of items to be received recurrently and closes the order normally, selecting the payment method **Credit Card**.

_The recurrence will only be activated if the payment method is Credit Card._

After the period of time selected, the system automatically generates the order. After payment is approved, the recurrence will be activated.

*The store owner must contact the acquirer to enable recurring payments*

## Payment method for recurrent orders

Recurrent orders must be paid for by credit card.
It will be possible to use __any gateway that accepts to transact without CVV code__. You need to contact your payment gateway to ensure it can make transactions without CVV.

[More information on how to configure a payment gateway for your store.](/en/tutorial/pci-gateway-overview/)

## E-mails for recurrent order transactions

In the **Message Center** you can configure emails for recurrence.

| Recorrência – New     | When a recurrence is created     |
| ---------- | ---------- |
| Recorrência – Next Order       | Reminder for the next order       |
| Recorrência – Cancel	       | When a recurrence is cancelled (removed)       |
| Recorrência – Error	       | When there is an error in closing the order\*       |
| Recorrência – Stop	       | When a recurrence is “frozen”       |
| Recorrência – Approved	       | When it is necessary to revise the capture of a payment       |
| Recorrência – Edit	       | When a recurrence is modified (item added/removed)       |
| Recorrência – Item Unavailable	       | When an item is unavailable at the time of generating a recurrent order       |

[More information on how to configure email templates for transactions on the VTEX platform.](http://help.vtex.com/tutorial/conhecendo-o-message-center/ "More information on how to configure email templates for transactions on the VTEX platform.")

## How to view the signatures for a product recurrence

The signatures contracted are available on **Orders Management**, on the tab **Subscriptions**.

The recurrence will be generated after confirmation of payment for the order including the repeat product.
