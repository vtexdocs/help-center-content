---
title: 'Configuring persistent login for customers'
createdAt: 2026-09-18T00:00:00.000Z
updatedAt: 2026-09-18T00:00:00.000Z
contentType: tutorial
productTeam: Identity
slugEN: configuring-persistent-login-for-customers
locale: en
---

Persistent login keeps customers authenticated in your online store for longer, without requiring a new login every 24 hours. By enabling this feature, you can set how long a customer remains logged in directly from the **Authentication** page in the VTEX Admin, without having to open a ticket with VTEX Support.

> ℹ️ Persistent login only affects customer sessions in the online store. Login sessions for administrative users in the VTEX Admin aren't affected by this setting.

## How it works

When a customer accesses the store, they receive an access cookie (`VtexIdclientAutCookie_{account}`) with a fixed duration of 24 hours, which can't be configured. When persistent login is enabled, the platform also issues a refresh token (`vid_rt`), which renews the customer's access without requiring a new login for the configured period.

Here are some important aspects about how this configuration works:

* Persistent login is optional and deactivated by default. If you don't configure anything, your store's behavior doesn't change.
* The duration can be any integer number of days, from **1** to **365**.
* When you activate persistent login for the first time, the default duration is **1 day**. You can change it at any time.
* Configuration changes (including deactivating persistent login) only apply to new logins made after the change. Sessions that are already active continue to behave as they did before the change.
* If you deactivate persistent login and then activate it again, the last saved duration is restored (the configuration doesn't automatically go back to 1 day).
* How customer access is renewed depends on the storefront technology. See [Additional steps by store type](#additional-steps-by-store-type).

## Prerequisites

To activate or change persistent login, the user must have a [role](https://help.vtex.com/en/docs/tutorials/roles) with the **Write Account Config** resource, in the Account Configuration category of VTEX ID. Without this permission, the update isn't saved and an error message is displayed.

## Activating persistent login

To start using persistent login, enable the feature in the corresponding card on the **Authentication** page:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.
2. Click **Account settings > Authentication**.
3. On the **Webstore** tab, find the **Persistent login** card, below the login options.
   ![Persistent login card on the Webstore tab](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/configuring-persistent-login-for-customers_1.png)
4. Click the toggle to activate the feature.

When you activate it, a notification confirms the activation and shows the duration that will apply to new logins (1 day on first use, or the last saved duration on reactivation).

## Additional steps by store type

After activating persistent login, check whether your store needs any additional steps. What changes is how customer access is renewed, which depends on the storefront technology.

In stores with [Store Framework](https://developers.vtex.com/docs/guides/store-framework) or [CMS Portal (Legacy)](https://help.vtex.com/en/docs/tracks/legacy-cms-portal), you only need to activate persistent login in the VTEX Admin, since customer access renewal in the store is automatic.

In headless stores, in addition to activating persistent login in the VTEX Admin, you need to implement token renewal yourself. The developer guide [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations) explains how to implement session renewal in a headless store.

If your store uses FastStore, in addition to activating persistent login in the VTEX Admin, you need to enable the refresh token in your project, as described in [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token).

## Configuring the persistent login duration

The configured duration isn't displayed directly on the card. To check or change it, follow the steps below:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.
2. Click **Account settings > Authentication**.
3. On the **Webstore** tab, in the **Persistent login** card, click `Edit`.

   A window opens showing the currently configured duration in days.

   ![Persistent login duration configuration window](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/configuring-persistent-login-for-customers_2.png)
4. In the **Session duration** field, enter an integer between **1** and **365** days.
5. Click `Save`.

If the value entered is outside the allowed range or isn't an integer, an error message is displayed and the update isn't saved.

You can configure the duration even with persistent login deactivated. In that case, the value is saved and takes effect as soon as the feature is activated.

## Deactivating persistent login

If you no longer want to keep customers logged in for an extended period, deactivate the feature at any time:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.
2. Click **Account settings > Authentication**.
3. On the **Webstore** tab, in the **Persistent login** card, click the toggle to deactivate the feature.

From that point on, new customer logins stop receiving the refresh token and return to the default behavior of expiring in 24 hours. Sessions that are already active aren't changed by this update.

## Learn more

- [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations)
- [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token)
- [Authentication](https://help.vtex.com/en/docs/tutorials/authentication)
