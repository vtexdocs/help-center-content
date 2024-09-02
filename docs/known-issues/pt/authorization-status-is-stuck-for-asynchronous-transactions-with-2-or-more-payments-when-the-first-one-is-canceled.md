---
title: 'O status da autorização é mantido para transações assíncronas com 2 ou mais pagamentos quando o primeiro é cancelado.'
id: 7kEU8P6lkSQYZWzgaC16nY
status: PUBLISHED
createdAt: 2023-11-02T15:49:18.723Z
updatedAt: 2023-11-02T19:37:18.326Z
publishedAt: 2023-11-02T19:37:18.326Z
firstPublishedAt: 2023-11-02T15:49:19.524Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-status-da-autorizacao-e-mantido-para-transacoes-assincronas-com-2-ou-mais-pagamentos-quando-o-primeiro-e-cancelado
locale: pt
kiStatus: Backlog
internalReference: 929517
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando uma transação tem vários pagamentos e se torna assíncrona devido ao modo Sherlock ou Defense, e se a primeira tentativa de autorização de pagamento falhar, isso pode fazer com que os outros pagamentos fiquem presos em um status "Autorizado". Isso ocorre porque a transação inteira é cancelada, mas nosso funcionário não reconhece isso e prossegue com uma tentativa de autorização para o segundo pagamento. Consequentemente, o segundo pagamento não pode ser cancelado, pois a transação já foi cancelada e não permite uma solicitação de cancelamento.

## Simulação


Crie uma transação com dois pagamentos, na qual o Modo de defesa ou qualquer outro recurso que torne a transação assíncrona esteja ativado. Em seguida, use um conector de provedor personalizado para recusar a primeira tentativa de autorização de pagamento e aprovar a outra.



## Workaround


N/A





