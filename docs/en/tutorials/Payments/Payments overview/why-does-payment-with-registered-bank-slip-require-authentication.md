---
title: 'Why does payment with registered bank slip require authentication?'
id: 5gpsx6cUXKGG4asA6aiCki
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.913Z
updatedAt: 2019-12-31T15:20:11.716Z
publishedAt: 2019-12-31T15:20:11.716Z
firstPublishedAt: 2019-01-24T22:01:07.101Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: why-does-payment-with-registered-bank-slip-require-authentication
locale: en
legacySlug: why-does-payment-with-registered-bank-slip-require-authentication
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Registered bank slip is a payment method that contains sensitive data of the customer who is making the purchase.

When a customer informs their data to close an order, the information for __First Name__, __Last Name__, __CPF__ etc. is used for generating the registered bank slip.

This information is saved in the customer profile and is displayed in the registered bank slip. In this way, authentication works as a security measure so that fraudsters can not access the information.

Because of this, the login is requested both at the time of __choosing the registered bank slip as payment method__ and the time of __getting the bank slip in the page of Order Placed__.

<div class="alert alert-info">
Authentication is required only as of the second purchase. Since during the first purchase the data is being saved for the first time, there's no need for authentication. The registered bank slip will be issued with the data informed in this first purchase and only the person who filled the information will have access to them.
</div>
