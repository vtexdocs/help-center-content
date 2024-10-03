---
title: 'Transações com promissória não são canceladas automaticamente após a expiração da data do pagamento'
id: 5isjT9txiBYSQzZK00xjg3
status: PUBLISHED
createdAt: 2021-09-30T15:45:44.398Z
updatedAt: 2022-12-22T15:05:19.385Z
publishedAt: 2022-12-22T15:05:19.385Z
firstPublishedAt: 2021-10-25T13:26:15.596Z
contentType: knownIssue
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
tag: Payments
slugEN: transactions-with-notes-payable-note-are-not-automatically-cancelled-after
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Se um cliente faz um pedido usando o método de pagamento promissória e não realiza o pagamento, a transação não é cancelada pelo Gateway após a data de vencimento. O OMS não consegue identificar o evento de cancelamento, e, consequentemente, o pedido também não é cancelado.

## Simulação

1. No Admin, acesse as configurações de afiliação de promissórias.
2. Preencha o campo **validade da promissória** com o valor `1` e clique em __Salvar__.
3. Faça um pedido utilizando a promissória como método de pagamento.
4. Observe que a transação não é cancelada automaticamente após a data de vencimento da promissória.

## Workaround

Atualmente, não há workaround para este cenário.

