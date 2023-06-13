---
title: Why are the UTMs not being applied to the cart?
id: 41306rOW7e8GQwSEIawgU8
status: DRAFT
createdAt: 2017-12-20T17:24:13.382Z
updatedAt: 2022-07-21T18:39:04.460Z
publishedAt: 
firstPublishedAt: 2017-12-20T20:06:11.308Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: authors_24
slug: why-are-the-utms-not-being-applied-to-the-cart
legacySlug: why-are-the-utms-not-being-applied-to-the-cart
---

When store development teams customize the addition of products to the cart via VTEX checkout API, it sometimes happens that they forget to pass the marketing tags (UTMs).

Thus, even if the URL is set up correctly, with the right UTMs, when closing the purchase these UTMs are not applied.

By using the vtex.js [addToCart method](https://github.com/vtex/vtex.js/tree/master/docs/checkout#addtocartitems-expectedorderformsections-saleschannel), UTMs are not automatically applied. To add the UTMs, you need to pass the `marketingData` through the `sendAttachment` method.

Go deeper into this method [here](https://github.com/vtex/vtex.js/tree/master/docs/checkout#sendattachmentattachmentid-attachment-expectedorderformsections).
