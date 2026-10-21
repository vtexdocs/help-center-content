---
title: "CMS for FastStore and Headless Stores"
createdAt: "2026-03-27T17:08:52.219Z"
updatedAt: "2026-03-30T17:08:52.219Z"
contentType: tutorial
productTeam: CMS
slugEN: cms-overview
locale: en
---

<div style="background-color:#EBF5FB; border-left: 2px solid #3498DB; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
 The CMS is available for FastStore stores from v3 and above, and Headless Stores. If your store uses FastStore v1 or v2, refer to <a href="/en/docs/tutorials/headless-cms-overview">Headless CMS (Legacy)</a>.
</div>

The Content Management System (CMS) provides merchants with the flexibility and control needed to manage and structure their storefront content independently. It allows business teams and content editors to create multiple versions of content, collaborate on details, review for quality, and schedule publishing. To access the CMS, open the VTEX Admin and go to **Storefront > Content > Content**.

## Getting started

Every piece of content a shopper sees starts with a developer, who defines what can be edited: the fields, their types, and their names. Once the developer publishes that structure, content operators use the Admin to create, review, and publish pages based on it, without writing code.

![cms-workflow-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-workflow___1051ba6444b1b3aeaf5a5623620dc62f.png)

Before you start, make sure you have:

| Requirement | Description |
| ----------- | ----------- |
| A schema published by a developer | Without it, there are no fields to edit. Developers can find the setup steps in the Developer Portal guide [Getting started with CMS](https://developers.vtex.com/docs/guides/getting-started-with-cms). |
| The right role | The CMS has three roles: Content Producer, Content Editor, and Content Administrator. See [CMS roles and permissions](/en/docs/tutorials/roles-and-permissions). |
| A configured store with a Preview URL | A store links your storefront to the CMS and holds its settings, including the locales and the Preview URL used to preview entries and branches before publishing. See [Configuring stores](/en/docs/tutorials/cms-configuring-stores). |

After completing these requirements, follow these steps to start working with the CMS:

1. **Configure your store.** Define the store name, the Preview URL, and the locales. Learn more in [Configuring stores](/en/docs/tutorials/cms-configuring-stores).
2. **Create a branch and edit content.** Work in an isolated branch, preview your changes, and merge them into `main` now or on a scheduled date. Learn more in [Versions and branches](/en/docs/tutorials/managing-versions-and-branches) and [Collaboration workflows](/en/docs/tutorials/collaboration-workflows).
3. **Restore earlier work if needed.** See [Version history](/en/docs/tutorials/cms-version-history).
4. **Translate your content.** Set up locales and fallback behavior. Learn more in [Configuring locales](/en/docs/tutorials/configuring-locales), [Localizing content](/en/docs/tutorials/localizing-content), and [Understanding locale fallback rules](/en/docs/tutorials/understanding-locale-fallback-rules).

> ℹ️ Developers can find the technical side of the CMS, such as environment setup and schema declarations, in the [Developer Portal](https://developers.vtex.com/docs/guides/getting-started-with-cms).

## Main parts of the CMS

Below are the main parts of the CMS:

## All content

![cms-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-overview___4da66fe4346083e5056bc43f9c49db1a.png)

**All content** is the main dashboard of the Content Management system. It allows you to list and manage all the digital content of your store, including pages, layouts, templates, and global sections, within the VTEX Admin. This central hub aims to streamline the content creation, editing, and publishing process through a modular system with version control (branches).

## Stores

![cms-stores](https://vtexhelp.vtexassets.com/assets/docs/src/cms-stores___6a92351517b7672eb34b4427765cbd2e.png)

The Stores page displays each storefront linked to the account's CMS, allowing you to manage them. On the Stores page, you can:

* View all stores for the account and see which storefronts they are connected to.  
* Add new stores to link additional storefronts or projects to the CMS.  
* Open a store's settings to manage its preview/build URLs, repository integration, and default and fallback locales for content delivery.

## Branches

![cms-branches](https://vtexhelp.vtexassets.com/assets/docs/src/cms-branches___d4cbb256190ee104d3794e2c812b4c8f.png)

Branches provide a collaborative workspace where teams can work on content changes in an isolated environment before merging them into the Main branch and without impacting the live storefront.

Each branch is an isolated version of your content, allowing multiple editors to create, update, and refine pages, layouts, and sections simultaneously. All changes are tracked per content item, making it easy to see who made the change, what was changed, and when.

The collaboration flow in a branch is:

* **Edit:** Multiple editors work in the same branch, making content updates independently.  
* **Track:** Every change is versioned, with clear visibility into who made each update and when.  
* **Preview:** Teams preview unpublished changes in a storefront context to review and validate content.  
* **Merge:** Once approved, the branch is merged into the Main branch, publishing all changes to the live store.

## Media

![cms-media](https://vtexhelp.vtexassets.com/assets/docs/src/cms-media___a1a25d3327a2cbebe9aa1f5effb84df7.png)

Media allows managing store media files, such as images and videos. For images, you can upload and organize files up to 5 MB in the following formats: PNG, JPG, GIF, SVG, and WebP. For videos, you can add a URL to an externally hosted video provider, such as YouTube.

For more details, see the [Media](https://newhelp.vtex.com/docs/tutorials/media-overview) guide.
