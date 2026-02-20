---
title: 'My authentication section in My account'
id: 5OETzDR8d5qt13atEBxsB9
status: PUBLISHED
createdAt: 2021-07-26T14:25:34.550Z
updatedAt: 2021-09-27T20:51:42.279Z
publishedAt: 2021-09-27T20:51:42.279Z
contentType: updates
productTeam: Identity
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2021-07-26-my-authentication-section-in-my-account
locale: en
legacySlug: my-authentication-section-in-my-account
announcementImageID: 'undefined'
announcementSynopsisEN: 'My authentication is a section in My account that allows you to manage passwords and login sessions.'
---

The My Authentication section is available on all VTEX accounts, and you can find it on the My account dashboard in your store.

> ❗ This change will affect all VTEX stores. Because this change interferes with some components in the store UI, you are required to make some changes in your store’s settings until September 29, 2021.

## What has changed?

In this section, all users can manage their password and login sessions, allowing them to sign out other sessions remotely. For more details on using My Authentication, see the [Authentication section on the article Setting up My account](/en/docs/tutorials/how-my-account-works).

![My Authentication app EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/july/2021-07-26-my-authentication-section-in-my-account_1.png)

![My Authentication Session Management EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/july/2021-07-26-my-authentication-section-in-my-account_2.png)

On September 29, the component for managing passwords will also be removed from the user profile page to prevent duplication issues. The images below show examples of a user profile page with and without the password management component.

![My Account with password EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/july/2021-07-26-my-authentication-section-in-my-account_3.png)

![My Account no password EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/july/2021-07-26-my-authentication-section-in-my-account_4.png)

## Why did we make this change?

The login management feature allows you to provide more security to your customers. Besides, it will be important for implementing future changes in the platform. Future changes include offering longer login sessions and automatic session renewal. The password management component has been moved to the My authentication section because we believe this feature is more compatible with this section rather than the user profile.

To make the transition easier for current users, the implementation will be conducted in two phases:

1. Now, the option to enable the My Authentication section will be made available on your store's UI. The component to change the password will be available both in the user profile and in the section.
2. As of September 29, the My Authentication section will be enabled on all accounts, and the component for changing the password will no longer be displayed on the profile page.

In the interval between the two phases, you will have time to make the necessary changes to enable the section.

## What needs to be done?

Now that the My Authentication section is available, you need to enable it to be displayed for your customers.

Enabling a new section means a new element will be added to your store’s UI, which may require some visual customization in your website to follow the store's visual identity. Before enabling the section in your store, you can access it via URL and decide if it needs to be customized.

- If your store uses VTEX IO, access the URL `https://{account}.myvtex.com/account#/authentication`, replacing `{account}` with the name of your account.
- If your store does not use VTEX IO, access the URL `https://{account}.vtexcommercestable.com.br/_secure/account#/authentication`, replacing `{account}` with the name of your account.

> ⚠️ Before accessing the URL, you need to log in to your store with a user account.

To customize the section appearance, ask the developer responsible to follow the instructions in the article [My Authentication Customization Guide using CMS](https://developers.vtex.com/vtex-rest-api/docs/ui-customization-my-authentication), if your store does not use VTEX IO. For stores using VTEX IO, check out the article [My Authentication Customization Guide on VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-my-authentication) in our developer portal.

To make the My authentication section visible for your customers, follow the steps below:

1. On the left side menu in the Admin, go to **ACCOUNT SETTINGS**.
2. Click on **Apps**.
3. Click on **My apps**.  
![My apps menu EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/july/2021-07-26-my-authentication-section-in-my-account_5.png)
4. Go to the **My Account** app and click on `Settings`.  
![My apps installed EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/july/2021-07-26-my-authentication-section-in-my-account_6.png)
5. In the **AUTHENTICATION** field, check the `Visible` box.
6. Click on `Save`.  
![My Authentication visible setting EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/july/2021-07-26-my-authentication-section-in-my-account_7.png)

You can also directly access the My Account app settings via URL.

- If your store uses VTEX IO, access the URL `https://{account}.myvtex.com/admin/apps/vtex.my-account@1.x/setup`, replacing `{account}` with the name of your account.
- If your store does not use VTEX IO, access the URL `https://{account}.myvtex.com/admin/apps/vtex.my-account@0.x/setup`, replacing `{account}` with the name of your account.

After enabling the **Authentication** section, it will be displayed for your customers in their user profiles in your store, and they can access it using the left side menu on the My Account page.

![My Authentication visible setting EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2021/july/2021-07-26-my-authentication-section-in-my-account_8.png)
