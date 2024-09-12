---
title: 'Sku negado em Skus recebidos após limitação no catálogo do marketplace'
id: 4fleOaKNp6ALXdmZcAVCg0
status: PUBLISHED
createdAt: 2024-01-23T12:50:23.697Z
updatedAt: 2024-01-23T12:50:24.398Z
publishedAt: 2024-01-23T12:50:24.398Z
firstPublishedAt: 2024-01-23T12:50:24.398Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: sku-negado-em-skus-recebidos-apos-limitacao-no-catalogo-do-marketplace
locale: pt
kiStatus: Backlog
internalReference: 970208
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao aprovar um novo produto em Skus recebidos (automática ou manualmente), o módulo de sugestões se comunica com o catálogo do Marketplace para executar a ação.
Se, nesse momento, o módulo de catálogo retornar um erro de limitação, o sku acabará sendo rejeitado pelo matcher, apesar de ter todas as informações corretas.

## Simulação


Esse não é um cenário fácil (ou comum) de replicar, pois depende de outro sistema que não esteja funcionando como deveria e retorne limitação.



## Workaround


Aprovar o sku manualmente na área rejeitada de Skus recebidos.





