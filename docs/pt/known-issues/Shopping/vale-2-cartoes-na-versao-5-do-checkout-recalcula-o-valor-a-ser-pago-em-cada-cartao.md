---
title: "Vale + 2 cartões na versão 5 do checkout recalcula o valor a ser pago em cada cartão"
id: 2SHo3fuu0oqyiiyo4ME2Ca
status: PUBLISHED
createdAt: 2018-10-03T16:17:29.385Z
updatedAt: 2022-12-22T20:48:35.026Z
publishedAt: 2022-12-22T20:48:35.026Z
firstPublishedAt: 2018-10-03T16:21:32.472Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: vale-2-cartoes-na-versao-5-do-checkout-recalcula-o-valor-a-ser-pago-em-cada-cartao
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O cenário é bem específico e ocorre apenas na versão 5 do checkout (versão sem as funcionalidades de omnichannel). O comportamento acontece nos carrinhos em que o cliente escolhe fazer o pagamento com vale e 2 cartões. O valor a ser pago por um desses cartões é alterado logo depois de ser digitado pelo cliente.

## Simulação


1. Crie um carrinho e navegue até a etapa de pagamento.
2. Preencha/selecione o vale.
2. Selecione pagamento com 2 cartões.
3. Insira o valor a ser pago no primeiro cartão.
4. Veja que o valor foi alterado para um valor menor.


## Workaround

Atualmente, não temos workaround para esse problema.

