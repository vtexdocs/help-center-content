---
title: 'CMS for FastStore'
createdAt: 2026-09-02T20:00:00.000Z
updatedAt: 2026-09-02T20:00:00.000Z
contentType: trackArticle
productTeam: CMS
slugEN: cms-for-faststore
locale: en
trackSlugEN: cms
order: 4
---

For stores developed with [FastStore](https://developers.vtex.com/docs/guides/faststore) (v3 and above) or a custom headless implementation, content management is performed through the [CMS](https://help.vtex.com/docs/tutorials/cms-overview), a content management system that lets business teams create, collaborate on, and publish storefront content independently from the frontend code.

The CMS is organized around the following features:

- [All content](#all-content)
- [Stores](#stores)
- [Branches and versioning](#branches-and-versioning)
- [Locales](#locales)
- [Media](#media)
- [Roles and permissions](#roles-and-permissions)

## All content

**All content** is the CMS main dashboard. It lists and centralizes the management of all the digital content of your store, including pages, layouts, templates, and global sections, from a single hub in the VTEX Admin. To access it, open the VTEX Admin and go to **Storefront > Content > Content**.

![cms-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-overview___4da66fe4346083e5056bc43f9c49db1a.png)

## Stores

**[Stores](https://help.vtex.com/docs/tutorials/cms-configuring-stores)** define each storefront that consumes CMS content, such as a FastStore project. On this page, you can link storefronts to the CMS and configure each store's preview and build URLs, repository integration, and default and fallback locales for content delivery.

![cms-stores](https://vtexhelp.vtexassets.com/assets/docs/src/cms-stores___6a92351517b7672eb34b4427765cbd2e.png)

## Branches and versioning

**[Branches](https://help.vtex.com/docs/tutorials/managing-versions-and-branches)** provide a collaborative workspace where teams can work on content changes in an isolated environment before merging them into the Main branch, without impacting the live storefront.

Each branch is an isolated version of your content, allowing multiple editors to create, update, and refine pages, layouts, and sections simultaneously. All changes are tracked per content item through [version history](https://help.vtex.com/docs/tutorials/cms-version-history), making it easy to see who made a change, what was changed, and when.

![cms-branches](https://vtexhelp.vtexassets.com/assets/docs/src/cms-branches___d4cbb256190ee104d3794e2c812b4c8f.png)

## Locales

**[Locales](https://help.vtex.com/docs/tutorials/configuring-locales)** define the language and regional settings for store content, enabling multi-language shopping experiences. Instead of duplicating pages or maintaining separate stores for each region, you can define the store's locales (for example, `en-US` or `pt-BR`) and create localized versions of the same content entry, with fallback rules for locales that don't have their own localized content.

## Media

**Media** allows you to manage store media files, such as images and videos. For images, you can upload and organize files up to 5 MB in PNG, JPG, GIF, SVG, and WebP formats. For videos, you can add a URL to an externally hosted provider, such as YouTube.

## Roles and permissions

**[Roles and permissions](https://help.vtex.com/docs/tutorials/roles-and-permissions)** control what each team member can create, edit, and publish in the CMS. The three predefined roles, Content Producer, Content Editor, and Content Administrator, follow the CMS's git-like branching model, separating content authoring from content publishing.

## Learn more

- **[CMS - Overview](https://help.vtex.com/docs/tutorials/cms-overview):** Learn about the main parts of the CMS.

- **[Configuring stores](https://help.vtex.com/docs/tutorials/cms-configuring-stores):** Link storefronts to the CMS and configure their settings.

- **[Managing versions and branches](https://help.vtex.com/docs/tutorials/managing-versions-and-branches):** Learn how to create, preview, and merge branches to publish content.

- **[Configuring locales](https://help.vtex.com/docs/tutorials/configuring-locales):** Set up languages and regions for your store content.

- **[Roles and permissions](https://help.vtex.com/docs/tutorials/roles-and-permissions):** Understand the predefined CMS roles and what each one can do.
