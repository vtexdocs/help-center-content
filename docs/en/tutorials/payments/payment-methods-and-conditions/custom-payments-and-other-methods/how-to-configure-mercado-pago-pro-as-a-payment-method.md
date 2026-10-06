---
title: 'How to configure Mercado Pago Pro as a payment method'
id: 520AthtalgojtTUKw0La9S
status: PUBLISHED
createdAt: 2020-11-17T17:45:31.552Z
updatedAt: 2025-11-25T00:00:00.000Z
publishedAt: 2023-03-26T21:46:46.072Z
firstPublishedAt: 2020-11-17T19:19:23.749Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: how-to-configure-mercado-pago-pro-as-a-payment-method
legacySlug: setting-up-mercado-pago-pro-as-a-payment-method
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Mercado Pago Pro is a payment solution from Mercado Pago’s [digital wallet](https://help.vtex.com/docs/tutorials/what-is-an-e-wallet) (ewallet). Before configuring the payment condition, you must ensure that the [MercadoPagoV2](https://help.vtex.com/docs/tutorials/setting-up-mercadopagov2-sub-acquirer) sub-acquirer is added to your store.

## Configuring the Mercado Pago Pro payment method

Now that the sub-acquirer is properly added, you can configure the Mercado Pago Pro.

Follow the instructions below:

1. In the [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), run the command `vtex login accountname` to log in to your account.
2. Install the __Mercado Pago Pro__ app using the `vtex install mercadopago.mercadopago-app` command.
3. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
4. In the __Payment Conditions__ tab, click the `+` button.
5. Click __MercadoPagoPro__ option.
6. On the configuration page, activate the condition by clicking __Status__.
7. In __Process with provider__, select __MercadoPagoV2__.
8. If you want to use an anti-fraud system, check the __Use anti-fraud solution__ option.
9. If necessary, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
10. Click `Save`.

After following the indicated steps, Mercado Pago Pro may take up to 10 minutes to appear at your store's checkout as a payment option.