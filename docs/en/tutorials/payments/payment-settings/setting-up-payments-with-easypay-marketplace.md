---
title: 'Setting up payments with easypay marketplace'
id: 3YllWiITcPEOpteuToEdO7
status: PUBLISHED
createdAt: 2023-09-19T12:04:31.528Z
updatedAt: 2025-02-20T21:56:26.715Z
publishedAt: 2025-02-20T21:56:26.715Z
firstPublishedAt: 2023-09-19T12:05:03.795Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-easypay-marketplace
legacySlug: setting-up-payments-with-easypay-marketplace
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

On VTEX, you can integrate with the easypay payment provider. This connector enables your store to sell using easypay, MBWay, and MultiBanco.

To use the easypay affiliation in your marketplace, you need to:

- [Install the easypay app](#install-the-easypay-app)
- [Configure the easypay app](#configure-the-easypay-app)
- [Configure the easypay webhook](#configure-the-easypay-webhook)
- [Configure the easypay affiliation](#configure-the-easypay-affiliation)  

> ⚠️ If your store is not a marketplace, read [Setting up payment with easypay](/en/tutorial/setting-up-payments-with-easypay--3xJQqjMIn0ARDI1HcwK88J) or [Setting up payments with easypay seller](/en/tutorial/setting-up-payments-with-easypay-seller--5mYMCM1tiRiZO6PozuUncE).

## Install the easypay app

To install the easypay app, follow the steps below:

1. In the [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), run the command `vtex login accountname` to log in to your account.
2. Install the easypay app using the `vtex install easypaypartnerpt.payment-provider-easypay` command. 

## Configure the easypay app

After installing the easypay app, you need to configure it. To access the settings screen, follow the steps below:

1. In the VTEX Admin, go to __Extensions Hub > App Management__, or type __App Management__ in the search bar at the top of the page.
2. Find the __Easypay Payment Provider__ app and click __Settings__.

Configuration is divided in four sections:

- [easypay credentials (required)](#easypay-credentials)
- [Payment (required)](#payment)
- [Customizing the easypay checkout (required)](#customizing-the-easypay-checkout)
- [Sandbox mode](#sandbox-mode)

![easypay_pt_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_1.png)

> ⚠️ You must set up the following configurations in the [easypay environment](https://backoffice.easypay.pt/). easypay controls these settings, therefore, VTEX does not guarantee that the steps below will be permanently updated. Use this document as a reference and check your [easypay environment](https://backoffice.easypay.pt/) for up-to-date information.

### easypay credentials

The information in this section must be completed.

__Key ID e Key Value__: easypay key value and ID.

<blockquote><ui>1. In the [easypay environment](https://backoffice.easypay.pt/), click the easypay logo in the top left corner of the screen and the arrow of the marketplace account.</ui>

![easypay_pt_10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_2.PNG)

<blockquote><ui>2. Go to **Web Services > Configuration API 2.0 > Keys**.</ui>

<blockquote><ui>3. In the **Alias** menu, **Create Payment Details** option, click **Keys**.</ui>

![easypay_en_11](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_3.png)

<blockquote><ui>4. Copy and save the **ID** and **Key** information. To create a new key, click **+ New**.</ui>

![easypay_en_12](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_4.png)

__Merchant account UID__: identification of the merchant account where purchase amounts from store sales will be deposited. If there is no separate merchant account, you can use the "Account UID" of the payment account.

<blockquote><ui>1. In the [easypay environment](https://backoffice.easypay.pt/), click the easypay logo in the top left corner of the screen, then click the arrow on the "MERCHANT 1" account.</ui>

![easypay_pt_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_5.PNG)

<blockquote><ui>2. Copy and save the **Account UID** information.</ui>

![easypay_en_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_6.png)

__Margin account UID__: identification of the margin account. 

1. In the side menu of the [easypay environment](https://backoffice.easypay.pt/), click __Beneficiary__.
2. Copy the information and save the __Account UID__ information available in __Margin Account__.

![easypay_en_13](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_7.png)

__Refund account ID and Refund account key__: easypay refund keys ID and value.

<blockquote><ui>1. In the [easypay environment](https://backoffice.easypay.pt/) side menu, go to **Web Services > Configuration API 2.0 > Keys**.</ui>

<blockquote><ui>2. In the **Alias** menu, **Margin Account**, click **Keys**.</ui>

![easypay_en_14](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_8.png)

<blockquote><ui>3. Click **+ New**.</ui>

![easypay_en_15](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_9.png)

<blockquote><ui>4. Complete the **Name** field with the **Refund Account**.</ui>

![easypay_en_16](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_10.png)

<blockquote><ui>5. Click **Save**.</ui>

<blockquote><ui>6. Copy and save the **ID** and **Key** information.</ui>

![easypay_pt_17](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_11.png)

> ⚠️ Refunds are debited directly from a marketplace account. Later, the marketplace must request the refunded amount from the seller.

### Payment

In this section, you must indicate whether your store will use asynchronous and/or synchronous payments. See the easypay documentation to check the available [payment methods](https://docs.quality-utility.aws.easypay.pt/concepts/payment-methods) and their identification [acronyms](https://docs.quality-utility.aws.easypay.pt/checkout/reference).

![easypay_en_7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_12.png)
__Accepted asynchronous payment types__: asynchronous payment methods available to the customer. Only enter the acronyms of the asynchronous payment types, separated by commas without periods or spaces.

Example:

| Correct | Incorrect |
| ---------------- | ---------------- |
| mb,dd,vi | mb, dd, vi |

> ⚠️ If you complete this field, you must also complete the **Expiration days for asynchronous payments** field.

__Accepted synchronous payment types__: synchronous payment methods available to the customer. Only enter the acronyms of the synchronous payment types, separated by commas without periods or spaces.

Example:

| Correct | Incorrect |
| ---------------- | ---------------- |
| cc,mbw | cc, mbw |

__Expiration days for asynchronous payments__: expiration period, in days, for asynchronous payments. Only enter the desired number of days.

Example:

| Correct | Incorrect |
| ---------------- | ---------------- |
| 10 | 10 days, Dec, or 05/10/2023 |

### Customizing the easypay checkout

easypay has a native checkout layout configured in the app. See below:

![easypay_en_8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_13.png)

If you want to customize easypay's native checkout, complete one or more fields in this section:

- __Checkout logo URL__: logo displayed at the easypay checkout. Enter the link to the image you want to use
- __Checkout background color__: background color. Enter the HEX code of the desired color. Native default: #ffffff.
- __Checkout accent color__: highlight color, button pattern, and input borders. Enter the HEX code of the desired color. Native default: #0d71f9.
- __Checkout error color__: error message color. Enter the HEX code of the desired color. Native default: #ff151f.
- __Checkout input background color__: input background color. Enter the HEX code of the desired color. Native default: transparent.
- __Checkout input border color__: input border color. Enter the HEX code of the desired color. Native default: the same color used in the __accent color__.
- __Checkout input border radius__: allows you to define the rounded borders of the inputs. Enter the desired value in pixels (numbers only). Native default: 50 pixels.

Example:

| Correct | Incorrect |
| ---------------- | ---------------- |
| 35 | 35px |

- __Checkout button background color__: background color of the buttons. Enter the HEX code of the desired color. Native default: the same color used in the __accent color__.
- __Checkout button border radius__: allows you to set the rounded borders of the buttons. Enter the desired value in pixels (numbers only). Native default: 50 pixels.

Example:

| Correct | Incorrect |
| ---------------- | ---------------- |
| 30 | 30px |

- __Checkout button box shadow__: option to enable or disable the button shadow.
- __Checkout font family__: fonts used in texts. Enter the generic family name, web-safe font, or font link. Native default: Overpass. Example, correct: sans-serif, verdana, ou https://fonts.gstatic.com/s/overpass/v12/qFda35WCmI96Ajtm83upeyoaX6QPnlo6_PPbM5qKl8Kuo8AzesE.woff2

- __Checkout base font size__: allows you to set the font size in the root element. Enter the desired value in pixels (numbers only). Native default: 10 pixels.

Example:

| Correct | Incorrect |
| ---------------- | ---------------- |
| 11 | 11px |

> ⚠️ Do not use fonts over 12 pixels, as they can blur the layout.</b>

### Sandbox mode

To enable the development test environment, select the __Enable sandbox mode__ option. You must use test credentials.

After completing the configuration fields, click __Save__.

## Configure the easypay webhook

To configure the easypay webhook, follow the steps below:

<blockquote><ui>1. In the [easypay environment](https://backoffice.easypay.pt/), click the easypay logo in the top left corner of the screen, then click the arrow of the desired marketplace account.</ui>

![easypay_pt_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_14.PNG)

<blockquote><ui>2. Go to **Web Services > URL Configuration**.</ui>

<blockquote><ui>3. In **URL: Notify**, use the link below, adding the name of your store.</ui>

`https://{your-account-name}.myvtex.com/_v/easypaypartnerpt.payment-provider-easypay/webhook`

![easypay_en_9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay-marketplace_15.png)

> ⚠️ If there is more than one payment account in your marketplace, add a link to each of the existing accounts.

<blockquote><ui>4. Click **Submit**.</ui>

## Configure the easypay affiliation

To configure the easypay affiliation, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Gateway Affiliations__ tab, click the `+` button.
3. Click the __easypay__ connector.
4. Complete the __Application Key__ and __Application Token__ fields with your easypay account information.
5. In __Payment Settlement__, select the __Use Payment Behavior Recommended by Payment Processor__ option.
6. In __Enable payout split and sending payment recipients?__, select __Yes__.
7. Click `Save`.

To configure the payment methods that easypay will process, read the [Configuring payment conditions](/en/tutorial/how-to-configure-payment-conditions) article.

To set special conditions for payment methods, read [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456).

After following the instructions, it can take up to 10 minutes for the easypay connector to be displayed as a payment option at your store checkout.  
(https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).
