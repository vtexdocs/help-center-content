---
title: "My authentication section in My account"
id: 5OETzDR8d5qt13atEBxsB9
status: PUBLISHED
createdAt: 2021-07-26T14:25:34.550Z
updatedAt: 2021-09-27T20:51:42.279Z
publishedAt: 2021-09-27T20:51:42.279Z
contentType: updates
productTeam: Identity
author: 4ubliktPJIsvyl1hq91RdK
slug: my-authentication-section-in-my-account
legacySlug: my-authentication-section-in-my-account
announcementImageID: ""
announcementSynopsisEN: My authentication is a section in My account that allows you to manage passwords and login sessions.
---

The My Authentication section is available on all VTEX accounts, and you can find it on the My account dashboard in your store.

<div class="alert alert-danger">
This change will affect all VTEX stores. Because this change interferes with some components in the store UI, you are required to make some changes in your store’s settings until September 29, 2021.
</div>

## What has changed?

In this section, all users can manage their password and login sessions, allowing them to sign out other sessions remotely. For more details on using My Authentication, see the [Authentication section on the article Setting up My account](https://help.vtex.com/en/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh).

![My Authentication app EN](//images.ctfassets.net/alneenqid6w5/20aIW7imMlRsfDbKYu9IuM/945cc2ade2766758e484814c3e380708/My_Authentication_app_EN.png)

![My Authentication Session Management EN](//images.ctfassets.net/alneenqid6w5/3qxpIRREWnGmRmv97jhOML/ebcd1548b887d23b0fd661a0e05a0a73/My_Authentication_Session_Management_EN_blur.png)

On September 29, the component for managing passwords will also be removed from the user profile page to prevent duplication issues. The images below show examples of a user profile page with and without the password management component.

![My Account with password EN](//images.ctfassets.net/alneenqid6w5/6L8Do8W0nbG4jfKE04ddpj/0ae8b228f91e42d0baef43d66e99c43f/My_Account_with_password_EN.png)

![My Account no password EN](//images.ctfassets.net/alneenqid6w5/22CaEOhOusmmDM73taAw6R/08d27ed752e8e08a1019272cc832a182/My_Account_no_password_EN.png)

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

<div class="alert alert-warning">
Before accessing the URL, you need to log in to your store with a user account.
</div>

To customize the section appearance, ask the developer responsible to follow the instructions in the article [My Authentication Customization Guide using CMS](https://developers.vtex.com/vtex-rest-api/docs/ui-customization-my-authentication), if your store does not use VTEX IO. For stores using VTEX IO, check out the article [My Authentication Customization Guide on VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-my-authentication) in our developer portal.

To make the My authentication section visible for your customers, follow the steps below:

1. On the left side menu in the Admin, go to **ACCOUNT SETTINGS**.
2. Click on **Apps**.
3. Click on **My apps**.  
![My apps menu EN](//images.ctfassets.net/alneenqid6w5/4oRHARlS6i4lZac17nyHhC/b912df890af790633a2ada35b504e653/My_apps_menu_EN.png)
4. Go to the **My Account** app and click on `Settings`.  
![My apps installed EN](//images.ctfassets.net/alneenqid6w5/5umcJos7Uz0wnmv0VsZs3Y/eec5a07fc1a77033113a4767b4672fc7/My_apps_installed_EN.png)
5. In the **AUTHENTICATION** field, check the `Visible` box.
6. Click on `Save`.  
![My Authentication visible setting EN](//images.ctfassets.net/alneenqid6w5/5104wJeIBEUYXI7hfkRdH0/205cccf0a08be76be0c91e4074d77215/My_Authentication_visible_setting_EN.png)

You can also directly access the My Account app settings via URL.

- If your store uses VTEX IO, access the URL `https://{account}.myvtex.com/admin/apps/vtex.my-account@1.x/setup`, replacing `{account}` with the name of your account.
- If your store does not use VTEX IO, access the URL `https://{account}.myvtex.com/admin/apps/vtex.my-account@0.x/setup`, replacing `{account}` with the name of your account.

After enabling the **Authentication** section, it will be displayed for your customers in their user profiles in your store, and they can access it using the left side menu on the My Account page.

![My Authentication visible setting EN](//images.ctfassets.net/alneenqid6w5/5104wJeIBEUYXI7hfkRdH0/205cccf0a08be76be0c91e4074d77215/My_Authentication_visible_setting_EN.png)
