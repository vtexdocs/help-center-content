---
title: 'Associating a template with a layout'
id: 7CkgOHRj7DVbsRxyR8YQrK
status: PUBLISHED
createdAt: 2022-01-10T22:05:16.978Z
updatedAt: 2023-03-28T12:47:10.787Z
publishedAt: 2023-03-28T12:47:10.787Z
firstPublishedAt: 2022-01-10T22:10:43.500Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1DedyaVUPp5wLAvjY7wKKv
slug: associating-a-template-with-a-layout
locale: en
legacySlug: associating-a-template-with-a-layout
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

Your store codes are written in the CMS **templates**. When the store gains access to Admin, for example, the `Home` template is the one that contains the code of the site's *homepage*.

But let's say you create a new `Home2` template and want to display it on the homepage. How does the platform know that it is the `Home2` template that should be shown on the homepage, not the `Home` template?

To indicate this, you need to associate the desired template with the **layout**, which is in the site folder structure within Sites and Channels.

This association is made in the layout properties setting. To get there, follow these steps:

1. In the VTEX Admin, acesse **Storefront > Layout > CMS** and click on **Sites and channels**.
2. Click on the website of the store you are editing.
3. Click on the root folder (`/`).
4. Search for the layout you want to edit.
5. Click on the **Template** drop-down. There will be listed the templates configured in HTML Templates.
6. Select the template you want to associate with this layout.
7. Type `yes` to confirm the change (this step is necessary because this is a critical change for the site, as the page's front-end will be replaced).

![CMS 4 1](//images.ctfassets.net/alneenqid6w5/6ZaVxrZUn0cegcQni61zsc/58fd2f24e7b8b36636b0088d945c1204/CMS_4_1.png)
