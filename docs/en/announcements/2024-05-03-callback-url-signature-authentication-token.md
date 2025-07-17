---
title: 'Callback URL signature: Blocking asynchronous payment authorizations without an authentication token'
id: 3at5YtI2L6QqBym6Af56tV
status: PUBLISHED
createdAt: 2024-05-03T18:12:04.996Z
updatedAt: 2024-05-03T18:33:19.277Z
publishedAt: 2024-05-03T18:33:19.277Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2024-05-03-callback-url-signature-authentication-token
locale: en
legacySlug: callback-url-signature-authentication-token
announcementImageID: ''
announcementSynopsisEN: 'Authentication token for asynchronous payment authorizations'
---

To enhance payment operations on the platform, VTEX is implementing the `X-VTEX-signature` authentication token. Payment providers and partners must use this token to report the status of asynchronous payment transactions via a [callback URL](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#callback-url).  

As of May 27, 2024,  the VTEX gateway will automatically include the callback URL information and the respective authentication token with each payment transaction.

Example of a callback URL containing the authentication token:

`https://gatewayqa.vtexpayments.com.br/api/pvt/payment-provider/transactions/8FB0F111111122222333344449984ACB/payments/A2A9A25B11111111222222333327883C/callback?accountName=teampaymentsintegrations&X-VTEX-signature=R123456789aBcDeFGHij1234567890tk`

## What needs to be done?

Starting June 26, 2024, all payment providers and partners must report the status of asynchronous payment transactions exclusively via the callback URL and authentication token.

After this date, any transaction status updates sent only via callback URL (without the authentication token) will be blocked, and the respective payment transactions will be canceled.

For more information about the callback URL, see [Payment Provider Protocol](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#callback-url) and [Create Payment endpoint](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).
