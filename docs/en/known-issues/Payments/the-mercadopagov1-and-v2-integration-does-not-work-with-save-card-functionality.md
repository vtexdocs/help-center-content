---
title: 'The MercadoPagoV1 and V2 Integration does not work with save card functionality'
id: 2V8kdA60OTl7VQoUUNgBci
status: PUBLISHED
createdAt: 2022-05-03T15:45:09.856Z
updatedAt: 2024-01-09T13:23:20.203Z
publishedAt: 2024-01-09T13:23:20.203Z
firstPublishedAt: 2022-05-03T15:45:10.554Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-mercadopagov1-and-v2-integration-does-not-work-with-save-card-functionality
locale: en
kiStatus: Backlog
internalReference: 283727
---

## Summary


The integration of MercadoPagoV1 and MercadoPagoV2 does not function properly with the save card functionality in the "My Account" section for countries that do not permit transactions with decimals.

This issue arises because the "My Cards" feature generates a new transaction with a value of $1.5. However, some countries do not allow transactions with such decimal amounts, resulting in the rejection of any attempts to approve these transactions.


##

## Simulation



1. Go to the VTEX **Admin.**
2. Configure the acquirer MercadoPagoV1 or MercadoPagoV2.
3. Configure a credit card payment method — such as Mastercard, Visa, American Express, etc. — to be processed by the acquirer.
4. Go to your store's home page.
5. Log in by entering your email address and password.
6. Click on **My account**.
7. Go to the **Credit cards** section.
8. Click on **Add new card**.
9. Fill in all the fields and click on **Save new card**.
10. This process will return _an error occurred while trying to register the card_


##

## Workaround


N/A

