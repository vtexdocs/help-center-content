---
title: 'Por que as UTMs não estão sendo aplicadas ao carrinho?'
id: 41306rOW7e8GQwSEIawgU8
status: ARCHIVED
createdAt: 2017-12-20T17:24:13.382Z
updatedAt: 2022-07-21T18:39:04.460Z
publishedAt: 
firstPublishedAt: 2017-12-20T20:06:11.308Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: authors_24
slugEN: why-are-the-utms-not-being-applied-to-the-cart
locale: pt
legacySlug: por-que-as-utms-nao-estao-sendo-aplicadas-ao-carrinho
---

Quando os times de desenvolvimento das lojas customizam a adição de produtos ao carrinho por meio da API de checkout da VTEX, às vezes acontece de esquecerem de passar as marketing tags (UTMs).

Com isso, mesmo que a URL seja montada corretamente, com as UTMs certas, ao fechar a compra essas UTMs não são aplicadas.

Ao usar o método [addToCart](https://github.com/vtex/vtex.js/tree/master/docs/checkout#addtocartitems-expectedorderformsections-saleschannel) do vtex.js, as UTMs não são aplicadas automaticamente. Para adicionar as UTMs, é necessário passar as `marketingData` pelo método `sendAttachment`. 

Entenda como funciona esse método [aqui](https://github.com/vtex/vtex.js/tree/master/docs/checkout#sendattachmentattachmentid-attachment-expectedorderformsections). 
