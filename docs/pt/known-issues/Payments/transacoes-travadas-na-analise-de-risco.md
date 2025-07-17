---
title: "Transações travadas na análise de risco"
id: 5yUSXenLjlEdESoj5VVvoH
status: PUBLISHED
createdAt: 2022-03-11T18:56:45.293Z
updatedAt: 2025-03-06T13:20:48.406Z
publishedAt: 2025-03-06T13:20:48.406Z
firstPublishedAt: 2022-03-11T18:56:45.712Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacoes-travadas-na-analise-de-risco
locale: pt
kiStatus: Backlog
internalReference: 541149
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As novas tentativas automáticas estão travando em algumas transações que usam um provedor antifraude, com dois cenários possíveis:

1. Demora mais do que o esperado para solicitar uma nova tentativa de alterar seu status.
2. Não chamar a próxima tentativa, o que deixa a transação travada

Isso está bloqueando o inventário dos clientes.

## Simulação


Não é possível simular, esse comportamento ocorre de forma intermitente.



## Workaround


N/A

