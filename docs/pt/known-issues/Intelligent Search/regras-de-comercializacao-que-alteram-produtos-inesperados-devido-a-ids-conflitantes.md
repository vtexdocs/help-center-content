---
title: "Regras de comercialização que alteram produtos inesperados devido a IDs conflitantes"
id: 2pmPJ34MdEbr2xiGbPCuzv
status: PUBLISHED
createdAt: 2024-09-04T21:10:05.272Z
updatedAt: 2025-04-28T15:37:21.913Z
publishedAt: 2025-04-28T15:37:21.913Z
firstPublishedAt: 2024-09-04T21:10:06.016Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: regras-de-comercializacao-que-alteram-produtos-inesperados-devido-a-ids-conflitantes
locale: pt
kiStatus: Backlog
internalReference: 1092750
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As regras de merchandising processam IDs, que são usadas para registrar as regras, em cima de um campo mais genérico. Ele inclui mais do que _ProductID_, mas também _ProductRefID_, _SKUID_, _SKURefID_ e _EAN_, de acordo com nossa documentação.

Se o valor de um ID de produto também fizer parte de um campo de ID diferente em outro produto, a regra será aplicada a ambos.

No caso do Visual Editor, embora o Merchandising Rules use o productID para registrar as regras, ele será processado em um campo genérico.

## Simulação


Considere o produto A com "productId=444" e o produto B com "productId=555", em que o SKU do produto A é "skuId=555".

Uma regra para fixar ou ocultar o produto B (productId=555) também será aplicada ao produto A (devido ao skuId=555).



## Workaround


É possível contornar o problema usando valores de ID diferentes, como _SKURefID_ ou _EAN_, que têm maior probabilidade de serem exclusivos.

