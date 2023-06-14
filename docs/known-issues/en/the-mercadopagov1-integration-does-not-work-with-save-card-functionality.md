---
title: 'The MercadoPagoV1 Integration does not work with save card functionality'
id: 2V8kdA60OTl7VQoUUNgBci
status: PUBLISHED
createdAt: 2022-05-03T15:45:09.856Z
updatedAt: 2022-11-25T22:06:14.442Z
publishedAt: 2022-11-25T22:06:14.442Z
firstPublishedAt: 2022-05-03T15:45:10.554Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: the-mercadopagov1-integration-does-not-work-with-save-card-functionality
locale: en
kiStatus: No Fix
internalReference: 283727
---

## Summary


The MercadoPagoV1 integration does not work with save card functionality in the My account section.

This error occurs because My Cards wait for a synchronous answer from credit card acquirers and MercadoPagoV1 doesn't return an immediate response.



## Simulation



1. Go to the VTEX **Admin.**
2. Configure the acquirer MercadoPagoV1.
3. Configure a credit card payment method — such as Mastercard, Visa, American Express, etc. — to be processed by the acquirer.
4. Go to your store's home page.
5. Log in by entering your email address and password.
6. Click on **My account**.
7. Go to the **Credit cards** section.
8. Click on **Add new card**.
9. Fill in all the fields and click on **Save new card**.
10. This process will return _an error occurred while trying to register the card_



## Workaround


N/A

