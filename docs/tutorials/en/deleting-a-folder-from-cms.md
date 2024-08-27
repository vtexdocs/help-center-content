---
title: 'Deleting a folder from CMS'
id: 6rlNmChZmgy22mium8WYaC
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.331Z
updatedAt: 2023-03-29T14:11:50.929Z
publishedAt: 2023-03-29T14:11:50.929Z
firstPublishedAt: 2019-01-24T22:04:21.998Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: deleting-a-folder-from-cms
locale: en
legacySlug: deleting-a-folder-from-cms
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

To delete a CMS folder, follow the steps below:

1. In the VTEX Admin, access **Storefront > Layout > CMS**.
2. Click on the CMS folder and then on __Sites and Channels__.
3. Click the website that contains the folder you want to delete and then click the root folder (/).
4. In the line corresponding to the folder you want to delete, click __delete__.

![erroDeletarPasta2](https://images.contentful.com/alneenqid6w5/5LV3bGobResaCycAs4e4oS/0644cad6454dd3d6c0beb1eb8afc1da8/erroDeletarPasta2.png)

>❗ Some folders are required. Your store will not function properly without them. Others are important, so it's not a good idea to delete them.
>
> 
>
> Understand this theme deeper by reading the article [CMS folder structure](http://help.vtex.com/en/tutorial/cms-folder-structure).

If a folder contains other folders, you must delete all internal folders before deleting the more external one. Otherwise, the system will return the error "Object reference not set to an instance of an object", as in the image below.

![erroDeletarPasta](https://images.contentful.com/alneenqid6w5/6g2MBbZJUQUQM2YQQ88MQE/9159df93c82fc1e89199aaf1922a5044/erroDeletarPasta.png)

For example, if you want to delete folder A, and within it are folders A1 and A2, first delete folders A1 and A2, and then delete folder A.
