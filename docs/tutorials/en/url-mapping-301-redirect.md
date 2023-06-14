---
title: URL Mapping (301 Redirect)
id: frequentlyAskedQuestions_623
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.075Z
updatedAt: 2023-03-27T13:46:43.143Z
publishedAt: 2023-03-27T13:46:43.143Z
firstPublishedAt: 2019-01-24T22:13:49.408Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: url-mapping-301-redirect
legacySlug: url-mapping-301-redirect
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class="alert alert-warning">
<p>This tutorial is for stores using Legacy CMS Portal. For other stores, the configuration is made in <a href="https://help.vtex.com/en/tutorial/paginas-visao-geral--5iBUUJbK5NqG6OxlDrGNzc">Pages</a>. Please refer to <a href="https://help.vtex.com/en/tutorial/gerenciando-redirecionamentos-de-url--3UJuFrU8imSVWg134mkvJV">Managing URL redirects</a> for more information.</p>
</div>

URL mapping is used to redirect specific URLs to other URLs. This feature is useful when a store already has URLs indexed in search engines and wants to redirect them to more attractive ones without changing the SEO and avoiding indexing errors.

All mapping activities recorded will be executed according to 301 redirects. The 301 redirect, also known as “permanent redirect,” transfers all key data from the original URL (**Page Rank**, **Link Popularity**, etc.) to the new URL.

There are two ways to add and change URL mapping:

- [Manually](#manually)
- [Via spreadsheet](#via-spreadsheet)

## Manually

1. In the VTEX Admin, access **Storefront > Layout**
2. Click on the **CMS** folder to open the directory.
3. Click on the **URL Builder** folder.

4. Click on the `Add` button to add a new mapping or the `Update` button to edit an existing one.
5. Fill in the [URL Builder fields](#url-builder-fields).
6. Save by clicking on `Save URL`.

### URL Builder fields

- **Url from:** URL that will be redirected. This URL must not contain the domain. Required field.
- **Url to:** URL to which the navigation will be redirected. This URL must not contain the domain. Required field.
- **Start date:** date and time when the mapping will start to be considered. Required field.
- **Start date:** date and time when the mapping will no longer be considered.
- **Active:** indicates if the mapping option is active or inactive.

<div class="alert alert-info"> 
  <p>To map a URL to home (root directory), fill in the <b>Url to</b> field with a slash <code>/</code>.</p>
</div>

## Via spreadsheet

1. In the VTEX Admin, access **Storefront > Layout**
2. Click on the **CMS** folder to open the directory.
3. Click on the **URL Builder** folder.
4. Click on `Import` to import the spreadsheet.
5. Download the spreadsheet template illustrated below by clicking on `Export`.
![exemplo-planilha](//images.contentful.com/alneenqid6w5/2Z63gJkADcR2gveT3lncQb/9bbd790becd99acb7b647537eb71c6a9/Screenshot_5.png)
6. Fill in the [spreadsheet fields](#spreadsheet-fields).
7. After populating the spreadsheet template, click on the `Localize` button on the import page to upload the template.
8. Select the file you want to upload. The filename extension must be `.xls` in the format `Excel 97-2003 Workbook`.
9. Click on the `Save file` button to finish. A message will be displayed informing the number of URLs added.

### Spreadsheet fields

- **Url from:** URL that will be redirected. This URL must not contain the store’s domain. Example: `/path_on_my_old_website.html`.
- **Url to:** URL to which the navigation will be redirected. This URL must not contain the store’s domain. Example: `/path_on_my_old_website.html`.
- **Active:** indicates if the mapping option is active or inactive. Set `1` to enable and `0` to disable.
- **Start date:** date when the mapping will start to be considered. The date format must be `dd/mm/yyyy`.
- **End date:** date when the mapping will no longer be considered. The date format must be `dd/mm/yyyy`.
