---
title: 'How to integrate an external Gift Card provider with VTEX'
id: tutorials_450
status: PUBLISHED
createdAt: 2017-04-27T22:05:26.566Z
updatedAt: 2023-04-13T12:40:41.423Z
publishedAt: 2023-04-13T12:40:41.423Z
firstPublishedAt: 2017-04-27T23:03:24.938Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-to-integrate-an-external-gift-card-provider-with-vtex
legacySlug: how-to-integrate-with-a-gift-card
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, you can use the Gift Card as a credit program.

In this context, there are cases of customers who already work with their own provider. This system manages your credits under a base of customers who participate in a loyalty system, for example.

That said, the customer has the option of integrating the external solution with the VTEX system. In this article we will explain the step by step to make this integration.

## Provider development
VTEX has a Gift Card Provider Protocol, a guide to API calls that will be made to communicate with our system.

The customer must develop a middleware - a system that intermediates between two different systems, in this case, the external provider and VTEX’s systems.
Once implemented, it will be able to receive calls from VTEX and interpret the information contained in each of them.

For more details, read our technical documentation on the [Gift Card Provider Protocol](https://developers.vtex.com/docs/guides/giftcard-provider-protocol-overview). 

## Sending the endpoint
After that, the customer must send to VTEX the endpoint that will be used to make the calls. This route will act as a bridge between the two systems.
Finally, VTEX adds the provider's endpoint to its system. In this way, the external Gift Card system will be integrated with VTEX and will be used every time the customer uses it as a payment method.
