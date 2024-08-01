---
title: 'Erro acionado por TOKEN substituído no conector do PayPal legado para status de pagamento pendente'
id: 5GrnhD8fwte7qu50Az8r3Y
status: PUBLISHED
createdAt: 2023-06-13T22:35:16.397Z
updatedAt: 2024-07-01T18:47:54.680Z
publishedAt: 2024-07-01T18:47:54.680Z
firstPublishedAt: 2023-06-13T22:35:16.955Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: erro-acionado-por-token-substituido-no-conector-do-paypal-legado-para-status-de-pagamento-pendente
locale: pt
kiStatus: No Fix
internalReference: 308214
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em nosso conector legado do PayPal, enfrentamos um problema relacionado à substituição do campo `TOKEN` por `PAYMENTINFO_0_TRANSACTIONID`. O problema surge quando o provedor envia um status de pagamento como pendente. Consequentemente, o TOKEN é substituído por nossa implementação do conector, levando a um erro acionado pelo PayPal durante as solicitações subsequentes. Como resultado, a transação fica presa com uma mensagem de "token inválido".

## Simulação


Esse problema só pode ser reproduzido em casos assíncronos.



## Workaround


N/A





