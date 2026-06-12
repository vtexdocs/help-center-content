---
title: 'CMS Portal (Legacy)'
id: 1oN446gRGcR2s70RvBCAmj
status: PUBLISHED
createdAt: 2022-01-10T20:17:10.358Z
updatedAt: 2026-04-29T18:54:39.664Z
publishedAt: 2024-08-06T16:52:09.507Z
firstPublishedAt: 2022-01-10T20:41:44.261Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: legacy-cms-portal
locale: en
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugEN: cms
order: 3
---

The CMS Portal (Legacy) was the first Content Management System (CMS) on VTEX and is no longer available for new accounts. If you're using the CMS Portal (Legacy), you can continue accessing and managing your store content using this guide.

For new features and modern resources, consider migrating to one of our latest CMS solutions: **[CMS](https://developers.vtex.com/docs/guides/cms-for-faststore-storefronts)**, the recommended CMS solution for stores developed with [FastStore](https://developers.vtex.com/docs/guides/faststore), or **[Site Editor](https://help.vtex.com/docs/tutorials/site-editor-overview)**, the CMS solution for stores developed with [Store Framework](https://developers.vtex.com/docs/guides/store-framework).

In this guide, you'll learn how to use the CMS Portal (Legacy) to manage your store content, including creating and organizing layouts, configuring pages and folder structures, and getting familiar with VTEX native controls available for templates.

## Layout

The [Layout](https://help.vtex.com/docs/tutorials/layout-subcategory) section allows you to build your storefront with HTML and CSS.

![CMS - Layout PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_1.png)

This section is organized into folders and files with the following functions:

- **HTML Templates:** Build the HTML code and reference JavaScript and CSS files to be used in the website pages.

- **Shelves Templates:** Manage [shelves](/en/docs/tutorials/what-are-shelves) [templates](https://help.vtex.com/docs/tutorials/what-are-templates) — the components that render a group of products on the storefront.

- **Custom Elements:** Create the necessary conditions to implement reusable components, such as footers, in other areas of the store.

- **URL Builder:** Redirect existing URLs to others of interest. This will avoid indexing errors and help maintain SEO rankings.

- **Files Manager:** Upload image files for your store website. Store JavaScript, CSS, and image files of the website. If you want to use any of these files in your store, you must reference them within the **HTML Templates** section.

- **Product Cluster (Collections):** Create product groups. You can use them to build Campaign or Product Collection landing pages that load specific product clusters.

- **Sites and Channels:** Configure [your store's binding](/pt/docs/tutorials/o-que-e-binding) and other License Manager settings. To learn more, see the [CMS folder structure](/https://help.vtex.com/docs/tutorials/cms-folder-structure) article.

## CMS Portal (Legacy) folder structure

On VTEX, every new account comes with preinstalled folders in the CMS. Some of these folders are **required**.

To ensure proper navigation and indexing, every store must have the following folders in the CMS:

- Search
- Category
- Departament
- Login
- Product

![2 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-portal-legado_3.png)

> ⚠️ **Don't change** the names of the required folders. If these folders aren't named exactly as specified above, you'll encounter navigation and indexing issues. Because these folders refer to dynamic pages, their names don't appear in the customer's navigation or in the final URL paths, so they **don't affect the site's internationalization**. On the other hand, the names of **[layouts](https://help.vtex.com/docs/tutorials/what-are-layouts) within these folders** can be freely edited without affecting store functionality.

The other folders aren't required. These are only suggestions, as they’re important and useful for most stores. Therefore, we recommend that you don’t delete them. They are as follows:

- `/account`: Customer account
- `/account/orders`: Customer orders
- `/system/emptrysearch`: Folder the user is directed to if the search returns no results.
- `/system/{codigoHTTP}`: Folder that renders error pages according to HTTP status codes, like 404 (page not found), 401 (unauthorized), and 500 (server error).
- `/brands`: Folder containing brand page layouts, which can be customized with an exclusive layout. If no specific layout is available for brands, these pages will be rendered using the same layout as the search folder. To understand how brand pages work, see the article [How VTEX search works](https://help.vtex.com/docs/tutorials/how-does-vtex-search-legacy-work).

Since these folders aren't required, you can rename them as you see fit. In these cases, what matters is the [control](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) or the [placeholder](https://help.vtex.com/docs/tutorials/managing-placeholders) reading their contents.

## VTEX native controls

In the CMS Portal (Legacy), [controls](https://help.vtex.com/docs/tutorials/what-are-controls) are markers that you include in **HTML templates** to display dynamic store data. For example, they can display the product name and price, a search box, or a breadcrumb, without requiring you to reimplement this logic on every page.

VTEX provides **native controls**. When you publish the template, the platform recognizes each control and renders the corresponding content or functionality in the storefront.

For example, by using the `<vtex.cmc:productName/>` control on a product page, the system will display the product name on the page.

To use a control, include the tag in the desired location within the template's HTML. What the control generates appears exactly in this position in the published layout.

> ℹ️ In the [list of controls for templates](https://developers.vtex.com/docs/guides/list-of-controls-for-templates), you can find all native controls and their respective uses.

## Learn more

- **[Creating and editing a page template](https://help.vtex.com/docs/tutorials/how-to-create-a-page-template):** Learn how to create a page template. A page template is a model created to define an HTML structure for presenting page content.

- **[Associating a template with a layout](https://help.vtex.com/docs/tutorials/associating-a-template-with-a-layout):** Associate a template with a layout using the Sites and Channels folder.

- **[What is the purpose of the Customized Control?](https://help.vtex.com/docs/tutorials/what-is-the-purpose-of-the-customized-control):** Besides VTEX native controls, you can create your own controls.

- **[Storefront Settings - Storefront](https://help.vtex.com/docs/tutorials/store-settings---storefront-subcategory):** Set general definitions for your storefront, like metadata, SEO tags, file types, image dimensions, and regional settings to determine where your products will be available.
