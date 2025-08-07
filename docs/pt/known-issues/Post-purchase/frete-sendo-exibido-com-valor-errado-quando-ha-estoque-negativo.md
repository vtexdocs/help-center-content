---
title: "Frete sendo exibido com valor errado quando há estoque negativo."
id: 3EwZH688kMiS8uyugOk4uw
status: PUBLISHED
createdAt: 2017-08-23T13:13:48.362Z
updatedAt: 2022-12-22T20:46:20.542Z
publishedAt: 2022-12-22T20:46:20.542Z
firstPublishedAt: 2017-08-23T18:05:42.039Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: frete-sendo-exibido-com-valor-errado-quando-ha-estoque-negativo
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando há apenas uma unidade disponível de um produto, mas há quantidade negativa em outro estoque desse mesmo produto, ao selecionar para comprar duas unidades no carrinho, o valor do frete é exibido errado após a mensagem de *"A quantidade desejada para o item #### não está disponível"*

O problema só acontece momentaneamente, e se finalizar a compra enquanto ele ocorre, o valor é alterado para o valor correto.

## Simulação

Colocar um SKU em dois estoques passando pela mesma doca, em um estoque deixar  apenas com *1* de quantidade, e outro com *-1* de quantidade.
Colocar este produto no carrinho, adicionar um CEP que a transportadora atenda, e selecionar para comprar duas unidades.

## Workaround

Não há Workaround.

