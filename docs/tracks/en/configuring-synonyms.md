---
title: 'Configuring Synonyms'
id: 3ExbC3QKNF4zH7Gs8jD1cL
status: PUBLISHED
createdAt: 2019-11-29T12:04:33.557Z
updatedAt: 2023-03-30T19:19:37.658Z
publishedAt: 2023-03-30T19:19:37.658Z
firstPublishedAt: 2020-03-05T19:56:02.826Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: configuring-synonyms
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
---

There are two ways to set up synonyms in VTEX Admin: [individually](#creating-synonyms-individually) or by [importing a spreadsheet in CSV format](#importing-csv-spreadsheet). If you need to register synonyms in bulk, we recommend using the spreadsheet. See the instructions for each configuration form in the following sections.

The configuration of synonyms works recursively. This means that when you add a second synonym to an existing one, it will also become a synonym for the first one.

<div class="alert alert-info" role="alert">
<p>Synonyms should not be used to resolve misspellings, plural and singular errors, or even pronouns, articles, and propositions in the search terms. On all these points, VTEX Intelligent Search is able to interpret, learn and solve them automatically through algorithms.</p>
</div>

## Creating synonyms individually

Follow the step-by-step procedure to configure synonyms individually in the VTEX Admin:

1. In the VTEX Admin, go to __Storefront__, or type __Storefront__ in the search bar at the top of the page.
2. Under **Intelligent Search**, click **Synonyms**. 
3. Click on `Create Synonym`.
4. Fill in the fields that correspond to the synonym:
   - __Type:__ defines the type of synonym. Check [Types of synonyms](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#types-of-synonyms) for more information.
   - __Terms:__ words or expressions to be defined as synonyms. You must press `Enter` after each term to insert another term.
   - __Status:__ defines whether the synonym will be active or inactive.
5. To finish, click on `Save`.

Changes can take up to two hours to take effect.

<div class="alert alert-info">
<p> This feature is available on VTEX Intelligent Search Multilanguage. Read our article <a href="https://help.vtex.com/en/tutorial/vtex-intelligent-search-multilanguage-settings-beta--2WahlTESLXIJ9XBdQMdTYO#synonyms">VTEX Intelligent Search: Multilanguage settings (Beta)</a>to learn more.</p>
</div>

## Importing CSV spreadsheet

In case there are many synonyms to be added, you can make a .csv file and import it in the Admin. The file must contain the following format, according to the [types of synonyms](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV#types-of-synonyms) chosen:

 - __Unidirectional:__ `{terms separated by comma};{expanded terms separated by comma};{status}`

   __Examples:__

    - `smartphone;iphone;true`: When searching for `smartphone`, `iphone` results will be returned. However, when searching for `iphone`, `smartphone` results will not be returned.
    - `tablet;ipad;true`: When searching for `tablet`, `ipad` results will be returned. However, when searching for `ipad`, `tablet` results will not be returned.

 - __Bidirectional:__ `{terms separated by comma};{status}`

   __Examples:__

    - `tv,television,television set;true`: When searching for any of these terms, the products containing any of them will be returned.
    - `monitor,screen,display;true`: When searching for any of these terms, the products containing any of them will be returned.

To import the file, follow the steps below:

1. In the VTEX Admin, go to __Storefront__, or type __Storefront__ in the search bar at the top of the page.
2. Under **Intelligent Search**, click **Synonyms**. 
3. Click on `Import`.
