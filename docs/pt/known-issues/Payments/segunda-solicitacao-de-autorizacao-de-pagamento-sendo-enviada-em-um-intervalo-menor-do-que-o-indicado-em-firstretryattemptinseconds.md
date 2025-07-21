---
title: "Segunda solicitação de autorização de pagamento sendo enviada em um intervalo menor do que o indicado em FirstRetryAttemptInSeconds."
id: 4Yzppxqj3pW9iC4vvvZDbv
status: PUBLISHED
createdAt: 2025-01-20T14:00:19.397Z
updatedAt: 2025-03-19T14:25:47.797Z
publishedAt: 2025-03-19T14:25:47.797Z
firstPublishedAt: 2025-01-20T14:00:20.190Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: segunda-solicitacao-de-autorizacao-de-pagamento-sendo-enviada-em-um-intervalo-menor-do-que-o-indicado-em-firstretryattemptinseconds
locale: pt
kiStatus: Backlog
internalReference: 1165831
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O pagamento é cancelado devido ao fato de a segunda solicitação de autorização ter sido enviada pelo gateway antes do que está estabelecido nas Regras de autorização. Normalmente, o parceiro de pagamento não pode processar a segunda solicitação devido ao curto intervalo entre as duas solicitações, o que leva a uma resposta "negada" e ao cancelamento da transação.

## Simulação



## Workaround



