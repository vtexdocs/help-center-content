---
title: 'Best practices against virtual attacks'
id: 191rpbF7UgrKapVCi1PCDE
status: PUBLISHED
createdAt: 2022-04-06T19:04:13.387Z
updatedAt: 2022-06-10T14:24:42.121Z
publishedAt: 2022-06-10T14:24:42.121Z
firstPublishedAt: 2022-04-06T19:23:22.326Z
contentType: tutorial
productTeam: Reliability
author: 2Gy429C47ie3tL9XUEjeFL
slug: best-practices-against-virtual-attacks
legacySlug: best-practices-against-virtual-attacks
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

VTEX offers different protections against possible attacks on stores. Still, there are settings and third-party products that may enhance the security of your operation. This article describes some of these resources:

- [Anti-fraud solution](#anti-fraud-solution)
- [Protection against transaction attacks](#protection-against-transaction-attacks)
- [Using reCAPTCHA at Checkout](#using-recaptcha-at-checkout)
- [Disabling password login](#disabling-password-login)

 <div class = "alert alert-info">
These measures do not entirely eliminate the possibility of an attack, but may considerably reduce the likelihood, if properly employed.
</div>

## Anti-fraud solution

An anti-fraud solution is a system that specializes in online purchase analysis with the aim of identifying fraudulent operations. This system analyzes buyer behavioral data in ecommerce operations and prevents suspicious purchases from being made.

Learn more about [anti-fraud systems](https://help.vtex.com/en/tutorial/what-is-anti-fraud#) and how to integrate them with the VTEX platform.

<div class="alert alert-warning">
To increase security, set up your anti-fraud solution for all the payment methods available in your store.
</div>

## Protection against transaction attacks

To access the documentation on this topic, insert your VTEX [account name](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC#) below, click the button and login into the Admin panel.
<iframe src="https://help.vtex.com/insertaccountname?id=62oQBmi7UZlYlgb0Ha1hZ3" title="Insert your account name and click the button." frameBorder="0" width="400" height="50"></iframe>

## Using reCAPTCHA at checkout

reCAPTCHA is a user verification solution for orders paid by credit or debit card. It prevents the use of malware for fraudulent purposes.

Learn more about how to set up this verification at your store's checkout in the article [Using reCAPTCHA at checkout](https://help.vtex.com/en/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP#).

<div class = "alert alert-info">
reCAPTCHA verification is enabled by default when store customers go through the steps of <a href=tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh#cartoes>adding credit cards</a>, without having to be configured by the store.
</div>

## Disabling password login

If your store is still being attacked even with the mentioned resources enabled, we recommend disabling password login. This measure can be temporarily or permanently enabled, aiming to break the attack automation flow.

To perform this configuration:
1. Go to **Account settings** > **Authentication**.
2. Disable the **password** field.

Learn more about how to [manage authentication methods](https://help.vtex.com/en/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs#) for your store.

