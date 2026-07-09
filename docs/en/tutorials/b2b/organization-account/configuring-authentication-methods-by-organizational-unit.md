---
title: 'Configuring authentication methods by organizational unit'
createdAt: '2026-05-21T14:37:00.000Z'
updatedAt: '2026-05-21T14:37:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: configuring-authentication-methods-by-organizational-unit
locale: en
---

> ⚠️ This feature is only available for stores using the [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), which is currently available for selected accounts.

In B2B, each organizational unit can have its own authentication settings. This allows different branches or divisions within the same organization to use different login methods based on their needs.

## Available settings

Authentication settings are divided into two main groups: **User identification** and **Authentication methods**. Each group can enable one or more options, depending on the organization's needs.

### User identification

Defines the identifiers the user can enter when starting the login (username, email, or both).

| Identifier | Description |
| - | - |
| **Username** | The user enters their username during login. |
| **Email** | The user provides their email address to start the login process. |

### Authentication methods

Defines how the user will be authenticated after identification (by password, external identity provider, or both).

| Method | Description |
| - | - |
| **Password** | The user is authenticated with a password registered on the VTEX platform. |
| **External IdP (SSO)** | The user is redirected to an external identity provider configured by the store admin for authentication via Single Sign-On. Learn more in [Enabling login for the organization via external identity provider (IdP)](https://help.vtex.com/en/docs/tutorials/enable-login-for-the-organization-via-an-external-identity-provider-idp). |

You can enable one or more options in each group. Disabled options are unavailable to members of the organizational unit.

## Prerequisites

- Have the **Organizational Unit Admin** role in the buyer organization.
- To enable login via an external IdP, the store admin must have previously configured the identity provider in the VTEX Admin. Learn more at [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) and [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2).
- Have the app [vtex.login-alternative-key](https://developers.vtex.com/docs/apps/vtex.login-alternative-key) installed in the store.

## Configuring authentication methods in the organization account

To configure authentication methods directly from the [organization account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), follow the steps below:

1. Go to the store using a browser and log in with your user account.
2. In the top menu, click **Company**. The organization dashboard will be displayed.
3. Click **Manage**.
4. If you want to configure the main organization's methods, proceed to step 5. If you want to configure a child organizational unit, click **Organizational Units** and then the name of the unit.
5. Click the **⋮** menu and then **Authentication**.
6. In the **Authentication** modal, configure the desired options:

   - In **User identification**, check the identifiers that members can use to start the login (**username**, **email**, or both).
   - In **Authentication methods**, check the available authentication methods (**password**, **external IdP**, or both). Uncheck any that shouldn't be available.
7. Click **Save**.

## Configuring authentication methods via API

You can also manage authentication methods by organizational unit via API. The available endpoints are:

| Method | Endpoint | Description |
| - | - | - |
| `GET` | [Get organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#get-/api/vtexid/organization-units/-unitId-/settings) | Checks the authentication methods configured for an organizational unit. |
| `POST` | [Set organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#post-/api/vtexid/organization-units/-unitId-/settings) | Defines the authentication methods for an organizational unit. |
| `PATCH`  | [Update organization unit authentication settings](https://developers.vtex.com/docs/api-reference/vtex-id-api#patch-/api/vtexid/organization-units/-unitId-/settings) | Partially updates the authentication methods of an organizational unit. |
| `DELETE` | [Delete organization unit authentication setting](https://developers.vtex.com/docs/api-reference/vtex-id-api#delete-/api/vtexid/organization-units/-unitId-/settings) | Deletes an authentication method from an organizational unit. |

## Learn more

- [Enabling login for the organization via external identity provider (IdP)](https://help.vtex.com/en/docs/tutorials/enable-login-for-the-organization-via-an-external-identity-provider-idp)
- [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide)
- [Webstore (OAuth 2.0)](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2)
