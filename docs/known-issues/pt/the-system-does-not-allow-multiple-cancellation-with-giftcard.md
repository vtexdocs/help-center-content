---
title: O sistema não permite o cancelamento múltiplo com Giftcard
id: 2htvtVV2158piX4lTYhAvE
status: PUBLISHED
createdAt: 2022-03-27T12:54:40.811Z
updatedAt: 2022-11-25T22:05:17.362Z
publishedAt: 2022-11-25T22:05:17.362Z
firstPublishedAt: 2022-03-27T12:54:41.420Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-sistema-nao-permite-o-cancelamento-multiplo-com-giftcard
kiStatus: Backlog
internalReference: 309117
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O sistema não está enviando o cancelamento parcial de uma transação Giftcard.

Também encontramos um cenário onde a mesma coisa acontece, porém o cancelamento funciona. Isto deixa o valor do reembolso maior que o valor da transação porque o valor reembolsado é o primeiro reembolso parcial + o segundo reembolso com o valor total.



## Simulação


Encontre uma transação onde um reembolso/cancelamento parcial foi solicitado utilizando o Giftcard.



## Workaround


Não há solução, entretanto, o usuário pode adicionar o crédito reembolsável através da interface administrativa.

