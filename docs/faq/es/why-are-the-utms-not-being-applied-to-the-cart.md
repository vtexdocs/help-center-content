---
title: '¿Por qué las UTMs no se aplican al carrito?'
id: 41306rOW7e8GQwSEIawgU8
status: DRAFT
createdAt: 2017-12-20T17:24:13.382Z
updatedAt: 2022-07-21T18:39:04.460Z
publishedAt: 
firstPublishedAt: 2017-12-20T20:06:11.308Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: authors_24
slug: por-que-las-utms-no-se-aplican-al-carrito
locale: es
legacySlug: por-que-las-utms-no-se-aplican-al-carrito
---

Cuando los equipos de desarrollo de las tiendas personalizan la adición de productos al carrito a través de la API de checkout de VTEX, a veces se olvidan de pasar las marketing tags (UTMs).

Con ello, aunque la URL se monta correctamente, con las UTM ciertas, al cerrar la compra, no se aplican las UTMs.

Al utilizar el método [addToCart](https://github.com/vtex/vtex.js/tree/master/docs/checkout#addtocartitems-expectedorderformsections-saleschannel) de vtex.js, las UTMs no se aplican automáticamente. Para añadirlas, es necesario pasar las `marketingData` por el método `sendAttachment`.

Para entender cómo funciona este método [haga clic aquí](https://github.com/vtex/vtex.js/tree/master/docs/checkout#sendattachmentattachmentid-attachment-expectedorderformsections).
