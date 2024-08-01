---
title: 'Configuring login with Facebook and Google'
id: tutorials_513
status: PUBLISHED
createdAt: 2017-04-27T22:03:01.743Z
updatedAt: 2023-10-20T19:35:59.221Z
publishedAt: 2023-10-20T19:35:59.221Z
firstPublishedAt: 2017-04-27T23:03:27.844Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: configuring-login-with-facebook-and-google
locale: en
legacySlug: configuring-user-id-with-facebook-and-google
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

On VTEX, it is not necessary to create an account or log in to make a purchase. However, if customers want to change the information provided during their first purchase, they must validate their email address.

1. [Obtain credentials from providers](#obtaining-credentials-from-providers)
2. [Configure login with providers](#configuring-login-with-providers)
3. [Validate the configuration](#validating-the-configuration)

## Obtaining credentials from providers

Before setting up our Google and Facebook login integrations, you need to create OAuth 2.0 credentials (the protocol used for integration) in these services. To do this, follow the instructions in the articles below:

- [Facebook](https://help.vtex.com/en/tutorial/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook)
- [Google](https://help.vtex.com/en/tutorial/registering-a-client-id-and-a-client-secret-for-login-with-google)

## Configuring login with providers

After completing the configuration on Facebook and/or Google, you must configure the login option for the desired provider in the VTEX Admin.  In both cases, you will need the `Client ID` and `Client Secret` from your providers.

1. In the top bar of the VTEX Admin, click your **profile avatar**, indicated by the initial letter of your email address.
2. Click **Account settings > Authentication**.

  You will be redirected to the **Webstore** tab of the **Authentication** page, which lists the login methods available in your store.

  ![List Authentication](//images.ctfassets.net/alneenqid6w5/3Bnb1ifcL7krcXEnAHzxu1/fdb1252e98fd1284278e4c83100ec111/autenticacao-en.png)
3. In the row of the desired login provider, click `Configure`.
4. Complete the form with the `Client ID` and `Client Secret` from the [previous step](#obtaining-credentials-from-providers) and click `Save`.

  ![Facebook OAuth EN](//images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/7daac156505a588b95fc0e90fbc08e2d/1-login-fb-en.PNG)
6. On the **Authentication** page, enable the provider by clicking the toggle switch.

  ![List Authentication Switch On Highlight](//images.ctfassets.net/alneenqid6w5/4devCJpXnMWF3TV6xMDiUT/02ec0a744eb98636917b144e09cc9b3c/switch_On_highlight_EN.png)

## Validating the configuration

After the configuration in the VTEX Admin, we recommend testing the login with the chosen provider through the end URL your users will access to visit your store. When trying to log in, the options for active providers will be displayed.
