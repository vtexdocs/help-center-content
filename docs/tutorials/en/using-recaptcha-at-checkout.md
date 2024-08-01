---
title: 'Using reCAPTCHA at Checkout'
id: 18Te3oDd7f4qcjKu9jhNzP
status: PUBLISHED
createdAt: 2021-08-03T12:53:12.155Z
updatedAt: 2023-12-11T22:07:06.233Z
publishedAt: 2023-12-11T22:07:06.233Z
firstPublishedAt: 2021-08-03T13:51:19.441Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slug: using-recaptcha-at-checkout
locale: en
legacySlug: using-recaptcha-at-checkout
subcategory: 3shmvletqbB206RqbY2vYQ
---


reCAPTCHA is a solution for user validation on orders that will be paid by credit or debit card. It anticipates the use of malware for fraudulent purposes, preventing access by fake users. 

We recommend enabling it to protect the creation and payment of orders in your store.

reCAPTCHA will be required according to the option set for the store via the [checkout configuration API.](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) For more information, read our article on [using reCAPTCHA for integrations.](https://developers.vtex.com/vtex-rest-api/docs/recaptcha)

Before enabling it, please pay attention to:

* **Interface adaptation:** when enabling the feature, you must adapt your store’s order creation interface (desktop and mobile). Otherwise, order creation will be affected. Learn more about how to adapt the interface in [reCAPTCHA's integration guide.](https://developers.vtex.com/vtex-rest-api/docs/recaptcha)
* **Consequences for the account:** enabling the feature implies that it will be used in the entire account, including all stores and sub-accounts.
* **Performing tests:** you must use the [Beta environment](https://help.vtex.com/en/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu) with [Checkout V6](https://help.vtex.com/en/tutorial/ativar-o-checkout-v6--7qVqv3ptRvpVVplrvg8ruH) to test the feature without impacting your store in production.

## Application rule

The rule for applying reCAPTCHA on purchases made with credit or debit cards may have[ different configurations.](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm)

VTEX recommends the [VTEX criteria](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) option. An algorithm will be applied to decide the need for the reCAPTCHA challenge. It is maintained by VTEX and is more or less comprehensive according to the behavior patterns observed.

It is focused on user experience and aims to minimize the volume of use, while still providing the appropriate protection.  Sessions that are deemed trusted are exempt from reCAPTCHA. It is only enabled for potentially malicious sessions.

## reCAPTCHA versions

VTEX is integrated with reCAPTCHA enterprise, which offers two validation approaches: checkbox (equivalent to [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display)) and score-based (equivalent to [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)). Check the table below to see which version applies to your operation.

| **Store details**           | **reCAPTCHA version** |
|-----------------------------|-----------------------|
| Native VTEX storefront      | Checkbox (v2)                    |
| Own storefront - web        | Checkbox (v2) or Score-based (v3)              |
| Own storefront - mobile app | Score-based (v3)                    |

## reCAPTCHA v2

You can use reCAPTCHA checkbox (v2). So, when applicable, the user should click the <i class="far fa-check-square"></i> _(checkbox),_ and the validation challenge will only be displayed if Google suspects the user. See below for more details on the shopping experience.

### Shopping experience with VTEX Criteria and reCAPTCHA v2

The shopping experience with debit or credit cards tends to follow the flow below. It minimizes the occurrence of some types of fraud and attacks with minimal friction for the user.
![reCAPTCHA scenariosEN](//images.ctfassets.net/alneenqid6w5/3gA55NZPuxpKOxCZxvbhgj/21964354890c244b42bc479983335b9d/reCAPTCHA_scenarios__1_.jpg)
As shown in the image above, there are different possible results in this flow:

1. If the VTEX Criteria algorithm does not consider the session suspicious, the platform proceeds normally with the purchase.

2. If the session is considered suspicious, the interface will display the reCAPTCHA Checkbox for the customer to select it. If reCAPTCHA does not consider the behavior suspicious when the Checkbox is selected, the purchase proceeds normally.
![newCaptchaAnchor](//images.ctfassets.net/alneenqid6w5/2lv7PfOmkakDcSkNbAITtK/10ed6d11b50a947a6186b549e27c4723/newCaptchaAnchor.gif)

3. If reCAPTCHA considers the behavior suspicious, the interface will display the challenge.
![desafio recaptcha](//images.ctfassets.net/alneenqid6w5/3wg7F9nmxJwZ8jxUJKb8OT/3156077db9ee243bea20308c304d183c/desafio_recaptcha.png)

4. If the challenge is successfully solved, the platform proceeds with the purchase. Otherwise, the behavior is considered compatible with that of a bot and the platform does not conclude the purchase.

## reCAPTCHA v3

Score-based reCAPTCHA ([v3](https://developers.google.com/recaptcha/docs/v3)) does not interrupt the user experience in your store. It checks the interactions on the site and returns a score between `1.0` (most likely a regular interaction) and `0.0` (most likely a bot).

When configuring score-based reCAPTCHA for your VTEX store, you have the option to set a minimum score for [each added key](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#getting-the-recaptcha-key-for-mobile-implementations) and a [minimum score for your store](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#recaptcha-v3-score). Possible values are `0.1`, `0.3`, `0.7`, and `0.9`.

The priority for applying the minimum score for a given order is:

```
Key score > Account score > VTEX default score (0.7)
```

If you set a minimum score for your key and your account, the key score will be applied. However, if you do not set any score, VTEX will apply the default value of `0.7`.

Interactions that return a value less than the applicable minimum will not be able to make a purchase.

To configure reCAPTCHA and set minimum scores for keys or accounts, please contact your development team and see the [Integration with reCAPTCHA guide](https://developers.vtex.com/docs/guides/recaptcha#recaptcha-v3-score).
