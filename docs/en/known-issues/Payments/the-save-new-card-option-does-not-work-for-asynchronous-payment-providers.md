---
title: 'The "Save new card" option does not work for asynchronous Payment Providers'
id: 3B4gVSNrSeCc8EBXwk5sAu
status: PUBLISHED
createdAt: 2022-03-11T17:54:35.664Z
updatedAt: 2024-04-29T17:58:58.889Z
publishedAt: 2024-04-29T17:58:58.889Z
firstPublishedAt: 2022-03-11T17:54:36.273Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-save-new-card-option-does-not-work-for-asynchronous-payment-providers
locale: en
kiStatus: Fixed
internalReference: 308892
---

## Summary


When the customer tries to add a new card in the My account section of stores whose affiliations doens't return a synchronous answer, the system will return _an error occurred while trying to register the card_ and an improper charge of R$1,50 may be generated.

This error occurs because My Cards wait for a synchronous answer from credit card acquirers and most of them doesn't return an immediate response.


##

## Simulation



1. Go to the VTEX **Admin.**
2. Configure the acquirer Mundi.
3. Configure a credit card payment method — such as Mastercard, Visa, American Express, etc. — to be processed by the acquirer.
4. Go to your store's home page.
5. Log in by entering your email address and password.
6. Click on **My account**.
7. Go to the **Credit cards** section.
8. Click on **Add new card**.
9. Fill in all the fields and click on **Save new card**.
10. This process will return an error and the customer will be charged the amount R$ 1,50, which may or may not be automatically returned later.


##

## Workaround


N/A

