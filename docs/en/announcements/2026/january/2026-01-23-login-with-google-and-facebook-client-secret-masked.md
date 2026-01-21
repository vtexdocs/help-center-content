---
title: 'Login with Google and Facebook: Client secrets are now masked'
id: 
status: PUBLISHED
createdAt: 2026-01-21T00:00:00.000Z
updatedAt: 2026-01-21T00:00:00.000Z
publishedAt: 2026-01-21T00:00:00.000Z
contentType: updates
productTeam: Identity
author: 
slugEN: login-with-google-and-facebook-client-secret-masked
locale: en
legacySlug: 
announcementImageID: 'undefined'
announcementSynopsisPT: 'Client secrets for login with Google and Facebook are now masked, displaying only the last 3 characters.'
---

To enhance the security of social login integrations, the **Client secret** field in the [login with Google and Facebook](https://help.vtex.com/docs/tutorials/configuring-login-with-facebook-and-google) configuration is now masked in the VTEX Admin.

## What has changed?

After configuring login with Google or Facebook, the **Client secret** field is no longer completely displayed in **Account Settings > Authentication**.

When accessing the configuration again, admin users will only see the last 3 characters of the key, preventing credential exposure.

This change affects only how the data is displayed and doesn't affect authentication.

## Why did we make this change?

This change enhances store security by reducing the risk of improper exposure of sensitive credentials and preventing unauthorized access to authentication integrations.

## What needs to be done?

No action is needed. This update will be automatically applied to all stores. For more information about social login configuration, see:

* [Configuring login with Facebook and Google](https://help.vtex.com/docs/tutorials/configuring-login-with-facebook-and-google)
* [Adding Client ID and Client secret for login with Google](https://help.vtex.com/docs/tutorials/adding-a-client-id-and-a-client-secret-to-log-in-with-google)
* [Adding Client ID and Client secret for login with Facebook](https://help.vtex.com/docs/tutorials/adding-a-client-id-and-a-client-secret-to-log-in-with-facebook)
