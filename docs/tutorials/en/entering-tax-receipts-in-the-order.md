---
title: 'Entering tax receipts in the order'
id: tutorials_193
status: DRAFT
createdAt: 2017-04-27T22:14:57.365Z
updatedAt: 2023-03-29T23:52:24.585Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:47.395Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: entering-tax-receipts-in-the-order
locale: en
legacySlug: entering-tax-receipts-in-the-order
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Entering the tax receipt in the order is a mandatory step so that the status becomes __Invoiced__. You can do this using the __Orders management__ module in the Admin or [using the Orders API](https://developers.vtex.com/vtex-developer-docs/reference/invoice "Invoice").

To do this manually using the **Orders management**,  click on the `Invoice package` button, as shown in the image below.

![faturar-pedido-ex en](https://images.ctfassets.net/alneenqid6w5/3xGII9E1x6Iogai8qYyWYw/d50b5a145891ac1766882dabdf35a371/ex_1_en.png)

Once the tax receipt is entered with the total amount of the order, the status changes to **Invoiced**.

You may also enter a partial tax receipt, which happens when several tax receipts are required to arrive at the total amount of the purchase. 

>ℹ️ Only after the total amount of the order has been reached will the status be changed to **Invoiced**.

The tax receipt requires attention to the following points: 

- **Invoice Number**: there must be a single number per tax receipt per order, since if two tax receipts with the same number are entered, the system will interpret this as a different receipt.
- **Tracking Number**: this number, together with the tracking URL, enables the customer to track delivery through e-mails that are sent every time the tracking is changed.
- **Invoice Key:** is the access key for checking the electronic tax receipt on the internet. It can only be filled out in the case of electronic tax receipts.

In other words, when the tracking URL and code are entered, every time the delivery is updated the customer will receive an e-mail notifying him of the delivery status.

The **Conversation Tracker** works only if information is inserted in those fields. In case you don´t have them, insert any value so to activate the notification system.

>❗ It’s possible to add more than one invoice to the order; however, the total sum of the invoices amounts must match the total amount of the order.
