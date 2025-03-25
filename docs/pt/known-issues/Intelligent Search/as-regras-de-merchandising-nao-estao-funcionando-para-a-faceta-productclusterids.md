---
title: "As regras de merchandising não estão funcionando para a faceta 'productClusterIds'"
id: 6sLODMgjuoyJD52uc0DBW1
status: PUBLISHED
createdAt: 2024-07-09T00:02:40.930Z
updatedAt: 2024-07-09T00:02:41.798Z
publishedAt: 2024-07-09T00:02:41.798Z
firstPublishedAt: 2024-07-09T00:02:41.798Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: merchandising-rules-not-working-for-the-facet-productclusterids
locale: pt
kiStatus: Backlog
internalReference: 1062457
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As regras de merchandising não são aplicadas à faceta "productClusterIds". Isso acontece porque essa faceta tem o comportamento especial de classificar os produtos pela ordem da coleção, em vez de regras de relevância e de merchandising.

Essa faceta não deve ser considerada válida para uma regra de comercialização.

## Simulação



- criar uma coleção com alguns produtos em uma ordem específica
- criar uma regra de comercialização explicitamente filtrada por "productClusterIds" ou "productClusterSearchableIds"
- definir essa regra para classificar os produtos em uma ordem diferente
- verificar na loja se os produtos manterão a classificação da coleçã

## Workaround


A maneira esperada de gerenciar e classificar produtos em uma coleção é fazê-lo diretamente na coleção, adicionando/retirando produtos ou alterando sua posição.

Também é possível aplicar a regra de comercialização à faceta "productClusterNames". Essa faceta segue as regras de relevância em vez da ordem da coleção e funciona com regras de merchandising.




