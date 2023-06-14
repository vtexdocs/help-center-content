---
title: 'Como funciona a regra de disponibilidade mínima'
id: tutorials_394
status: PUBLISHED
createdAt: 2017-04-27T22:07:07.997Z
updatedAt: 2019-12-31T15:21:58.911Z
publishedAt: 2019-12-31T15:21:58.911Z
firstPublishedAt: 2017-04-27T23:03:22.711Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: entendendo-a-regra-de-disponibilidade-minima
legacySlug: entendendo-a-regra-de-disponibilidade-minima
subcategory: 7lxg0kyL3TYIsrlSQlf1zP
---

A regra de disponibilidade mínima é uma funcionalidade associada ao processo de consulta de estoque que possibilita a correta informação de disponibilidade sem a atualização constante de quantidade em estoque.

## Como funciona

Sempre que um carrinho é montado no **marketplace**, são feitas diversas consultas ao sistema da VTEX. Entre elas, está a consulta da disponibilidade dos itens selecionados. 

Essa consulta independe da quantidade em estoque que estava previamente informada ao marketplace, ou seja, mesmo com a informação da quantidade em estoque, ainda assim essa consulta é feita no momento da finalização da compra. 

Isso acontece para garantir que a informação do estoque é a mais atualizada possível.

Por conta disso, existe a regra de disponibilidade mínima, que define que as alterações em número de estoque que serão notificadas aos marketplaces são aquelas que alteram itens que estejam antes ou após a atualização com número até cinco itens. 

Ou seja, caso seja feita uma alteração de estoque de um item de 50 para 20 unidades em estoque, essa alteração não será notificada ao parceiro. Isso só será feito quando a quantidade antes da alteração ou após a alteração for de até cinco itens.

## Exemplos

**Antes da atualização:** 16 itens
**Após a atualização:** 60 itens
Essa alteração **não** será notificada.

**Antes da atualização:** 0 itens
**Após a atualização:** 23 itens
Essa alteração será notificada.

** Antes da atualização:** 15 itens
**Após a atualização:** 2 itens
Essa alteração será notificada.

_Reforçamos que esse comportamento não impacta o fluxo de compra, que sempre tem a disponibilidade verificada no momento do fechamento do pedido._
