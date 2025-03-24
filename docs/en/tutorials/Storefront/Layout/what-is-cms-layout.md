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
locale: en
legacySlug: what-is-cms
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  <p>This functionality is available for stores using the Legacy Portal technology.</p>
</div>

The [Layout](https://help.vtex.com/en/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW) section allows you to create your storefront with HTML and CSS. 

## Sites and channels

If you haven't yet created a Web Site (or want to create a new one), it's in this directory that you must go first. If you already have a Web Site, this is where you will access and manage your entire folder structure.

**Sites and channels** is also the place where you will be able to create and organize the layouts of your site, as we will see later.

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  <p>This feature is also available for stores using Site Editor.</p>
</div>

## Binding

Before you begin to organize the content of your Web Site, it must be linked to an account name. With that, the system understands where all the information added or modified in the folders, files or code of the Web Site will be applied.

This is a fundamental process for the perfect functioning of your store, but it is also very simple. Just follow the steps [of this article](/en/tutorial/linking-an-account-name-to-a-website-binding).

![Binding](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Layout/what-is-cms-layout_1.png)

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

See the complete list of native controls for templates [in this article](/en/tutorial/list-of-controls-for-templates).

## Custom Elements
In addition to native VTEX controls, the system allows you to create custom controls. They are stored in the Custom Elements directory, and can be used in any template, in the same way as native controls.

## URL Builder
In this section you can build friendlier URLs, making the pages of your Web Site easier for the user to find.

## Files Manager
To manage the files of your Web Site, you may access this directory. In it, you can add, delete and modify CSS, JavaScript, XML and image file

### References
- [Layout](https://help.vtex.com/en/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW)
- [Settings](https://help.vtex.com/en/subcategory/cms-settings--6kovkwzMRyeOOc2iEC4suM)
- [Layout folder structure](https://help.vtex.com/en/tutorial/cms-folder-structure--2RdMaJSv4AK4EyscmQuocu?&utm_source=autocomplete)
- [List of template controls](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563)
- [What are templates?](https://help.vtex.com/en/tutorial/o-que-sao-templates--4l7BQBYO9ycumsqua2CU88?&utm_source=autocomplete)
- [What is a website?](https://help.vtex.com/en/tutorial/o-que-e-um-web-site--5sPUdFEv9C02i0MMqqSo0U?&utm_source=autocomplete)
- [What are controls?](https://help.vtex.com/en/tutorial/o-que-sao-controles--6e2qsk9zu8IQuyEysKweag?&utm_source=autocomplete)
- [What are layouts?](https://help.vtex.com/en/tutorial/o-que-sao-layouts--CckPh00rZIcIUG60y8Gse?&utm_source=autocomplete)
- [What are shelves?](https://help.vtex.com/en/tutorial/o-que-sao-prateleiras--28D8d6GFfuAsuAoeWC8eq0?&utm_source=autocomplete)
- [What is binding?](https://help.vtex.com/en/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W?&utm_source=autocomplete)

### Guides
- [Creating and editing a page template](https://help.vtex.com/en/tutorial/como-criar-um-template-de-pagina--frequentlyAskedQuestions_1850): Learn how to create a page template. A page template is a model designed to define an HTML structure for displaying page content.

- [Associating a template with a layout](https://help.vtex.com/en/tutorial/associando-um-template-a-um-layout--7CkgOHRj7DVbsRxyR8YQrK?&utm_source=autocomplete): Associate a template with a layout using the Sites and Channels folder.

- [Managing placeholders](https://help.vtex.com/es/tutorial/gerenciandoplaceholders--29Y7r9JqcWIqmGipReGLQI): A placeholder is a configurable snippet of code that meets conditions defined by the store. Learn how to insert and configure a placeholder, for example, a banner on your store’s homepage.

- [Using VTEX's native controls](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/7mGkGmo8l6wf4fXJCkWwPi?&utm_source=autocomplete): Controls are snippets of codes that you can use in your website's templates to perform specific actions. For example, you can use a control on a product page to display the product name.

- [What is the purpose of the Customized Control?](https://help.vtex.com/en/tutorial/what-is-the-purpose-of-the-customized-control--frequentlyAskedQuestions_627): In addition to VTEX's native controls, you can create your own controls.
