---
title: 'Divergência de Estoque - A logística não tem o mesmo tratamento à esquerda que outra SKU'
id: 3FKaDXw5pWVyUfwgKo6pfV
status: PUBLISHED
createdAt: 2022-05-18T15:19:00.037Z
updatedAt: 2022-11-25T21:58:49.907Z
publishedAt: 2022-11-25T21:58:49.907Z
firstPublishedAt: 2022-05-18T15:19:00.350Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: inventory-divergence-logistics-handle-zero-on-left-as-another-sku
locale: pt
kiStatus: Fixed
internalReference: 427610
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Os SKU IDs com e sem chumbo zero estão causando confusão no inventário, e inconsistência administrativa. A SKU 0XXX tem quantidades diferentes na lista de itens do que quando o filtro SKU ID é aplicado com o mesmo valor (ou XXX).

O módulo de logística trata o zero esquerdo como mais um SKU. Portanto, nesse caso, o SKU 0XXX não é o XXX. E como outro SKU tem seu próprio valor em estoque.




## Simulação


Não há como simular.
Mas você pode ver o sku com zero à esquerda na lista e diferentes valores de estoque quando filtrar esse sku no inventário.



## Workaround


Não há solução para esta divergência.

