---
title: 'A transação ficou presa na aprovação com o conector NPS devido ao psp_ResponseCod na resposta da liquidação'
id: 1hRLO1HqsaSkvpu58eNYK2
status: PUBLISHED
createdAt: 2022-04-06T14:07:03.848Z
updatedAt: 2023-05-12T22:38:01.160Z
publishedAt: 2023-05-12T22:38:01.160Z
firstPublishedAt: 2022-04-06T14:07:04.301Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-on-approved-with-nps-connector-due-to-pspresponsecod-in-settlement-response
locale: pt
kiStatus: Backlog
internalReference: 557051
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Depois de enviar a solicitação de captura para o conector NPS, recebemos a resposta. No entanto, atualmente, não temos nenhuma ação em vigor para quando o campo `psp_ResponseCod` retorna um valor diferente de 2. Isso faz com que a operação de captura falhe, impedindo que o pagamento seja capturado com êxito.

## Simulação


Não é possível simular o comportamento, pois dependemos da resposta do provedor.



## Workaround


N/A

