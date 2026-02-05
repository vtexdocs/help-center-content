---
title: 'Configuring Stripe gateway affiliation'
id: fwF2wk2FQKrODrWWkvSLO
status: PUBLISHED
createdAt: 2021-10-25T16:01:40.789Z
updatedAt: 2024-04-25T12:58:35.923Z
publishedAt: 2024-04-25T12:58:35.923Z
firstPublishedAt: 2021-10-25T17:34:52.274Z
contentType: tutorial
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slugEN: configuring-stripe-gateway-affiliation
legacySlug: configuring-stripe-gateway-affiliation
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

[Stripe](https://stripe.com) is a payment platform that offers an integrated system for receiving payments, transfers, donations, and any typical financial transaction in ecommerce and other websites.

> ⚠️ You can integrate your store with Stripe via **Application Key** and **Application Token**. To obtain this data, you have to [create your account on the platform](https://dashboard.stripe.com/register) and then access [Stripe’s documentation](https://stripe.com/docs/keys) to get your **Public key** and **Secret key**. They are required for the setup in the VTEX environment.

Stripe supports payments in over 40 countries. The list of available countries can be accessed on the [Stripe website](https://stripe.com/enterprise).

To process your payments with Stripe, you must:

1. [Configure the Stripe connector](#configuring-the-stripe-connector)
2. [Configure a payment condition](#configuring-a-payment-condition)

## Configuring the Stripe connector

After installing the Stripe connector, follow the steps below to configure it on the VTEX platform.

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __StripeConnector__ in the search bar and click on the name of the provider.
4. Fill in the fields below with the following information:
<br>
<ul>
<br>
    	<li>**App key**: Publishable key available in your [Stripe dashboard](https://dashboard.stripe.com).</li>
    	<li>**App token**: Secret Key available in your [Stripe dashboard](https://dashboard.stripe.com).</li>
</ul>
5. Click on __Save__.

After configuration in the VTEX environment, you also need to configure Webhook in your Stripe account.

1. Go to your [Stripe account dashboard](https://dashboard.stripe.com/).
2. Click on the __Developers__ button.
3. Click on the __Webhooks__ tab.
4. Click on __Add an endpoint__.
5. In the __Endpoint URL__ field, add your VTEX store’s endpoint URL in the format `https://{account-name}.myvtex.com/_v/notifications` replacing `{account-name}` with your VTEX account name.
6. Click on __+ Select events__.
7. Click on the categories and select the desired events. If you are not sure which events to add, please contact Stripe support and they can help you with this type of configuration.
8. Click on __Add events__.
9. Click on __Add endpoint__.

> ℹ️ If you wish to carry out credit card transactions on Stripe, you must open a ticket on Stripe as follows: - Request the release of the "raw card data" function, indicating that VTEX and Stripe are payment partners. - Please attach the VTEX AOC (Attestation of Compliance for Onsite Assessments – Service Providers). To check the latest version of AOC VTEX, access the [VTEX certifications](https://vtex.com/us-en/compliance/certifications) page and download the file available in the PCI section. The above actions will prevent errors related to the transmission of sensitive data from occurring in the integration between Stripe and VTEX.

## Configuring a payment condition

Once you have completed the steps above, Stripe will be ready to be used in your store. It will be available in the __Process with affiliation__ field — provided that the payment method is compatible with Stripe — when creating a payment condition. 

Learn more in the article [Configuring payment conditions](/en/docs/tutorials/how-to-configure-payment-conditions).

## Configuring Google Pay

The Stripe connector allows you to add Google Pay as a payment method in your store's checkout. Once the Stripe connector is configured, you can add Google Pay by following the steps below.

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment conditions__ tab, click on `+`.
3. Click on the __Google Pay__ option.
4. Activate the condition in the __Status__ field.
5. In __Process with affiliation__, select the __StripeConnector__ option.
6. Click on __Save__.

After this configuration, Google Pay will be displayed as one of the available payment methods in your store’s checkout.

## Configuring Apple Pay

The Stripe connector allows you to add Apple Pay as a payment method in your store's checkout. 

> ⚠️ Apple Pay currently only works on MacOs and IOS operating systems, and with  Safari browser. For more information, visit [Devices compatible with Apple Pay](https://support.apple.com/en-us/HT208531).

Once the Stripe connector is configured, you can add Apple Pay by following the steps below.

1. Go to [your Stripe account dashboard](https://dashboard.stripe.com/settings/payments) in the payments setup section.
2. In __Settings__, click on __Payment Methods__.
3. Click on __Apple Pay > Configure__ and then __Add to new domain__.
4. Enter the public domain of your store's website.
5. Click on __Donwload verification file__ to save it to your device.
6. Create the credentials [appkey and apptoken](/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet).
7. Make a call to the endpoint to send the previously downloaded verification file, adding the created credentials and your public domain address in the header (https://{{dominioPublicodoSite}}/well-known/raw/apple-developer-merchantid-domain-association).
8. Click on __Add__.
9. Access the __Admin VTEX__.
10. Click on __Payments__.
11. Then, click on __Settings__.
12. In the __Payment conditions__, click on the `+` button.
13. Click on __Apple Pay__.
14. Fill the __Rule Name__ field with a name of your choice for identification.
15. Activate the condition in the __Status__ field.
16. In the __Process with affiliation__ field, select the Stripe option.
17. If you have an anti-fraud set up in your store, you can enable it for that payment condition by checking the __Use anti-fraud solution__ box.
18. Choose whether payments will be with or without installments.
19. It you want, you can also [configure special payment conditions](/en/tutorial/condicoes-especiais).
20. Click on __Save__.

After this configuration, Apple Pay will be displayed as one of the available payment methods in your store’s checkout.
