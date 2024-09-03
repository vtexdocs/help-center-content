---
title: "A coleção de importação só aceita a ordem dos produtos se a importação for feita com base no 'skuId'"
id: 7vXi2bDVyGHSMLluQi2ZWZ
status: PUBLISHED
createdAt: 2023-12-15T16:35:11.545Z
updatedAt: 2023-12-21T18:55:17.090Z
publishedAt: 2023-12-21T18:55:17.090Z
firstPublishedAt: 2023-12-15T16:35:12.450Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-colecao-de-importacao-so-aceita-a-ordem-dos-produtos-se-a-importacao-for-feita-com-base-no-skuid
locale: pt
kiStatus: Fixed
internalReference: 953862
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao importar uma planilha de produtos para uma coleção, o usuário pode optar por selecionar os produtos por "skuId", "productId", "skuRefId" ou "productRefId".

No entanto, a ordem dos produtos na coleção só está sendo respeitada quando a planilha está usando "skuId".

## Simulação



1. Crie uma nova coleção;
2. Use a planilha de importação para adicionar produtos;
3. Escolha um campo diferente de "skuId" para preencher a planilha;
4. Verifique se a ordem dos produtos nas coleções é diferente da ordem na planilha

## Workaround


Use a coluna "skuId" para preencher a planilha.





