---
title: 'Em alguns casos em que há um desconto no pedido, temos uma discrepância no valor total do campo Itens para fatura na interface do usuário do pedido.'
id: 20xiOKxpvdCODmDJDKunST
status: PUBLISHED
createdAt: 2024-05-06T20:17:01.162Z
updatedAt: 2024-05-06T20:17:01.968Z
publishedAt: 2024-05-06T20:17:01.968Z
firstPublishedAt: 2024-05-06T20:17:01.968Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: em-alguns-casos-em-que-ha-um-desconto-no-pedido-temos-uma-discrepancia-no-valor-total-do-campo-itens-para-fatura-na-interface-do-usuario-do-pedido
locale: pt
kiStatus: Backlog
internalReference: 1028210
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Foi identificado que, em alguns pedidos em que há um desconto associado a um ou mais itens, podemos ter uma discrepância no valor total do campo "itens a faturar" na interface do usuário do pedido, pois o cálculo desse campo leva em conta o parâmetro "sellingPrice", em vez do parâmetro "priceDefinitions". Portanto, é possível notar diferenças de 0,01 ou um pouco mais no valor total do pedido.

Ressaltamos que esse campo é ilustrativo, pois o campo principal é o valor total (montante) do pedido e NÃO há discrepância nesse campo.

## Simulação


Não é possível simular esse cenário

## Workaround


Não seria um workaround, apenas uma dica para faturar o pedido com o valor total, informado no campo "amount", ou no caso de faturas parciais, informar o valor do(s) item(ns).





