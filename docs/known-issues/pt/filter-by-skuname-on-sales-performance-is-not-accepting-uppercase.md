---
title: ' Filtrar por SkuName no desempenho de vendas não está aceitando maiúsculas.'
id: 3FCDeEn8xmEvOXKgBxqyL5
status: PUBLISHED
createdAt: 2022-08-16T18:06:02.919Z
updatedAt: 2024-02-16T20:24:21.760Z
publishedAt: 2024-02-16T20:24:21.760Z
firstPublishedAt: 2022-08-16T18:06:03.474Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slug: filtrar-por-skuname-no-desempenho-de-vendas-nao-esta-aceitando-maiusculas
locale: pt
kiStatus: No Fix
internalReference: 639219
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


No Painel de Desempenho de Vendas, o filtro por um termo não aceita letras maiúsculas no SkuName.

Os dados deste traço são preenchidos com as informações OMS que tem todos os SkuNames em letras minúsculas.

Portanto, mesmo que no próprio Catálogo o SkuName tenha letras maiúsculas, se você tentar filtrar pelo nome exato que está no Catálogo, nenhum resultado aparecerá na busca.


##

## Simulação



1. Criar um novo filtro por Produto / Nome Sku no Painel de Desempenho de Vendas;
2. Inserir um termo com letras maiúsculas;
3. Verifique se não aparecerão resultados;
4. Inserir o mesmo termo apenas com letras minúsculas;
5. 5. Verifique se os resultados mostrarão o sku.


##

## Workaround


Filtrar somente com letras minúsculas.

