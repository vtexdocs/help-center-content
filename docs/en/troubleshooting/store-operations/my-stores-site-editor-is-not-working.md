---
title: 'My store’s Site Editor is not working'
id: 3A6Ois91zEZ8zpKJp1wsP2
status: PUBLISHED
createdAt: 2024-08-26T16:52:35.556Z
updatedAt: 2025-08-14T22:58:05.821Z
publishedAt: 2025-08-14T22:58:05.821Z
firstPublishedAt: 2024-08-27T19:19:21.047Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: my-stores-site-editor-is-not-working
legacySlug: my-stores-site-editor-is-not-working
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Site editor
  - CMS
  - Store framework
---

[Site Editor](https://developers.vtex.com/docs/guides/working-with-site-editor) is the Content Management System (CMS) available for stores using [Store Framework](https://developers.vtex.com/docs/guides/store-framework). In some situations, you may encounter difficulties opening the Site Editor or saving content.

Below are some instructions to help you solve these issues in Site Editor.

| **Issue** | **Description** | **How to fix it** |
| ------------ | ------------- | ----------------------------------------- |
| [Site Editor won't open](#the-site-editor-won't-open) | The Site Editor page displays a blank screen or the message `Something went wrong`. | - [Check the search integration](#checking-the-search-integration).<br> - [Check the tenant configuration (new accounts only)](#checking-the-tenant-configuration-new-accounts-only). |
| [I can't manage my store's content in Site Editor](#i-cant-manage-my-store's-content-in-site-editor) | I can't edit, save or delete content in Site Editor. | - [Check if the user role has the necessary permissions](#checking-if-the-user-role-has-the-necessary-permissions).<br> - [Check the domain's main location](#checking-the-domain-main-location). |
| [I lost the content stored in Site Editor](#i-lost-the-content-stored-in-site-editor) | The content saved in Site Editor has been lost. | [Open a ticket with VTEX Support](#i-lost-the-content-stored-in-site-editor). |
| [I'm still having problems with Site Editor](#i'm-still-having-problems-with-site-editor) | Issues with the Site Editor persist even after trying to resolve them. | [Open a ticket with VTEX Support](#i'm-still-experiencing-issues-with-site-editor). |

To understand and correct each error, see the solutions below:

## Site Editor doesn't open

The following error may occur: when accessing VTEX Admin, going to **Storefront** and clicking **Site Editor**, the Site Editor page shows a blank screen or the message `Something went wrong`.

![Site Editor - Something went wrong EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/my-stores-site-editor-is-not-working_1.png)

To solve this error, see the following instructions:

1. [Check the search integration](#checking-the-search-integration).
2. [Check the tenant configuration](#checking-the-tenant-configuration-new-accounts-only).

### Checking the search integration

One possible reason for this issue might be related to the [Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) search not integrated with your store’s catalog. Follow the steps below to integrate it into your store:

1. Access the VTEX Admin and go to **Store Settings > Intelligent Search > Integrations**.
2. On the **Integrations** page, all the statuses must be checked, as in the following image.

    ![Site Editor - IS integrations EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/my-stores-site-editor-is-not-working_2.png)

3. If the statuses are all checked, and you still can’t open Site Editor, see the [Checking the tenant configuration](#checking-the-new-account-tenant-configuration) section. Otherwise, proceed to the next step.
4. If the Integrations page does not look like the image above, here are the reasons and how to fix them:
  - **The status `Enable search` is not checked**: You didn’t start the integration. Click `Start Integration`.
  - **One of the statuses failed and is not checked**: If you already tried to start the integration but it still failed, open a ticket with [VTEX Support](https://help.vtex.com/en/support) to report the error.

### Checking the tenant configuration (new accounts only)

If you already have the [search integrated](#check-the-search-integration) and still see a black screen when you click **Site Editor** in the VTEX Admin, the store might not have the tenant set, or there is an error in this setting.

VTEX uses a [SaaS multi-tenancy](https://developers.vtex.com/docs/guides/cloud-infrastructure#saas-multi-tenancy) architecture approach, where each account is a tenant that needs to be connected (binding) to the VTEX architecture for data and information synchronization.

To set the tenant in your store, open a ticket with [VTEX Support](https://help.vtex.com/en/support) team requesting it. Once you receive feedback from support confirming the tenant has been set, go to the VTEX Admin, access **Storefront > Site Editor**, and check if it opens correctly. If the blank screen persists, explain the new issue in the ticket you opened with VTEX Support so the team can further investigate.

## I can't manage my store content in Site Editor

One error that can happen in Site Editor is when you can't edit, save, or delete content. When you try to do one of these actions, you see the following message:

```bash
Something went wrong. Please try again.
```

To solve this error, see the following instructions:

1. [Check if the user role has the necessary permissions](#checking-if-the-user-role-has-the-necessary-permissions).
2. [Check if the trade policy is configured in the catalog](#checking-if-the-trade-policy-is-configured-in-the-catalog)
3. [Check the domain's main locale](#checking-the-domain's-main-locale)

### Checking if the user role has the necessary permissions

One possible reason for this issue might be related to the lack of the `CMS GraphQL API` License Manager [resource](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) in a [user role](https://help.vtex.com/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) for content management.

Ensure that users are associated with the `CMS GraphQL API` resource within their user roles by either [creating a new role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) or editing an existing one.

If you still can't manage the content even after adding the `CMS GraphQL API` resource to the user role, see the next section: [Check the domain's main locale](#checking-the-domain's-main-locale).

### Checking the domain's main locale

Another possible reason for this error is related to the locale set for the account.

1. [Install](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-an-app) the `vtex.admin-graphql-ide@3.x` app using your terminal.
2. In the VTEX Admin, go to **Store Settings > Storefront > GraphQL IDE**.
3. In the dropdown menu, select the `vtex.tenant-graphql@0.1.2` app.
4. In the text box, enter the following query:

    ```
    query {
      tenantInfo {
    	bindings {
      	id,
      	canonicalBaseAddress,
     	defaultLocale
    	}
      }
    }
    ```

5. Check the main location set for your store. This information is available in the `defaultLocale` field. See the example below.

    ![graphql-default-locale-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/my-stores-site-editor-is-not-working_3.png)

6. Now, go to **Store Settings > Channels > Trade Policies**.
7. On the **Trade Policies** page, select the trade policy associated with your account and check the **Locale** field.

    ![Site Editor - Locale EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/store-operations/my-stores-site-editor-is-not-working_4.png)

  The locale is considered incorrect in the following cases:
    - The locale is different from the one the account should use. For example, the locale is set as `pt-BR`, but the account should be `pt-PT`.
    - The locale is in lowercase. Since this configuration is case-sensitive, you must set the locale as `pt-BR` instead of `pt-br`.
    - The locality configured in the trade policy is different from the `defaultLocale` identified.

8. In both cases, open a ticket with [VTEX Support](https://help.vtex.com/en/support) to request a change in the locale set for the trade policy. Remember to include evidence of the error, such as screenshots, message logs, and details of your prior investigation.

## I lost content stored in Site Editor

Open a ticket with the [VTEX Support](https://help.vtex.com/en/support) team to investigate the issue further.

To avoid losing content stored in Site Editor when changing the pair dependencies of the Store Theme app, follow the steps in the guide [Migrating CMS settings after a major theme update](https://developers.vtex.com/docs/guides/vtex-io-documentation-migrating-cms-settings-after-major-update).

> ⚠️  In cases where you lose content in Site Editor, the content can only be restored if the loss is related to the known issue of [Intermittent Site Editor content loss](https://help.vtex.com/pt/known-issues/perda-intermitente-de-conteudo-do-site-editor--3a5MlAoD2Z7Gu6HDS8wihD). In this situation, open a ticket with the [VTEX Support](https://help.vtex.com/pt/support) with `urgent` priority. 

## I'm still experiencing issues with Site Editor

If you have already gone through the solutions described above and are still experiencing issues with Site Editor, please open a ticket with the [VTEX Support](https://help.vtex.com/en/support) team and add evidence of the issues you are facing:

- Error messages.
- [Console log messages](https://developer.chrome.com/docs/devtools/console/understand-messages) (If there is any).
- Changes made before the issue occurred.
- Screenshots of the issue.
- Date and time when the issue started.
- Tests you have already performed and the steps to reproduce them.
