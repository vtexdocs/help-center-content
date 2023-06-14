---
title: 'Configuring payment with AdyenV3 in VTEX Sales App'
id: 24yO6KloBn6DN6CbprHtgt
status: PUBLISHED
createdAt: 2023-05-09T14:12:03.567Z
updatedAt: 2023-06-01T11:38:18.504Z
publishedAt: 2023-06-01T11:38:18.504Z
firstPublishedAt: 2023-05-11T20:30:50.460Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configuring-payment-with-adyenv3-in-vtex-sales-app
locale: en
legacySlug: configuring-payment-with-adyenv3-in-instore
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Adyen. Through this connector, your store can offer payment transactions in physical stores (VTEX Sales App), using points of sale (POS). For more information access [What is VTEX Sales App?](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

<div class="alert alert-info">
To use the AdyenV3 affiliation in your store through other online sales channels (except VTEX Sales App), visit <a href="https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv">Configuring payment with AdyenV3</a>.
</div>

To use the AdyenV3 affiliation in the VTEX Sales App, you need to:

- [Configure point of sale (POS)](#configuring-point-of-sale-pos)
- [Configure your Adyen environment](#configuring-your-adyen-environment)
- [Configure AdyenV3 Connector (VTEX Sales App) on VTEX](#configuring-adyenv3-connector-vtex-sales-app-on-vtex)
- [Configure payment condition](#configuring-payment-condition)

<div class="alert alert-warning">
Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Adyen account for the latest information.
</div>

## Configuring point of sale (POS)

The first step is to configure your Adyen and VTEX accounts to allow point-of-sale (POS) payment transactions. To perform these settings, access the following documentation:

- [Adyen - Terminal API go-live checklist](https://docs.adyen.com/point-of-sale/get-started/go-live-tapi)
- [VTEX - VTEX Sales App Basic settings](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf)

## Configuring your Adyen environment

The steps described below are the minimum required settings for configuring the Adyen connector correctly. Client customizations or enabling specific payment methods or platform features have to be done following the [Adyen](https://docs.adyen.com/) documentation.

To enable VTEX access to the Adyen environment, follow the instructions below:

### Getting the Company and Merchant account credentials 

1. Log in to your [Customer Area](https://ca-test.adyen.com/) on Adyen.
2. In the left sidebar, copy and save the information shown above **Company**. This is your Company account.
3. In the list below Company, search for the Merchant Account that will be used (highlighted in white). Copy and save this information.

![Adyenv3_1](https://images.ctfassets.net/alneenqid6w5/4BHwn5SIUl6AuiiEjreluk/a7404c85f6fda7f7ccbae66070d0db0d/Adyenv3_1.PNG)

### Getting the POS Live URL

1. In the sidebar, go to **Developers > API URLs**.
2. Click `Copy` in the **Point of Sale** field, and store the information in a safe place.

### Getting the API Key

The steps below assume that the API Key has been previously generated in the Adyen environment. If you need to create them, see the [Adyen](https://docs.adyen.com/) documentation.

1. In the sidebar, click **Developers** and, then, click **API credentials**.
2. Select your API credential.
3. In **Server Settings > Authentication**, select **API key**. 

![Adyenv3_2](https://images.ctfassets.net/alneenqid6w5/5y5TAeZmhsKrn2nZTJexIw/bfbe2587739f39fa70c4e1f08e86bd71/Adyenv3_2.PNG)

<blockquote><ui>4. Click <b>Generate key</b> and store the generated key in a safe location.</ui>

### Configuring a webhook

You need to configure a webhook to allow Adyen to send payment status updates to your VTEX account. For more information, see the Adyen [Webhooks](https://docs.adyen.com/development-resources/webhooks) documentation.

Follow the steps below to configure a webhook:

1. In your [Customer Area](https://ca-test.adyen.com/) on Adyen, go to  **Developers > Webhooks**.
2. Click the blue `+ Webhook` button.
3. In the **Standard Webhook** option, click **Add**.
4. In **General > Description**, add a description for the new webhook. Example: "Webhook Adyen Connector Provider v3".
5. In **General > Server configuration > URL**, enter the URL of your VTEX account. Example: https://{{account}}.myvtex.com/_v3/api/webhook/notification.

![Adyenv3_4](https://images.ctfassets.net/alneenqid6w5/1gAXlQfBoEUm5qnfSsHJkl/c18036816afbfe9ed8434d1211679879/Adyenv3_4.PNG)

<blockquote><ui>6. Click <b>Apply</b>.</ui>

<blockquote><ui>7. In <b>Additional settings</b>, select all the available options, and click <b>Apply</b> in each tab.</ui>

<blockquote><ui>8. Click <b>Save changes</b>.</ui>

![Adyenv3_5](https://images.ctfassets.net/alneenqid6w5/4dNUcUg9OKni8eT1wXcjO1/19eddc41d854adb8976e6e90ed54589c/Adyenv3_5.PNG)

![Adyenv3_6](https://images.ctfassets.net/alneenqid6w5/2ocxDKULle6hnu2fFPnjfZ/7787ff93f023d3ec17c669758aefb82f/Adyenv3_6.PNG)

![Adyenv3_7](https://images.ctfassets.net/alneenqid6w5/dEbiVnYj1Ic4eYgkSNolQ/79bba40bd6820d29de275e3cab19f22e/Adyenv3_7.PNG)

<div class="alert alert-info">
If you have several stores, you need to configure a webhook for each of them.
</div>

## Configuring AdyenV3 Connector (VTEX Sales App) on VTEX

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the **Afiliações de Gateways** tab, click the `+` button.
3. Select the **AdyenV3** connector.
4. Complete the following fields with the information provided by Adyen:
    - **Application Key**: name of your Merchant account (step 3 in the [Getting the Company and Merchant account credentials](#getting-the-company-and-merchant-account-credentials) section).
    - **Application Token**: API Key (step 4 in the [Getting the API Key](#getting-the-api-key) section).
    - **Live URL prefix**: it is not necessary to fill in this field (only applicable to other online sales channels).
    - **Company account**: the name of your Company account (step 2 in the [Getting the Company and Merchant account credentials](#getting-the-company-and-merchant-account-credentials) section).
    - **Live POS URL**: URL prefix (step 2 in the [Getting the POS Live URL](#getting-the-pos-live-url) section). 
    - **Client key**: it is not necessary to fill in this field (only applicable to other online sales channels).

<blockquote><ui>  5. If a warning message is displayed indicating that the app needs to be installed, click the <b>Install app</b> button and follow the installation instructions.</ui>

<blockquote><ui>  6. Click <b>Save</b>.</ui>

![Adyenv3_9](https://images.ctfassets.net/alneenqid6w5/SCflCIOFcwFro09YTxEZy/27b941b772a6afb021d0fa2fe25c9fa9/Adyenv3_9.PNG)

## Configuring payment condition

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **Venda Direta Debito** or **Venda Direta Credito**.
4. Under **Process with affiliation**, select the previously configured connector.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
8. Click on `Save`.

After completing these steps, the AdyenV3 Connector may take up to 10 minutes to appear as a payment option in your store's VTEX Sales App.
