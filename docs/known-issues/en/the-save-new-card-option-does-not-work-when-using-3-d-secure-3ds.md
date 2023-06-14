---
title: The "Save new card" option does not work when using 3-D Secure (3DS)
id: 20INELA5LVhY1XqFWG7047
status: PUBLISHED
createdAt: 2021-06-15T17:10:05.803Z
updatedAt: 2022-12-22T14:45:20.486Z
publishedAt: 2022-12-22T14:45:20.486Z
firstPublishedAt: 2021-06-15T18:33:22.941Z
contentType: knownIssue
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
tag: Order Management
slug: the-save-new-card-option-does-not-work-when-using-3-d-secure-3ds
kiStatus: Backlog
internalReference: 
---

## Summary

When the customer tries to add a new credit card in the [My account](https://help.vtex.com/en/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh) section of stores whose acquires use [3DS](https://help.vtex.com/en/tutorial/what-is-3d-secure--1eWPdop8mECuaEomQgkAIa) authentication (V1 or V2), the system will return the error message *There was an error while trying to save the card*.

This error occurs because the credit card has not been validated. To validate the card, it first needs to be associated with a [payment condition](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455). When this is done, the card will be charged 1.50 USD. The transaction will be canceled next and the card will be validated. 

In stores whose acquirers use [3DS](https://help.vtex.com/en/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) authentication, this transaction will activate the authentication process and the validation of the card will be requested. The validation can't be processed because it's not a purchase and the 3DS authentication step known as "challenge" can't run to complete the steps. This is the reason for the error mentioned above when saving a card.

### Error simulation

If you want to simulate the steps that lead to the error, follow the instructions below:

1. Go to the VTEX __Admin__.
2. Configure an [acquirer](https://help.vtex.com/en/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E) that uses 3DS authentication. For V1, acquirers must set it up. For V2, see more details in our article [Setting up 3DS 2 authentication flow](https://help.vtex.com/en/tutorial/setting-up-3ds-2-authentication-flow--58XMn5LOA6fwrSkoDoAsg2).
3. Configure a credit card [payment method](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3?&utm_source=autocomplete) — such as Mastercard, Visa, American Express, etc. — to be processed by the acquirer.
4. Go to your store's home page.
5. Log in by entering your email address and password.
6. Click on __My account__.
7. Go to the __Credit cards__ section.
8. Click on __Add new card__.
9. Fill in all the fields and click on __Save new card__.
10. This process will return an error.

### Solution

You can solve this error by adding a payment condition for a credit card associated with an acquirer that does not use 3-D Secure (V1 or V2).


## Simulation



## Workaround



