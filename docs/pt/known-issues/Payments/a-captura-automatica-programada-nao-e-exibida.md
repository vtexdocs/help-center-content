---
title: "A captura automática programada não é exibida."
id: 1cuvGbgUvd1ATeHEG6Il98
status: PUBLISHED
createdAt: 2024-10-22T19:54:53.978Z
updatedAt: 2024-11-01T13:58:03.201Z
publishedAt: 2024-11-01T13:58:03.201Z
firstPublishedAt: 2024-10-22T19:54:55.533Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: a-captura-automatica-programada-nao-e-exibida
locale: pt
kiStatus: Backlog
internalReference: 1121837
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A opção "Programado: Agendar a captura automática" não aparece nas configurações de nenhum provedor que tenha essa configuração ativada.
De acordo com a documentação do "Recurso de captura automática personalizada", a opção "Scheduled: Schedules The Automatic Capture" deve ser a configuração:
https://developers.vtex.com/docs/guides/custom-auto-capture-feature

## Simulação



1. Acesse a página do provedor no painel de administração.
2. Verifique se há apenas 4 opções em Liquidação automática, e não 5. A opção que está faltando é "Agendada: Schedules The Automatic Capture"

## Workaround



> **autoSettle:** O valor 4 representa a opção de captura programada.

Aqui está a API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#put-/api/pvt/affiliations/-affiliationId-

    { "implementation": "Vtex.PaymentGateway.Connectors.TestConnector", "name": "Conector de teste - KI", "configuração": [{ "name": "autoSettle", "value": "4", "valueKey": null }, { "name": "autoSettleDelay", "value": "20", "valueKey": null } ... << outras configurações>>> ...], "isdelivered": true, "isConfigured": true}






