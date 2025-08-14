---
title: "I can't view a page in the Admin"
id: 3U8TJMlAqHIM5Qs8rLwkwQ
status: PUBLISHED
createdAt: 2024-11-28T14:27:44.578Z
updatedAt: 2025-08-14T15:09:37.454Z
publishedAt: 2025-08-14T15:09:37.454Z
firstPublishedAt: 2024-11-28T14:46:25.398Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: i-cant-view-a-page-in-the-admin
legacySlug: i-cant-view-a-page-in-the-admin
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Roles
  - License Manager resources
  - License Manager
  - Admin
---

When using the Admin, some users may experience *Error 403 - We're sorry, but you do not have access to this page* or a page loading continuously.  

These issues usually occur due to conflicts between admin user [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) or specific browser settings.

## Solution

Here are a few approaches to address these issues:

* [Review the roles](#reviewing-roles): Check if the user has the necessary roles and if there are any conflicting ones.
* [Review the browser settings](#reviewing-your-browser-settings): Check the extensions used and clear the browser cache.

### Reviewing roles

Follow the steps below to solve the issue:

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account Settings > Users**.  
2. Click the user you want to view.  
3. Check the user roles:

   * If the role isn't compatible with the page the user is trying to access, the expected response is *Error 403*.
   * If the roles **Call center operator** or **OMS - Full access** are combined with the role **Owner (Admin Super)**, there may be a conflict when accessing some pages.
4. Remove conflicting roles and assign only the roles required for the user's operations, following the instructions for [Managing users](https://help.vtex.com/en/tutorial/managing-users--tutorials_512#editing-users).

> ⚠️ Only the **Owner (Admin Super)** of the account or a user with the role **User Administrator - RESTRICTED** has the required permissions to perform this step.

### Reviewing your browser settings

If the problem isn't with your user role, we recommend running other tests:

* **Review extensions:** Disable all browser extensions and test access using an incognito window.
* **Clear the cache:** In the browser you use to access the Admin, go to the settings and clear browsing data, including the cache.
