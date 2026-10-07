---
title: 'Configuring persistent login for customers'
createdAt: 2026-09-18T00:00:00.000Z
updatedAt: 2026-09-18T00:00:00.000Z
contentType: tutorial
productTeam: Identity
slugEN: configuring-persistent-login-for-customers
locale: en
---

Persistent login lets you keep customers authenticated in your online store for longer, without requiring a new login every 24 hours. When you enable this feature, you define how many days the customer stays connected, directly on the **Authentication** page in the VTEX Admin, without opening a ticket with VTEX Support.

> ℹ️ Persistent login affects only customer sessions in the online store. Admin user login sessions in the VTEX Admin aren't affected by this setting.

## How it works

When a customer accesses the store, they receive an access cookie (`VtexIdclientAutCookie_{account}`) with a fixed duration of 24 hours, which can't be configured. When persistent login is enabled, the platform also issues a refresh token (`vid_rt`), responsible for renewing the customer's access without requiring a new login, for the period you configure.

Some important points about how this setting works:

* Persistent login is optional and disabled by default. If you don't configure anything, your store's behavior doesn't change.
* The duration can be any integer number of days, from **1** to **365**.
* When you enable persistent login for the first time, the default duration is **1 day**. You can change it at any time.
* Changes to the setting (including disabling persistent login) apply only to new logins performed after the change. Sessions that are already active continue behaving as they did before the change.
* If you disable persistent login and then enable it again, the last saved duration is restored (the setting doesn't automatically go back to 1 day).
* In stores with [Store Framework](https://developers.vtex.com/docs/guides/store-framework) or [CMS Portal (Legacy)](https://help.vtex.com/en/docs/tracks/legacy-cms-portal), the renewal of customer access is automatic. In headless stores, you need to implement the token renewal on your own, except when the storefront uses the [FastStore SDK](https://developers.vtex.com/docs/guides/faststore/sdk-overview). To implement session renewal in a headless store, see the developer guide [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations).

## Prerequisites

To enable or change persistent login, the user must have a [role](https://help.vtex.com/en/docs/tutorials/roles) with the **Write Account Config** resource, in the Account Configuration category of the VTEX ID product. Without this permission, the change isn't saved and an error message is displayed.

## Enable persistent login

To start using persistent login, enable the feature in the corresponding card on the **Authentication** page:

1. On the top bar of the VTEX Admin, click your profile avatar, marked by the initial of your email.
2. Click **Account settings > Authentication**.
3. On the **Webstore** tab, locate the **Persistent login** card, below the login methods.
4. Click the toggle to enable the feature.
    ![Persistent login card on the Webstore tab](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/configuring-persistent-login-for-customers_1.png)

When you enable it, a notification confirms the activation and informs the duration that now applies to new logins (1 day, on first use, or the last saved duration, on reactivation).

## Configure the persistent login duration

The configured duration isn't displayed directly on the card. To check or change it, follow the steps below:

1. On the top bar of the VTEX Admin, click your profile avatar, marked by the initial of your email.
2. Click **Account settings > Authentication**.
3. On the **Webstore** tab, on the **Persistent login** card, click `Edit`.

    A window opens with the currently configured duration, in days.
    ![Persistent login duration settings window](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/configuring-persistent-login-for-customers_2.png)
4. In the **Session duration** field, enter an integer between **1** and **365** days.
5. Click `Save`.

If the value entered is outside the allowed range or isn't an integer, an error message is displayed and the change isn't saved.

You can configure the duration even with persistent login disabled. In this case, the value is saved and takes effect as soon as the feature is enabled.

## Disable persistent login

If you no longer want to keep customers connected for an extended period, disable the feature at any time:

1. On the top bar of the VTEX Admin, click your profile avatar, marked by the initial of your email.
2. Click **Account settings > Authentication**.
3. On the **Webstore** tab, on the **Persistent login** card, click the toggle to disable the feature.

From that moment on, new customer logins stop receiving the refresh token, returning to the default 24-hour expiration behavior. Sessions that are already active aren't changed by this update.

## Learn more

- [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations)
- [Authentication](https://help.vtex.com/en/docs/tutorials/authentication)
