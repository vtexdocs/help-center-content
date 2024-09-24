---
title: 'CMS folder structure'
id: 75yhGhiXHMnV6Ib0rOAnue
status: ARCHIVED
createdAt: 2020-01-08T19:46:39.934Z
updatedAt: 2022-01-10T21:46:25.587Z
publishedAt: 
firstPublishedAt: 2020-01-13T14:28:57.365Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: cms-folder-structure
locale: en
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugEN: cms
---

At VTEX, every new account has folders preinstalled on its CMS. Some of them are __required__. 

If your store does not have these folders - __with the exact names__ we indicate in this article - you will have browsing and indexing problems.

The other folders are merely __recommended__, since they are useful to most stores. Its absence does not affect the accounts.

In this article we will cover all these folders.


## Required folders

These are the folders that every store needs to have in the CMS to ensure the correct operation of browsing and indexing:

- Busca (Search)
- Categoria (Category)
- Departamento (Department)
- Login
- Produto (Product)

See below these basic folders in the CMS:

![pastasObrigatorias](//images.contentful.com/alneenqid6w5/2yLeJGvd48WcA6egy2kSSC/43e22907371f954df25d5fd7e5dd116b/pastasObrigatorias.png)

These folders come by default in the environment of all VTEX stores.

>❗ The names of the required folders must **not** be edited.

Since folders refer to dynamic pages, their names don't appear on the customer's navigation. In other words, the fact that editing the names is banned does not affect the final text of your URLs, nor the internationalization of your site.

Layout names can be edited without any problem.


## Important folders

Some CMS folders are not required but are useful. Hence, we recommend that you do not delete them.

These are:
- `/account`: customer's account.
- `/account/orders`: customer's orders.

For these two folders, what matters is the control or placeholder that reads their content. Their names can be freely edited.

>⚠️ Since they are private folders, `/account` and `/account/orders` **must require authentication**. See [in this article](http://help.vtex.com/en/tutorial/requering-authentication-on-store-pages) how to ensure they are configured to ask for user authentication.


## Useful folders

There are folders that, although not as important as the previous ones, are often useful for most stores. They are the following:

- `/sistema/buscavazia`: folder to which the user is directed if the search finds no results.
- `/sistema/{codigoHTTP}`: folder that renders error pages according to HTTP status codes, such as `404` (page not found), `401` (unauthorized), and `500` (server error).
- `/sistema/marcas`: folder containing layouts for brand pages, which can be customized with exclusive layouts. If there is no specific layout for brands, these pages will be rendered the same way as the search folder. To understand how brand pages work, see the article [on VTEX search](https://help.vtex.com/en/tutorial/how-does-vtex-search-work--tutorials_542).

