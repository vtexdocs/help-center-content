---
title: 'O Konduto AF não pode concluir uma solicitação quando o accountId está ausente.'
id: CGHZoCfr01ATsbtiLU9ym
status: PUBLISHED
createdAt: 2022-03-03T22:09:57.638Z
updatedAt: 2023-06-20T17:54:26.840Z
publishedAt: 2023-06-20T17:54:26.840Z
firstPublishedAt: 2022-03-03T22:09:58.094Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: konduto-af-cannot-complete-a-request-when-the-accountid-is-missing
locale: pt
kiStatus: Backlog
internalReference: 496298
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Há um problema para aprovar algumas transações relacionadas ao sistema antifraude da Konduto. Esse problema ocorre quando o sistema não consegue fazer a solicitação necessária devido à ausência do accountId, que é necessário para recuperar as informações de pagamento do banco de dados da conta. Você pode verificar isso examinando a rota "/payment", onde encontrará o nó "usedAccountId" com um valor de "False" nesses casos.

**{**"name": "usedAccountId", "value": "False "**}**

Além disso, esse problema é comumente observado quando um usuário remove seu próprio cartão da página MyAccount imediatamente após fazer um pedido.

## Simulação


Siga a etapa mencionada anteriormente, que envolve a exclusão de um cartão imediatamente após a realização de um pedido utilizando o Konduto Antifraud.



## Workaround


N/A





