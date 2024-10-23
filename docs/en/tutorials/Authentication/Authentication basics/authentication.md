---
title: 'Authentication'
id: 21CkKHLKP1o41lUpGhuRUs
status: PUBLISHED
createdAt: 2021-10-25T19:06:37.982Z
updatedAt: 2024-02-26T20:32:47.823Z
publishedAt: 2024-02-26T20:32:47.823Z
firstPublishedAt: 2021-11-08T18:39:50.432Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: authentication
locale: en
legacySlug: authentication-page
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

Authentication is the process of validating a user's identity, which, on VTEX, can be done in three different ways:

* [Login](#login): Verifies and validates the user's identity when accessing an online store or the VTEX Admin.
* [Developing integrations](#developing-integrations): Authenticates requests made to VTEX APIs from integrations with external services. This validation is usually through API keys or user tokens.
* [Developing apps](#developing-apps): Ensures the legitimacy of communication between applications developed with VTEX IO and VTEX APIs. This validation is usually through authentication tokens.

## Login

On VTEX, login authentication occurs in two contexts: in the webstore, when customers log in to access their profile or place an order, and in the Admin, when admin users log in to manage the store's administrative environment.

You need to configure which authentication method will be available in each context. See the available options in the table below:

| Login method | Description | Webstore | Admin |
|---|---|---|---|
| Access code | A random numeric code is sent to the user's email, and they use this code to log in. | Can be enabled | Always enabled |
| Password | The user creates a password and logs in using their email and password. Merchants can choose to [enforce password expiration](#enforcing-password-expiration) after a specific period for Admin users. | Can be enabled | Always enabled. Password expiration can be enabled. |
| Facebook | The user logs in using their Facebook account. Check out the [Configuring login with Facebook and Google](https://help.vtex.com/en/tutorial/configurar-login-com-facebook-e-google--tutorials_513) guide for more information. | Can be enabled | Not available |
| Google | The user logs in using their Google account. Check out the [Configuring login with Facebook and Google](https://help.vtex.com/en/tutorial/configurar-login-com-facebook-e-google--tutorials_513) guide for more information. | Can be enabled | Can be enabled |
| Integration with other ID providers | The user logs in using their account from other external ID providers through an integration. Read the [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) developer guide to learn more. | Can be enabled using the OAuth protocol.  Read the [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2) developer guide to learn more. | Can be enabled using the SAML protocol. Read the [Admin (SAML 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2) developer guide to learn more. |

>ℹ️ At least one of the login methods in the table above must be enabled for the webstore.

>⚠️ You must have a valid admin [user](https://help.vtex.com/en/tutorial/managing-users--tutorials_512) to log in to the VTEX Admin. The [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) and permissions assigned to the user specify which[ resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) they can use in the Admin.

### Enabling login methods

On the **Authentication** page, you can choose which login methods you want to offer for your store's customers and administrative users accessing the Admin.

![Authentication page](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Authentication/Authentication basics/authentication_1.png)

Follow the steps below to enable the desired login methods:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.
2. Click **Account settings > Authentication**.

    You will be redirected to the **Webstore** tab listing the login methods available in your store. In this tab, you can enable the desired customer login methods.

    To configure the login methods in the Admin for administrative users, click the **Admin** tab.

    See the table in the [Login](#login) section to learn about the available login methods and access the documentation explaining how to configure them.

### Enforcing password expiration for Admin users

If the password login option is enabled, you can set Admin user passwords to expire after a specified number of days. To do this, follow the instructions below:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.
2. Click **Account settings > Authentication**.
3. Click the **Admin** tab.
4. In the **Password** row, click` Edit`. 
5. Check the **Enforce password expiration** option.
6. Select a period after which user passwords will become invalid. You can choose **15**, **30**, or **90** days.
7. Click `Save`.

Once the expiration period is reached, Admin users will be required to reset their password when attempting to log in.

## Developing integrations

When developing integrations using VTEX [APIs](https://developers.vtex.com/docs/guides/getting-started), you must provide authentication parameters for the desired operations. See the available methods below:

- **Application keys (appKeys):** [Application keys](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) authenticate requests made to VTEX APIs. Store admins can create keys and associate them with [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc), allowing them to use certain platform[ resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). Learn more in the [API authentication using application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) developer guide.
-	**User tokens:** User tokens authenticate API requests, especially for[ frontend](https://help.vtex.com/en/tracks/store-development--3fHF3GIjK8UugnQKIakpl9/5DTcawNjc5MovtD7HNqURl) applications developed with VTEX IO. Learn how to use them in the [API authentication using user tokens](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) developer guide.

## Developing apps

Authentication tokens (auth tokens) are required for authentication when developing apps on VTEX IO. Learn more in the [App authentication using auth tokens](https://developers.vtex.com/docs/guides/app-authentication-using-auth-tokens) developer guide.
