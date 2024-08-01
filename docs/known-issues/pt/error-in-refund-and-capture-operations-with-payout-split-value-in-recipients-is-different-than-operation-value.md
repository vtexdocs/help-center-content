---
title: 'Erro nas operações de reembolso e captura com divisão de pagamento - "O valor nos destinatários * é diferente do valor da operação *".'
id: 3Wo9ltN7Ju0ZqVLAQZcd7m
status: PUBLISHED
createdAt: 2023-08-23T13:57:20.424Z
updatedAt: 2024-02-02T20:52:54.054Z
publishedAt: 2024-02-02T20:52:54.054Z
firstPublishedAt: 2023-08-23T13:57:21.389Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: erro-nas-operacoes-de-reembolso-e-captura-com-divisao-de-pagamento-o-valor-nos-destinatarios-e-diferente-do-valor-da-operacao
locale: pt
kiStatus: Backlog
internalReference: 698005
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Devido a problemas de arredondamento ao recalcular os destinatários de uma transação com Payout Split, seja na captura ou no reembolso, recebemos a seguinte exceção do gateway, pois a soma do valor do destinatário é diferente do valor da transação.


    Vtex.Practices.ExceptionHandling.ValidationException: O valor nos destinatários (xx.989999999999999999999999988) é diferente do valor da operação (xx.99). at Vtex.PaymentGateway.PaymentSplit.RecipientsBuilder.ValidateRecipientsValue(List`1 recipients, Decimal value)...


## Simulação


Não é possível simular



## Workaround


Não há solução alternativa




