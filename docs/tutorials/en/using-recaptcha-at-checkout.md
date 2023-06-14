---
title: 'Using reCAPTCHA at Checkout'
id: 18Te3oDd7f4qcjKu9jhNzP
status: PUBLISHED
createdAt: 2021-08-03T12:53:12.155Z
updatedAt: 2023-03-21T17:52:28.440Z
publishedAt: 2023-03-21T17:52:28.440Z
firstPublishedAt: 2021-08-03T13:51:19.441Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slug: using-recaptcha-at-checkout
locale: en
legacySlug: using-recaptcha-at-checkout
subcategory: 3shmvletqbB206RqbY2vYQ
---


ReCAPTCHA is a solution for user validation on orders that will be paid by credit or debit card. It anticipates the use of malware for fraudulent purposes, preventing access by fake users. 

To enhance security, VTEX provides [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) checkbox and recommends that customers enable it to protect order placement and payments. This version of reCAPTCHA is optimized. The user only has to select the checkbox, and will only be presented with the validation challenge if Google suspects them.

ReCAPTCHA will be required according to the option set for the store via the [checkout configuration API.](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) For more information, read our article on [using reCAPTCHA for integrations.](https://developers.vtex.com/vtex-rest-api/docs/recaptcha)

Before enabling it, please pay attention to:

* **Interface adaptation:** when enabling the feature, you must adapt your store’s order creation interface (desktop and mobile). Otherwise, order creation will be affected. Learn more about how to adapt the interface in [reCAPTCHA's integration guide.](https://developers.vtex.com/vtex-rest-api/docs/recaptcha)
* **Consequences for the account:** enabling the feature implies that it will be used in the entire account, including all stores and sub-accounts.
* **Performing tests:** you must have a [Beta environment](https://help.vtex.com/en/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu) and use [Checkout V6](https://help.vtex.com/en/tutorial/ativar-o-checkout-v6--7qVqv3ptRvpVVplrvg8ruH) to test the feature.

## Application rule

The rule for applying reCAPTCHA on purchases made with credit or debit cards may have[ different configurations.](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm)

VTEX recommends the [VTEX criteria](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) option. An algorithm will be applied to decide the need for the reCAPTCHA challenge. It is maintained by VTEX and is more or less comprehensive according to the behavior patterns observed.

It is focused on user experience and aims to minimize the volume of use, while still providing the appropriate protection.  Sessions that are deemed trusted are exempt from reCAPTCHA. It is only enabled for potentially malicious sessions.

## Shopping experience with VTEX Criteria

The shopping experience with debit or credit cards tends to follow the flow below. It minimizes the occurrence of some types of fraud and attacks with minimal friction for the user.
![reCAPTCHA scenariosEN](https://images.ctfassets.net/alneenqid6w5/3gA55NZPuxpKOxCZxvbhgj/21964354890c244b42bc479983335b9d/reCAPTCHA_scenarios__1_.jpg)
As shown in the image above, there are different possible results in this flow:

1. If the VTEX Criteria algorithm does not consider the session suspicious, the platform proceeds normally with the purchase.

2. If the session is considered suspicious, the interface will display the reCAPTCHA Checkbox for the customer to select it. If reCAPTCHA does not consider the behavior suspicious when the Checkbox is selected, the purchase proceeds normally.
![newCaptchaAnchor](https://images.ctfassets.net/alneenqid6w5/2lv7PfOmkakDcSkNbAITtK/10ed6d11b50a947a6186b549e27c4723/newCaptchaAnchor.gif)

3. If reCAPTCHA considers the behavior suspicious, the interface will display the challenge.
![desafio recaptcha](https://images.ctfassets.net/alneenqid6w5/3wg7F9nmxJwZ8jxUJKb8OT/3156077db9ee243bea20308c304d183c/desafio_recaptcha.png)

4. If the challenge is successfully solved, the platform proceeds with the purchase. Otherwise, the behavior is considered compatible with that of a bot and the platform does not conclude the purchase.

