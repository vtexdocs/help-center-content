---
title: Configuring payment with AdyenV3
id: 7xAz67E2Eg63LWCQNjVdwv
status: PUBLISHED
createdAt: 2023-05-08T20:00:38.610Z
updatedAt: 2023-05-31T19:42:52.614Z
publishedAt: 2023-05-31T19:42:52.614Z
firstPublishedAt: 2023-05-11T20:32:21.638Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configuring-payment-with-adyenv3
legacySlug: configuring-payment-with-adyenv3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

On VTEX, you can integrate with the payment provider AdyenV3 to accept credit and debit cards, digital wallets, and local payment methods like PIX and boleto in Brazil. 

To use the AdyenV3 affiliation, you must:

- [Configure your Adyen environment](#configuring-your-adyen-environment)
- [Configuring the AdyenV3 connector on VTEX](#configuring-the-adyenv3-connector-on-vtex)

<div class="alert alert-warning">
Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Adyen account for the latest information.
</div>

<div class="alert alert-info">
To use the AdyenV3 affiliation through <a href="https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf">Sales App</a> in your physical stores (point of sale), see <a href="https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3-in-instore--24yO6KloBn6DN6CbprHtgt">Configuring payments with AdyenV3 on Sales App</a>.
</div>

## Configuring your Adyen environment

The steps described below are the minimum required settings for configuring the Adyen connector correctly. Client customizations or enabling specific payment methods or platform features have to be done following the [Adyen](https://docs.adyen.com/) documentation.

To enable VTEX access to the Adyen environment, follow the instructions below:

### Getting the Company and Merchant account credentials 

1. Log in to your [Customer Area](https://ca-test.adyen.com/) on Adyen.
2. In the left sidebar, copy and save the information shown above **Company**. This is your Company account.
3. In the list below Company, search for the Merchant Account that will be used (highlighted in white). Copy and save this information.

![Adyenv3_1](https://images.ctfassets.net/alneenqid6w5/4BHwn5SIUl6AuiiEjreluk/a7404c85f6fda7f7ccbae66070d0db0d/Adyenv3_1.PNG)

### Getting the Live URL

1. In the sidebar, go to **Developers > API URLs**.
2. Click Copy in the **Prefix** field, and store the information in a safe place.

### Getting the API Key and Client Key

<div class="alert alert-warning">
The steps below assume that the API Key and Client Key have been previously generated in the Adyen environment. If you need to create them, see the <a href="https://docs.adyen.com/">Adyen</a> documentation.
</div>

1. In the sidebar, click **Developers** and, then, click **API credentials**.
2. Select your API credential.
3. In **Server Settings > Authentication**, select **API key**. 

![Adyenv3_2](https://images.ctfassets.net/alneenqid6w5/5y5TAeZmhsKrn2nZTJexIw/bfbe2587739f39fa70c4e1f08e86bd71/Adyenv3_2.PNG)

<blockquote><ui>4. Click <b>Generate Key</b> and store the created key in a safe location.</ui>

<blockquote><ui>5. In <b>Client Settings</b>, click the <b>Client key</b> tab.

<blockquote><ui>6. Click <b>Generate Client Key</b> and store the generated key in a safe location.

![Adyenv3_3](https://images.ctfassets.net/alneenqid6w5/1HlZV1tWNXS4ME0B7LYsHR/ca6b2a69d637574b2885286ccaed30b4/Adyenv3_3.PNG)

### Configuring a webhook

You need to configure a webhook to allow Adyen to send payment status updates to your VTEX account. For more information, see the Adyen [Webhooks](https://docs.adyen.com/development-resources/webhooks) documentation.

Follow the steps below to configure a webhook:

1. In your [Customer Area](https://ca-test.adyen.com/) on Adyen, go to **Developers > Webhooks**.
2. Click the blue `+ Webhook` button.
3. In the **Standard Webhook** option, click **Add**.
4. In **General > Description**, add a description for the new webhook. Example "Webhook Adyen Connector Provider v3".
5. Em **General > Server configuration > URL**, enter the URL of your VTEX account. Example: https://{{account}}.myvtex.com/_v3/api/webhook/notification.

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

## Configuring the AdyenV3 connector on VTEX

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the **Gateways Affiliations** tab, click the `+` button.
3. Select the **AdyenV3** connector.
4. Complete the following fields with the information provided by Adyen:
    - **Application Key**: name of your Merchant account (step 3 in the [Getting the Company and Merchant account credentials](#getting-the-company-and-merchant-account-credentials) section).
    - **Application Token**: API Key (step 4 in the [Getting the API Key and Client Key](#getting-the-api-key-and-client-key) section).
    - **Live URL prefix**: URL prefix (step 2 in the [Getting the Live URL](#getting-the-live-url) section).
    - **Company account**: the name of your Company account (step 2 in the [Getting the Company and Merchant account credentials](#getting-the-company-and-merchant-account-credentials) section).
    - **Live POS URL**: you do not need to complete this field (it only applies to Sales App). 
    - **Client key**: Client key (step 6 in the [Getting the API Key and Client Key](#getting-the-api-key-and-client-key) section).

<blockquote><ui>  5. If a warning message is displayed indicating that the app needs to be installed, click the <b>Install app</b> button and follow the installation instructions.</ui>

<blockquote><ui>  6. Click <b>Save</b>.</ui>

![Adyenv3_8](https://images.ctfassets.net/alneenqid6w5/6VHaDn8IejGCUoatLIyUtk/bb93a701e80a942064818a54ac401714/Adyenv3_8.PNG)

To configure the payment methods to be processed by AdyenV3, see [Configuring payment conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455). If you want to use the Sales App for completing purchases, see [Configuring payments with AdyenV3 on Sales App](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3-in-instore--24yO6KloBn6DN6CbprHtgt).

To define special conditions for payment methods, see [Configuring special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).

After completing these steps, it can take up to 10 minutes for the AdyenV3 connector to appear as a payment option in your store's checkout.
