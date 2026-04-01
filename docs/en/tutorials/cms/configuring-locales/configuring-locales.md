---
title: "Configuring locales"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-01T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: configuring-locales
locale: en
order: 1
---

A locale defines the language and regional settings for the store content. Locales enable multi-language shopping experiences by allowing you to configure language settings and fallback rules.

With locales, you can manage storefront content for multiple markets within a single store. Instead of duplicating pages or maintaining separate stores for each region, you can define the store locales (for example, `en-US` or `pt-BR`) and create localized versions of the same content entry.

In this guide, you'll learn how to configure locales for your store.

## Before you begin

* Before configuring locales, you should understand two key concepts that determine how content appears in the storefront. Knowing these concepts helps you develop an effective localization strategy and avoid unnecessary content duplication.

| Concept | Description |
| :---- | :---- |
| **[Locale fallback strategies](/en/docs/tutorials/understanding-locale-fallback-rules):** | Decide what content the system shows when a locale lacks its own localized content. |
| [**Locale-binding connection:** ](#understanding-how-locales-are-connected-to-bindings)| Clarify how the storefront chooses the correct locale based on the binding configuration. |

* For [FastStore](https://developers.vtex.com/docs/guides/faststore) storefronts: You must implement the Localization feature in the store project. To do so, follow the instructions in Handling internationalization with the Localization feature.

* Make sure the following [resource](https://help.vtex.com/en/docs/tutorials/license-manager-resources) is associated with your [user role](https://help.vtex.com/en/docs/tutorials/roles):

| Product | Category | Resource |
| :---- | :---- | :---- |
| Commerce Content | Stores | Create Store |

## Accessing the Locales page

To access the **Locales** page, open the VTEX Admin and go to **Content > Stores**. Select the store you want to configure by clicking its card, then click **Locales**.

![configuring-locales-overview](https://vtexhelp.vtexassets.com/assets/docs/src/locales-overview-en___edb32a349dafeaebdb2d8bd93b28b4f9.png)

The following table shows the options available on the page:

| Option | Description |
| :---- | :---- |
| **Search** | Filters the list of existing locales. |
| **Create locale** | Opens a side panel to add a new language and region configuration to your store. |
| **Locale** | Displays the locale name and code (for example, `English (US)` and `en-US`), representing the specific language and region combination configured for the store. |
| **Language** | Specifies the base language assigned to the locale (for example, English or Portuguese). |
| **Region** | Specifies the region or country associated with the language (for example, United States or Brazil). |
| **Default locale** | Defines the default locale the system will select if no locale is provided. |
| **Fallback** | Defines the locale the system displays when content isn't provided in the selected locale. |
| **Status** | Indicates whether a locale is **Active** or **Inactive**. When a locale is inactive, content can't be published or displayed in the storefront for that specific locale. |
| **Options (`⋮`)** | Opens a menu with the options: **Edit:** Edit the locale's specific configuration. **Deactivate:** Change the locale status to **Inactive**. |

## Creating a new locale

To create a new locale for your store, follow these steps:

1. In the **Locales** page, click `Create locale`. A side panel will appear to create the locales with the following fields to complete:

    ![creating-a-new-locale](https://vtexhelp.vtexassets.com/assets/docs/src/creating-locale-en___e21a64767d6f2ed54e2011daf226b0b6.png)

    | Field name | Description | Value example |
    | :---- | :---- | :---- |
    | **Name** | Add the locale name. | `English (US)` |
    | **Active** | Select this box to make the locale available in your store once you create it. | - |
    | **Make this the default locale** | Select this option to set the locale as the default. The default locale serves as the primary source of content and as the fallback for other locales. When creating your first locale, you must select this option. You can change the default locale later. | - |
    | **Language** | Select the available languages. For more information, see the [Supported languages](/en/docs/tutorials/supported-languages-and-regions#supported-languages) list. | `English (en)` |
    | **Region** | Select the available region. For more information, see the [Supported regions](/en/docs/tutorials/supported-languages-and-regions#supported-regions) list. | `Canada (CA)` |
    | **Fallback locale** | Select the locale that displays when content isn't provided in the locale. To create a fallback locale, follow the instructions in [Setting a fallback locale](#setting-a-fallback-locale). | `en-US` |

2. Once you complete the fields above, click `Create`.

## Creating the default locale

The default locale defines the default language and region for creating content for the store. If a request doesn't specify a locale, the system automatically returns content from the default locale to ensure a response is always provided.

### Setting a fallback locale

When [creating a locale](#creating-a-new-locale), you can designate a **fallback locale** as a source of content when no content is defined in the locale. This helps reduce content duplication when managing multiple locales by defining localized content only for fields that differ. This means you don't have to translate or duplicate every field for every locale, only the ones that require changes.

## Understanding how locales are connected to bindings

Locales are matched to storefront bindings using ISO [language](https://www.iso.org/iso-639-language-code) and [country](https://www.iso.org/iso-3166-country-codes.html) codes (for example, `en-US`). Each binding is configured with a specific ISO code. When the storefront requests content, it sends this code to CMS. The system then looks for a locale with a matching ISO code and returns the corresponding content.

For example:

* If a binding is configured with `en-US`, CMS returns content from the English-US locale.
* If a binding is configured with `pt-BR`, CMS returns content from the Portuguese-BR locale.
* If no locale matches the binding's ISO code, the system returns content from the default locale.
