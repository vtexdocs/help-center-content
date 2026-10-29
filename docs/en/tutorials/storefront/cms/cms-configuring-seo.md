---
title: "Configuring SEO via CMS"
createdAt: "2026-11-26T17:08:52.219Z"
updatedAt: "2026-11-26T17:08:52.219Z"
contentType: tutorial
productTeam: CMS
slugEN: cms-configuring-seo
locale: en
---

SEO (Search Engine Optimization) helps your store rank higher in organic search results and attract more qualified visitors. In FastStore stores using the [CMS](https://help.vtex.com/docs/tutorials/cms-overview), you can configure SEO settings, such as page title, meta description, and canonical URL, directly in the VTEX Admin, without changing your store code.

The available fields depend on the page's Content Type (Home, Landing Page, Product page, or PLP). This tutorial explains how to access the SEO settings and describes each field by Content Type.

> ℹ️ This tutorial is for stores using the [CMS](https://help.vtex.com/docs/tutorials/cms-overview). For the Headless CMS (Legacy), see [Configuring SEO via Headless CMS (Legacy)](https://help.vtex.com/en/docs/tutorials/configuring-seo-via-headless-cms) and for Store Framework, see [Configuring SEO in your Store Framework store](https://help.vtex.com/en/docs/tutorials/configuring-seo-in-your-store).

## Before you begin

Review the following requirements to make sure you can complete the configuration:

* Make sure your FastStore store is already set up to use the [CMS](https://help.vtex.com/docs/tutorials/cms-overview).  
* Make sure your user has the **Content Editor** or **Content Administrator** [role](https://help.vtex.com/en/docs/tutorials/roles-and-permissions) to publish your changes.
  
  > ⚠️ A **Content Producer** can edit SEO fields on a branch, but can't publish them.

* Have the Content Type and entry you want to configure ready (Home, Landing Page, Product page, or PLP), or be prepared to create a new one.  
* Gather the SEO information for the page, such as the page title, meta description, and canonical URL.

## Instructions

1. In the VTEX Admin, go to **Storefront > All Content**.  
2. Select the Content Type of the page you want to configure: Home, Landing Page, Product page, or PLP.  
3. Open the desired entry, or create a new one.  
4. Go to the **SEO** section and fill in the fields as needed. See [SEO fields by content type](#seo-fields-by-content-type) for more information on each field.  
5. Save and publish the entry.

## SEO fields by content type

Each Content Type has its own set of SEO fields. Use the sections below to see which fields are available for the page you're configuring, what each one does, and an example value.

> ℹ️ The fields below are the ones you fill in on the CMS. Based on them, FastStore automatically generates the [structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) of these pages, so you don't need to edit your store's code.

### Home

The Home page is the main entry point of your store. Use the following fields to define how it appears in search results:

| Field | Description | Example |
| ----- | ----- | ----- |
| Path | URL path where the page is accessible. `/` is the main homepage. Another path creates an additional page with the Home layout. | `/` |
| Page title | Title displayed on the browser tab and used by search engines. | My Store |
| Meta description | A summarized description of the page, displayed by search engines in search results. | Discover the best deals on electronics |
| Canonical URL | The main version of the page, used by search engines to avoid duplicate content. | `https://www.mystore.com` |

#### Organization

The Home SEO section also has the **Organization** fields, which describe your business to search engines through [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization). To fill them in, click the **Organization** element in the SEO section. A drawer opens with the following fields:

| Field | Description | Example |
| ----- | ----- | ----- |
| Organization name | Required. Name of your business. | My Store |
| Organization legal name | Registered legal name of your business. | My Store Inc. |
| Organization ID | Unique reference for the organization. It can be a descriptive value or a full URL. | `https://www.mystore.com/#organization` |
| Organization URL | Required. URL of your business website. | `https://www.mystore.com` |
| Organization URLs | Other URLs that represent your business, such as social media profiles. Click **Add item** to add each one. | `https://www.instagram.com/mystore` |
| Organization logo URL | URL of a logo that represents your business. | `https://www.mystore.com/logo.png` |
| Organization image/logo object | Logo details as an image object. | \- |
| Organization email | Email address to contact your business. | `contact@mystore.com` |
| Organization phone | Business phone number, including the country and area codes. | `+1 555 123 4567` |
| Organization address | Physical address of your business. | \- |

### Landing Page

Landing Pages are custom pages, such as campaign or promotional pages, that you create in the CMS. Use the following fields to define their URL and how they appear in search results:

| Field | Description | Example |
| ----- | ----- | ----- |
| Slug | Required. URL path where the landing page will be accessible on the site. | `/summer-sale` |
| Page title | Title displayed on the browser tab and used by search engines. | Summer Sale |
| Meta description | A summarized description of the page, displayed by search engines in search results. | Up to 50% off on summer products |
| Canonical URL | The main version of the page, used by search engines to avoid duplicate content. | `https://www.mystore.com/summer-sale` |

### Product page (PDP)

Product page URLs are generated from the Catalog. The page title and meta description are configured in the Catalog product settings. See [Configuring SEO for PLPs and PDPs](https://developers.vtex.com/docs/guides/faststore/seo-configuring-seo-for-plp-and-pdp).

| Field | Description | Example |
| ----- | ----- | ----- |
| Slug | Optional. Leave empty to apply the default layout to all product pages, or enter an existing product path to apply a custom layout only to that page. | `/product-name/p` |

### Product Listing Page (PLP)

PLP URLs, including Category Landing Pages (CLPs) and Subcategory Landing Pages (SCLPs), are generated from the Catalog category tree. The page title and meta description are configured in the Catalog category settings. See [Configuring SEO for PLPs and PDPs](https://developers.vtex.com/docs/guides/faststore/seo-configuring-seo-for-plp-and-pdp).

| Field | Description | Example |
| ----- | ----- | ----- |
| Slug | Optional. Leave empty to apply the default layout to all category pages, or enter an existing category path to apply a custom layout only to that page. | `/category/subcategory` |

> ⚠️ On PLPs and Product pages, the slug doesn't create a URL. It must match a path that already exists in the Catalog. For how FastStore selects layouts, see [Multiple page templates](https://developers.vtex.com/docs/guides/faststore/headless-cms-multiple-page-template).

### Search page

The search results page has no SEO fields in the CMS. By default, it's configured with `noindex` and `nofollow`, so search engines don't index it. Its page title and meta description are generated automatically from the search term, for example, "Products for: shoes".

#### Canonical URL for filtered PLPs

When shoppers apply filters, FastStore adds them to the PLP URL as query parameters resulting in a long, less SEO-friendly URLs.  
 However, FastStore defines the canonical URL pointing to the unfiltered PLP. This consolidates SEO on the main category page and avoids duplicate content.

Example:

* **Browser URL with applied filters:** `https://www.mystore.com/category/subcategory?color=white&sort=price_asc&page=0`  
* **Canonical URL:** `https://www.mystore.com/category/subcategory`