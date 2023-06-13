---
title: Por que pedidos não foram associados a uma lista?
id: 1Ksug2wESM5kpANvTdjJNe
status: PUBLISHED
createdAt: 2019-01-29T18:03:47.228Z
updatedAt: 2019-12-31T14:24:14.246Z
publishedAt: 2019-12-31T14:24:14.246Z
firstPublishedAt: 2019-01-29T18:05:13.013Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_59
slug: por-que-pedidos-nao-foram-associados-a-uma-lista
legacySlug: por-que-pedidos-nao-foram-associados-a-uma-lista
---

Caso os pedidos feitos na sua loja não estejam sendo associados às suas respectivas listas, é possível que o botão de compra da sua página seja customizado.

Em botões de finalizar compra que não utilizam o controle nativo da VTEX, é preciso passar o parâmetro `&gr={listId}` para associar o pedido à lista desejada pelo cliente.

Utilizando o [controle nativo da VTEX](/pt/tutorial/controle-do-botao-de-compra) (`<vtex.cmc:BuyButton/>`) para renderizar o botão de compra, o pedido é associado normalmente à lista desejada.
