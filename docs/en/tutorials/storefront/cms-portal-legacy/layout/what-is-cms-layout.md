---
title: 'Layout Overview'
id: EmO8u2WBj2W4MUQCS8262
status: PUBLISHED
createdAt: 2019-01-24T20:45:44.730Z
updatedAt: 2023-03-24T13:48:26.495Z
publishedAt: 2023-03-24T13:48:26.495Z
firstPublishedAt: 2019-01-24T22:11:38.588Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-cms-layout
legacySlug: what-is-cms
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
order: 1
---

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  This functionality is available for stores using the Legacy Portal technology.
</div>

The [Layout](/docs/tutorials/layout-subcategory) section allows you to create your storefront with HTML and CSS. 

## Sites and channels

If you haven't yet created a Web Site (or want to create a new one), it's in this directory that you must go first. If you already have a Web Site, this is where you will access and manage your entire folder structure.

**Sites and channels** is also the place where you will be able to create and organize the layouts of your site, as we will see later.

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  This feature is also available for stores using Site Editor.
</div>

## Binding

Before you begin to organize the content of your Web Site, it must be linked to an account name. With that, the system understands where all the information added or modified in the folders, files or code of the Web Site will be applied.

This is a fundamental process for the perfect functioning of your store, but it is also very simple. Just follow the steps [of this article](/docs/tutorials/linking-an-account-name-to-a-website-binding).

![Binding](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms-portal-legacy/layout/what-is-cms-layout_1.png)

## Layouts and templates

With your Web Site created and already linked to an account name, you will need to define templates and layouts.

- **Template**: here is where the code itself is written. Among other things, it determines how the information will appear on the screen, including where the placeholders will be shown. The templates are put together in the **HTML Templates** and **Shelves Templates** folders.
- **Layout**: it's responsible for determining which elements will appear on a page. It is the one that sets the placeholders (elements like banners, collections and others), that will be displayed to the end user. In order to work, each layout must be linked to a single template. You can find the layouts of your Web Site organized by folders in the **Sites and channels** directory.

## Placeholders

These are elements (DHTML Banner, HTML, Collection, Banner, Related Products) that may or may not be used in the pages of your Web Site. They are configured in the layouts (which are stored in the **Sites and channels** directory), but their position on the page is determined by the code in the templates (stored in the **HTML Templates** directory).

The layout defines which placeholders are going to be used, and what they display, but it's the code (that is, the template) that will tell you where they appear on the page.

## Collection
For the CMS module, collections are placeholders that display product clusters on a particular page. These groups need to be defined in the **Product Clusters (Collections)** directory.

## Controls
VTEX native controls render various useful and replicable features in your site templates. For example, when you enter the `<vtex.cmc:productName/>` control on your product page, the system will automatically render the product name.

See the complete list of native controls for templates [in this article](https://developers.vtex.com/vtex-developer-docs/docs/list-of-controls-for-templates).

## Custom Elements
In addition to native VTEX controls, the system allows you to create custom controls. They are stored in the Custom Elements directory, and can be used in any template, in the same way as native controls.

## URL Builder
In this section you can build friendlier URLs, making the pages of your Web Site easier for the user to find.

## Files Manager
To manage the files of your Web Site, you may access this directory. In it, you can add, delete and modify CSS, JavaScript, XML and image file

### References
- [Layout](/docs/tutorials/layout-subcategory)
- [Layout folder structure](/docs/tutorials/cms-folder-structure)
- [List of template controls](https://developers.vtex.com/docs/guides/list-of-controls-for-templates)
- [What are templates?](/docs/tutorials/what-are-templates)
- [What is a website?](/docs/tutorials/what-is-a-web-site)
- [What are controls?](/docs/tutorials/what-are-controls)
- [What are layouts?](/docs/tutorials/what-are-layouts)
- [What are shelves?](/docs/tutorials/what-are-shelves)
- [What is binding?](/docs/tutorials/what-is-binding)

### Guides
- [Creating and editing a page template](/docs/tutorials/how-to-create-a-page-template): Learn how to create a page template. A page template is a model designed to define an HTML structure for displaying page content.

- [Associating a template with a layout](/docs/tutorials/associating-a-template-with-a-layout): Associate a template with a layout using the Sites and Channels folder.

- [Managing placeholders](/docs/tutorials/managing-placeholders): A placeholder is a configurable snippet of code that meets conditions defined by the store. Learn how to insert and configure a placeholder, for example, a banner on your store’s homepage.

- [Using VTEX's native controls](https://developers.vtex.com/docs/guides/list-of-controls-for-templates): Controls are snippets of codes that you can use in your website's templates to perform specific actions. For example, you can use a control on a product page to display the product name.

- [What is the purpose of the Customized Control?](/docs/tutorials/what-is-the-purpose-of-the-customized-control): In addition to VTEX's native controls, you can create your own controls.
