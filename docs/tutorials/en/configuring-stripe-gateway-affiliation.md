---
title: 'Configuring Stripe gateway affiliation'
id: fwF2wk2FQKrODrWWkvSLO
status: PUBLISHED
createdAt: 2021-10-25T16:01:40.789Z
updatedAt: 2023-03-22T19:17:05.286Z
publishedAt: 2023-03-22T19:17:05.286Z
firstPublishedAt: 2021-10-25T17:34:52.274Z
contentType: tutorial
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slug: configuring-stripe-gateway-affiliation
locale: en
legacySlug: configuring-stripe-gateway-affiliation
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

[Stripe](https://stripe.com) is a payment platform that offers an integrated system for receiving payments, transfers, donations, and any typical financial transaction in ecommerce and other websites.

<div class="alert alert-warning">
You can integrate your store with Stripe via <strong>Application Key</strong> and <strong>Application Token</strong>. To obtain this data, you have to <a href="https://dashboard.stripe.com/register" target="_blank">create your account on the platform</a> and then access <a href="https://stripe.com/docs/keys" target="_blank">Stripe’s documentation</a> to get your <strong>Public key</strong> and <strong>Secret key</strong>. They are required for the setup in the VTEX environment.
</div>

Stripe supports payments in over 40 countries. The list of available countries can be accessed on the [Stripe website](https://stripe.com/enterprise).

To process your payments with Stripe, you must:

1. [Configure the Stripe connector](#configuring-the-stripe-connector)
2. [Configure a payment condition](#configuring-a-payment-condition)

## Configuring the Stripe connector

After installing the Stripe connector, follow the steps below to configure it on the VTEX platform.

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In **Gateway Affiliations**, click on the green "**+**" button.
3. Search for the **StripeConnector** connector, and click on it.
4. Then fill in the fields below with the following information:
<ol><br/>
  <li><strong>Application Key:</strong> Publishable key available in your <a href="https://dashboard.stripe.com/">Stripe dashboard</a>.
  <li><strong>Application Token:</strong> Secret Key available in your <a href="https://dashboard.stripe.com/">Stripe dashboard</a>.
</ol>
5. Click on **Save**.

After configuration in the VTEX environment, you also need to configure Webhook in your Stripe account.

1. Go to your [Stripe account dashboard](https://dashboard.stripe.com/).
2. Click on the **Developers** button.
3. Click on the **Webhooks** tab.
4. Click on **Add an endpoint**.
5. In the **Endpoint URL** field, add your VTEX store’s endpoint URL in the format `https://{account-name}.myvtex.com/_v/notifications` replacing `{account-name}` with your VTEX account name.
6. Click on **+ Select events**.
7. Add the events that must be listened to.
8. Click on **Add endpoint**.

## Configuring a payment condition

Once you have completed the steps above, Stripe will be ready to be used in your store. It will be available in the **Process with affiliation** field — provided that the payment method is compatible with Stripe — when creating a payment condition. 

Learn more in the article [Configuring payment conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

## Configuring Google Pay

The Stripe connector allows you to add Google Pay as a payment method in your store's checkout. Once the Stripe connector is configured, you can add Google Pay by following the steps below.

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment conditions** tab, click on “**+**”.
3. Search for the **Google Pay** condition and click on it.
4. Toggle the status button to activate this payment condition.
5. Click on **Save**.

After this configuration, Google Pay will be displayed as one of the available payment methods in your store’s checkout.

## Configuring Apple Pay

The Stripe connector allows you to add Apple Pay as a payment method in your store's checkout. 

<div class="alert alert-warning">
Apple Pay currently only works on MacOs and IOS operating systems, and with  Safari browser. For more information, visit <a href="https://support.apple.com/en-us/HT208531">Devices compatible with Apple Pay</a>.
</div>

Once the Stripe connector is configured, you can add Apple Pay by following the steps below.

1. Go to [your Stripe account dashboard](https://dashboard.stripe.com/settings/payments) in the payments setup section.
2. In **Settings**, click on **Payment Methods**.
3. Click on **Apple Pay > Configure** and then **Add to new domain**.
4. Enter the public domain of your store's website.
5. Click on **Donwload verification file** to save it to your device.
6. Create the credentials [appkey and apptoken](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet).
7. Make a call to the endpoint to send the previously downloaded verification file, adding the created credentials and your public domain address in the header (https://{{dominioPublicodoSite}}/well-known/raw/apple-developer-merchantid-domain-association).
8. Click on **Add**.
9. Access the **Admin** VTEX.
10. Click on **Payments**.
11. Then, click on **Settings**.
12. In the **Payment conditions**, click on the **+** button.
13. Click on **Apple Pay**.
14. Fill the **Rule Name** field with a name of your choice for identification.
15. Activate the condition in the **Status** field.
16. In the **Process with affiliation** field, select the Stripe option.
17. If you have an anti-fraud set up in your store, you can enable it for that payment condition by checking the **Use anti-fraud solution** box.
18. Choose whether payments will be with or without installments.
19. It you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/condicoes-especiais).
20. Click on **Save**.

After this configuration, Apple Pay will be displayed as one of the available payment methods in your store’s checkout.
