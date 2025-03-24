---
title: 'Security improvements to Checkout cookies'
id: 4MThm4Y5sxYLaW3PfrHdJd
status: PUBLISHED
createdAt: 2022-09-19T19:22:37.019Z
updatedAt: 2022-10-20T19:39:59.077Z
publishedAt: 2022-10-20T19:39:59.077Z
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2022-09-19-security-improvements-to-checkout-cookies
locale: en
legacySlug: security-improvements-to-checkout-cookies
announcementImageID: ''
announcementSynopsisEN: 'Update to Checkout cookies allows increased security in your store'
---

To improve data security in your store, VTEX has updated Checkout cookies. After February 13, 2023, cookie security for `checkout.vtex.com` and `CheckoutDataAccess` will be extended through the implementation of the _Secure_, _HttpOnly_, and _SameSite_ attributes.

This security update is already implemented on VTEX accounts created after August 19, 2022, and no action is required from those retailers.

## What has changed?

Now, the following attributes will be included in the `checkout.vtex.com` and `CheckoutDataAccess` cookies:

1. __Secure__: prevents information capture by unauthorized third parties by only transmitting the cookie to the server in encrypted requests (HTTPS).
2. __HttpOnly__: blocks information capture through Cross-site scripting (XSS) and other JavaScripts inserted in the store page.
3. __SameSite__: ensure that cookies are only sent in a first-party context and not sent together with requests initiated by third party websites (like Iframes and cross-site requests).

## Why did we make this change?

This update improves information access security in your store.

## What needs to be done?

The cookies update will be automatically implemented in all stores on February 13, 2023. However, this change is already available in the Beta version for testing and validation in your store.

You should contact the team responsible for the development of your website to request that they perform Checkout tests on your store in the Beta environment. In this way, it will be possible to simulate the operation of the store with the security improvements in cookies already activated. 

To access the Beta environment, follow the procedures below according to the Admin version (V3 or V4) used in your store:

- **Admin V3**: [Accessing the beta environment through myvtex.com domain](https://help.vtex.com/en/tutorial/accessing-the-beta-environment--3BHM289568gcSwk2O80Asu)

- **Admin V4**: temporarily enable the `vtex-commerce-env` cookie as follows:

     1. Within your store's Admin, access the **Dev. Tools** screen in your browser (by pressing the `F12` key or right-clicking, and choosing the **Inspect** option).
     2. In the upper right corner of the screen, access the **Application** tab, and under **Cookies**, click on your store's **URL**.
     3. In the table, enter the following information below in the fields on the last row: **Name**: `vtex-commerce-env` and **Value**: `beta`.
     4. Refresh the page (by pressing the `F5` key or your browser's refresh button). After the page loads, the Store Admin will already be in Beta environment. Perform operational tests in Checkout.
     5. After testing is complete, access the **Dev. Tools** screen again from your browser and remove the previously enabled cookie information (`vtex-commerce-env` and `beta`).
     6. Refresh the page again to return to the production (stable) environment.

If you find any errors while performing operational tests in the Beta environment, check the store settings to ensure that:

1. Your site does not include any JavaScript code trying to handle (accessing or editing) the `checkout.vtex.com` or `CheckoutDataAccess` cookies directly.
2. There are no JavaScript customizations that could affect Card and Checkout operation (cookies access) at your store.

After verifying the store settings, run the test in Beta environment again.

>⚠️ After February 13, 2023, stores that do not have the appropriate settings could be unable to operate the Checkout correctly.
