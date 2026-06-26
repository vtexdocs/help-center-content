---
title: 'How to create landing pages with custom URLs'
id: q0p2UU6sBaYcEMsq24YSi
status: PUBLISHED
createdAt: 2018-10-02T21:22:13.046Z
updatedAt: 2023-03-29T15:54:22.828Z
publishedAt: 2023-03-29T15:54:22.828Z
firstPublishedAt: 2018-10-02T21:24:34.630Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-create-landing-pages-with-customized-urls
legacySlug: how-does-the-search-context-work
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ This tutorial is only valid for CMS Portal (Legacy) stores and for the legacy search. If your store uses VTEX Intelligent Search, see the [Intelligent Search track](https://help.vtex.com/docs/tutorials/intelligent-search-overview).

The search engine used by CMS Portal (Legacy) stores is customizable and allows you to apply filters by department, category, brand, collection, specification, and SKU, among others.

Because these filters are applied in the URL, more complex searches may generate unfriendly and less relevant addresses for search engine crawlers, such as Google.

To address this situation, CMS folders have the `Search Context (Default)` field, which defines which search filters will be applied to the page linked to the folder. With this configuration, the CMS loads the expected results without exposing filters in the URL, creating a more user-friendly route.

> ℹ️ If a folder has a value set in `Search Context (Default)`, it'll override any search parameter entered directly in the URL. This means that filters and sorting, including the `O` parameter, won't be applied to the page.

In this guide, you will learn how to use **Search Context** to associate a search with a CMS folder and display its results on a friendly URL.

## Before you begin

Make sure that the [template](/docs/tutorials/what-are-templates) of the page contains the `<vtex.cmc:searchResult/>` control. The Search Context only works if the template contains this control. Learn more at [How to use the Search Result control](/docs/tutorials/how-to-use-the-search-result-control).

1. In the Admin, go to **Storefront > Layout**.
2. Click **CMS > HTML Templates**.
3. Create a new template or ensure that an existing template contains the `<vtex.cmc:searchResult/>` control. For more details on how to create a template, see [Creating and editing a page template](/docs/tutorials/how-to-create-a-page-template).

> ℹ️ The `<vtex.cmc:searchResult/>` control only works on pages with search context, such as pages where the displayed results were obtained from a user search.

## Instructions

To create a landing page with a custom URL, follow the steps below:

1. In the VTEX Admin, go to **Storefront > Layout** to open the **Layout** section.
2. In the **Layout** section, go to **CMS > Sites and channels**.
3. Click the desired website.
4. Click the root folder (`/`).
5. Decide if you will configure the Search Context in:
   - [An existing page on your website](#configure-search-context-on-existing-page)
   - [A new page to be created](#configure-search-context-on-a-new-page)

> ⚠️ The legacy search renders a landing page when the searched term exactly matches the name of a folder configured in the CMS. For this folder to be searchable, a [layout](/docs/tutorials/what-are-layouts) must be associated with it, as does the parent folder. In structures with more than one directory level, such as `/folder1/landing-page`, this behavior may not work as expected, and the search may return a 404 page.

### Configuring Search Context on an existing page

After clicking the root folder (`/`), follow the instructions below:

6. Click the folder you want to use for the landing page.
7. On the right side of the screen, click `edit`.
8. In the `Search Context (Default)` field, enter the search parameters you want to apply to the page. For example, to display products from category `111`, brand `222` and with specification `333`, use the following value: `fq=C:111&fq=B:222&fq=spec_fct_1:333`.
9. Click `Save Folder`.
10. Access the URL of the configured folder and check if the page displays the expected products. The landing page will be available at the URL `https://www.{accountName}.com/{landing-page}`, where `{accountName}` is your store name and `{landing-page}` is the name of the folder in the CMS with the configured Search Context.

### Configure Search Context on a new page

After clicking the root folder (`/`), follow the instructions below:

6. On the right side of the screen, click `new folder`.
7. Complete the fields based on the guidelines below:
   - **Folder Name:** URL path.
   - **Marketing Context (Default):** Defines whether the page can be accessed by [UTM](/docs/tutorials/what-are-utm-source-utm-campaign-and-utm-medium) parameters. This field is optional.
   - **Search Context (Default):** Adds search parameters. For example, to display products from category `111`, brand `222` and with specification `333`, use the following value: `fq=C:111&fq=B:222&fq=spec_fct_1:333`.
   - **Protocol:** Defines the communication protocol between a web server and a web browser. Recommended: `HTTPS`.
   - **Cache Type:** Defines the browser cache storage behavior. Recommended: `Local and Remote`.
   - **Authentication Required?:** Defines whether the page can be accessed only after user authentication. If this option is enabled, only authenticated users can access the page.
8. Click `Save Folder` to save the new page.
9. Access the URL of the configured folder and check if the page displays the expected products. The landing page will be available at the URL `https://www.{accountName}.com/{landing-page}`, where `{accountName}` is your store name and `{landing-page}` is the name of the folder created in the CMS with the configured Search Context.
