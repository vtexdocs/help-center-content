---
title: 'API keys for integrations'
createdAt: 2020-01-07T20:16:48.764Z
updatedAt: 2026-05-21T19:06:00.000Z
contentType: trackArticle
productTeam: Identity
slugEN: api-keys-for-integrations
locale: en
trackSlugEN: accounts-and-permissions
order: 4
---

To connect your VTEX store with external systems (ERPs, marketing tools, management platforms), use **API keys** to authenticate these integrations securely.

API keys are credentials that allow external systems to access the VTEX APIs. Each key consists of:

- **API key**: Public identifier of the key.
- **API token**: Secret password (displayed only once, upon creation).

Keys must be active and have [roles](https://help.vtex.com/en/docs/tutorials/roles) associated with them to define which resources they can access.

## Key types

| Type                                               | Description                                                                                                                | Use cases                                                   | Documentation                                       |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------- |
| **Internal keys (generated)**   | Created in the VTEX Admin. You have full control to create, edit, renew, and revoke roles. | Integrations with ERP, internal automations, custom scripts | [Generated keys](https://help.vtex.com/en/docs/tutorials/generated-keys) |
| **External keys (third-party)** | Created by partners/apps. You can only manage the roles in your account.                   | VTEX App Store apps, integrations with certified partners   | [External keys](https://help.vtex.com/en/docs/tutorials/external-keys)   |

## Managing API keys

**Where to manage:** _Account settings > API keys_

**What you can do:**

- View all keys (internal and external)
- Create internal keys
- Add external keys
- Edit role
- Activate/deactivate keys
- Renew tokens
- Delete keys
- Export list for auditing

> ℹ️ Learn more in [API keys](https://help.vtex.com/en/docs/tutorials/api-keys).

## Principle of least privilege

Associate only with the strictly necessary roles. Examples:

- Integration that **reads orders only** → read-only Orders role
- ERP that manages inventory → only for Catalog and Logistics roles

## Token renewal and alerts

Renew tokens periodically (every 3-6 months for critical keys). Configure [automatic alerts](https://help.vtex.com/docs/tutorials/configuring-alerts-to-renew-api-tokens) so you don’t forget.

> ⚠️ The API token is displayed only once, upon creation. Store it securely.

## Permission requirements

[User Administrator - RESTRICTED](https://help.vtex.com/docs/tutorials/predefined-roles#user-administrator-restricted) role or a custom role with the following resources:

- View API keys
- Edit API keys
- Renew API token
- Edit API keys settings

## Best practices

- Use descriptive names
- Apply the least privilege principle
- Store tokens securely — never in source code.
- Renew periodically
- Audit and remove unnecessary keys
- Revoke immediately if compromised
- Never use client-side code for integrations
- Don't share tokens via email, chat, or tickets

> ℹ️ Learn more in [Best practices for using API keys](https://help.vtex.com/en/docs/tutorials/best-practices-api-keys).

## Learn more

- [API keys](https://help.vtex.com/en/docs/tutorials/api-keys)
- [Best practices for using API keys](https://help.vtex.com/en/docs/tutorials/best-practices-api-keys)
- [Generated keys](https://help.vtex.com/en/docs/tutorials/generated-keys)
- [External keys](https://help.vtex.com/en/docs/tutorials/external-keys)
- [Renewing API tokens](https://help.vtex.com/docs/tutorials/renewing-api-tokens)
- [Configuring alerts to renew API tokens](https://help.vtex.com/docs/tutorials/configuring-alerts-to-renew-api-tokens)
- [Exporting API keys](https://help.vtex.com/en/docs/tutorials/exporting-api-keys)
- [Roles](https://help.vtex.com/en/docs/tutorials/roles)
- [License Manager resources](https://help.vtex.com/en/docs/tutorials/license-manager-resources)
- [API authentication using application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) (for developers)
