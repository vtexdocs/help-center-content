---
title: 'É possível ir da ordem para a transação, mas o fluxo inverso não funciona'
id: 6du2dTCMNwdGDua01BEKAU
status: PUBLISHED
createdAt: 2022-03-15T20:54:12.442Z
updatedAt: 2022-11-25T22:08:38.708Z
publishedAt: 2022-11-25T22:08:38.708Z
firstPublishedAt: 2022-03-15T20:54:12.907Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: its-possible-to-go-from-order-to-transaction-but-the-inverse-flow-doesnt-work
locale: pt
kiStatus: Backlog
internalReference: 393483
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A "sequência", número que pode ser visto ao lado do número do pedido e também na transação, é responsável por ligar a transação ao pedido e ao inverso também.

 Normalmente são as mesmas, **mas somente quando possível***. Nos casos em que o mesmo grupo de ordens tem uma série de ordens e transações divergentes, estes números não vão corresponder e podemos encontrar casos como este: podemos ir para a transação a partir da ordem, mas não podemos fazer o fluxo inverso.



## Simulação


N/A



## Workaround



N/A

