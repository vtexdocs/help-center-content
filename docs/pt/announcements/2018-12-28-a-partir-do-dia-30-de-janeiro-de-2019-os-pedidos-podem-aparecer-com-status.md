---
title: 'APIs Get Order e List Orders poderão retornar pedidos com status null'
id: 6IO4rL1qIEWSMsu2WgmWI0
status: PUBLISHED
createdAt: 2018-12-28T18:46:34.551Z
updatedAt: 2020-05-12T15:37:47.782Z
publishedAt: 2020-05-12T15:37:47.782Z
contentType: updates
productTeam: Post-purchase
author: authors_41
slugEN: 2018-12-28-get-order-and-list-orders-apis-may-now-return-orders-with-the-null-status
locale: pt
legacySlug: a-partir-do-dia-30-de-janeiro-de-2019-os-pedidos-podem-aparecer-com-status
announcementImageID: ''
announcementSynopsisPT: 'A partir de 30/01/2019, pedidos poderão aparecer com status null nas respostas das chamadas Get Order e List Orders.'
---

A partir de __30 de janeiro de 2019__, os pedidos poderão aparecer com status `null` nas  respostas das chamadas das APIs [Get Order](https://developers.vtex.com/reference/orders#getorder) e [List Orders](https://developers.vtex.com/reference/orders#listorders). Antes, esse resultado não era uma resposta possível das APIs.


## Principais vantagens
O novo status permite que as compras sejam fechadas mesmo em casos de instabilidade do Workflow, sistema que gerencia os status dos pedidos na VTEX. Antes, problemas no Workflow impactavam o checkout e, consequentemente, o fechamento de compras. Agora, as compras são fechadas normalmente e ficam com status `null` até que a situação seja normalizada.

Em outras palavras, __o novo status otimiza o Workflow e traz mais estabilidade para o fechamento de compras__.


## O que você precisa fazer
É fundamental revisar as integrações que usam as APIs Get Order e List Orders (como as de ERP, por exemplo). __Aquelas que não estiverem preparadas para receber a nova resposta precisam ser ajustadas antes de 30 de janeiro.__
