---
title: API de filtro (Facets) do Catálogo com comportamento inesperado quando há campos de especificação diferentes com o mesmo nome
id: 5kEXFKmO3YAyICAa6Usa28
status: PUBLISHED
createdAt: 2017-08-16T19:59:34.640Z
updatedAt: 2022-12-22T20:46:15.197Z
publishedAt: 2022-12-22T20:46:15.197Z
firstPublishedAt: 2017-08-16T20:09:14.847Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: api-de-filtro-facets-do-catalogo-com-comportamento-inesperado-quando-ha-campos-de-especificacao-diferentes-com-o-mesmo-nome
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao executar a API de filtro (Facet), se o resultado contiver campos de especificação (produto ou SKU) com o mesmo nome, o erro 500 (An item with the same key has already been added.) é exibido.

EndPoint da API: /api/catalog_system/pub/facets/search/{category}?map=c

## Simulação

Para simular o cenário:

1. Cadastre, em alguma categoria filha da categoria que deseja testar, um campo com nome "tamanho", por exemplo. O defina como filtro.
2. Cadastre, em outra categoria filha da categoria que deseja testar, um campo com o mesmo nome do anterior. "tamanho", por exemplo. O defina como filtro.
3. Cadastre valores nesses campos;
4. Cadastre um produto em cada categoria filha e preencha o campo definido ("tamanho", por exemplo)
5. Aguarde a indexação completa do produto (Por volta de 5 minutos)
6. Execute o endpoint /api/catalog_system/pub/facets/search/{category}?map=c

## Workaround

Para não enfrentar esse comportamento, evite criar campos com o mesmo nome em categorias paralelas (filhas da mesma categoria).

Se a API estiver sendo utilizada para renderizar um menu lateral (filtro), poderá ser substituida pelo controle searchNavigator nativo ([Clique aqui e leia mais](http://help.vtex.com/pt/tutorial/controles-do-template-de-prateleira)).

