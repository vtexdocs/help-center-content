---
title: 'A exportação de coleções mostra apenas o primeiro SKU do produto inativo'
id: 7FegROKSwxpadN5NYVFR8M
status: PUBLISHED
createdAt: 2024-05-28T19:56:23.549Z
updatedAt: 2024-05-28T19:56:24.303Z
publishedAt: 2024-05-28T19:56:24.303Z
firstPublishedAt: 2024-05-28T19:56:24.303Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-exportacao-de-colecoes-mostra-apenas-o-primeiro-sku-do-produto-inativo
locale: pt
kiStatus: Backlog
internalReference: 1040753
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar o módulo de coleções e tentar exportar registros, se o produto listado em uma determinada coleção tiver todos os seus skus definidos como inativos, a planilha exportada listará apenas um dos skus do produto, em vez de todos.

## Simulação


1 - Obtenha um produto que tenha vários skus e defina todos eles como inativos.
2 - Insira-os em uma coleção do catálogo /admin/collections
3 - Use o recurso de exportação
4 - apenas a SKU mais alta do produto será listada na planilha, em vez de toda

## Workaround


-





