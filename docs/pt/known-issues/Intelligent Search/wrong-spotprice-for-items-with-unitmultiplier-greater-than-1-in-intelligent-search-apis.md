---
title: 'SpotPrice incorreto para itens com UnitMultiplier maior que 1 nas APIs de pesquisa inteligente'
id: 50Ufh8uqYt76Ddxrz0Id99
status: PUBLISHED
createdAt: 2023-11-11T00:26:08.800Z
updatedAt: 2023-11-11T00:26:09.509Z
publishedAt: 2023-11-11T00:26:09.509Z
firstPublishedAt: 2023-11-11T00:26:09.509Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: spotprice-incorreto-para-itens-com-unitmultiplier-maior-que-1-nas-apis-de-pesquisa-inteligente
locale: pt
kiStatus: Backlog
internalReference: 934687
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Nas APIs de pesquisa inteligente (GraphQL ou REST), a propriedade `spotPrice` do objeto `items.sellers.commertialOffer` está incorreta para itens em que o `unitMultiplier` é maior que `1`.

O `spotPrice` deveria representar o método de pagamento mais barato em sua opção de parcela única para mostrar o "preço à vista", com um desconto (se houver), mas, nesse caso, ele acaba retornando o preço normal do item.

Isso não acontece para itens em que o multiplicador é menor que `1` (itens fracionados).

## Simulação


Na API REST ou GraphQL do Intelligent Search, verifique a propriedade dos itens nesse cenário específico

## Workaround


O valor correto para `spotPrice` pode ser recuperado da matriz `Installments` dentro do mesmo objeto `commertialOffer`.




