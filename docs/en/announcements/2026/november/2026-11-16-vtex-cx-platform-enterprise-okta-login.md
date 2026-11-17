---
title: 'VTEX CX Platform: Okta login for enterprise clients'
createdAt: 2026-11-16T12:00:00.000Z
updatedAt: 2026-11-16T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-11-16-vtex-cx-platform-enterprise-okta-login
locale: en
tags:
  - What's new
  - VTEX CX Platform
announcementSynopsisEN: 'Enterprise clients can now log in to VTEX CX Platform with their own Okta tenant. Activation is on demand, upon request to the VTEX team.'
---

Enterprise clients can now log in to [VTEX CX Platform](https://help.vtex.com/en/docs/tutorials/vtex-cx-platform-visao-geral) using Okta. To meet the security requirements of companies that centralize authentication with their own identity provider, we made this feature available to all clients.

With Okta login, users log in with their corporate credentials, and two-factor authentication follows the rules already defined in the client's Okta.

## What has changed?

Previously, all users logged in to the platform with email and password or with social login buttons (GitHub, Google, and Microsoft), without the option to use their own company's identity provider.

Now, the login screen first asks only for the email and directs the user based on the domain provided:

- **Domain mapped to an Okta tenant:** the user is redirected directly to the company's Okta, including Okta's configured MFA. The platform's password field isn't displayed in this attempt.
- **Domain not mapped:** the user proceeds to the password step, as before.

The GitHub, Google, and Microsoft login options remain available and haven't changed.

> ℹ️ Access to organizations is still granted only by invite, and domain mapping is restricted per client: one company's Okta never grants access to another organization.

## What needs to be done?

To use this feature, contact [VTEX Support](https://help.vtex.com/en/support) and request the configuration of your organization's email domain mapping and policy.
