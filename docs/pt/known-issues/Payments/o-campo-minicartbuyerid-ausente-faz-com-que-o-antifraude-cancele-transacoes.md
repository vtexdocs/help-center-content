---
title: 'O campo minicart.buyer.id ausente faz com que o antifraude cancele transações'
id: 6dvOH9b96qGAHXIzW3wBe1
status: PUBLISHED
createdAt: 2023-05-23T17:10:17.329Z
updatedAt: 2024-02-16T20:26:42.045Z
publishedAt: 2024-02-16T20:26:42.045Z
firstPublishedAt: 2023-05-23T17:10:17.964Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: missing-minicartbuyerid-field-causes-antifraud-to-cancel-transactions
locale: pt
kiStatus: No Fix
internalReference: 514335
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Houve casos em que determinadas transações estavam sendo recusadas durante a análise antifraude devido ao valor nulo no campo `minicart.buyer.id`. Portanto, espera-se que o `minicart.buyer.id` seja enviado do checkout para o gateway por meio de `sendAdditionalData`. No entanto, de acordo com a arquitetura atual do checkout, não há nenhum requisito específico para fornecer esse campo em `sendAdditionalData`, e sua definição pode ou não estar disponível em um estágio posterior.

## Simulação


Não é possível reproduzir esse comportamento, pois ele é intermitente.



## Workaround


É possível enviar os dados adicionais posteriormente por meio de nossa API:
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data





