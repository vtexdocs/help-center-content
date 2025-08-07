---
title: 'How to integrate an external Gift Card provider with VTEX'
id: tutorials_450
status: PUBLISHED
createdAt: 2017-04-27T22:05:26.566Z
updatedAt: 2024-06-04T18:55:35.271Z
publishedAt: 2024-06-04T18:55:35.271Z
firstPublishedAt: 2017-04-27T23:03:24.938Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-integrate-an-external-gift-card-provider-with-vtex
legacySlug: how-to-integrate-with-a-gift-card
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, you can use the gift card as a credit program.

In this context, there are cases of customers who already work with their own provider. This system manages your credits under a base of customers who participate in a loyalty system, for example.

If the customer wishes to integrate an external gift card solution into the VTEX system, it is necessary to use the [Giftcard Provider Protocol](https://developers.vtex.com/docs/api-reference/giftcard-provider-protocol).

## Provider development

Through the [Giftcard Provider Protocol](https://developers.vtex.com/docs/api-reference/giftcard-provider-protocol), the external gift card provider must develop a [middleware](https://en.wikipedia.org/wiki/Middleware) to transmit information between your system and VTEX.

For more information about the gift card system at VTEX, visit [Giftcard Hub](https://developers.vtex.com/docs/api-reference/giftcard-hub-api).

## Sending endpoint information

After creating the middleware, the provider must open a [ticket](https://help.vtex.com/en/support) on VTEX informing the endpoints to be used for customers to carry out payment transactions using its gift card system.
