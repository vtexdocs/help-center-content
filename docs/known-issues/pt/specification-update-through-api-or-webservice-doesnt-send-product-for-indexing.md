---
title: Atualização de especificação por API ou webservice não envia produto para indexação
id: d0xRClv0lM6q6EmcSCG0Q
status: PUBLISHED
createdAt: 2018-04-03T14:31:21.538Z
updatedAt: 2022-06-06T15:03:48.588Z
publishedAt: 2022-06-06T15:03:48.588Z
firstPublishedAt: 2018-04-03T14:40:11.127Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Catalog
slug: atualizacao-de-especificacao-de-produto-por-api-ou-ws-nao-envia-produto
kiStatus: Backlog
internalReference: 0
---

## Sumário

A atualização de especificação de produto por API ou webservice deveria enviar o item para a fila de indexação, para ser atualizado no site e nas APIs de search. No entanto, isso não está ocorrendo como esperado. Ou seja, o produto não está sendo enviado para indexação.

## Simulação

1. Atualizar o valor de um campo de produto (especificação) por API ou webservice. Veja a [documentação da Catalog API](https://developers.vtex.com/vtex-rest-api/reference/updateproductspecificacatalog-api-post-update-product-specificationtion).
2. Com o retorno `200 (OK)`, observar, no painel administrativo, que o valor, de fato, foi alterado.
3. Observar, no entanto, que nos instantes seguintes o produto não entrará na fila de indexação.

## Workaround

Como esse caso pode impactar integrações de catálogo, sugerimos que, enquanto não corrigimos o comportamento, após a atualização de uma especificação, o algoritmo do middleware realize um update no produto, somente com objetivo de colocá-lo na fila de indexação.

