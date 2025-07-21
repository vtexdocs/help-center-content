---
title: "Erro com returnCode 355 no processo de cancelamento com ERedeRest e E-Rede V2"
id: 5lNLTmKp1xRfewx9OyhcNk
status: PUBLISHED
createdAt: 2023-01-26T18:29:35.310Z
updatedAt: 2024-11-26T19:47:30.712Z
publishedAt: 2024-11-26T19:47:30.712Z
firstPublishedAt: 2023-01-26T18:29:36.467Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: erro-com-returncode-355-no-processo-de-cancelamento-com-erederest-e-erede-v2
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

Isso pode não funcionar em transações com vários pagamentos, dependendo da consistência do status de suas liquidações.




