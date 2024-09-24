---
title: 'How do I know what page of the system is being rendered on the site?'
id: 1GXswbUMu0CUG2uqCOGcgI
status: PUBLISHED
createdAt: 2019-01-24T20:45:44.215Z
updatedAt: 2023-03-29T00:29:39.010Z
publishedAt: 2023-03-29T00:29:39.010Z
firstPublishedAt: 2019-01-24T22:10:37.513Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: como-saber-qual-pagina-do-sistema-esta-sendo-renderizada-no-site
locale: en
legacySlug: como-saber-qual-pagina-do-sistema-esta-sendo-renderizada-no-site
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

When a site page is rendered, the source code always carries a comment that indicates which CMS folder the page layout is related to.

Say, for example, you're on a department page. In this case, if the department page folder is called `@department@`, the following code will be in the source code:

`<!-- CommerceContext.Current.VirtualFolder.Name: @departament@ -->`

To find this line of code, go to the front-end of your store, enter the browser's developer tools (F12 on Windows or Cmd + Option + I on Mac if you're using Google Chrome) and do search for `CommerceContext` (Ctrl + Shift + F in Windows or Cmd + Shift + F on Mac).

See below the relationship between the folder in the CMS and the store's source code.

![CommerceContext](//images.contentful.com/alneenqid6w5/6diTrNVvl6OuwGKmoICSA0/4e958baa7ab163bcf06ac5963795feff/CommerceContext.png)

>ℹ️ This line of code is always commented out. Therefore, it has only informative function. That is, it does not take any action.

This information is useful, for example, to know which folder the search for a certain term is returning in your store.
