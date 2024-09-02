---
title: 'Informações indexadas desatualizadas ao realizar duas alterações de produto em uma linha.'
id: 66aX8MktRogeUD9bbTo0vF
status: PUBLISHED
createdAt: 2023-09-26T14:44:57.146Z
updatedAt: 2023-09-26T14:44:57.895Z
publishedAt: 2023-09-26T14:44:57.895Z
firstPublishedAt: 2023-09-26T14:44:57.895Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: informacoes-indexadas-desatualizadas-ao-realizar-duas-alteracoes-de-produto-em-uma-linha
locale: pt
kiStatus: No Fix
internalReference: 907428
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para lojas que usam o mecanismo de pesquisa legado, se duas alterações nos dados de um produto forem feitas em uma sucessão rápida (ou seja, você inativou um produto e o reativou logo em seguida) e a última alteração retornar as informações do produto para o que era antes, o estado desse item pode ficar preso na primeira alteração, pois a última não é reconhecida corretamente.

Esse problema não ocorre em lojas que usam o aplicativo de pesquisa inteligente.

## Simulação


1 - Obtenha um item ativo em sua loja e desative-o
2 - Logo em seguida (< 5 minutos), reative-o.
3 - Após alguns minutos, verifique seu produto: ele não será exibido na loja, apesar de estar configurado para isso. (em outras palavras, ele ficou "preso" nesse estado intermediário)

## Workaround


1 - Reindexar os referidos produtos após mais de 5 minutos de ocorrência do problema.
2 - Use o mecanismo de busca inteligente, que não apresenta esse problema de forma alguma.
3 - Evite fazer mais de duas alterações consecutivas em um produto, pois a última alteração apenas reverte a primeira.





