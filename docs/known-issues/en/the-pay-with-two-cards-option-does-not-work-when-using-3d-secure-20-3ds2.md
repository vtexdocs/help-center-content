---
title: 'The “Pay with two cards” option does not work when using 3-D Secure 2.0 (3DS2)'
id: 7tjxz6qEsQz9o42diSqMpt
status: PUBLISHED
createdAt: 2021-06-15T15:24:52.846Z
updatedAt: 2022-12-22T20:43:02.853Z
publishedAt: 2022-12-22T20:43:02.853Z
firstPublishedAt: 2021-06-15T15:35:20.115Z
contentType: knownIssue
productTeam: Financial
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: the-pay-with-two-cards-option-does-not-work-when-using-3d-secure-20-3ds2
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When the customer tries to pay their order with two cards processed by gateway affiliations that use [3DS2](https://help.vtex.com/en/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl) authentication, an error occurs, and it is not possible to complete the purchase at checkout.

This happens because one of the main objectives of [3DS2](https://help.vtex.com/en/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl) is to validate customers' profiles. In some cases, users need to validate their identity by confirming some information at checkout — usually, a pop-up window will open and they must follow the instructions indicated. 

Currently, however, VTEX __does not support running two challenges at the same time__. For this reason, customers cannot pay with two cards when both payment conditions are processed by gateway affiliations with 3DS2 enabled.

## Error simulation

If you want to simulate the steps that lead to the error, follow the instructions below:

1. Go to the VTEX __Admin__.
2. Configure an [acquirer](https://help.vtex.com/pt/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E) that uses 3DS. For V1, acquirers must set it up. For V2, see more details in our article [Setting up 3DS 2 authentication flow](https://help.vtex.com/en/tutorial/setting-up-3ds-2-authentication-flow--58XMn5LOA6fwrSkoDoAsg2).
3. Configure __two credit card payment methods__ — such as Mastercard, Visa, American Express, etc. — to be processed by the acquirer. 
4. Go to your store's home page.
5. Add an item to the shopping cart and proceed to checkout.
6. Fill in the required information and proceed to payment.
7. Choose __credit card__ as your payment method.
8. Select the option to __Pay with two cards__.
9. Add the information of two credit cards whose brands are configured to be processed by gateway affiliations with 3DS2 enabled.
10. An error message will be displayed, preventing the order from being placed.

## Solution

You can solve this limitation by hiding the "Pay with two cards" option via customization since this is a native feature that cannot be disabled in the VTEX Admin.  

## Simulation



## Workaround



