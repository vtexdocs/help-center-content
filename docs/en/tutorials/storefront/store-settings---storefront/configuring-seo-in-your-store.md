---
title: 'Configuring SEO in your Store Framework store'
id: 1sKskEsjUSvgHyqM8oknVR
status: PUBLISHED
createdAt: 2024-04-29T19:07:56.533Z
updatedAt: 2026-05-04T16:46:05Z
publishedAt: 2024-09-02T16:13:57.395Z
firstPublishedAt: 2024-04-29T19:26:31.511Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-seo-in-your-store
legacySlug: configuring-seo-in-your-store
locale: en
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

> ⚠️ This tutorial only applies to Store Framework stores. For stores developed with CMS Portal (Legacy), follow the instructions in the guide [Configuring Favicon in your store](https://help.vtex.com/docs/tutorials/configuring-favicon-in-your-store).

SEO (Search Engine Optimization) is one of the most important strategies to better position your site on organic search engine results pages. Configuring tags, metatags, and favicons is part of this set of strategies to optimize site performance.

The title tag helps define the subject of the page for search engines and directly influences whether users click the search results. The description tag gives users an idea of what they can find on the site. The robots meta tag controls the crawling and indexing behavior of search engines.

In all stores built with Store Framework, you can configure these parameters natively by following the steps below.

### Instructions

#### Title tag, description tag, and robots meta tag

1. In the VTEX Admin, go to **Store Settings > Storefront > Store**.
2. Click the **General** tab.
3. Complete the fields based on the guidelines below:
  - **Store name:** Enter the name of your store.
  - **Enable configuration by binding:** This option is only valid for stores with multiple [bindings](https://help.vtex.com/docs/tutorials/what-is-binding). When enabled, it allows you to configure specific tags and meta tags for each store binding. For stores with a single binding, leave this option unchecked.
  - **Default title tag**: Provide a concise description with relevant keywords. The value assigned to this tag is displayed at the top of the browser's title bar when someone visits your site.
  - **Description meta tag**: Provide a brief description of the page content. It should be informative and contain relevant keywords.
  - **Robots meta tag**: Specify how search engines should crawl and index a specific page. The default values are `index, follow`. For additional values compatible with Google, see the [list of valid rules](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives).

  ![seo-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/store-settings---storefront/configuring-seo-in-your-store_1.png)

### Favicons

1. In the VTEX Admin, go to **Store Settings > Storefront > Store**.
2. Click the **General** tab.
3. Click **Add**.

![favicon-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/store-settings---storefront/configuring-seo-in-your-store_2.png)

4. A new screen will open. Complete it following the guidelines below:
     - **Favicon relationship**: Define the relationship between the URL configured in the **Favicon href** field and the site favicon. For example, assigning the `icon` value indicates that the configured URL is related to the site icon.
     - **Favicon media type** (optional): Specify the favicon type, following HTML and W3C standards. Learn more in [HTML Favicon](https://www.w3schools.com/html/html_favicon.asp).
     - **Favicon size** (optional): Enter the favicon dimensions in `{width}x{height}` format. Example: `180x180`.
     - **Favicon href**: Enter the full URL pointing to where the favicon file is stored.

    See the example below:

    ![relacao-favicon-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/store-settings---storefront/configuring-seo-in-your-store_3.png)

5. Click **Apply** to reflect the settings in your store. This process may take a few minutes.

> ℹ️ The **Search term path** field is a legacy setting that was compatible with `vtex.search-resolver@0.x`.
