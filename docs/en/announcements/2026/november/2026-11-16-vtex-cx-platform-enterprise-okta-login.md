---
title: 'VTEX CX Platform: Okta login for enterprise clients'
createdAt: 2026-11-16T12:00:00.000Z
updatedAt: 2026-11-16T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-11-16-vtex-cx-platform-enterprise-okta-login
locale: en
tags:
  - New feature
  - VTEX CX Platform
announcementSynopsisEN: 'Enterprise clients can now log in to VTEX CX Platform with their own Okta tenant. Activation is available upon request to the VTEX team.'
---

Enterprise clients can now log in to [VTEX CX Platform](/en/docs/tutorials/vtex-cx-platform-overview) using Okta. To meet the security requirements of companies that centralize authentication in their own identity provider, we've made this feature available to all clients.

With Okta login, users log in with their corporate credentials, and two-step verification follows the rules the client has already defined in Okta.

## What has changed?

Previously, all users logged in to the platform with an email address and password or with the social login buttons (GitHub, Google, and Microsoft) — without the option to use their own company identity provider.

Now, the login screen first asks only for the email address and redirects the user based on the domain entered:

- **Domain mapped to an Okta tenant:** The user is redirected directly to the company Okta login, including any Okta multi-factor authentication already configured. The platform password field isn't displayed in this case.
- **Unmapped domain:** The user proceeds to the password step, as before.

The GitHub, Google, and Microsoft login options are still available and haven't changed.

> ℹ️ Access to organizations is still by invitation only, and domain mapping is restricted to each client: one company's Okta never grants access to another company's organization.

## What needs to be done?

To use this feature, contact [VTEX Support](/en/support) and request the configuration of the email domain mapping and policy for your organization.
