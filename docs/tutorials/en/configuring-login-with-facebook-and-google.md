---
title: Configuring login with Facebook and Google
id: tutorials_513
status: PUBLISHED
createdAt: 2017-04-27T22:03:01.743Z
updatedAt: 2023-02-08T14:32:57.255Z
publishedAt: 2023-02-08T14:32:57.255Z
firstPublishedAt: 2017-04-27T23:03:27.844Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: configuring-login-with-facebook-and-google
legacySlug: configuring-user-id-with-facebook-and-google
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

On VTEX, it is not necessary to create an account or log in to make a purchase. However, if customers wish to make changes to the information provided on their first purchase, they have to confirm that they own the email account in question.

The VTEX platform natively offers login options with Email & Password and with an Access Code that is sent to the customer's email. We also offer optional native integrations with Google and Facebook, which need to be configured.

## Obtain OAuth 2.0 credentials

Before configuring our login integration with Google and Facebook, you need to create OAuth 2.0 (protocol used for integration) credentials on these services. To do this, follow the instructions provided in the articles below:

- [Facebook](https://help.vtex.com/en/tutorial/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook).
- [Google](https://help.vtex.com/en/tutorial/registering-a-client-id-and-a-client-secret-for-login-with-google).

## Configure these login options in your store

Once you have completed the previous step on Facebook and/or Google, you must configure the login options for these two providers in your store. In both cases, you will need to have in hands your `Client ID` and `Client Secret`.

1. Access the VTEX ID module from the store administration dashboard in the Account Settings > Authentication menu;
  ![List Authentication](//images.ctfassets.net/alneenqid6w5/3Bnb1ifcL7krcXEnAHzxu1/7c232ba07cbf687813319f27328468f7/autenticacao_EN.png)
2. Select the provider and click on **EDIT**;
3. Fill out the form with the `Client ID` and the `Client Secret`;
  ![Facebook OAuth EN](//images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/06b29f9c839316df31c736a315ba1786/facebook_EN.png)
4. Activate providers using theirs toggle switches.
  ![List Authentication Switch On Highlight](//images.ctfassets.net/alneenqid6w5/4devCJpXnMWF3TV6xMDiUT/02ec0a744eb98636917b144e09cc9b3c/switch_On_highlight_EN.png)

## Validate the configuration

Once everything has been set up, you can test this configuration. We recommend that you do this through the final URL that your users will use to access your store. When trying to log in, the options regarding the active providers should be available, and the process should be completed without any problems.
