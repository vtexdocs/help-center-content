---
title: 'Transacting a recurring order without CVV'
id: iYJ5L8LsiIu0oEkQeE4aC
status: ARCHIVED
createdAt: 2017-10-29T16:22:22.783Z
updatedAt: 2020-02-11T20:42:59.946Z
publishedAt: 
firstPublishedAt: 2017-10-29T16:29:02.503Z
contentType: tutorial
productTeam: Others
author: authors_39
slugEN: transacting-recurring-order-without-cvv
locale: en
legacySlug: transacting-recurring-order-without-cvv
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

A transaction without CVV can be done by simply providing the information that the transaction does not require a CVV. In this case only the general details of the card and the purchaser are used, and they are saved in Payments. Examples of acquirers that use this model are Cielo and Redecard.

In both cases, since Payments does not store the customer’s CVV, we use the PCI DSS security certificate.

An important point is that all recurring purchases, irrespective of the model, are only generated internally by communication between OMS and Payments, and effected entirely by API. 

This prevents any failure in external security, because it is an authenticated order. 

If a user tries to make any type of purchase by a different method, whether through the online store or otherwise, the CVV will be request and the order will not be registered as a recurrence.
