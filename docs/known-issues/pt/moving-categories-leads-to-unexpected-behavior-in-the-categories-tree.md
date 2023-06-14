---
title: 'Mover categorias gera comportamentos inesperados na árvore de categorias'
id: 6JSa9nnYoAAUQO1zPtzfZD
status: PUBLISHED
createdAt: 2019-08-20T18:20:42.655Z
updatedAt: 2022-12-22T20:45:42.366Z
publishedAt: 2022-12-22T20:45:42.366Z
firstPublishedAt: 2019-08-20T18:32:09.522Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: mover-categorias-gera-comportamentos-inesperados-na-arvore-de-categorias
kiStatus: Backlog
internalReference: 
---

## Sumário

Hoje essa funcionalidade pode gerar inconsistências no banco de dados da sua árvore de categorias, dependendo do tipo de movimentação. Não recomendamos a utilização desta funcionalidade até que seja corrigida.

Identificamos algumas inconsistências geradas por esse problema, são elas: 
 - Especificações de Produto/SKU duplicadas
 - Categoria e subcategoria não herdando especificações do departamento
 - Ordenação de Filtro Lateral em ordem incorreta

## Simulação



## Workaround

 1. Inative a categoria atual que deseja mover
 2. Crie uma nova categoria no lugar desejado
 3. Mova os produtos para a nova categoria criada

