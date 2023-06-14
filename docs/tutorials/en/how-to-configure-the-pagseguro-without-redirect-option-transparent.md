---
title: 'How to configure the PagSeguro without redirect option (transparent)'
id: tutorials_449
status: PUBLISHED
createdAt: 2017-04-27T22:04:37.656Z
updatedAt: 2023-03-29T01:24:00.848Z
publishedAt: 2023-03-29T01:24:00.848Z
firstPublishedAt: 2017-04-27T23:03:25.912Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-to-configure-the-pagseguro-without-redirect-option-transparent
legacySlug: how-to-configure-the-pagseguro-without-redirect-option-transparent
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

_The settings documented in this article are performed in a non-VTEX environment and may therefore be discontinued without prior notice._

If you have a PagSeguro account and already use the redirect option in your store, you can enable the "without redirect" option in Payments. This means that at checkout, the customer will no longer leave your site to make the payment, even when transacting through PagSeguro. This occurs in a transparent way.

This option is available as a new connector in the **Gateway Affiliations** option.

Notice: If the retailer has chargeback insurance, PagSeguro's antifraud needs to be configured. This process warrants a configuration in Google Tag Manager. For more details on how to this, be sure to check out this [article on PagSeguro's page](https://dev.pagseguro.uol.com.br/v2/docs/configurando-device-fingerprint) (only available in Portuguese).

To enable the affiliation without redirect, follow the steps below:
1. 
2. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
3. Click on __Gateway Affiliations__ and thereafter on __"+"__.
4. Select the __PagSeguroV2__ affiliation.
5. Save the __affiliation__.
6. Go back to the affiliations __panel__.
7. Select the recently created __PagSeguroV2__ affiliation.
8. Click on __authorize__.
9. Select and send the __desired rule__.
10. Click on __login with email and password__.
11. Login to your __account__ using your PagSeguro associated email and password.
12. Authorize the __app_.
13. Click on __save__.

## Set Payment Condition

After setting up the PagSeguro affiliation without redirect, a payment method will need to be linked to this affiliation, as described in our tutorial [Configuring payment conditions](/tutorial/how-to-configure-payment-conditions--tutorials_455)

It is important for __the interest rate value to be equal__ to that set in the PagSeguro environment and for the billing setting to be __End of period__.
