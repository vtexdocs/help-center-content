---
title: 'Transações com o conector TNSPay sendo negadas por erro: Cartão não PROIBIDO em 3DS'
id: 2jZefzH8LYqPJxkmylmyA0
status: PUBLISHED
createdAt: 2022-03-14T13:21:56.187Z
updatedAt: 2024-02-16T20:24:33.195Z
publishedAt: 2024-02-16T20:24:33.195Z
firstPublishedAt: 2022-03-14T13:21:56.952Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: pt
kiStatus: No Fix
internalReference: 541687
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O padrão é que eles são cancelados e enviamos dois Pedidos de Autorização 3D, e você ainda não recebeu a resposta do Pedido de Autorização.
A segunda resposta só aparece depois de já ter entrado no fluxo de cancelamento.

O problema se deve a uma condição racial, e isto faz com que os campos de pagamento sejam inconsistentes.
No início do processo, o primeiro registro é

Autorizar a utilização do 3DS dadas as configurações 3DS: sempre Valor Mínimo

O método de autorização foi chamado 2 vezes em 2 segundos.


##

## Simulação


Não é possível simular


##

## Workaround


Não há solução

