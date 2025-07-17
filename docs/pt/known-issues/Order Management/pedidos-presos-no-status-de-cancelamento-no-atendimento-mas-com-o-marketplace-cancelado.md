---
title: "Pedidos presos no status de cancelamento no atendimento, mas com o Marketplace cancelado."
id: 1EKp8ML4uFCWO862mEELbo
status: PUBLISHED
createdAt: 2025-03-24T17:16:07.545Z
updatedAt: 2025-03-26T13:56:35.231Z
publishedAt: 2025-03-26T13:56:35.231Z
firstPublishedAt: 2025-03-24T17:16:08.182Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: pedidos-presos-no-status-de-cancelamento-no-atendimento-mas-com-o-marketplace-cancelado
locale: pt
kiStatus: Backlog
internalReference: 1198719
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em cenários em que os pedidos do Fulfillment não podem ser cancelados devido a alguma inconsistência, mas o pedido do Marketplace pode ir para o status de cancelado, não conseguiremos desbloquear, pois o vendedor tenta cancelar o pedido do Marketplace novamente e dá um erro, pois o pedido do Marketplace já está cancelado, quebrando a validação que o fulfillment faz.

## Simulação


No momento, não podemos simular esse cenário, pois ele ocorre devido a algum tipo de inconsistência ou atraso no endpoint ou a erros em outros módulos, como o catálogo.

## Workaround


Não temos uma solução alternativa para esse problema, ou seja, o pedido do vendedor estará no status "cancelar".





