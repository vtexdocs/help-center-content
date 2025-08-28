---
title: 'A partir de agora, você vai poder exportar até 3 mil pedidos'
id: vo2h9LyDReC6iSkSOKucG
status: PUBLISHED
createdAt: 2018-10-24T21:41:38.655Z
updatedAt: 2020-05-12T15:39:59.845Z
publishedAt: 2020-05-12T15:39:59.845Z
contentType: updates
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: 2018-10-24-from-now-on-you-can-export-up-to-3-thousand-orders
locale: pt
legacySlug: a-partir-de-agora-voce-vai-poder-exportar-ate-3-mil-pedidos
announcementImageID: 'undefined'
announcementSynopsisPT: 'Esse limite visa garantir a performance da plataforma sem perder a consistência dos relatórios gerados.'
---

A partir de __24 de outubro__, o módulo de gerenciamento de pedidos vai permitir a exportação de, no máximo, __3 mil pedidos__. Essa mudança é fundamental para garantir a performance da plataforma sem perder a consistência dos relatórios gerados.

## O que mudou
Para que o processo fosse o mais ágil possível, já vínhamos recomendando o limite de 3 mil pedidos desde junho deste ano (conforme aviso publicado no artigo [Exportar pedidos no OMS](/pt/tutorial/exportando-pedidos-no-oms-2)). A única diferença é que, agora, __o botão fica disponível somente se o limite for respeitado__.

## Como exportar mais de 3 mil pedidos
Você ainda pode exportar mais do que 3 mil pedidos. Para isso, use as APIs de gerenciamento de pedidos (antigo OMS): [Get Order](https://developers.vtex.com/reference/orders#getorder) e [Get Feed Order Status](https://developers.vtex.com/reference/feed-v3#getfeedorderstatus1).

> ⚠️ **Mas lembre-se:** para funcionar, é necessário que você **crie um range de data/hora que inclua, no máximo, 3 mil pedidos**. Com o range definido e o limite respeitado, você vai poder chamar a API quantas vezes for necessário.
