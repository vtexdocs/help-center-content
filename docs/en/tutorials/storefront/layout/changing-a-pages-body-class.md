---
title: "Changing a page's body class"
id: 17BMTbjmQW28I6g6y80qAi
status: PUBLISHED
createdAt: 2018-03-02T13:32:41.619Z
updatedAt: 2023-03-29T14:48:54.728Z
publishedAt: 2023-03-29T14:48:54.728Z
firstPublishedAt: 2018-03-02T13:46:27.480Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: changing-a-pages-body-class
legacySlug: changing-a-pages-body-class
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

The templates used by store layouts, by default, don't carry any class in their `<body>` element.

See, for example, the Department template code.

![changeBodyClass1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/changing-a-pages-body-class_1.jpg)

It has an `id`, but not a `class`.

However, when loading a layout that uses this template, we note that the `departmento` class has been added to the body of the page.

![changeBodyClass2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/changing-a-pages-body-class_2.jpg)

That is, the system inserts this class automatically.

You can set the value of this class in the CMS. To do this, follow the steps below:

1. In the VTEX Admin, access **Storefront > Layout > CMS**.

2. Click __Sites and Channels__ folder and enter the __layout__ whose class you want to change.

4. Change the value of the __Body Class__ field.

6. Click the __Save Layout__ button.
