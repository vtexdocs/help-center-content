---
title: Two different workflows for the same order resulting in status: detail.state.null
id: 7GeeO1co0E04mY5MYt5R3f
status: PUBLISHED
createdAt: 2022-10-19T15:07:49.704Z
updatedAt: 2022-11-25T22:00:56.819Z
publishedAt: 2022-11-25T22:00:56.819Z
firstPublishedAt: 2022-10-19T15:07:51.777Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: two-different-workflows-for-the-same-order-resulting-in-status-detailstatenull
kiStatus: Fixed
internalReference: 680919
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Devido a uma falha na etapa de criação do fluxo de trabalho, algumas ordens cujo fluxo de criação foi concluído corretamente, podem apresentar o seguinte valor no campo de status: `detail.state.null `e na listagem de ordens não apresentam nenhum valor de status;

Este erro ocorre devido à criação duplicada do Workflow durante o processo de criação do pedido, o Workflow é o objeto que gerencia a mudança de status e, uma vez duplicado, acaba gerando esta inconsistência;



## Simulação


Não há maneira de simular o erro.




## Workaround


Para este caso, a alternativa aplicável é solicitar a análise das ordens afetadas e também o ajuste do status, através de um ticket;

