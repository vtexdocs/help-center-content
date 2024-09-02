---
title: 'Best practices against virtual attacks'
id: 191rpbF7UgrKapVCi1PCDE
status: PUBLISHED
createdAt: 2022-04-06T19:04:13.387Z
updatedAt: 2024-06-18T20:41:01.987Z
publishedAt: 2024-06-18T20:41:01.987Z
firstPublishedAt: 2022-04-06T19:23:22.326Z
contentType: tutorial
productTeam: Reliability
author: 2Gy429C47ie3tL9XUEjeFL
slug: best-practices-against-virtual-attacks
locale: en
legacySlug: best-practices-against-virtual-attacks
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

VTEX offers different protections against possible attacks on stores. Still, there are settings and third-party products that may enhance the security of your operation. This article describes some of these resources:

- [Anti-fraud solution](#anti-fraud-solution)
- [Protection against transaction attacks](#protection-against-transaction-attacks)
- [reCAPTCHA v3 at Checkout](#recaptcha-v3-at-checkout)
- [orderForm settings](#orderform-settings)
- [Disabling password login](#disabling-password-login)

<div class = "alert alert-info">
  <p>The measures in this guide do not entirely eliminate the possibility of an attack but may considerably reduce the likelihood of them happening if properly employed.</p>
</div>

## Anti-fraud solution

Anti-fraud systems specialize in analyzing ecommerce purchases to identify fraudulent transactions. They analyze customers' behavioral data and prevent suspicious purchases from being made.

Learn more about [anti-fraud systems](https://help.vtex.com/en/tutorial/what-is-anti-fraud--69SjFCc4rC6Ii0OMAeYAsG) and how to use them on VTEX.

<div class="alert alert-warning">
  <p>To increase security, set up your anti-fraud solution for all the payment methods available in your store.</p>
</div>

## Protection against transaction attacks

To access the documentation on this topic, insert your VTEX [account name](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC#) below, click the button and login into the Admin panel.
<iframe src="https://help.vtex.com/insertaccountname?id=62oQBmi7UZlYlgb0Ha1hZ3" title="Insert your account name and click the button." frameBorder="0" width="400" height="50"></iframe>

## reCAPTCHA v3 at Checkout

reCAPTCHA is a user verification solution for orders paid by credit or debit card. It prevents the use of malware for fraudulent purposes.

We recommend using [reCAPTCHA v3](https://help.vtex.com/en/tutorial/using-recaptcha-at-checkout--18Te3oDd7f4qcjKu9jhNzP#recaptcha-v3), which uses a quality score instead of pop-up validation and is, therefore, harder to circumvent in such scenarios.

Learn more about how to set up this verification at your store's checkout in the article [reCAPTCHA at checkout](https://help.vtex.com/en/tutorial/using-recaptcha-at-checkout--18Te3oDd7f4qcjKu9jhNzP#recaptcha-v3). To implement reCAPTCHA V3 in a VTEX store, see the [reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha#recaptcha-v3-score) developer's guide.

<div class = "alert alert-info">
reCAPTCHA verification is enabled by default when store customers go through the steps of <a href="https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh#credit-cards">adding credit cards</a>, without having to be configured by the store.
</div>

## orderForm settings

To access the documentation on this topic, insert your VTEX [account name](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) below, click the button and login into the Admin panel.

<iframe src="https://help.vtex.com/insertaccountname?id=7EAqNk48KP2QHnCxu856jT" title="Insert your account name and click the button." frameBorder="0" width="400" height="50"></iframe>

## Disabling password login

If your store is still being attacked even with the mentioned resources enabled, we recommend disabling password login. This measure can be temporarily or permanently enabled, aiming to break the attack automation flow.

To perform this configuration:

1. Go to **Account settings** > **Authentication**.
2. Disable the **password** field.

Learn more about how to [manage authentication methods](https://help.vtex.com/en/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs) for your store.

