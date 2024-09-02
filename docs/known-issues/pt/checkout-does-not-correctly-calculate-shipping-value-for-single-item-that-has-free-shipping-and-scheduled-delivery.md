---
title: 'O checkout não calcula corretamente o valor do frete para um único item que tenha frete gratuito e entrega programada'
id: 4jX7JT0Wxt9S4xBe9FSwO
status: PUBLISHED
createdAt: 2022-02-21T19:48:04.202Z
updatedAt: 2024-02-16T20:26:29.918Z
publishedAt: 2024-02-16T20:26:29.918Z
firstPublishedAt: 2022-02-21T19:48:04.748Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-checkout-nao-calcula-corretamente-o-valor-do-frete-para-um-unico-item-que-tenha-frete-gratuito-e-entrega-programada
locale: pt
kiStatus: No Fix
internalReference: 529043
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o carrinho consiste em dois itens, e o tipo de entrega é programada, ao adicionar o primeiro item ao carrinho com envio gratuito, e é o mesmo SLA, o checkout acaba cobrando o valor desse envio, pois não sabe como lidar com a distribuição de cálculo de valores de frete entre os itens, pois é uma entrega programada e o preço de janela é para um pacote como um todo.



## Simulação


Adicione no carrinho 2 itens, e o primeiro com o frete livre, você também precisa do SLA comum para ambos e a entrega programada.



## Workaround


N/A

