---
title: 'Problemas com "preço de" no controle "ButtonBuyModal'
id: 2DdTK2AQNysEqM8AyMwSMQ
status: PUBLISHED
createdAt: 2018-10-05T17:06:27.321Z
updatedAt: 2022-12-22T20:48:37.370Z
publishedAt: 2022-12-22T20:48:37.370Z
firstPublishedAt: 2018-10-05T17:21:10.821Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: problemas-com-preco-de-no-controle-buttonbuymodal
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O controle `$product.ButtonBuyModal(true,true)` é utilizado em prateleiras para adicionar o produto ao carrinho. Caso exista mais de um SKU possível é apresentado um modal para escolha da variação desejada.

Em casos que o produto tem somente "preço por" (`bestPrice`), o "preço de" (`listPrice`) é sempre `R$0,00`, mas que por sua vez não deveria ser exibido no layout.

## Simulação

Para simular o cenário é necessário implementar essa viewpart em na prateleira para observar seu comportamento com produto que possua múltiplos SKUs.

## Workaround

É possível contornar este comportamento ocultando o elemento relativo ao "preço de" com Javascript sempre que seu conteúdo for "0,00", ou então reconstruir essa funcionalidade (que se limita ao frontend da loja) com base nas APIs da VTEX (como o "[vtexjs.catalog](https://github.com/vtex/vtex.js/tree/master/docs/catalog)").

