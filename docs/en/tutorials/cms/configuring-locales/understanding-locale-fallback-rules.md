---
title: "Understanding locale fallback rules"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-01T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: understanding-locale-fallback-rules
locale: en
order: 2
---

When [configuring locales](/en/docs/tutorials/configuring-locales), some types of content don't need localization. For example, you may have a banner image without text or a brand name that remains the same across all languages. Fallback strategies help you avoid duplicating this kind of content unnecessarily. Below are two common approaches:

| Use case | Description |
| :---- | :---- |
| [Default locale as fallback for other locales](#default-locale-as-fallback-for-other-locales) | Use when most content is shared, and other locales only override specific differences. |
| [Core language fallback with regional variations](#core-language-fallback-with-regional-variations) | Use when managing regional variations that inherit from a core language locale. |

## Default locale as fallback for other locales

In this strategy, all core content is stored in the default locale (for example, `English - US`). Other locales inherit content from the default locale and only override fields when localization is required. This means you only translate or modify content when it differs from the default. This approach works well when:

* Most content is shared across languages.  
* Localization differences are minimal.

In the example below, we have two locales:

* `English-US` (default)  
* `Portuguese-BR`

  * Fallback: `English-US`

If a description isn't translated into Portuguese, the system automatically displays the `English-US` content instead. You only localize fields in `Portuguese-BR` when the content needs to differ (for example, promotional text or region-specific messaging).

## Core language fallback with regional variations

This strategy is useful when managing multiple languages and regional variations. You create a hierarchy where regional locales fall back to a core language locale. This approach is ideal when:

* The store supports multiple regions with the same language.  
* Some languages share a base language structure.  
* You need layered fallback logic.

In the example below, we have set up the following locales:

* `English-US` (default)  
* `English-UK`  
  * Fallback: `English-US`  
* `Spanish-ES`  
  * Fallback: `English-US`  
* `Catalan-ES`  
  * Fallback: `Spanish-ES`

`English-UK` inherits content from `English-US` and only overrides specific regional differences (for example, "pants" to "trousers"). `Catalan-ES` inherits from `Spanish-ES` and only replaces content where Catalan is required.
