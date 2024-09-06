---
title: 'Campo Ean como string sendo ignorado quando aprovado em Skus recebidos'
id: 3ubVdtlt8ElWzQGFM9OTTq
status: PUBLISHED
createdAt: 2023-09-11T16:37:06.258Z
updatedAt: 2023-11-28T16:54:04.790Z
publishedAt: 2023-11-28T16:54:04.790Z
firstPublishedAt: 2023-09-11T16:37:07.098Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: campo-ean-como-string-sendo-ignorado-quando-aprovado-em-skus-recebidos
locale: pt
kiStatus: Backlog
internalReference: 897301
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O vendedor envia o sku com todos os campos declarados neste artigo (https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-) para o marketplace aprovar no módulo Received Skus.

O campo ean é declarado como do tipo string no artigo acima. No entanto, apesar de aparecer na UI Received Skus, está sendo ignorado pelo sistema de backend do matcher e também pelo módulo de catálogo, o que significa que o sku está sendo criado com esse campo vazio.

## Simulação


1. Envie um sku para o marketplace com o campo ean definido como string: `"ean": "123456"`
2. Aprovar o sku como um novo produto no módulo Received Skus do marketplace;
3. Verifique se no catálogo esse campo está definido como vazio.

## Workaround


**Até que esse problema seja corrigido e o sistema esteja funcionando de acordo com nossos documentos**, o formato que está funcionando atualmente está enviando o campo ean como um array:
`"ean": ["123456"]`

Outra maneira é definir esse campo manualmente no lado do catálogo depois que o sku for aprovado.


