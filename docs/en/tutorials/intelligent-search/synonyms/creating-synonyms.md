---
title: 'Creating synonyms'
id: 5IfjhvjxNAvJGEWNn0AhOA
status: PUBLISHED
createdAt: 2024-06-27T16:36:30.904Z
updatedAt: 2025-10-15T13:46:16.968Z
publishedAt: 2025-10-15T13:46:16.968Z
firstPublishedAt: 2024-06-27T16:37:25.800Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-synonyms
legacySlug: configuring-synonyms
locale: en
subcategoryId: BBzMtJan1UTxC9QZODnlN
---

> ℹ️ We recommend using [Synonyms](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV) instead of [Substitute Words](/en/tutorial/otimizar-as-buscas-com-palavras-substitutas--32FqSsl5VuQyiIMEc02Uwu?&utm_source=autocomplete) to associate words with products, as synonyms allow you to manage terms per product in a more scalable way. Contact our [Support team](https://support.vtex.com/hc/pt-br/requests) for more information.

There are two ways to set up synonyms in VTEX Admin: [individually](#creating-synonyms-individually) or by [importing a spreadsheet in CSV format](#importing-csv-spreadsheet). If you need to register synonyms in bulk, we recommend using the spreadsheet. See the instructions for each configuration form in the following sections.

The configuration of synonyms works recursively. This means that when you add a second synonym to an existing one, it will also become a synonym for the first one.

> ℹ️ Synonyms should not be used to resolve misspellings, plural and singular errors, or even pronouns, articles, and propositions in the search terms. On all these points, VTEX Intelligent Search is able to interpret, learn and solve them automatically through algorithms.

## Creating synonyms individually

Follow the step-by-step procedure to configure synonyms individually in the VTEX Admin:

1. In the VTEX Admin, go to __Storefront__, or type __Storefront__ in the search bar at the top of the page.
2. Under **Intelligent Search**, click **Synonyms**. 
3. Click on `Create Synonym`.
4. Fill in the fields that correspond to the synonym:
   - __Type:__ defines the type of synonym. Check [Types of synonyms](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#types-of-synonyms) for more information.
   - __Terms:__ words or expressions to be defined as synonyms. You must press `Enter` after each term to insert another term.
   - **Locales:** Languages to which the synonym will apply. The field is only available for stores using [Multilanguage settings (Beta)](/en/docs/tutorials/vtex-intelligent-search-multilanguage-settings-beta).
   - __Status:__ defines whether the synonym will be active or inactive.
5. To finish, click on `Save`.

Changes can take up to two hours to take effect.

> ℹ️  This feature is available on VTEX Intelligent Search Multilanguage. Read our article [VTEX Intelligent Search: Multilanguage settings (Beta)](/en/tutorial/vtex-intelligent-search-multilanguage-settings-beta--2WahlTESLXIJ9XBdQMdTYO#synonyms)to learn more.

## Importing CSV spreadsheet

In case there are many synonyms to be added, you can make a .csv file and import it in the Admin.

> ⚠️ The CSV file used in the import must be up to 20 KB. Larger files will not be accepted by the system. To request the import of a larger file, please contact [Support](https://support.vtex.com/hc/en-us/requests).

To import the file, follow the steps below:

1. Create a CSV file in the format described on [Synonyms spreadsheet template](#synonyms-spreadsheet-template).
2. In the VTEX Admin, go to __Storefront__, or type __Storefront__ in the search bar at the top of the page.
3. Under **Intelligent Search**, click **Synonyms**. 
4. Click on <i class="fas fa-download"></i> `Import`.
5. Drag the CSV file into the bounded area or click on `choose a file` to select the file on your device.
6. Click on `Import`.

### Synonyms spreadsheet template

Each row in the spreadsheet is a synonym. Rows should follow the format that corresponds to the selected [synonym type](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#types-of-synonyms):

 - __Unidirectional:__ `{terms separated by comma};{equivalent term};{status}`

   __Examples:__

    - `smartphone;iphone;true`: When searching for `smartphone`, `iphone` results will be returned. However, when searching for `iphone`, `smartphone` results will not be returned.
    - `tablet;ipad;true`: When searching for `tablet`, `ipad` results will be returned. However, when searching for `ipad`, `tablet` results will not be returned.

 - __Bidirectional:__ `{terms separated by comma};{status}`

   __Examples:__

    - `tv,television,television set;true`: When searching for any of these terms, the products containing any of them will be returned.
    - `monitor,screen,display;true`: When searching for any of these terms, the products containing any of them will be returned.

Below are some value examples for completing the spreadsheet, including different synonym types and the import result in the VTEX Admin. Each row in the example represents a row in the spreadsheet.

Spreadsheet example:

```
flower;blossom;true
little,mini;small;true
dog;animal;false
beauty,blush,powder;true
```

Result in the VTEX Admin:

![sinonimos-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/intelligent-search/synonyms/creating-synonyms_1.png)

#### Multilanguage stores (Beta)

Stores using  [Multilanguage settings (Beta)](/en/docs/tutorials/vtex-intelligent-search-multilanguage-settings-beta) must follow the template below to import synonyms for specific locales.

- __Unidirectional__: `{terms separated by comma};{equivalent term};{status};{locales separated by comma}`

   __Example:__
   - `smartphone;iPhone;true;en-GB`: When searching for smartphone in the English language store (`locale en-GB`), the website will return results for `iphone`. However, when searching for `iphone`, the website will not return results for `smartphone`.

- __Bidirectional__: `{terms separated by comma};{status};{locales separated by comma}`

    __Example:__
    - `tv,smart tv;true;en-GB`: When searching for one of these terms in the store in English (`locale en-GB`), the search results will return any product that contains one of these terms.

> ⚠️ If the imported .csv file does not have the `locale`, the synonym will be valid for all languages available in the store.

