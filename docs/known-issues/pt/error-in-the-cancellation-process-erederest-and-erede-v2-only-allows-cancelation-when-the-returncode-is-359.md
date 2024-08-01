---
title: 'Erro no processo de cancelamento. O ERedeRest e o E-Rede V2 só permitem o cancelamento quando o returnCode é 359'
id: 5lNLTmKp1xRfewx9OyhcNk
status: PUBLISHED
createdAt: 2023-01-26T18:29:35.310Z
updatedAt: 2023-12-01T16:41:01.605Z
publishedAt: 2023-12-01T16:41:01.605Z
firstPublishedAt: 2023-01-26T18:29:36.467Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: erro-no-processo-de-cancelamento-o-erederest-e-o-erede-v2-so-permitem-o-cancelamento-quando-o-returncode-e-359
locale: pt
kiStatus: Backlog
internalReference: 740084
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os conectores legados, ERedeRest e E-Rede V2, iniciam os cancelamentos enviando uma solicitação ao provedor e esperam um "returnCode": "359" indicando um cancelamento bem-sucedido. Qualquer outro código é interpretado pelo nosso gateway como um status indefinido, fazendo com que a transação fique presa em um estado de cancelamento. Mesmo que, em alguns casos, a solicitação de reembolso/cancelamento seja bem-sucedida. Isso levou a repetidas tentativas de cancelamento, mesmo quando o cancelamento já havia sido processado pelo provedor.

## Simulação


Não pode ser simulado, pois dependemos da resposta do provedor.



## Workaround


Se o pagamento no lado do provedor já tiver sido cancelado

    {"returnCode": "355", "returnMessage": "Transação já cancelada."}

A equipe de suporte ao produto tem a opção de utilizar uma API interna, "`force-cancel-status`", para atualizar o status do pagamento e da transação para "cancelado".




