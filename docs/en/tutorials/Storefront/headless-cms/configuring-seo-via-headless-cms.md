---
title: 'Configuring SEO via Headless CMS'
id: 1qaJuB28kOJRfhyaGeezGc
status: PUBLISHED
createdAt: 2025-07-14T16:29:35.269Z
updatedAt: 2025-07-14T16:59:24.399Z
publishedAt: 2025-07-14T16:59:24.399Z
firstPublishedAt: 2025-07-14T16:56:00.498Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-seo-via-headless-cms
legacySlug: configuring-seo-via-headless-cms
locale: en
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

SEO (Search Engine Optimization) is one of the most important strategies to better position your site on organic search engine results pages.

In stores developed with [FastStore](https://developers.vtex.com/docs/guides/faststore), you can manage SEO settings through the [Headless CMS](https://help.vtex.com/en/tutorial/headless-cms-visao-geral--3U5gvhHdQL0jczYH8gjX09).

> ℹ️ For stores developed with Store Framework, see [Configuring SEO in your Store Framework store](https://help.vtex.com/en/tutorial/configurando-seo-em-sua-loja--1skskesjusvghyqm8oknvr).

## Instructions

1. In the VTEX Admin, go to **Storefront > Headless CMS**.
2. Click the desired page.

  > ℹ️ This setting is available for the following [content types](https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections): **Product Detail Page (PDP)**, ** home**, and **landing page**.

3. Switch to the **Settings** tab.
4. Go to **SEO** and update the related fields. See the list of fields by content type in [SEO fields by content type](#seo-fields-by-content-type).
5. Click `Save` to apply the changes.

### SEO fields by content type

#### Product Details Page (PDP)

On **Product Details Page (PDP)** pages, the following fields are available for SEO configuration:

| Field | Description | Example |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| ID                        | Unique identifier representing a specific product page. This is essential for search engines to recognize and differentiate each PDP on your website, avoiding ambiguity and helping ensure each product page is indexed separately.<br>It receives a descriptive value that will be concatenated to the product path. | • Descriptive value: `#product`<br>• Result: `product-slug/p#product` |
| Main entity of page | Unique identifier representing the most relevant element on a product page. It receives a descriptive value that will be concatenated to the product path. | • Descriptive value: `#webpage`<br>• Result: `product-slug/p#webpage` |

#### Home

On **Home** pages, the following fields are available for SEO configuration:

| Field | Description | Example |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Path                        | URL path where the homepage will be accessible on the site. | `/homepage` |
| Default page title | Invoice displayed on the browser tab and used by search engines. It should be relevant to the homepage content. | My Store |
| Meta tag description | A summarized description of the page, displayed by search engines in search results. | Discover the best deals on electronics |
| Canonical URL for the page | The canonical URL used by search engines to help identify the main version of the page, avoiding duplicate content issues. | `https://www.mystore.com` |
| Name | Site name. | My Store |
| Publisher ID | Unique identifier for the content publisher on the page. This can be a descriptive fragment appended to the homepage or a full URL. |  • Descriptive value: `#organization`<br>  • Complete URL: `https://www.mystore.com/publisher` |

#### Landing Page

On **Landing Page** type pages, the following fields are available for SEO setup:

| Field | Description | Example |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Path | URL path where the landing page will be accessible on the site. | `/landing-page-slug` |
| Default page title | Title displayed on the browser tab and used by search engines. It should be relevant to the homepage content. | FastStore Landing Page |
| Meta tag description | A summarized description of the page, displayed by search engines in search results. | Landing page description |
| Canonical URL for the page | The canonical URL used by search engines to help identify the main version of the page, avoiding duplicate content issues. | `https://www.mystore.com` |
