---
title: 'Filtro da categoria UI Legacy Collection selecionando produtos erroneamente para a coleção'
id: 1IlioZpOSQf5t4TWqZreiS
status: PUBLISHED
createdAt: 2022-10-31T20:42:26.100Z
updatedAt: 2024-02-16T20:28:22.357Z
publishedAt: 2024-02-16T20:28:22.357Z
firstPublishedAt: 2022-10-31T20:42:26.591Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: filtro-da-categoria-ui-legacy-collection-selecionando-produtos-erroneamente-para-a-colecao
locale: pt
kiStatus: No Fix
internalReference: 590934
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Eventualmente, dependendo do número de produtos que temos dentro de uma categoria, se selecionarmos os filtros da categoria na IU de coleção legada, ela poderá devolver produtos que não pertencem a estas categorias.


##

## Simulação



- Criar uma coleção usando a IU de coleção legada;
- Insira produtos usando o filtro de categorias, as categorias devem ter um grande número de produtos.
- A coleção às vezes pode ter produtos que não pertencem a esta categoria.


##

## Workaround



- Na IU de coleção legada, crie um filtro para remover a categoria deste produto.

