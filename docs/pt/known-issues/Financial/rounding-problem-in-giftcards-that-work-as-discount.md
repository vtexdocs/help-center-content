---
title: 'Problema de arredondamento em vales (giftcards) que funcionam como desconto'
id: ecLMI2kGhqmEMUkESOSOK
status: PUBLISHED
createdAt: 2018-03-27T20:47:13.941Z
updatedAt: 2022-12-22T14:45:08.837Z
publishedAt: 2022-12-22T14:45:08.837Z
firstPublishedAt: 2018-03-27T20:53:30.783Z
contentType: knownIssue
productTeam: Financial
author: authors_84
tag: Checkout,Order Management
slug: problema-de-arredondamento-em-vales-giftcards-que-funcionam-como-desconto
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Vales (gift cards) que funcionam como desconto estão apresentando problema no arredondamento, pois os itens não são quebrados.

Como essa priceTag não funciona como as priceTags que vêm do RnB, o item não ajusta o preço unitário, mostrando valores incorretos.

## Simulação

Faça um pedido com Vale sendo usado como desconto (e não como forma de pagamento) e mais de um item no mesmo pedido.

Veja que o valor da soma dos itens não vai coincidir com o total do pedido, pois vai acontecer um arredondamento, por não ocorrer a quebra de itens para que o cálculo seja exato.

## Workaround

Atualmente não há workaround para esse problema.

