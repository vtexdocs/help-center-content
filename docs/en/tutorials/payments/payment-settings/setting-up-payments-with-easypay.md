---
title: 'Setting up payments with easypay'
id: 3xJQqjMIn0ARDI1HcwK88J
status: PUBLISHED
createdAt: 2023-09-18T16:48:21.184Z
updatedAt: 2025-09-24T19:00:57.899Z
publishedAt: 2025-09-24T19:00:57.899Z
firstPublishedAt: 2023-09-18T18:53:57.235Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-easypay
legacySlug: setting-up-payments-with-easypay
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

On VTEX, you can integrate with the easypay payment provider. Your store can sell using easypay, MBWay, and MultiBanco through this provider.

To use easypay, you need to:

- [Install the easypay app](#install-the-easypay-app)
- [Configure the easypay app](#configure-the-easypay-app)
- [Configure the easypay webhook](#configure-the-easypay-webhook)
- [Configure the easypay affiliation](#configure-the-easypay-affiliation)
- [Configure payment with Apple Pay on easypay (optional)](#configure-payment-with-apple-pay-on-easypay-optional)     

> ⚠️ If you are a marketplace or seller, read [Configuring payment with easypay in a marketplace](/en/tutorial/setting-up-payments-with-easypay-marketplace--3YllWiITcPEOpteuToEdO7) or [Configuring payment with easypay seller](/en/tutorial/setting-up-payments-with-easypay-seller--5mYMCM1tiRiZO6PozuUncE).

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
- [easypay checkout customization (required)](#easypay-checkout-customization)
- [Sandbox mode](#sandbox-mode)

![easypay_pt_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_1.png)

> ⚠️ You must set up the following configurations in the [easypay environment](https://backoffice.easypay.pt/). easypay controls these settings, therefore, VTEX does not guarantee that the steps below will be permanently updated. Use this document as a reference and check your [easypay environment](https://backoffice.easypay.pt/) for up-to-date information.

### easypay credentials

The information in this section must be completed.

__Key ID e Key Value__: easypay key value and ID.

<blockquote><ui>1. In the [easypay environment](https://backoffice.easypay.pt/), click the easypay logo in the top left corner of the screen and the arrow of the desired account.</ui>

![easypay_pt_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_2.PNG)

<blockquote><ui>2. Go to **Web Services > Configuration API 2.0 > Keys**.</ui>

![easypay_en_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_3.png)

<blockquote><ui>3. Copy and save the **ID** and **Key** information.</ui>

![easypay_en_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_4.png)

__Merchant account UID__: identification of the merchant account where purchase amounts from store sales will be deposited. If there is no separate merchant account, you can use the "Account UID" of the payment account.

<blockquote><ui>1. In the [easypay environment](https://backoffice.easypay.pt/), click the easypay logo in the top left corner of the screen, then click the arrow on the "MERCHANT 1" account.</ui>

![easypay_pt_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_5.PNG)

<blockquote><ui>2. Copy and save the **Account UID** information.</ui>

![easypay_en_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_6.png)

__Margin account UID__: identification of the margin account. 

> ℹ️ This field should only be completed if the store is a marketplace and splits payments. Learn more in the [Configuring payment with easypay in a marketplace](/en/tutorial/setting-up-payments-with-easypay-marketplace--3YllWiITcPEOpteuToEdO7) article.

__Refund account ID and Refund account key__: If there is no specific refund account, the __Key ID__ value must be entered in the __Refund account ID__ field, and the __Key value__ in the __Refund account key__.

### Payment

In this section, you must indicate whether your store will use asynchronous and/or synchronous payments. See the easypay documentation to check the available [payment methods](https://docs.quality-utility.aws.easypay.pt/concepts/payment-methods) and their identification [acronyms](https://docs.quality-utility.aws.easypay.pt/checkout/reference).

![easypay_en_7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_7.png)

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

### easypay checkout customization

easypay has a native checkout layout configured in the app. See below:

![easypay_en_8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_8.png)

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

<blockquote><ui>1. In the [easypay environment](https://backoffice.easypay.pt/), click the easypay logo in the top left corner of the screen, then click the arrow of the desired account.</ui>

![easypay_pt_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_9.PNG)

<blockquote><ui>2. Go to **Web Services > URL Configuration**.</ui>

<blockquote><ui>3. In **URL: Notify**, use the link below, adding the name of your store.</ui>

`https://{your-account-name}.myvtex.com/_v/easypaypartnerpt.payment-provider-easypay/webhook`

![easypay_en_9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/setting-up-payments-with-easypay_10.png)

<blockquote><ui>4. Click **Submit**.</ui>

## Configure the easypay affiliation

To configure the easypay affiliation, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __easypay__ in the search bar and click on the name of the provider.
4. Complete the __App Key__ and __App Token__ fields with your easypay account information.
5. If you wish to modify the identification name to be displayed for the easypay provider on the VTEX Admin screen, enter the information in the __Name__ field in __Basic Information__.
6. In __Payment Control__, select whether you want to activate the provider in a test environment by clicking __Enable test mode__.
7. If you want to use [payment split](/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) in your store, select the option __Enable payout split and send payment recipients__ and indicate the __Accountable for payment processing charges__ and __Accountable for chargebacks__ (marketplace, sellers or marketplaces and sellers).
8. Click `Save`.

## Configure payment with Apple Pay on easypay (optional) 

To process payments with Apple Pay on easypay, you must first perform configurations to enable your store in the Apple Pay environment. Learn more at [Setting up Merchant ID in Apple Pay](https://developers.vtex.com/docs/guides/setting-up-merchant-id-in-apple-pay).    

To configure other payment methods that easypay will process, read the [Configuring payment conditions](/en/tutorial/how-to-configure-payment-conditions) article.

To set special conditions for payment methods, read [Configuring payment special conditions](/en/tutorial/special-conditions--tutorials_456).

After following the instructions, it can take up to 10 minutes for the easypay connector to be displayed as a payment option at your store checkout.  

