---
title: 'Managing Pages in the Headless CMS'
id: 3DO6rBhZ1p3zndnFu5BgRt
status: PUBLISHED
createdAt: 2023-03-23T19:46:08.568Z
updatedAt: 2024-06-17T12:55:20.070Z
publishedAt: 2024-06-17T12:55:20.070Z
firstPublishedAt: 2023-03-23T20:06:47.380Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: managing-pages
locale: en
legacySlug: managing-pages-beta
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

In **Headless CMS**, you can manage all the URL routes and page templates for your store's website, including the `Global Alert Page` `Page`,`Product Page`. You can also create and link custom pages to predefined templates and manage pages created directly in the source code of your storefront project.

## Overview

![New pages](//images.ctfassets.net/alneenqid6w5/7cftK7sS2epeqGjY6m0Cmj/7171a74a194bd96221f481de02d5599f/new_pages_-_en.png)

| Option         | Description                                           |
| -------------- | ----------------------------------------------------- |
| Create Document   | Creates a new page based on the options available, e.g., `Product Page` or `Home`.  |
| Settings (⚙️)  | Opens a modal that displays project configurations organized into three tabs: <ul><li>**General:** Edits the project ID and API settings or archives the project.</li> <li>**Content-Types:** Saves the content types created in the source code in the Headless CMS. **{Qual o significado dessa tela?}**</li> <li>**Build:** Connects the CMS project with your code source through webhooks by setting up the content types and sections. </li></ul>       |
| Search      | Searches specific pages within the project. |
| Status      | Filters the pages according to their status: <ul><li><code>Published</code>: Pages that are published and already available in the live store.</li> <li><code>Draft</code>: Pages that are in draft with work in progress and haven't been published yet.</li></ul> |
| Type      | Filters the pages according to their content type. The content types are defined in your store code. For more information, see [Adding Content Types to the Headless CMS](https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections#step-2-adding-content-types-to-the-headless-cms). |

## Creating a new page

To create and manage a page, follow these steps:

1. In your VTEX Admin, access **Headless CMS**.
>⚠️ Make sure you are in the correct project. If not, go to the **Project** menu in the upper left corner, select the name of the project where you want to create the page, and continue to step 2.
2. Click `Create document` and select the desired page type. 

3. Under `Untitled`, name the page.

4. Click on `Sections` and select the desired section.
![Gif - Pages](//images.ctfassets.net/alneenqid6w5/1JOLEO3RErUiJ8AYroKwTe/d35ca90a8b65f2f436173375fee0bf9d/Ingles_gif_da_pag.gif)
5. Add more sections if needed and fill them out.

6. Click `Publish`. 

To duplicate or delete the page, click on the **More actions** menu (`⋮`) of the page.
