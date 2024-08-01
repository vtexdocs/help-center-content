---
title: 'Configuring SEO in your store'
id: 1sKskEsjUSvgHyqM8oknVR
status: PUBLISHED
createdAt: 2024-04-29T19:07:56.533Z
updatedAt: 2024-05-03T18:39:56.071Z
publishedAt: 2024-05-03T18:39:56.071Z
firstPublishedAt: 2024-04-29T19:26:31.511Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: YRJ73j8mt38D5TUleocQB
slug: configuring-seo-in-your-store
locale: en
legacySlug: configuring-seo-in-your-store
subcategory: 7ogirQ8NClawO2X6xdgCKc
---

SEO (Search Engine Optimization) is one of the most important strategies to better position your site on organic search engine results pages. Configuring tags, metatags, and favicons is part of this set of strategies to optimize your site's performance. 

The title tag helps define the subject of the page for search engines and directly influences whether users click the search results. The description tag gives users an idea of what they can find on the site. The robots meta tag controls the crawling and indexing behavior of search engines.

In all VTEX IO stores, you can configure these parameters natively by following the steps below.

### Instructions

#### Title tag, description tag, and robots meta tag

1. In the VTEX Admin, go to **Store Settings > Storefront > Store**.
2. Click the **General** tab.
3. Complete the fields based on the guidelines below:

  - **Store name**: Enter the name of your store.
  - **Enable configuration by binding**: This option is only valid for stores with multiple bindings. By enabling it, you can configure specific settings for tags and meta tags for each store's bindings. For stores with a single binding, leave this option unchecked.
  - **Default title tag**: Provide a concise description with relevant keywords. The value assigned to this tag is displayed at the top of the browser's title bar when someone visits your website.
  - **Meta description tag**: Provide a brief description of the page's content. It should be informative and contain relevant keywords.
  - **Meta robots tag**: Specify how search engines should crawl and index a specific page. The default values are `index, follow`. For additional values compatible with Google, see the [list of valid rules](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives). 

  ![seo-en](//images.ctfassets.net/alneenqid6w5/4JajNswh0yiVmfWvsPWbEa/b545a83de82a94a5551a222f9b15b5a5/seo-en.png)

### Favicons

1. In the VTEX Admin, go to **Store Settings > Storefront > Store**.
2. Click the **General** tab.
3. Click **Add**.

  ![favicon-en](//images.ctfassets.net/alneenqid6w5/3NtSCr6cKVn7dDqsXn8jBN/bba39b30bedfe404b3111a06853a42de/favicons-en.png)

4. A new screen will open for completion based on the following guidelines:

   - **Favicon relationship**: Define the relationship between the URL configured in the **Favicon href** field and the site's favicon. For example, assigning the `icon` value indicates that the configured URL is related to the site's icon. 
    - **Favicon media type** (optional): Specify the favicon type, following HTML and W3C standards. Learn more in [HTML Favicon](https://www.w3schools.com/html/html_favicon.asp).
    - **Favicon size** (optional): Enter the favicon dimensions in the {width}x{height} format, e.g., 180x180.
    - **Favicon href**: Enter the full URL pointing to where the favicon file is stored. 

    See the example below:

    ![relacao-favicon-en](//images.ctfassets.net/alneenqid6w5/4gJkfubRqf9lhtRiryrMMA/9d4f662c2be71d1d33ec68495b594049/relacao-favicon-en.png)

5. Click **Apply** to reflect the settings in your store. This process may take a few minutes.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
The <strong>Search term path</strong> field is a legacy setting that was compatible with <code>vtex.search-resolver@0.x</code>.
</div>
