---
title: 'API do catálogo da unidade de estocagem permite valores de condição comercial inválidos'
id: 1ONAspL4Wj9fdu2tYcX4Ur
status: PUBLISHED
createdAt: 2023-03-10T20:44:01.459Z
updatedAt: 2024-07-01T18:48:57.278Z
publishedAt: 2024-07-01T18:48:57.278Z
firstPublishedAt: 2023-03-10T20:44:02.006Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: api-do-catalogo-da-unidade-de-estocagem-permite-valores-de-condicao-comercial-invalidos
locale: pt
kiStatus: No Fix
internalReference: 769053
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a unidade de estocagem API https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/{skuid} não realiza nenhuma verificação para o campo "CommercialConditionId".

Isto permite que o usuário insira dados inválidos, como um Id que não existe em uma determinada loja e então, ao tentar acessar o formulário deste sku, um erro é lançado.


##

## Simulação


Na carga útil do SKU API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit, use uma identificação de condição comercial que não esteja presente na loja.

Então, acesse esta IU criada pelo sku e você deverá enfrentar uma mensagem de erro.


##

## Workaround


n/d





