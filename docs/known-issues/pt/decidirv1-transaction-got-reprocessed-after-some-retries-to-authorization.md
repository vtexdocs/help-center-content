---
title: 'A transação DecidirV1 foi "reprocessada" após algumas tentativas de autorização'
id: 2fxfg1IlnFUxAjo9E47HPq
status: PUBLISHED
createdAt: 2022-03-03T21:19:22.471Z
updatedAt: 2022-11-25T22:04:50.821Z
publishedAt: 2022-11-25T22:04:50.821Z
firstPublishedAt: 2022-03-03T21:19:23.075Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-transacao-decidirv1-foi-reprocessada-apos-algumas-tentativas-de-autorizacao
locale: pt
kiStatus: Backlog
internalReference: 384009
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Isto acontece quando uma transação recebe o status 480 que significa "REVIEW", e começa a tentar novamente até receber uma carga útil nula. Então, depois disso, "reprocessamos" a transação que causa uma falha e um cancelamento.



## Simulação


Não há como simular isto.



## Workaround


Não há nenhuma solução disponível no momento.

