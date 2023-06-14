---
title: Pickup points for subscription orders (Beta)
id: csIqB6iBh4QNIFdEj0nVv
status: PUBLISHED
createdAt: 2021-05-17T12:45:21.450Z
updatedAt: 2023-03-24T20:40:01.408Z
publishedAt: 2023-03-24T20:40:01.408Z
firstPublishedAt: 2021-05-17T20:55:05.477Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: pickup-points-for-subscription-orders-beta
legacySlug: pickup-points-for-subscription-orders-beta
subcategory: 3RmFd9bgAeRAVGeBd7XDUr
---

<div class="alert alert-info">
  <p>This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href="https://support.vtex.com/hc/pt-br/requests">our Support</a>.</p>
</div>

A pickup point is a physical location where customers can pick up their orders, instead of having them delivered to their homes. A common usage scenario for this feature is the in-store pickup, for example.

In addition to regular orders, you can provide pickup points for subscription orders if you use the [Subscriptions module](https://help.vtex.com/en/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj).

Check out how to enable this feature:

- [Requirements](#requirements)
- [Choosing pickup points](#choosing-pickup-points)

<div class="alert alert-info">
  <p>The pickup points feature is available in beta only for accounts using the <b>Checkout V6</b>.</p>
</div>

## Requirements

To offer pickup points for subscription orders, you must fulfill the logistical requirements listed below.

*    You must have the [Subscriptions module](https://help.vtex.com/en/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj) installed and the pickup points option enabled. To do that, please contact [our Support](https://support.vtex.com/hc/pt-br/requests).
*    You need to configure pickup points for your store. You can only use pickup points from the main store or franchises (white label sellers) for subscription orders. Learn how to configure pickup points in our article [Adding pickup points](https://help.vtex.com/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).
*    Carriers associated with pickup points for subscription orders **cannot** have any [delivery windows](https://help.vtex.com/en/tutorial/horario-de-funcionamento-de-transportadoras-e-entrega-agendada-beta--5QjTT3ICL2HdEcVIguJiMI) configured.
*   Make sure that you have the items in stock at the subscription cycle date (the moment when recurring orders are created).

## Choosing pickup points

Customers can choose pickup points for items in a subscription order at checkout, as illustrated in the image below.

![subscriptionspickup EN](//images.ctfassets.net/alneenqid6w5/6qqc7DV4Wk6yRWvsdiWNCP/4b70cfdbea58f1b53f482f61ef57d285/subscriptionspickup_EN.gif)

You can also assign pickup points when [creating new subscriptions](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1#post_api-rns-pub-subscriptions) via the [Subscriptions API](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1). For existing subscriptions, you can change the delivery address by using the [API subscription upgrade route](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1#patch_api-rns-pub-subscriptions-id) to start using a pickup point.

To find out available pickup points near specific ZIP codes or geographic coordinates, you can use the [Checkout API](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview).

## Related articles

- [How to configure subscriptions in your store](https://help.vtex.com/en/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj)
- [Adding pickup points](https://help.vtex.com/en/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E)
- [Setting up a white label seller as a pickup point](https://help.vtex.com/en/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e)
