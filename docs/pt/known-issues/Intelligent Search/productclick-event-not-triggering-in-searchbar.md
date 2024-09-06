---
title: 'ProdutoClique o evento que não aciona na barra de busca'
id: Nk7Dkd4YoY5LXbxpWJIKz
status: PUBLISHED
createdAt: 2023-01-30T17:43:44.441Z
updatedAt: 2023-01-30T17:43:45.235Z
publishedAt: 2023-01-30T17:43:45.235Z
firstPublishedAt: 2023-01-30T17:43:45.235Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: produtoclique-o-evento-que-nao-aciona-na-barra-de-busca
locale: pt
kiStatus: Backlog
internalReference: 742754
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



O evento ProductClick não está sendo acionado na barra de busca

https://github.com/vtex-apps/search/blob/8cf2cec70a2d6e1ac616343d07f10d75b45aa8ae/react/components/Autocomplete/components/TileList/TileList.tsx#L76

devemos adicionar produtoClique no evento o mesmo que temos no bloco produto-resumo no produtoSummaryCustom:

https://github.com/vtex-apps/product-summary/blob/8ef1f2b397d35a03b2acaf448c0c70848600c4a5/react/ProductSummaryCustom.tsx

https://github.com/vtex-apps/product-summary/blob/45a6df2afeabd441d3c772b5ee1840206a8cf061/react/ProductSummaryList.tsx#L160-L174




##

## Simulação



Ir para a barra de busca
Busca por qualquer termo que tenha produtos
Clique sobre o produto
Verificar evento dataLayer no console


##

## Workaround


Não





