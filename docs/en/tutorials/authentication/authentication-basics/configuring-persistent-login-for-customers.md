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

- Persistent login is optional and deactivated by default. If you don't configure anything, your store's behavior doesn't change.
- The duration can be any integer number of days, from **1** to **365**.
- When you activate persistent login for the first time, the default duration is **1 day**. You can change it at any time.
- Configuration changes (including deactivating persistent login) only apply to new logins made after the change. Sessions that are already active continue to behave as they did before the change.
- If you deactivate persistent login and then activate it again, the last saved duration is restored (the configuration doesn't automatically go back to 1 day).
- In stores with [Store Framework](https://developers.vtex.com/docs/guides/store-framework) or [CMS Portal (Legacy)](https://help.vtex.com/docs/tracks/legacy-cms-portal), the customer's access renews automatically. In headless stores, you need to implement token renewal yourself, except when the storefront uses the [FastStore SDK](https://developers.vtex.com/docs/guides/faststore/sdk-overview). To implement session renewal in a headless store, see the developer guide [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations).

## Prerequisites

To activate or change persistent login, the user must have a [role](https://help.vtex.com/docs/tutorials/roles) with the **Write Account Config** resource, in the Account Configuration category of VTEX ID. Without this permission, the update isn't saved and an error message is displayed.

## Activating persistent login

To start using persistent login, enable the feature in the corresponding card on the **Authentication** page:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.
2. Click **Account settings > Authentication**.
3. On the **Webstore** tab, find the **Persistent login** card, below the login options.
    <!-- TODO: substituir pelo screenshot real do card Login persistente na aba Loja virtual -->
   ![Persistent login card on the Online Store tab](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/configurar-login-persistente-para-clientes_1.png)
4. Click the toggle to activate the feature.

When you activate it, a notification confirms the activation and shows the duration that will apply to new logins (1 day on first use, or the last saved duration on reactivation).

## Configuring the persistent login duration

The configured duration isn't displayed directly on the card. To check or change it, follow the steps below:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.
2. Click **Account settings > Authentication**.
3. On the **Webstore** tab, in the **Persistent login** card, click `Edit`.

   A window opens showing the currently configured duration in days.

    <!-- TODO: substituir pelo screenshot real da janela de configuração da duração -->

   ![Persistent login duration configuration window](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/configurar-login-persistente-para-clientes_2.png)
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
- [Authentication](https://help.vtex.com/docs/tutorials/authentication)

