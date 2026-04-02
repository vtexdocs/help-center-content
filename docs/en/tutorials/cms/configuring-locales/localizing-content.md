---
title: "Localizing content - Overview"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-02T11:00:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: localizing-content
locale: en
order: 1
---

When your store has [multiple locales configured](https://help.vtex.com/docs/tutorials/configuring-locales#understanding-how-locales-are-connected-to-bindings), the CMS allows you to create and manage localized versions of your content. This enables you to adapt content such as page titles and descriptions for different languages or regions.

The CMS provides tools to help you edit content across multiple locales and define how content behaves when a localized version is unavailable.

> ℹ️ Learn more about supported languages and regions in [Configuring locales](https://help.vtex.com/docs/tutorials/configuring-locales).

## Locale selector

You can manage one or multiple locales simultaneously by using the **locale selector** available while editing a page. After selecting one or more locales, the entry form updates to show the localized fields for those locales, so you can manage the content in the selected locale context.

For example, you can edit the English (US) and Portuguese (BR) versions of a page title within the same form.

![localizing-content-overview](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-1-en___a732130cef79b9b08022be56a6c26e07.png)

## Managing localized content

Depending on your localization strategy, each field within a component will fallback to a [configured locale](https://help.vtex.com/docs/tutorials/configuring-locales).

When editing content, you can either:

* Provide a specific value for the selected locale.  
* Leave the field empty and allow the system to use fallback content from another locale.

Fallback behavior ensures that content is still displayed even when a localized version has not yet been created.

> ⚠️ To override fallback content for a field, add a value for that locale. When a localized value exists, the system ignores the fallback and uses the localized content instead.

### How fallback content works

Each locale has a [fallback locale definition](https://help.vtex.com/docs/tutorials/configuring-locales). If a field doesn’t contain content for a specific locale, the CMS automatically uses the fallback locale value.

For example, suppose the Page title field is localized, and the following locales are configured:

* English - US (default)  
* Portuguese - BR  
  * Falls back to English - US

If the Page title field has a value for both locales, the storefront displays the value specific to each locale.

* English - US: “[Merchant.com](http://Merchant.com) - your electronics destination”  
* Portuguese - BR: “[Merchant.com.br](http://Merchant.com.br) - seu destino eletrônico”

![fallback-locale-overview](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-2-en___e56ce0060ee1da4a80464764e183b096.png)

If the Page title field is empty for Portuguese (BR), the storefront uses the fallback locale value instead.

* English - US: “[Merchant.com](http://Merchant.com) - your electronics destination”  
* Portuguese - BR: “[Merchant.com](http://Merchant.com) - your electronics destination” (fallback from English - US)

![fallback-locale](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-3-en___c0f421a8cbeb9069631db06f62e7fdc5.png)

This fallback behavior ensures that content remains available even when a localized value hasn’t been added yet.

## Translating content

Within an entry, you can translate either a single field or the entire entry. Content is translated from the \[default locale\](/tbd) into one or more selected target locales.

When translating content, the system uses the value from the default locale as the source and generates translated values for the chosen locales. You can select one or multiple locales for translation.

![trasnlating-content](https://vtexhelp.vtexassets.com/assets/docs/src/localizing-content-4-en___2df901d01ba8c54eee7363fb20031e3c.png)

### Overwrite fallback content

When this option is selected in the translation module, all content for the targeted locales will be overwritten—removing the fallback. This option is selected by default. If you unselect this option, only fields that have content for the target locales will be translated.
