---
title: 'Cálculo incorreto de reembolso na divisão de pagamentos - "O valor nos destinatários * é diferente do valor da operação *.'
id: 7Fxtwnntpmi0DrUD5a603W
status: PUBLISHED
createdAt: 2024-07-29T15:07:07.716Z
updatedAt: 2024-07-29T15:07:12.565Z
publishedAt: 2024-07-29T15:07:12.565Z
firstPublishedAt: 2024-07-29T15:07:12.565Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: calculo-incorreto-de-reembolso-na-divisao-de-pagamentos-o-valor-nos-destinatarios-e-diferente-do-valor-da-operacao
locale: pt
kiStatus: Backlog
internalReference: 1072285
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao chamar um reembolso (em transações com divisão de pagamento), o erro abaixo pode ocorrer com valores divergentes:

(Exemplo)

    Vtex.Practices.ExceptionHandling.ValidationException: O valor nos destinatários (45,00) é diferente do valor da operação (299,99). at Vtex.PaymentGateway.PaymentSplit.RecipientsBuilder.ValidateRecipientsValue(List`1 recipients, Decimal value)...


Observe que esse KI é diferente do abaixo (problema de cálculo relacionado ao arredondamento - a diferença de valores é pequena):

https://help.vtex.com/en/known-issues/error-in-refund-and-capture-operations-with-payout-split-value-in-recipients-is-different-than-operation-value--3Wo9ltN7Ju0ZqVLAQZcd7m

## Simulação


Isso parece acontecer quando o carrinho não tem produtos do marketplace, mas não conseguimos simular esse erro

## Workaround


NA, os comerciantes precisam solicitar o reembolso manual diretamente com o adquirente.





