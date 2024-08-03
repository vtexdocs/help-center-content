---
title: 'Falha no cancelamento (PPP) quando o cancelamentoId=nulo'
id: 4yNCRQ1xhA8lEp5AGRs5eu
status: PUBLISHED
createdAt: 2022-06-21T21:37:04.567Z
updatedAt: 2023-08-11T19:16:35.985Z
publishedAt: 2023-08-11T19:16:35.985Z
firstPublishedAt: 2022-06-21T21:37:05.374Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: falha-no-cancelamento-ppp-quando-o-cancelamentoidnulo
locale: pt
kiStatus: No Fix
internalReference: 333897
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>





Quando o provedor responde com cancelamentoId=nulo deve ser o gatilho para chamar um cancelamento manual, no entanto, isso não está acontecendo. O protocolo espera que pelo menos 3 solicitações tenham falhado antes de iniciar o cancelamento manual e mudar o status do pagamento e da transação para "cancelado".

A questão ocorre quando a forma de pagamento utiliza um aplicativo de pagamento e, devido a este comportamento, explicado anteriormente, o aplicativo na caixa nunca recebe uma notificação de cancelamento e faz loops indefinidamente.



## Simulação





Não é possível simular.



## Workaround





É possível implementar um processo manual de cancelamento proativo das transações via API ou clicando no botão de cancelamento na página de pedido.

