---
title: "O sistema não permite o cancelamento múltiplo com Giftcard"
id: 2htvtVV2158piX4lTYhAvE
status: PUBLISHED
createdAt: 2022-03-27T12:54:40.811Z
updatedAt: 2024-06-25T13:51:28.086Z
publishedAt: 2024-06-25T13:51:28.086Z
firstPublishedAt: 2022-03-27T12:54:41.420Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-sistema-nao-permite-o-cancelamento-multiplo-com-giftcard
locale: pt
kiStatus: Backlog
internalReference: 309117
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O sistema não está enviando o cancelamento parcial de uma transação de Giftcard.
Também encontramos um cenário em que a mesma coisa acontece, mas o cancelamento funciona. Isso deixa o valor do reembolso maior do que o valor da transação porque o valor reembolsado é o primeiro reembolso parcial + o segundo reembolso com o valor total.

## Simulação


Encontre uma transação em que um reembolso/cancelamento parcial foi solicitado usando o Giftcard.



## Workaround


Não há solução alternativa, no entanto, o usuário pode adicionar o crédito reembolsável por meio da UI do administrador.





