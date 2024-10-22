---
title: 'Configuring payment with AdyenV3'
id: 7xAz67E2Eg63LWCQNjVdwv
status: PUBLISHED
createdAt: 2023-05-08T20:00:38.610Z
updatedAt: 2024-06-25T21:10:30.984Z
publishedAt: 2024-06-25T21:10:30.984Z
firstPublishedAt: 2023-05-11T20:32:21.638Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-adyenv3
locale: en
legacySlug: configuring-payment-with-adyenv3
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

On VTEX, you can integrate with the payment provider AdyenV3 to accept credit and debit cards, digital wallets, and local payment methods like PIX and boleto in Brazil. 

To use the AdyenV3 affiliation, you must:

- [Configure your Adyen environment](#configuring-your-adyen-environment)
- [Configuring the AdyenV3 connector on VTEX](#configuring-the-adyenv3-connector-on-vtex)

>⚠️ Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Adyen account for the latest information.

>ℹ️ To use the AdyenV3 affiliation through [Sales App](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) in your physical stores (point of sale), see [Configuring payments with AdyenV3 on Sales App](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3-in-instore--24yO6KloBn6DN6CbprHtgt).

## Configuring your Adyen environment

The steps described below are the minimum required settings for configuring the Adyen connector correctly. Client customizations or enabling specific payment methods or platform features have to be done following the [Adyen](https://docs.adyen.com/) documentation.

To enable VTEX access to the Adyen environment, follow the instructions below:

### Getting the Company and Merchant account credentials 

1. Log in to your [Customer Area](https://ca-test.adyen.com/) on Adyen.
2. In the left sidebar, copy and save the information shown above __Company__. This is your Company account.
3. In the list below Company, search for the Merchant Account that will be used (highlighted in white). Copy and save this information.

![Adyenv3_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/configuring-payment-with-adyenv3_1.PNG)

### Getting the Live URL

1. In the sidebar, go to __Developers > API URLs__.
2. Click Copy in the __Prefix__ field, and store the information in a safe place.

### Getting the API Key and Client Key

>⚠️ The steps below assume that the API Key and Client Key have been previously generated in the Adyen environment. If you need to create them, see the [Adyen](https://docs.adyen.com/) documentation.

1. In the sidebar, click __Developers__ and, then, click __API credentials__.
2. Select your API credential.
3. In __Server Settings > Authentication__, select __API key__. 

![Adyenv3_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/configuring-payment-with-adyenv3_2.PNG)

<blockquote><ui>4. Click <b>Generate Key</b> and store the created key in a safe location.</ui>

<blockquote><ui>5. In <b>Client Settings</b>, click the <b>Client key</b> tab.

<blockquote><ui>6. Click <b>Generate Client Key</b> and store the generated key in a safe location.

![Adyenv3_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/configuring-payment-with-adyenv3_3.PNG)

### Configuring a webhook

You need to configure a webhook to allow Adyen to send payment status updates to your VTEX account. For more information, see the Adyen [Webhooks](https://docs.adyen.com/development-resources/webhooks) documentation.

Follow the steps below to configure a webhook:

1. In your [Customer Area](https://ca-test.adyen.com/) on Adyen, go to **Developers > Webhooks**.
2. Click the blue `+ Webhook` button.
3. In the **Standard Webhook** option, click **Add**.
4. In **General > Description**, add a description for the new webhook. Example "Webhook Adyen Connector Provider v3".
5. Em **General > Server configuration > URL**, enter the URL of your VTEX account. Example: https://{{account}}.myvtex.com/_v3/api/webhook/notification.

![Adyenv3_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/configuring-payment-with-adyenv3_4.PNG)

<blockquote><ui>6. Click <b>Apply</b>.</ui>

<blockquote><ui>7. In <b>Additional settings</b>, select all the available options, and click <b>Apply</b> in each tab.</ui>

<blockquote><ui>8. Click <b>Save changes</b>.</ui>

![Adyenv3_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/configuring-payment-with-adyenv3_5.PNG)

![Adyenv3_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/configuring-payment-with-adyenv3_6.PNG)

![Adyenv3_7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/configuring-payment-with-adyenv3_7.PNG)

>ℹ️ If you have several stores, you need to configure a webhook for each of them.

## Configuring the AdyenV3 connector on VTEX

1. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __AdyenV3__ in the search bar and click on the name of the provider.
4. In __App key__, fill in the name of your Merchant account (step 3 in the [Getting the Company and Merchant account credentials](#getting-the-company-and-merchant-account-credentials) section).
5. In __App token__, fill in the API Key (step 4 in the [Getting the API Key and Client Key](#getting-the-api-key-and-client-key) section).
6. If you wish to modify the identification name to be displayed for the AdyenV3 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
7. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
8. In __Live URL prefix__, fill in the URL prefix (step 2 in the [Getting the Live URL](#getting-the-live-url) section).
9. In __Company account__, enter the name of you Company account (step 2 in the [Getting the Company and Merchant account credentials](#getting-the-company-and-merchant-account-credentials) section).
10. In __Live POS URL__, you do not need to complete this field (it only applies to Sales App).
11. In __Client key__, fill in the Client key (step 6 in the [Getting the API Key and Client Key](#getting-the-api-key-and-client-key) section).
12. Click `Save`.

To configure the payment methods to be processed by AdyenV3, see [Configuring payment conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455). If you want to use the Sales App for completing purchases, see [Configuring payments with AdyenV3 on Sales App](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3-in-instore--24yO6KloBn6DN6CbprHtgt).

To define special conditions for payment methods, see [Configuring special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).

## Configuring credit card  

If you wish to process credit card payments in your store using AdyenV3, in addition to performing the previous configurations described in this article, you must open a ticket at [VTEX support](https://help.vtex.com/en/support), with the following request "Provider review - Add Endpoint SecureProxy - AdyenV3".

In the ticket you must also send the URL that will be authorized by Adyen to carry out the credit card transaction in your store. The URL format must be `https://{live URL prefix}-checkout-live.adyenpayments.com`, where the information "{live URL prefix}" must be the same as that entered by you in the Adyen settings in the VTEX Admin.  

>⚠️ The full URL address must be written in lowercase letters only, even if the "Live URL prefix" configured in the VTEX Admin has some capital letters.    

## Configure payment with Apple Pay on Adyen (optional) 

To process payments with Apple Pay on Adyen, you must first perform configurations to enable your store in the Apple Pay environment. Learn more at [Setting up Merchant ID in Apple Pay](https://developers.vtex.com/docs/guides/setting-up-merchant-id-in-apple-pay).   

After completing these steps, it can take up to 10 minutes for the AdyenV3 connector to appear as a payment option in your store's checkout.
