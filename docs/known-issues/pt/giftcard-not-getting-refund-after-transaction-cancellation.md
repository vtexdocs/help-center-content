---
title: 'Giftcard não recebendo reembolso após o cancelamento da transação'
id: lWW0jvEty50Pphr3JFYt7
status: PUBLISHED
createdAt: 2022-06-28T17:06:16.141Z
updatedAt: 2022-11-25T22:05:08.090Z
publishedAt: 2022-11-25T22:05:08.090Z
firstPublishedAt: 2022-06-29T12:49:40.594Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: giftcard-nao-recebendo-reembolso-apos-o-cancelamento-da-transacao
locale: pt
kiStatus: Backlog
internalReference: 491195
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o pagamento é um cartão presente e ocorre um erro durante o processo de colocação do pedido e o pedido permanece incompleto, então o GC não é reembolsado após a transação ser cancelada.

Esta questão foi discutida pela primeira vez neste tópico e basicamente, existem 2 operações gerenciadas pelo sistema GC onde esta questão pode ocorrer:

1. Quando o valor do cartão presente é debitado;
2. Em seguida, ele guarda as informações da transação no SimpleDB.



## Simulação





## Workaround


Reembolso manual através do Gift Card UI.

