---
title: 'ERedeRest só permite o cancelamento quando o código de status é 359'
id: 5lNLTmKp1xRfewx9OyhcNk
status: PUBLISHED
createdAt: 2023-01-26T18:29:35.310Z
updatedAt: 2023-01-26T18:29:36.467Z
publishedAt: 2023-01-26T18:29:36.467Z
firstPublishedAt: 2023-01-26T18:29:36.467Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: erederest-so-permite-o-cancelamento-quando-o-codigo-de-status-e-359
locale: pt
kiStatus: Backlog
internalReference: 740084
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Nosso conector legado ERedeRest executa um cancelamento através de uma solicitação ao fornecedor e espera um statusCode=359, o que significa que o cancelamento foi bem sucedido. Qualquer outro código significa para nosso gateway que o status é indefinido mesmo que, em alguns casos, isso significa que o pedido de reembolso/cancelamento também foi bem sucedido, o que nos levou a tentar novamente o cancelamento, porém ficando presos nesta etapa, uma vez que o cancelamento já foi concluído do lado do provedor.


##

## Simulação


Não pode ser simulado, pois dependemos da resposta do fornecedor.


##

## Workaround


Não disponível. O provedor deve responder com 359 na primeira solicitação ou em solicitações subseqüentes.




