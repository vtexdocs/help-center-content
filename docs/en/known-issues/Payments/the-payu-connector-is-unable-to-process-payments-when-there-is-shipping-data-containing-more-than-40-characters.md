---
title: 'The PayU connector is unable to process payments when there is shipping data containing more than 40 characters.'
id: 1SEaraqWshBYzjOcL9LxsN
status: PUBLISHED
createdAt: 2023-09-18T21:02:32.217Z
updatedAt: 2023-09-18T21:02:32.812Z
publishedAt: 2023-09-18T21:02:32.812Z
firstPublishedAt: 2023-09-18T21:02:32.812Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-payu-connector-is-unable-to-process-payments-when-there-is-shipping-data-containing-more-than-40-characters
locale: en
kiStatus: Backlog
internalReference: 902539
---

## Summary


PayU's connector does not handle address data received from the checkout and sends it to the provider as is, without any modifications. However, it is stated in the provider's documentation that such data should not exceed 40 characters.

This causes the transaction to be canceled due to a payment authorization error with the message:

    message: El tamaño debe estar entre 0 y 40 property: , message: El tamaño debe estar entre 0 y 40



##

## Simulation



- During the shipping step at checkout, select a delivery address with more than 40 characters, such as 'Región Del Libertador General Bernardo O’Higgins (VI)' in Chile.
- Select a payment method processed through the PayU connector.


##

## Workaround


N/A





