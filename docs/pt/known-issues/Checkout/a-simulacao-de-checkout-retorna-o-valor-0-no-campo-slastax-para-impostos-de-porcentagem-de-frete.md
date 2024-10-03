---
title: "A simulação de checkout retorna o valor 0 no campo 'slas.tax' para impostos de porcentagem de frete"
id: 54Mtsj8EKuo0SaQCoWyYzj
status: PUBLISHED
createdAt: 2024-04-05T18:55:32.183Z
updatedAt: 2024-04-05T18:55:33.336Z
publishedAt: 2024-04-05T18:55:33.336Z
firstPublishedAt: 2024-04-05T18:55:33.336Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-simulation-returns-value-0-in-slastax-field-for-shipping-percentage-taxes
locale: pt
kiStatus: Backlog
internalReference: 1012724
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os impostos de porcentagem de envio não são retornados no campo `logisticsInfo.slas.tax` ao realizar uma simulação de checkout, embora as informações de impostos individuais estejam disponíveis no campo `items.priceTags`.

## Simulação



- Configurar um imposto de porcentagem de envio
- Fazer uma solicitação de simulação de carrinho com o SLA selecionado
- O campo `tax` retorna o valor `0

## Workaround


N/A



