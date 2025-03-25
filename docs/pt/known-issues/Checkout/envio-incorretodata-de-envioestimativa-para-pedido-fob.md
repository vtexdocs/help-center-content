---
title: 'Envio incorretoData de EnvioEstimativa para pedido FOB'
id: 3WLcrdw0tEdOvlMCYx9uyd
status: PUBLISHED
createdAt: 2023-01-05T20:26:07.074Z
updatedAt: 2024-02-16T20:23:32.848Z
publishedAt: 2024-02-16T20:23:32.848Z
firstPublishedAt: 2023-01-05T20:26:07.500Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-shippingestimatedate-for-order-fob
locale: pt
kiStatus: No Fix
internalReference: 269104
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



## Simulação



- Criar um pedido via API enviando o parâmetro `"isFOB": true` no "shippingData".
- Faça um pedido e verifique se o parâmetro "ShippingEstimateDate" não está considerando o "shippingEstimate" enviado pelo mercado


##

## Workaround


N/A




