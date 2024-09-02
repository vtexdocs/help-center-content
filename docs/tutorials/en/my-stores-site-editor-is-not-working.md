---
title: 'My store’s Site Editor is not working'
id: 3A6Ois91zEZ8zpKJp1wsP2
status: PUBLISHED
createdAt: 2024-08-26T16:52:35.556Z
updatedAt: 2024-08-27T19:26:42.892Z
publishedAt: 2024-08-27T19:26:42.892Z
firstPublishedAt: 2024-08-27T19:19:21.047Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: my-stores-site-editor-is-not-working
locale: en
legacySlug: my-stores-site-editor-is-not-working
subcategory: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Keywords**: Site Editor | CMS | Store Framework

[Site Editor](https://developers.vtex.com/docs/guides/vtex-io-documentation-site-editor) is the CMS available for stores using [Store Framework](https://developers.vtex.com/docs/guides/store-framework). You may encounter situations where Site Editor does not open, or you can’t save content there.

Below are different troubleshooting checks and instructions you can use to solve Site Editor issues:

| **Issue** | **Description** | **Troubleshooting instructions** |
| --------- | --------------- | -------------------------------- |
| [Site Editor does not open](#site-editor-does-not-open) | The Site Editor page either shows a blank screen or the message `Something went wrong`. | - [Check the search integration](#checking-the-search-integration).<br>- [Check the tenant configuration (new accounts only)](#checking-the-tenant-configuration-new-accounts-only) |
| [I can’t manage my store content in Site Editor](#i-cant-manage-my-store-content-in-site-editor) | You can’t edit, save, or delete content in Site Editor. | - [Check if the user role has the necessary permissions](#checking-if-the-user-role-has-the-necessary-permissions).<br>- [Check the domain's main locale](#checking-the-domains-main-locale) |
| [I lost the content stored in Site Editor](#i-lost-the-content-stored-in-site-editor) | The content saved in Site Editor was lost. | [Open a ticket with VTEX Support](#i-lost-the-content-stored-in-site-editor). |
| [I am still experiencing issues with Site Editor](#i-am-still-experiencing-issues-with-site-editor) | You still experience issues within Site Editor after trying to solve them. | [Open a ticket with VTEX Support](#i-am-still-experiencing-issues-with-site-editor). |

To understand and correct each error, see the solutions below:

## Site Editor does not open

One error you might experience with Site Editor is when you go to the VTEX Admin, access **Storefront**, and click **Site Editor**. The Site Editor page either shows a blank screen or the message `Something went wrong`.

![Site Editor - Something went wrong EN](https://images.ctfassets.net/alneenqid6w5/6HAg54FmMXcxq7rfh1738y/e3db2a4576b949793256c5887829ae1a/img1-EN.png)

To solve this error, see the following instructions:

1. [Check the search integration](#checking-the-search-integration).
2. [Check the tenant configuration](#checking-the-tenant-configuration)

### Checking the search integration

One possible reason for this issue might be related to the [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) search not integrated with your store’s catalog. Follow the steps below to integrate it into your store:

1. Go to the VTEX Admin and access **Store Settings > Intelligent Search > Integrations**.
2. On the **Integrations** page, all the statuses must be checked, as in the following image. 

![Site Editor - IS integrations EN](https://images.ctfassets.net/alneenqid6w5/5hQJjnkLuCwRA2VVtKvEEC/e06d381636db9dcabef4ec98acec7bf9/img2-EN.png)

3. If the statuses are all checked, and you still can’t open Site Editor, see the [Check the tenant configuration](#checking-the-tenant-configuration) section. Otherwise, proceed to the next step.
4. If the Integrations page does not look like the image above, here are the reasons and how to fix them:
- **The status `Enable search` is not checked**: You didn’t start the integration. Click `Start Integration`.
- **One of the statuses failed and is not checked**: If you already tried to start the integration but it still failed, open a ticket with [VTEX Support](https://help.vtex.com/en/support) to report the error.

### Checking the tenant configuration (new accounts only)

If you already have the [search integrated](#check-the-search-integration) and still see a black screen when you click **Site Editor** in the VTEX Admin, the store might not have the tenant set, or there is an error in this setting. 

VTEX uses a [SaaS multi-tenancy](https://developers.vtex.com/docs/guides/cloud-infrastructure#saas-multi-tenancy) architecture approach, where each account is a tenant that needs to be connected (binding) to the VTEX architecture for data and information synchronization.

To set the tenant in your store, open a ticket with [VTEX Support](https://help.vtex.com/en/support) team requesting it. Once you receive feedback from support confirming the tenant has been set, go to the VTEX Admin, access **Storefront > Site Editor**, and check if it opens correctly. If the blank screen persists, explain the new issue in the ticket you opened with VTEX Support so the team can further investigate.

## I can’t manage my store content in Site Editor

One error that can happen in Site Editor is when you can’t edit, save, or delete content. When you try to do one of these actions, you see the following message:

```bash
Something went wrong. Please try again.
```

To solve this error, see the following instructions:

1. [Check if the user role has the necessary permissions](#checking-if-the-user-role-has-the-necessary-permissions).
2. [Check the domain's main locale](#checking-the-domains-main-locale)

### Checking if the user role has the necessary permissions

One possible reason for this issue might be related to the lack of the `CMS GraphQL API` License Manager [resource](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) in a [user role](https://help.vtex.com/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) for content management. 

Ensure that users are associated with the `CMS GraphQL API` resource within their user roles by either [creating a new role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) or editing an existing one.

If you are still unable to manage content even after adding the `CMS GraphQL API` resource to the user role, go to the next section: [Check the domain’s main locale](#check-the-domains-main-locale).

### Checking the domain's main locale

Another possible reason for this error is related to the locale set for the account. To check which locale is set, follow these steps:

1. Go to the VTEX Admin and access **Store Settings > Channels > Trade Policies**.
2. On the **Trade Policies** page, select the trade policy associated with your account and check the **Locale** field.

![Site Editor - Locale EN](https://images.ctfassets.net/alneenqid6w5/6i6EbEw6OXr2BnOzh4mVE2/e98d889fc1912c82756c23dff38090d3/img3-EN.png)

3. The locale is considered incorrect if any of the following apply:
- The locale is different from the one the account should use. For example, the locale is set as `en-US`, but the account should be `en-GB`.
- The locale is in lowercase. Since this configuration is case-sensitive, you must set the locale as `en-US` instead of `en-us`.
4. In both cases, open a ticket with [VTEX Support](https://help.vtex.com/en/support) to request a change in the locale set for the trade policy. Remember to include evidence of the error, such as screenshots, message logs, and details of your prior investigation.

## I lost the content stored in Site Editor

Open a ticket with the [VTEX Support](https://help.vtex.com/en/support) team to investigate the issue further. To avoid scenarios where you lose content stored in Site Editor when changing your Store Theme app peer dependencies and need to perform a major update, follow the steps in the guide Migrating CMS settings after a major theme update.

<div class="alert alert-warning">
  <p> In cases where you lose content in Site Editor, the content can only be restored if the loss is related to the known issue of Intermittent Site Editor content loss. For this issue, open a ticket with <a href="https://help.vtex.com/pt/support">VTEX Support</a> with <code>urgent</code> priority. </p>
</div>

## I am still experiencing issues with Site Editor 

If you have already gone through the solutions described above and are still experiencing issues with Site Editor, please open a ticket with the [VTEX Support](https://help.vtex.com/en/support) team and add evidence of the issues you are facing:

- Error messages.
- [Console log messages](https://developer.chrome.com/docs/devtools/console/understand-messages) (If there is any).
- Changes made before the issue occurred.
- Screenshots of the issue.
- Date and time when the issue started.
- Tests you have already performed and the steps to reproduce them.

