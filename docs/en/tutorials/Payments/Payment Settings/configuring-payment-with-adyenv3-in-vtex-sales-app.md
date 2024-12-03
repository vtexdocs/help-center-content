---
title: 'Configuring payment with AdyenV3 in VTEX Sales App'
id: 24yO6KloBn6DN6CbprHtgt
status: CHANGED
createdAt: 2023-05-09T14:12:03.567Z
updatedAt: 2024-09-23T21:26:11.166Z
publishedAt: 2024-09-03T13:37:54.592Z
firstPublishedAt: 2023-05-11T20:30:50.460Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-adyenv3-in-vtex-sales-app
locale: en
legacySlug: configuring-payment-with-adyenv3-in-instore
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

At VTEX, it is possible to integrate with the payment provider Adyen. Through this connector, your store can offer payment transactions in physical stores (VTEX Sales App), using points of sale (POS). For more information access [What is VTEX Sales App?](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

>ℹ️ To use the AdyenV3 affiliation in your store through other online sales channels (except VTEX Sales App), visit [Configuring payment with AdyenV3](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv).

To use the AdyenV3 affiliation in the VTEX Sales App, you need to:

- [Configure point of sale (POS)](#configuring-point-of-sale-pos)
- [Configure your Adyen environment](#configuring-your-adyen-environment)
- [Configure AdyenV3 Connector (VTEX Sales App) on VTEX](#configuring-adyenv3-connector-vtex-sales-app-on-vtex)
- [Configure payment condition](#configuring-payment-condition)

>⚠️ Settings configured in an environment external to VTEX may be discontinued or modified without prior notice. Please check your Adyen account for the latest information.

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

![Adyenv3_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/configuring-payment-with-adyenv3-in-vtex-sales-app_1.PNG)

### Getting the POS Live URL

This information is related to the endpoints used by Adyen's endpoint APIs in a production environment. For more information, visit the [Adyen docs](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api#cloud).

### Getting the Live URL prefix

1. In the sidebar, go to **Developers > API URLs**.
2. Click `Copy` in the **Prefix** field, and store the information in a safe place. This prefix controls your endpoint on the Adyen platform.

### Getting the API Key

The steps below assume that the API Key has been previously generated in the Adyen environment. If you need to create them, see the [Adyen](https://docs.adyen.com/) documentation.

1. In the sidebar, click **Developers** and, then, click **API credentials**.
2. Select your API credential.
3. In **Server Settings > Authentication**, select **API key**. 

![Adyenv3_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/configuring-payment-with-adyenv3-in-vtex-sales-app_2.PNG)

<blockquote><ui>4. Click <b>Generate key</b> and store the generated key in a safe location.</ui>

### Configuring a webhook

You need to configure a webhook to allow Adyen to send payment status updates to your VTEX account. For more information, see the Adyen [Webhooks](https://docs.adyen.com/development-resources/webhooks) documentation.

Follow the steps below to configure a webhook:

1. In your [Customer Area](https://ca-test.adyen.com/) on Adyen, go to  **Developers > Webhooks**.
2. Click the blue `+ Webhook` button.
3. In the **Standard Webhook** option, click **Add**.
4. In **General > Description**, add a description for the new webhook. Example: "Webhook Adyen Connector Provider v3".
5. In **General > Server configuration > URL**, enter the URL of your VTEX account. Example: https://{{account}}.myvtex.com/_v3/api/webhook/notification.

![Adyenv3_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/configuring-payment-with-adyenv3-in-vtex-sales-app_3.PNG)

<blockquote><ui>6. Click <b>Apply</b>.</ui>

<blockquote><ui>7. In <b>Additional settings</b>, select all the available options, and click <b>Apply</b> in each tab.</ui>

<blockquote><ui>8. Click <b>Save changes</b>.</ui>

![Adyenv3_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/configuring-payment-with-adyenv3-in-vtex-sales-app_4.PNG)

![Adyenv3_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/configuring-payment-with-adyenv3-in-vtex-sales-app_5.PNG)

![Adyenv3_7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/configuring-payment-with-adyenv3-in-vtex-sales-app_6.PNG)

>ℹ️ If you have several stores, you need to configure a webhook for each of them.

## Configuring AdyenV3 Connector (VTEX Sales App) on VTEX

1. In the VTEX Admin, go to __Store Settings > Payments > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __AdyenV3__ in the search bar and click on the name of the provider.
4. In __Application Key__, fill in the name of your Merchant account (step 3 in the [Getting the Company and Merchant account credentials](#getting-the-company-and-merchant-account-credentials) section).
5. In __Application Token__, fill in the API Key (step 4 in the [Getting the API Key](#getting-the-api-key) section).
6. If you wish to modify the identification name to be displayed for the AdyenV3 provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
7. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
8. In __Live URL prefix__, fill in the prefix available in Adyen customer area (step 2 in the [Getting the Live URL prefix](#getting-the-live-url-prefix) section).
9. In __Company account__, enter the name of your Company account (step 2 in the [Getting the Company and Merchant account credentials](#getting-the-company-and-merchant-account-credentials) section).
10. In __Live POS URL__, fill in endpoints used to access Adyen terminal APIs. Learn more at [Adyen documentation](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api#cloud).
11. The __Client Key__ field is not necessary to fill in, as it is only applicable to other types of online sales channels.
12. In __Auto Capture Settings__, select when you want to capture the payment.
13. Click `Save`.  

## Configuring payment condition

1. In the VTEX Admin, go to **Store Settings > Payments > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click on the `+` button.
3. Click on **Venda Direta Debito** or **Venda Direta Credito**.
4. Under **Process with affiliation**, select the previously configured connector.
5. Activate the condition in the **Status** field.
6. If you want to use an anti-fraud system, select the option **Use anti-fraud solution**.
7. If you want, you can also [configure special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456).
8. Click `Save`.

After completing these steps, the AdyenV3 Connector may take up to 10 minutes to appear as a payment option in your store's VTEX Sales App.
