---
title: "Why do I see several transactional emails repeated in an order?"
excerpt: "Repeated emails usually mean the ERP keeps resending an invoice that does not match the order total, so the status never becomes Invoiced."
id: frequentlyAskedQuestions_5310
status: PUBLISHED
createdAt: 2017-04-27T22:22:48.654Z
updatedAt: 2023-03-20T18:16:45.773Z
publishedAt: 2023-03-20T18:16:45.773Z
firstPublishedAt: 2017-04-27T23:02:45.541Z
contentType: frequentlyAskedQuestion
productTeam: Orders
author: authors_37
slugEN: why-do-i-see-several-transactional-emails-repeated-in-an-order
locale: en
legacySlug: why-do-i-see-several-transactional-emails-repeated-in-an-order-on-the-oms
---

In the VTEX Admin, go to **Orders > All orders** and open an order. On the order details page, the Timeline lists transactional emails related to that order. If several of the same emails are sent to the customer, check whether one of the following scenarios applies:

- Your ERP may be sending the tax receipt repeatedly.

   This can happen for several reasons. One example is when the tax receipt amount does not match the order total. In that case, the order status does not change to `Invoiced`. While the ERP still sees the order in `Preparing Delivery` (the status before Invoiced), it may keep sending the tax receipt.

   You can confirm this by clicking **View Interactions** and checking the actions performed by your ERP.

   The same behavior can occur when your ERP sends **Tracking** data.

- The customer's email server may fail to acknowledge that it received the message.

   If the SMTP server that sends transactional emails does not receive an OK from the destination server, it keeps resending the email from the **Orders** module.
