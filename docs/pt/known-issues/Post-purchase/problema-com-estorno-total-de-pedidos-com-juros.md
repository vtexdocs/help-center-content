---
title: "Problema com estorno total de pedidos com juros"
id: 5q0okPuWiGe8O4o9FEQCnI
status: PUBLISHED
createdAt: 2021-09-17T14:06:59.342Z
updatedAt: 2022-12-22T14:52:27.138Z
publishedAt: 2022-12-22T14:52:27.138Z
firstPublishedAt: 2021-09-17T14:13:21.966Z
contentType: knownIssue
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
tag: Order Management
slugEN: problema-com-estorno-total-de-pedidos-com-juros
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A plataforma impede o estorno de valores maiores que o valor total do pedido. Isso se torna um problema para o estorno de pedidos cuja forma de pagamento implica na aplicação de juros.

Além do **valor total**, os pedidos têm um **valor faturado**, que, por razões legais, não deve incluir juros aplicados em decorrência de formas de pagamento.

Com isso, a plataforma retorna um erro com `status 400` quando se tenta emitir fatura de estorno com valor maior que o valor faturado anteriormente.

## Simulação

1. Na sua loja, crie um pedido com aplicação de juros no pagamento;
2. Tente realizar o estorno no valor total pago via API com a [requisição de envio de fatura](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification);
3. Note que a API retorna erro com `status 400`, alertando que não é possível emitir fatura do tipo `ENTRADA` com o valor maior do que o do pedido.

## Workaround

É possível emitir primeiramente uma fatura de estorno no valor faturado (sem juros) e depois uma outra no valor dos juros.

