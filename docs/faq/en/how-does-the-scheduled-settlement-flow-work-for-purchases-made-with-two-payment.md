---
title: How does the scheduled settlement flow work for purchases made with two payment methods?
id: 32vvCkFrmbUydhI5ncFCja
status: PUBLISHED
createdAt: 2021-06-15T15:14:09.235Z
updatedAt: 2022-07-19T12:56:42.732Z
publishedAt: 2022-07-19T12:56:42.732Z
firstPublishedAt: 2021-06-15T15:20:41.908Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: how-does-the-scheduled-settlement-flow-work-for-purchases-made-with-two-payment
legacySlug: how-does-the-scheduled-capture-flow-work-for-purchases-made-with-two-payment
---

When the customer makes a purchase using two payment methods (credit card + voucher, for example), the amount will be settled according to the period established in each of the [gateway affiliations](https://help.vtex.com/en/tutorial/afiliacoes-de-gateway--tutorials_444?&utm_source=autocomplete) and in your store’s [payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento) settings.

Let us take the following example:

- __Credit card:__ the settlement is scheduled to occur 4 days after the payment is approved.
- __Voucher:__ has automatic settlement (the amount is automatically captured after payment approval).

If a purchase is completed with these two payment methods, the settlement will follow the settings, i.e., there is no conflict between the two. 

This means that if a purchase was made on __4/15__, the credit card settlement will happen on __4/19__ (4 days after payment approval).

On the other hand, the voucher settlement will be done automatically as soon as the payment is approved.

