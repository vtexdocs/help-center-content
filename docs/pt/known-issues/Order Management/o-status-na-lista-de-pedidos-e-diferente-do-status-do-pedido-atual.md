---
title: 'O status na lista de pedidos é diferente do status do pedido atual'
id: 2UBFdtXWtCIygv0SiObCTN
status: PUBLISHED
createdAt: 2022-05-11T18:25:07.711Z
updatedAt: 2023-06-07T17:52:27.382Z
publishedAt: 2023-06-07T17:52:27.382Z
firstPublishedAt: 2022-05-11T18:25:08.248Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: status-in-the-order-list-is-different-from-the-current-order-status
locale: pt
kiStatus: Backlog
internalReference: 577103
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em alguns casos, a lista de pedidos mostra um status diferente do status do pedido atual (cartão).

A causa é devido à indexação das informações do pedido, lembrando que a lista de pedidos é uma informação indexada do pedido, o que permite, por exemplo, o uso de filtros e pesquisa. A discordância pode acontecer em instantes, por isso gera essa divergência.

Também é importante lembrar que isso não afeta em nada as informações do pedido.

## Simulação


Não é possível simular o caso, mas quando a indexação falha, a lista de pedidos deve mostrar um status diferente (inferior) daquele mostrado ao abrir o detalhe do pedido (cartão). Aqui está um exemplo do comportamento:

> Status da lista de pedidos = Manuseio
>
> Status do detalhe do pedido = Faturado

## Workaround


No momento, todos os casos que apresentarem essa divergência na lista de pedidos e no detalhe do pedido devem ser relatados para que sejam tomadas providências.

Da mesma forma, o que é feito é apenas reindexar as informações do pedido para resolver esse comportamento.




