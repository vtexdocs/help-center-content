---
title: 'Importação e exportação O filtro da categoria Produto/Skus só funciona para as categorias de último nível'
id: i7KO2Nw3puiniVTRbDJok
status: PUBLISHED
createdAt: 2022-03-25T17:49:45.769Z
updatedAt: 2022-11-25T21:43:11.100Z
publishedAt: 2022-11-25T21:43:11.100Z
firstPublishedAt: 2022-03-25T17:49:46.190Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: importacao-e-exportacao-o-filtro-da-categoria-produtoskus-so-funciona-para-as-categorias-de-ultimo-nivel
locale: pt
kiStatus: Fixed
internalReference: 550313
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para reduzir a quantidade de skus exportados na planilha Produto/Skus, o cliente pode utilizar os filtros.

O filtro de categoria não está funcionando como esperado ao utilizar categorias que não estão no último nível (categorias que têm categorias infantis).

O resultado é que a planilha não está sendo filtrada de forma alguma, todos os skus ainda permanecem.

Ao utilizar categorias do último nível, o comportamento é correto.



## Simulação



1. Ir para Importação e exportação -> Produto e Skus;
2. Selecione uma categoria de último nível no filtro;
3. Exportar a planilha e verificar se o resultado está filtrado corretamente pela categoria.
4. Selecione a categoria de nível superior no filtro;
5. Exportar a planilha e verificar se o resultado é todo o skus.



## Workaround


Selecione a categoria de último nível ou outros campos de filtro para reduzir a quantidade de skus.

