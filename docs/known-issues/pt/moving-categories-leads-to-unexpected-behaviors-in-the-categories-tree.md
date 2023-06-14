---
title: 'Mover Categorias leva a comportamentos inesperados na árvore de categorias'
id: 2HKIvNomXHcDyYiuQYQvqI
status: PUBLISHED
createdAt: 2022-06-20T19:34:47.422Z
updatedAt: 2022-11-25T21:43:19.042Z
publishedAt: 2022-11-25T21:43:19.042Z
firstPublishedAt: 2022-06-20T19:34:48.671Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: mover-categorias-leva-a-comportamentos-inesperados-na-arvore-de-categorias
kiStatus: Backlog
internalReference: 367136
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, esta funcionalidade pode levar a inconsistências no banco de dados da sua árvore de categorias, dependendo do tipo de movimento. Esta funcionalidade não é, portanto, recomendada até que possa ser remediada.
As seguintes inconsistências foram identificadas como resultado deste problema:

- Especificações duplicadas de produtos/UKUs
- Categoria e subcategoria não são especificações de departamento herdadas
- O pedido do filtro lateral está incorreto




## Simulação


Não há simulação.



## Workaround



1. Desativar a categoria atual que você deseja mover
2. Criar uma nova categoria no local desejado
3. Mudar os produtos para a categoria recém-criada

