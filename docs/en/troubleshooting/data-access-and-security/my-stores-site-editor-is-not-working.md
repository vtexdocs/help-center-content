---
title: 'My store’s Site Editor is not working'
id: 3A6Ois91zEZ8zpKJp1wsP2
status: PUBLISHED
createdAt: 2024-08-26T16:52:35.556Z
updatedAt: 2026-09-11T14:35:20.717Z
publishedAt: 2025-08-14T22:58:05.821Z
firstPublishedAt: 2024-08-27T19:19:21.047Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: my-stores-site-editor-is-not-working
legacySlug: my-stores-site-editor-is-not-working
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Storefront
  - Admin
symptomFilters:
  - Loading issue
  - Access restriction
---

[Site Editor](https://developers.vtex.com/docs/guides/store-framework-working-with-site-editor) is the Content Management System (CMS) available for stores using [Store Framework](https://developers.vtex.com/docs/guides/store-framework). In some situations, you may encounter difficulties opening the Site Editor or saving content.

Below are some instructions to help you solve these issues in Site Editor.

| Issue | Description | Instructions for resolving the issue |
| ----- | ----------- | ------------- |
| [Site Editor doesn't open](#site-editor-doesnt-open) | The Site Editor page displays a blank screen or the `Something went wrong` message. | - [Check the search integration](#checking-the-search-integration).<br> - [Check the tenant configuration (new accounts only)](#checking-the-tenant-configuration-new-accounts-only). |
| [I can't manage my store's content in Site Editor](#i-cant-manage-my-stores-content-in-site-editor) | You can't edit, save, or delete content in Site Editor. | - [Check if the user role has the necessary permissions](#checking-if-the-user-role-has-the-necessary-permissions).<br> - [Check the domain's main location](#checking-the-domains-main-locale). |
| [I lost the content stored in Site Editor](#i-lost-content-stored-in-site-editor) | Content saved in Site Editor was lost. | [Open a ticket with VTEX Support](https://supporticket.vtex.com/support). |
| [I'm still experiencing issues with Site Editor](#i'm-still-experiencing-issues-with-site-editor) | You're still experiencing issues with Site Editor after trying to resolve them. | [Open a ticket with VTEX Support](https://supporticket.vtex.com/support). |

To understand and correct each error, see the solutions below:

## Site Editor doesn't open

The following error may occur: when you go to **Storefront** > **Site Editor** in the VTEX Admin, the page may show a blank screen or the `Something went wrong` message.

![Site Editor - Something went wrong EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/data-access-and-security/my-stores-site-editor-is-not-working_1.png)

To solve this issue, see the following instructions:

1. [Check the search integration](#checking-the-search-integration).
2. [Check the tenant configuration](#checking-the-tenant-configuration-new-accounts-only)

### Checking the search integration

This issue may be related to [Intelligent Search](/en/docs/tracks/intelligent-search-overview) not being integrated with the store catalog. Follow the steps below to integrate it into your store:

1. In the VTEX Admin, go to **Store Settings > Intelligent Search > Integrations**.

2. On the **Integrations** page, make sure all statuses are checked, as shown in the image below.

   ![Site Editor - IS integrations EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/data-access-and-security/my-stores-site-editor-is-not-working_2.png)

3. If all statuses are checked, and you still can’t open Site Editor, see the [Checking the tenant configuration](#checking-the-new-account-tenant-configuration) section. Otherwise, proceed to the next step.

4. If the Integrations page doesn't look like the image above, here are the causes and how to fix them:

- **The status `Enable search` isn't checked**: The integration hasn't been started. Click `Start integration`.
- **One of the statuses failed and is not checked**: If you've already tried to start the integration but it failed, open a ticket with [VTEX Support](https://supporticket.vtex.com/support) to report the error.

### Checking the tenant configuration (new accounts only)

If you already have the [search integrated](#checking-the-search-integration) and still see a blank screen when you click **Site Editor** in the VTEX Admin, the store might not have the tenant set, or there might be an error in this setting.

VTEX uses a [SaaS multi-tenancy](https://developers.vtex.com/docs/guides/cloud-infrastructure#saas-multi-tenancy) architecture approach, where each account is a tenant that must be connected to the VTEX architecture through a binding to sync data.

To configure the tenant in your store, open a ticket with the [VTEX Support](https://supporticket.vtex.com/support) team to request it. Once you receive a response from Support confirming the tenant configuration, go to the VTEX Admin and click **Storefront > Site Editor** to verify that the site opens correctly. If the blank screen persists, add this information to the same ticket so the team can investigate further.

## I can't manage my store content in Site Editor

One error that can happen in Site Editor is when you can't edit, save, or delete content. When you try to do one of these actions, you see the following message:

```bash
Something went wrong. Try again.
```

To solve this error, see the following instructions:

1. [Check if the user role has the necessary permissions](#checking-if-the-user-role-has-the-necessary-permissions).
2. [Check if the sales channel is configured in the catalog](#checking-if-the-sales-channel-is-configured-in-the-catalog)
3. [Check the domain's main locale](#checking-the-domains-main-locale)

### Checking if the user role has the necessary permissions

One possible reason for this issue is that a [role](/en/docs/tutorials/roles) used for content management doesn't include the `CMS GraphQL API` [resource](/en/docs/tutorials/license-manager-resources) in License Manager.

Make sure that users have the `CMS GraphQL API` resource associated with their roles by either [creating a new role](/en/docs/tutorials/roles#creating-a-role) or editing an existing one.

If you still can't manage content even after adding the `CMS GraphQL API` resource to the user role, see the next section: [Check if the sales channel is configured in the catalog](#checking-if-the-sales-channel-is-configured-in-the-catalog).

### Checking if the sales channel is configured in the catalog

Another possible reason for this error is that the account's sales channel isn't correctly associated with the store catalog, which prevents Site Editor from loading or saving content.

1. In the VTEX Admin, go to **Store Settings > Channels > Sales channels**.
2. Check whether there's a sales channel associated with your account and whether it's correctly configured for the store catalog.
3. If no sales channel is configured, or if it isn't correctly associated with the store catalog, [configure a sales channel](/docs/tutorials/creating-a-trade-policy) for the account.
4. If the sales channel is already configured and the problem persists, open a ticket with [VTEX Support](https://supporticket.vtex.com/support) to verify the association between the sales channel and the catalog.

If you still can't manage content, see the next section: [Check the domain's main locale](#checking-the-domains-main-locale).

### Checking the domain's main locale

This error can also occur due to the locale configured for the account.

1. [Install](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-an-app) the `vtex.admin-graphql-ide@3.x` app using your terminal.

2. In the VTEX Admin, go to **Store Settings > Storefront > GraphQL IDE**.

3. In the dropdown menu, select the `vtex.tenant-graphql@0.1.2` app.

4. In the text box, enter the following query:

    ```graphql
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

5. Check the main locale set for your store. This information is available in the `defaultLocale` field. See the example below.

   ![graphql-default-locale-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/troubleshooting/data-access-and-security/my-stores-site-editor-is-not-working_3.png)

6. Now, go to **Store Settings > Channels > Sales channels**.

7. On the **Sales channels** page, select the sales channel associated with your account and check the **Locale** field.

   ![Site Editor - Locale EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/acesso-a-dados-e-segurança/o-site-editor-da-minha-loja-nao-esta-funcionando_4.png)

   The locale is considered incorrect in the following cases:

   - The locale is different from the one the account should use. For example, the locale is set to `pt-BR`, but it should be `pt-PT`.
   - The country code in the locale is lowercase. Since this configuration is case-sensitive, the locale must appear as `pt-BR` instead of `pt-br`.
   - The locale configured in the sales channel is different from the `defaultLocale` identified.

8. In all cases, open a ticket with [VTEX Support](https://supporticket.vtex.com/support) to request an update to the locale configured in the sales channel. Remember to include evidence of the error, such as screenshots, message logs, and details of your prior investigation.

## I lost content stored in Site Editor

Open a ticket with [VTEX Support](https://supporticket.vtex.com/support) to investigate the issue further.

To avoid losing content stored in Site Editor when changing the peer dependencies of the Store Theme app, follow the steps in the guide [Migrating CMS settings after a major theme update](https://developers.vtex.com/docs/guides/vtex-io-documentation-migrating-cms-settings-after-major-update).

> ⚠️ In cases where content stored in Site Editor is lost, restoration is only possible if the loss is related to the known issue of [Intermittent Site Editor content loss](/known-issues/intermitent-site-editor-content-loss). In this case, open a ticket with [VTEX Support](https://supporticket.vtex.com/support) with `urgent` priority.

## I'm still experiencing issues with Site Editor

If you've already tried the solutions mentioned above and are still experiencing issues with Site Editor, open a ticket with [VTEX Support](https://supporticket.vtex.com/support), including evidence of the problems encountered:

- Error messages.
- [Console log messages](https://developer.chrome.com/docs/devtools/console/understand-messages) (if any).
- Changes made before the error.
- Screenshots of the issue.
- Date and time when the issue started.
- Tests you've already performed and the steps to reproduce them.
