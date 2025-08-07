---
title: "As transações feitas com PayU não mudam do status de cancelamento"
id: 5pyv7cj5LHOuPAiCXv7MO0
status: PUBLISHED
createdAt: 2022-03-03T18:45:17.651Z
updatedAt: 2022-11-25T22:06:50.141Z
publishedAt: 2022-11-25T22:06:50.141Z
firstPublishedAt: 2022-03-03T18:45:17.994Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: as-transacoes-feitas-com-payu-nao-mudam-do-status-de-cancelamento
locale: pt
kiStatus: Backlog
internalReference: 338124
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a transação entra em um status de **cancelamento** não é possível reconhecer, portanto não muda para **cancelado***.
O conector PayU envia o seguinte erro: Código de resposta: PENDING_TRANSACTION_REVIEW - AcquirerMessage : PENDING_REVIEW



## Simulação


Este erro não acontece em todas as contas, mas é possível encontrar a filtragem da transação com status de cancelamento.




## Workaround


A solução é chamar manualmente a API: https://developers.vtex.com/vtex-developer-docs/reference/transaction-flow#cancelthetransaction

