---
title: 'How to configure Mercado Pago Pro as a payment method'
id: 520AthtalgojtTUKw0La9S
status: PUBLISHED
createdAt: 2020-11-17T17:45:31.552Z
updatedAt: 2023-03-26T21:46:46.072Z
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

Mercado Pago Pro is a payment solution from Mercado Pago’s [digital wallet](/en/tutorial/o-que-e-uma-carteira-digital-e-wallet--4v5wcOe4A0SiaimWM2cU60) (e-wallet).

To offer this payment option to your customers in SmartCheckout, first you must add a gateway affiliation and then configure Mercado Pago Pro as a payment method.

Before configuring the payment condition, you must ensure that the MercadoPagoV1 or MercadoPagoV2 sub-acquirers are added to your store.

If necessary, access the links below to configure the sub-acquirers:

- [MercadoPagoV1](/en/tutorial/setting-up-mercadopagov1-sub-acquirer--6wTlR3UTJe6YMAsEuquO26)
- [MercadoPagoV2](/en/tutorial/setting-up-mercadopagov2-sub-acquirer--1y6k8lCSzJYfPs2yObNFo4)

## Configuring the Mercado Pago Pro payment method

Now that the sub-acquirer is properly added, you can configure the Mercado Pago Pro.

Follow the instructions below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Make sure you’re in the __Payment Conditions__ tab.
3. Next to the search bar, click on the __green button “+”__.
4. In the “Other” section, select __MercadoPagoPro__.
5. At the top of the page, fill in the __Rule Name__ field.
6. Below, click on the **Status** button to __activate the rule__.
7. In __Process with affiliation__, select one of the options: __MercadoPagoV1__ or __MercadoPagoV2__.
8. If necessary, mark the __“Use antifraud”__ checkbox.

On the right side of the screen, you can configure [special payment conditions](/en/tutorial/special-conditions--tutorials_456).

However, this step is optional. You can click directly on the __blue button “Save”__ to finish the payment method configuration.

> ⚠️ Remember that new payment conditions can take up to 10 minutes to be displayed in  SmartCheckout.

