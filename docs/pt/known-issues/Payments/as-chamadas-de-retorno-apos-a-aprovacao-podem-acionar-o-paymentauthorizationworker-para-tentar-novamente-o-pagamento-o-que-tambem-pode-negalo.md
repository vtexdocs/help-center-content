---
title: 'As chamadas de retorno após a aprovação podem acionar o PaymentAuthorizationWorker para tentar novamente o pagamento, o que também pode negá-lo.'
id: 1dbTbMRMvJQaxzXjWwQplD
status: PUBLISHED
createdAt: 2023-09-15T18:22:54.533Z
updatedAt: 2023-09-15T18:22:55.496Z
publishedAt: 2023-09-15T18:22:55.496Z
firstPublishedAt: 2023-09-15T18:22:55.496Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callbacks-after-approval-may-trigger-paymentauthorizationworker-to-retry-payment-which-may-also-deny-it
locale: pt
kiStatus: Backlog
internalReference: 740499
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o provedor envia um retorno de chamada logo após a autorização, ele pode acionar uma nova tentativa de autorização. Portanto, em alguns casos, quando a transação tiver mais de um pagamento e um deles for um cartão-presente, uma nova tentativa de autorização poderá cancelar a transação quando ela não tiver fundos.

## Simulação


Não pode ser simulado, pois depende do retorno de chamada do provedor.



## Workaround


N/A




