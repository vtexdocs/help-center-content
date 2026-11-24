---
title: 'URL Mapping (301 Redirect)'
id: frequentlyAskedQuestions_623
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.075Z
updatedAt: 2026-11-19T15:38:00.000Z
publishedAt: 2023-03-27T13:46:43.143Z
firstPublishedAt: 2019-01-24T22:13:49.408Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: url-mapping-301-redirect
legacySlug: url-mapping-301-redirect
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ This tutorial is for stores using CMS Portal (Legacy). For other stores, you can configure this in [Pages](/en/docs/tutorials/pages-overview). See [Managing URL redirects](/en/docs/tutorials/managing-url-redirects) for more information.

URL mapping is used to redirect specific URLs to other URLs. Use this feature when your store already has URLs indexed by search engines and you want to redirect them to more attractive ones, preserving SEO and avoiding indexing errors.

All mapping activities recorded will be executed according to 301 redirects. The 301 redirect, also known as permanent redirect, transfers all key data from the original URL (PageRank, link popularity) to the new URL.

There are two ways to add or edit a URL mapping:

- [Adding or editing manually](#adding-or-editing-manually)
- [Importing via spreadsheet](#importing-via-spreadsheet)

To remove existing mappings, see the [Deleting mapped URLs](#deleting-mapped-urls) section.

## Adding or editing manually

To add or edit a mapping manually, follow these steps:

1. In the VTEX Admin, go to **Storefront > Layout**.
2. Click the **CMS** folder to open the directory.
3. Click the **URL Builder** folder.
4. Click the `Add` button to add a new mapping or the `Update` button to edit an existing one.
5. Complete the [URL Builder fields](#url-builder-fields).
6. Save by clicking `Save URL`.

### URL Builder fields

- **Url from:** URL that will be redirected. This URL must not contain the store domain. Required field.
- **Url to:** URL to which the navigation will be redirected. This URL must not contain the store domain. Required field.
- **Start date:** Date and time when the mapping will start to be considered. Required field.
- **End date:** Date and time when the mapping will no longer be considered.
- **Active:** Indicates if the mapping is active or inactive.

> ℹ️ To create a mapping for the home page (root directory), complete the **Url to** field with a slash `/`.

## Importing via spreadsheet

To import mappings via spreadsheet, follow these steps:

1. In the VTEX Admin, go to **Storefront > Layout**.
2. Click the **CMS** folder to open the directory.
3. Click the **URL Builder** folder.
4. Click `Import` to import the spreadsheet.
5. Download the spreadsheet template illustrated below by clicking the `Click here` button.

   ![spreadsheet-example](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/url-mapping-301-redirect_1.png)

6. Complete the [spreadsheet fields](#spreadsheet-fields).
7. After completing the spreadsheet, click the `Browse for file` button on the import screen.
8. Select the file to import from your computer. The file must have the `.xls` extension and `Excel 97-2003 Workbook` format.
9. Click the `Save file` button to finish. After saving, a message will display the number of URLs added.

### Spreadsheet fields

- **Url from:** URL that will be redirected. This URL must not contain the store domain. Example: `/path_on_my_old_website.html`.
- **Url to:** URL to which the navigation will be redirected. This URL must not contain the store domain. Example: `/path_on_my_new_website.html`.
- **Active:** Indicates if the mapping is active or inactive. Set `1` to activate and `0` to deactivate.
- **Start date:** Date when the mapping will start to be considered. The date format must be `dd/mm/yyyy`.
- **End date:** Date when the mapping will no longer be considered. The date format must be `dd/mm/yyyy`.
- **Remove:** Option to delete the mapping. Enter the value `1` to delete the URL.

## Deleting mapped URLs

To delete existing mappings, you can do it [manually](#deleting-manually) or [via spreadsheet](#deleting-via-spreadsheet).

### Deleting manually

To delete URLs manually, follow these steps:

1. In the VTEX Admin, go to **Storefront > Layout**.
2. Click the **CMS** folder to open the directory.
3. Click the **URL Builder** folder.
4. Select the mapping row you want to delete.
5. In the top menu of URL Builder, click `Delete`.

### Deleting via spreadsheet

To delete URLs via spreadsheet, follow these steps:

1. In the VTEX Admin, go to **Storefront > Layout**.
2. Click the **CMS** folder to open the directory.
3. Click the **URL Builder** folder.
4. In the top menu, click the `Export` button to download a spreadsheet containing the previously registered URLs.
5. In the **Remove** column, enter the value `1` for the rows you want to delete.
6. Import the spreadsheet in URL Builder, following the steps in the [Importing via spreadsheet](#importing-via-spreadsheet) section.
