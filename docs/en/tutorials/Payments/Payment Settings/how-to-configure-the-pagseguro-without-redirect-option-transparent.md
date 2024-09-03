---
title: 'How to configure the PagSeguro without redirect option (transparent)'
id: tutorials_449
status: ARCHIVED
createdAt: 2017-04-27T22:04:37.656Z
updatedAt: 2024-07-24T12:05:55.438Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:25.912Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-to-configure-the-pagseguro-without-redirect-option-transparent
locale: en
legacySlug: how-to-configure-the-pagseguro-without-redirect-option-transparent
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

_The settings documented in this article are performed in a non-VTEX environment and may therefore be discontinued without prior notice._

If you have a PagSeguro account and already use the redirect option in your store, you can enable the "without redirect" option in Payments. This means that at checkout, the customer will no longer leave your site to make the payment, even when transacting through PagSeguro. This occurs in a transparent way.

Notice: If the retailer has chargeback insurance, PagSeguro's antifraud needs to be configured. This process warrants a configuration in Google Tag Manager. For more details on how to this, be sure to check out this [article on PagSeguro's page](https://dev.pagseguro.uol.com.br/v2/docs/configurando-device-fingerprint) (only available in Portuguese).

To enable it, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagSeguroV2__ in the search bar and click on the name of the provider.
4. Click on __Authorize via OAuth__.
5. Select and send the __desired rule__.
6. Click on __login with email and password__.
7. Login to your __account__ using your PagSeguro associated email and password.
8. Authorize the __app_.
9. Click `Save`.

## Set Payment Condition

After setting up the PagSeguro affiliation without redirect, a payment method will need to be linked to this affiliation, as described in our tutorial [Configuring payment conditions](/tutorial/how-to-configure-payment-conditions--tutorials_455)

It is important for __the interest rate value to be equal__ to that set in the PagSeguro environment and for the billing setting to be __End of period__.
