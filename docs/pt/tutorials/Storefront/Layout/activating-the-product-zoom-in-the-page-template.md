---
title: 'Activating the product zoom in the page template'
id: 104Z7aky7IcYKYIgs4KUIg
status: PUBLISHED
createdAt: 2017-10-12T15:38:55.676Z
updatedAt: 2022-10-14T12:36:40.505Z
publishedAt: 2022-10-14T12:36:40.505Z
firstPublishedAt: 2017-10-12T15:46:34.188Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: activating-the-product-zoom-in-the-page-template
locale: en
legacySlug: activating-the-product-zoom-in-the-page-template
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Once you have [configured the zoom CSS](https://developers.vtex.com/vtex-developer-docs/docs/setting-up-the-zoom), you have to insert a control to activate the zoom on the product page template. This process also takes place in the _Gerenciador do Portal_, but this time you have to locate the product page template, which should be in the _Portal > Templates de Página _folder. When you have located the template, you must enter the reference for the .css file we have just uploaded. 

For this, you must include a tag such as `<link href="/arquivos/zoom.css" rel="stylesheet" type="text/css">` in the head template, as we would do with any other .css file. 

Now all you have to do is insert `zoom="on"` in the product tag, like this:
`<vtex.cmc:ProductImage zoom="on">`
