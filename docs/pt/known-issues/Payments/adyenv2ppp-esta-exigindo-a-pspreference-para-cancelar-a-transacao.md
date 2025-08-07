---
title: "AdyenV2(PPP) está exigindo a pspReference para cancelar a transação."
id: 3rKIFtngLmBTHSIr2AYql1
status: PUBLISHED
createdAt: 2022-03-03T22:08:18.628Z
updatedAt: 2023-05-24T20:01:22.862Z
publishedAt: 2023-05-24T20:01:22.862Z
firstPublishedAt: 2022-03-03T22:08:19.111Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyenv2ppp-esta-exigindo-a-pspreference-para-cancelar-a-transacao
locale: pt
kiStatus: Backlog
internalReference: 486752
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a transação é reconhecida pelo fornecedor e o status nunca muda de indefinido, a AdyenV2 exige uma pspReferência para cancelar a transação. Este não é um comportamento esperado porque este campo não existe na PPP, assim o cliente fica preso no modal PIX na UI de checkout.



## Simulação


Iniciar uma nova transação com a PIX usando AdyenV2 e não finalizar o pagamento no aplicativo. Então, a transação ficará presa a este status.



## Workaround


Não há solução.

