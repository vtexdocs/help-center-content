---
title: 'VTEX Intelligent Search: Multilanguage settings (Beta)'
id: 2WahlTESLXIJ9XBdQMdTYO
status: PUBLISHED
createdAt: 2021-03-09T22:44:16.513Z
updatedAt: 2023-07-26T19:15:24.855Z
publishedAt: 2023-07-26T19:15:24.855Z
firstPublishedAt: 2021-03-10T21:13:35.816Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-intelligent-search-multilanguage-settings-beta
legacySlug: vtex-intelligent-search-multilanguage-settings-beta
locale: en
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

> ℹ️ This feature is in beta, which means that we are working to improve it. If you have any questions, please contact [our Support](https://support.vtex.com/hc/pt-br/requests).

[VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) is an intelligent search application for ecommerce that is available for stores created with [VTEX IO](https://vtex.com/br-pt/store-framework/). To install and configure VTEX Intelligent Search in your store, read our [Search article](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search). The tool displays search and product suggestions that may interest the user, corrects spelling errors, and understands related words that are not included in the product information.

VTEX Intelligent Search: Multilanguage expands [Intelligent Search’s](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) capabilities and offers a multilingual search experience, ideal for stores that operate in several countries. This feature facilitates adapting the store to new markets and allows users to search in many different languages.

> ℹ️  If you want to expand your ecommerce to another language, contact [our Support](https://support.vtex.com/hc/pt-br/requests) and the VTEX team will perform the necessary configurations.

After installing VTEX Intelligent Search: Multilanguage, your Catalog’s information will be translated by the [Messages](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization) app, provided that you have added translations for the following fields: Name, Brand, Description, Categories, CategoryTrees, metadata, metadataKeyword, Specifications, SKU {name}. Read the developer guide on [Translating Catalog content](https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization) for more details.

From the [Multi-Tenant API](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-multi-language-stores), VTEX Intelligent Search: Multilanguage obtains all locations and respective languages (examples: `pt-br`, `en-GB`) that were added to the store. Each location has its URL.

If a customer chooses a language when browsing the store, it will redirect them to the URL of the desired location. After that, all Intelligent Search features will be displayed in the chosen language, according to the retailer's settings.

VTEX Intelligent Search: Multilanguage allows you to customize the search experience for each region by assigning the following search settings to specific locations:

- [Merchandising rules](#merchandising-rules)
- [Synonyms](#synonyms)
- [Redirects](#redirects)
- [Banners](#banners)

### Merchandising rules
After installing the VTEX Intelligent Search: Multilanguage, the page for creating or editing Merchandising Rules — available on VTEX Admin through __Storefront__ > __Intelligent Search__ > __Merchandising rules__ —  will contain the additional __Locales__ field, which allows you to choose the locales to which the Merchandising Rules will apply, as shown in the image below.

![img regrasmerch intelligentsearchmultilanguage EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/intelligent-search-beta/vtex-intelligent-search-multilanguage-settings-beta_1.png)

To learn more about this field, read our article on [how to configure Merchandising rules in VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2FpbarYzsnbg7aZZn3TGF8).

### Synonyms
You can configure Synonyms for a multi-language store in the Admin by filling out a form or importing a .csv file.

> ⚠️  Settings created or changed in **Synonyms** can take up to 2 hours to be applied in the store. 

#### Creating Synonyms via form
After installing the VTEX Intelligent Search: Multilanguage, the page for creating or editing Synonyms (available through — available on VTEX Admin through __Storefront__ > __Intelligent Search__ > __Synonyms__ —  will contain the additional __Locales__ field, which allows you to choose the locales to which the Synonyms will apply, as illustrated in the image below. Click on the languages you want to select.

![img sinonimos intelligentsearchmultilanguage EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/intelligent-search-beta/vtex-intelligent-search-multilanguage-settings-beta_2.png)

To learn more about this field, read our article on [how to configure Synonyms in VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).

#### Importing the Synonyms spreadsheet

If you prefer to import Synonyms for specific languages via .csv file, you must create a .csv file in __Unidirectional__ or __Bidirectional__ format, according to the [desired effect for the synonym](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL), and insert the new field `<comma-separated locales>`:

-	__Unidirectional__: `<comma-separated terms>;<comma-separated expanded terms>;<status>;<comma-separated locales>`
   -  For example: `smartphone;iPhone;true;en-GB`: when searching for smartphone in the English language store (`locale en-GB`), the website will return results for `iphone`. However, when searching for `iphone`, the website will not return results for `smartphone`.

- __Bidirectional__: `<comma-separated terms>;<status>;<comma-separated locales>`
    - For example: `tv,smart tv;true;en-GB`: when searching for one of these terms in the store in English (`locale en-GB`), the search results will return any product that contains one of these terms.

> ⚠️ If the imported .csv file does not have the column `locale`, the synonym will be valid for all languages available in the store.

To learn more about importing Synonyms spreadsheets, read our article on [how to configure Synonyms in VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).

### Redirects

After installing the VTEX Intelligent Search: Multilanguage, the page for creating or editing Redirects — available on VTEX Admin through __Storefront__ > __Intelligent Search__ > __Redirects__ —  will contain the additional __Locales__ field, which allows you to choose which locales the Redirects will apply to, as illustrated in the image below. Click on the languages you want to select.

![img redirecionamentos intelligentsearchmultilanguage EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/intelligent-search-beta/vtex-intelligent-search-multilanguage-settings-beta_3.png)

To learn more about this field, read our article on [how to configure Redirects in VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4Gd2wLQFbCwTsh8RUDwSoL).

### Banners

After installing the VTEX Intelligent Search: Multilanguage, the page for creating or editing Banners — available on VTEX Admin through __Storefront__ > __Banners__ —  will contain the additional __Locales__ field, which allows you to choose which locales the Banners will apply to, as illustrated in the image below. Click on the languages you want to select.

![img banner intelligentsearchmultilanguage EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/intelligent-search-beta/vtex-intelligent-search-multilanguage-settings-beta_4.png)

To learn more about this field, read our article on [how to configure Banners in VTEX Intelligent Search](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5).
