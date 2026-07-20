---
title: "Configuring stores"
createdAt: "2026-07-20T17:08:52.219Z"
updatedAt: "2026-07-20T17:08:52.219Z"
contentType: tutorial
productTeam: CMS
slugEN: cms-configuring-stores
locale: en
---

Stores define each storefront that will consume CMS content (for example, a FastStore project) and configure its content model, settings, and localization behavior. A store:

* Defines the relationship to a storefront (example: "faststore" store ID, schema used, linked store repository).
* Holds the store configuration, such as:  
  * Store name  
  * Locale setup: Locales that exist for that store, which one is the default, and how fallback rules work between locales (example: fr-CA falling back to en-CA).   
  * Preview URL used for entry and branch preview.

![stores-overview-ui](https://vtexhelp.vtexassets.com/assets/docs/src/cms-stores-overview-ui___47bd3ce39fbc854394fcc934c8c8c0ef.png)

To access the Stores page, open the Admin and go to **Storefront > Content > Stores.**

## Creating a new store

To create a new store, follow these steps:

1. In the **Stores** page, click `Add store`.  
2. In the **Store name** field, enter a name for the store.
3. Under **Storefront**, select one of the following options:  

   * **FastStore:** Select this option if the store uses FastStore. Then, choose the corresponding FastStore version: `v3` or `v4`.  
   * **Headless:** Select this option if the store uses a custom headless implementation.

4. In the **Default locale** section, configure the default locale for the store:  
   * **Locale name:** Enter a name to identify the locale.
   * **Language:** Select the default language.
   * **Region:** Select the default region.
5. Click `Create store`. The new store will be displayed on the **Stores** page.

## Managing a store

To manage one of your account stores, follow these steps:

1. On the **Stores** page, click the store card you want to manage, for example, **FastStore**.  
2. On the Stores page, you will see the following options you can manage: [General information](#general-information), [Locales](#locales) and [Build settings](#build-settings).

### General information

In the **General** tab, you can view and edit the store's basic identification and top-level settings that define how the storefront interacts with the CMS.

![general-information-tab](https://vtexhelp.vtexassets.com/assets/docs/src/cms-general%20information-overview___2497ce5674751230c817ecffaf98f28c.png)

To edit the store name, click `Edit`. You can view the following fields:

| Field | Description |
| :---- | :---- |
| **Name** | Store name displayed in the CMS. |
| **Storefront** | Storefront implementation connected to the CMS, such as FastStore or a custom headless implementation. |
| **URL** | Storefront URL connected to the Store. |
| **API** | API endpoint used by the storefront to communicate with the CMS. |

### Locales

The **Locales** tab defines the language and regional settings for the store content. For more information, see the [Configuring locales](https://help.vtex.com/docs/tutorials/configuring-locales) guide.

![locales-tab](https://vtexhelp.vtexassets.com/assets/docs/src/cms-locales-tab___b0ea3a987998523c52ed26d1133b53cb.png)

### Build settings

The Build settings tab defines how CMS interacts with the storefront during preview and publish flows. In this section, you configure the preview endpoint used when editors click **Preview** and the webhook used to trigger downstream storefront rebuilds after content is published.

In this tab, you will see the following fields:

| Field name | Description | Value example |
| :---- | :---- | :---- |
| **Store repository** | The URL of the repository where the store’s frontend code is hosted. This repository is used to identify the storefront project related to this store. |  |
| **Preview** | Webhook URL that provides the preview for pages in the CMS. | `https://{accountName}.vtex.app/api/preview` |
