---
title: 'Mensagem de erro incorreta para pedido de local API quando o pedido de carga útil é inválido'
id: 5RhxzfTcUsRjVhaAK33YbB
status: PUBLISHED
createdAt: 2022-12-02T02:08:57.517Z
updatedAt: 2022-12-02T02:08:58.296Z
publishedAt: 2022-12-02T02:08:58.296Z
firstPublishedAt: 2022-12-02T02:08:58.296Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: wrong-error-message-for-place-order-api-when-the-payload-request-is-invalid
locale: pt
kiStatus: Backlog
internalReference: 709180
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Pedidos inválidos para a API "place order" retornam uma mensagem de erro errada, informando "Invalid id for item" em vez de apontar quais informações estão erradas.


##

## Simulação


Um cenário conhecido é não enviar a propriedade "parcelas" dentro da seção "paymentData.payments[]".


##

## Workaround


A correção do pedido de carga útil é suficiente para evitar o problema.

