---
title: 'Why do I see several transactional emails repeated in an order?'
id: frequentlyAskedQuestions_5310
status: PUBLISHED
createdAt: 2017-04-27T22:22:48.654Z
updatedAt: 2023-03-20T18:16:45.773Z
publishedAt: 2023-03-20T18:16:45.773Z
firstPublishedAt: 2017-04-27T23:02:45.541Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_37
slugEN: why-do-i-see-several-transactional-emails-repeated-in-an-order
locale: en
legacySlug: why-do-i-see-several-transactional-emails-repeated-in-an-order-on-the-oms
---

In the VTEX Admin, on **Orders > All orders**, by ckicking on an order, you will find the order's details page with a Time Line showing information about that order, where you can see the corresponding transactional emails. If you note that several transactional emails are repeatedly send to the end customer, verify whether one of the following scenarios is in play:

1) Your ERP may be repeatedly sending the tax receipt.

This can happen for a number of reasons. One example is when the value of the tax receipt is not the same as the order total. In this case, the status of the order will not move on to ‘Faturado’. While the ERP is checking that the order is still to be found with the status `Preparando Entrega` (the status preceding Faturado), the possibility exists that it continues executing the action for remitting the tax receipt.

You can also verify this repeated action by clicking **View Interactions**, verifying different interactions that are being carried out by your ERP.

The same thing may occur when remitting **Tracking** data, also by your ERP.

2) The end customer’s email server may be having problems that prevent it from responding with an "aceite" of receipt of your email.

The server that sends the transactional emails (SMTP), where no OK is received from the server of destination, will continue to repeatedly deliver the email sent by the **Orders** module.
