---
title: 'Authentication and security'
createdAt: 2020-01-07T21:12:36.958Z
updatedAt: 2026-05-21T19:06:00.000Z
contentType: trackArticle
productTeam: Identity
slugEN: authentication-and-security
locale: en
trackSlugEN: accounts-and-permissions
order: 3
---

The security of your VTEX account depends on proper authentication settings for administrative users (Admin) and clients (online store).

## Available authentication methods

VTEX offers different login methods that can be enabled based on your needs:

| Method                                      | Admin          | Online store   |
| ------------------------------------------- | -------------- | -------------- |
| Access code                                 | Always enabled | Optional       |
| Password                                    | Always enabled | Optional       |
| 2FA (required for Admin) | ✅ Required     | Not applicable |
| Google                                      | Optional       | Optional       |
| Facebook                                    | Not available  | Optional       |
| SAML 2.0                    | Optional       | Not available  |
| OAuth 2.0                   | Not available  | Optional       |

**Where to configure:** _Account settings > Authentication_

> ℹ️ Learn more in [Authentication](https://help.vtex.com/docs/tutorials/authentication).

## Two-factor authentication (2FA)

> ❗ Two-factor authentication (2FA) is **required** to log in to Admin using email and password.

2FA adds a second layer of security, requiring a temporary code generated on your phone in addition to your password.

The available methods are:

- **Authentication app (Recommended)**: Use Google Authenticator to generate codes on your phone. Works offline and is more secure.
- **SMS**: Receive codes by text message. Depends on your phone company.

The code is requested every 10 days on the same browser.

> ℹ️ Learn more in [Enabling two-factor authentication login](https://help.vtex.com/docs/tutorials/enabling-2-factor-authentication-login).

> ℹ️ To recover access, see [Resetting VTEX Admin password](https://help.vtex.com/docs/tutorials/resetting-vtex-admin-password).

## Social login (Google and Facebook)

Allow users to log in with Google or Facebook accounts, providing convenience and using the security of these providers.

- **Google**: Available for Admin and online store
- **Facebook**: Only available for online store

**Configuration:** Requires creating credentials (Client ID and Client Secret) with the providers and entering them in the Admin.

> ℹ️ Learn more in [Configuring login with Facebook and Google](https://help.vtex.com/docs/tutorials/configuring-login-with-facebook-and-google).

## Password expiration

Set passwords to expire automatically after 15, 30, or 90 days, enforcing periodic renewal.

**Where to configure:** _Account settings > Authentication > Password > Edit_

## Advanced integrations

**SAML 2.0 (Admin)**  
Integrate with corporate identity providers (Azure AD, Okta, etc.)

> Learn more in [Admin (SAML 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-admin-saml2).

**OAuth 2.0 (Online store)**  
Integrate with external providers for customized login experiences.

> Learn more in [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2).

## Best practices

- Use app-based 2FA, not SMS
- Configure password expiration
- Require strong passwords (at least 8 characters, numbers, uppercase and lowercase letters)
- Enable only necessary methods
- Review access regularly

## Learn more

- [Authentication](https://help.vtex.com/docs/tutorials/authentication)
- [Enabling two-factor authentication login](https://help.vtex.com/docs/tutorials/enabling-2-factor-authentication-login)
- [Configuring login with Facebook and Google](https://help.vtex.com/docs/tutorials/configuring-login-with-facebook-and-google)
- [Resetting VTEX Admin password](https://help.vtex.com/docs/tutorials/resetting-vtex-admin-password)
- [Setting up personal data on the user's screen](https://help.vtex.com/docs/tutorials/setting-up-personal-data-on-the-users-screen)
