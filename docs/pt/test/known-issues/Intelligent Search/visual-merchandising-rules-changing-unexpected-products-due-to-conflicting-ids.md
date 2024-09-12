---
title: 'Regras de visual merchandising que alteram produtos inesperados devido a IDs conflitantes'
id: 2pmPJ34MdEbr2xiGbPCuzv
status: PUBLISHED
createdAt: 2024-09-04T21:10:05.272Z
updatedAt: 2024-09-04T21:10:06.016Z
publishedAt: 2024-09-04T21:10:06.016Z
firstPublishedAt: 2024-09-04T21:10:06.016Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: regras-de-visual-merchandising-que-alteram-produtos-inesperados-devido-a-ids-conflitantes
locale: pt
kiStatus: Backlog
internalReference: 1092750
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O editor visual de regras de merchandising usa o ID do produto para registrar as regras, mas elas são processadas em cima de um campo mais genérico, que inclui mais do que apenas o _ProductID_, mas também o _ProductRefID_, _SKUID_, _SKURefID_ e _EAN_, conforme nossa documentação.

Se o valor de um ID de produto também fizer parte de um campo de ID diferente em outro produto, a regra será aplicada a ambos.


O mesmo problema também ocorre com as regras de merchandising criadas com o editor manual durante a criação de regras pelo atributo ID se o valor existir em mais de um produto, mas, nesse caso, é possível contornar o problema usando valores de ID diferentes, como _SKURefID_ ou _EAN_, que têm maior probabilidade de serem exclusivos.

## Simulação


Considere o produto A com "productId=444" e o produto B com "productId=555", em que o SKU do produto A é "skuId=555".

Uma regra para fixar ou ocultar o produto B (productId=555) também será aplicada ao produto A (devido a skuId=555)

## Workaround


N/A





