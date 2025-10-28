---
title: 'Changing the pages of the site to HTTPS protocol'
id: frequentlyAskedQuestions_4378
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.790Z
updatedAt: 2023-03-29T14:56:42.675Z
publishedAt: 2023-03-29T14:56:42.675Z
firstPublishedAt: 2019-01-24T22:13:56.601Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slugEN: how-do-i-use-the-https-protocol-on-my-stores-pages
legacySlug: how-do-i-use-the-https-protocol-on-my-stores-pages
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

To change the HTTP or HTTPS protocol setting on your store pages, simply follow the steps below depending on the type of page you want.

## Layout

The Layout module covers home, catalog (search, categories e products), landing pages and other custom pages.

You can change the protocol in all folders at once by using our API, documented [in this Postman collection](https://developers.vtex.com/reference/change-uri-schema). 

> ⚠️ **Warning:** avoid having HTTPS enabled on only a few pages. When you access an HTTPS page, then go to an HTTP page from the same store, the browser will try to read your resources forcibly over HTTPS, and this can cause problems. It is appropriate to enable HTTPS throughout the site at one time. The same goes for desktop and mobile websites (child website), where it is necessary to treat the HTTPS of both at the same time.

1. In the VTEX Admin, access **Storefront > Layout** and open the folder **CMS**.
2. Access **Sites and channels**.
3. Access the desired website.
4. Open the root folder of the website.
![CMS instrução - EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/how-do-i-use-the-https-protocol-on-my-stores-pages_1.png)
5. The screen that was opened displays all the folders that are on the first level of the site. For each pertinent folder, click **Edit** - for home, consider the top button;
![edit cms - EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/how-do-i-use-the-https-protocol-on-my-stores-pages_2.png)
6. In the checkbox **Protocol**, select the option **HTTPS**;
![cms-protocol-https EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/how-do-i-use-the-https-protocol-on-my-stores-pages_3.png)
7. Click in **Save Folder**.

Attention to folders that have subfolders, such as Departamento, Categoria, Produto, and other folders, including also those created for store customization. 

In the following example, the folder **Orders**, contained in **Account**, which also must be edited: 
![cms-subcategoria-edit EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/how-do-i-use-the-https-protocol-on-my-stores-pages_4.png)

After a cache of up to 10 minutes the changes will take effect.
