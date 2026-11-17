---
title: 'Persistent login: Set how long your customers stay authenticated'
slug: '2026-10-16-persistent-login-set-how-long-your-customers-stay-authenticated'
createdAt: 2026-10-16T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: updates
productTeam: Identity
slugEN: '2026-10-16-persistent-login-set-how-long-your-customers-stay-authenticated'
locale: en
announcementSynopsisEN: 'Set how many days your customers stay authenticated in your online store, from 1 to 365 days, directly in the VTEX Admin.'
tags:
  - New feature
  - Identity
  - Admin
---

You can now set how many days your customers stay authenticated in your online store, from **1 to 365 days**, with **persistent login**. This way, they don't need to log in again every 24 hours. You can configure this setting directly on the **Authentication** page in the VTEX Admin, without opening a ticket with VTEX Support.

![Persistent login card on the Authentication page in the VTEX Admin](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2026/october/2026-10-16-persistent-login-set-how-long-your-customers-stay-authenticated_1.png)

## What has changed?

By default, customers' login sessions in the online store expire after 24 hours. Previously, extending this period required opening a ticket with VTEX Support to request refresh token activation and set the expiration time, which could only be 1, 7, or 30 days. Now, when persistent login is enabled, the platform issues a refresh token in addition to the access cookie, which still lasts 24 hours. This token renews the customer's access for the period you set, without requiring a new login.

Here's how the feature behaves:

- Persistent login is optional and is deactivated by default. If you don't configure anything, your store's behavior doesn't change, and customer sessions continue to expire after 24 hours.
- The duration can be any whole number of days, from **1** to **365**. The first time you activate the feature, the default duration is **1 day**.
- Changes, including deactivating the feature, apply only to new logins. Active sessions aren't affected.
- This setting affects only customer sessions in the online store. Login for administrative users in the VTEX Admin isn't affected.

## Why did we make this change?

This change offers you more autonomy and flexibility to balance convenience and security in your store. By choosing the period that best fits your business, you reduce the need for new logins and improve your customers' shopping experience.

## What needs to be done?

To use persistent login, activate the feature in the VTEX Admin. Depending on your storefront technology, you might also need to complete additional steps for customer access renewal to work.

### Activating persistent login

To activate or change persistent login, the user must have a [role](https://help.vtex.com/en/docs/tutorials/roles) with the **Write Account Config** resource, in the Account Configuration category of VTEX ID.

Persistent login only starts working once you activate it. To configure it, follow the steps below:

1. In the VTEX Admin, go to **Account settings > Authentication**.
2. On the **Webstore** tab, find the **Persistent login** card and click the toggle switch to activate the feature.
3. To change the duration, click `Edit`, enter a whole number from **1** to **365** days in the **Session duration** field, and click `Save`.

![Persistent login duration setting window](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2026/october/2026-10-16-persistent-login-set-how-long-your-customers-stay-authenticated_2.png)

Learn more in [Configuring persistent login for customers](https://help.vtex.com/en/docs/tutorials/configuring-persistent-login-for-customers).

### Additional steps by store type

After activating persistent login, check whether your store needs any additional steps. The difference lies in how customer access is renewed, which depends on the storefront technology.

In stores with [Store Framework](https://developers.vtex.com/docs/guides/store-framework) or [CMS Portal (Legacy)](https://help.vtex.com/en/docs/tracks/legacy-cms-portal), you have to activate persistent login in the VTEX Admin, since the customer's access renews automatically.

In headless stores, in addition to activating persistent login in the VTEX Admin, you need to implement customer access renewal through the VTEX ID APIs. The developer guide [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations) explains how to do this.

If your store uses FastStore, in addition to activating persistent login in the VTEX Admin, you need to enable the refresh token in your project, as described in [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token).
