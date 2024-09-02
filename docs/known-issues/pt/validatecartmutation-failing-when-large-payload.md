---
title: 'Falha no ValidateCartMutation quando a carga útil é grande'
id: 5YmPMVGsi92owcmICg3CY3
status: PUBLISHED
createdAt: 2024-02-21T15:23:44.054Z
updatedAt: 2024-02-21T15:23:44.919Z
publishedAt: 2024-02-21T15:23:44.919Z
firstPublishedAt: 2024-02-21T15:23:44.919Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: falha-no-validatecartmutation-quando-a-carga-util-e-grande
locale: pt
kiStatus: Backlog
internalReference: 985867
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Ao adicionar vários produtos no minicart, dependendo das informações associadas a esses produtos, se recebermos um erro payloadTooLarge, o produto será adicionado ao carrinho, mas não passará para o orderForm corretamente

## Simulação




- Adicione produtos ao carrinho até receber um erro 413 Payload Too Large



## Workaround


N/A





