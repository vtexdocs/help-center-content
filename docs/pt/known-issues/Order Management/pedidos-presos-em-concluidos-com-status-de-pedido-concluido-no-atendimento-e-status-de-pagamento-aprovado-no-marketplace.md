---
title: "Pedidos presos em concluídos com status de pedido concluído no atendimento e status de pagamento aprovado no Marketplace"
id: 2mKGSIgqSpnGX1tb2Fiaff
status: PUBLISHED
createdAt: 2025-04-30T20:21:50.865Z
updatedAt: 2025-07-30T16:58:47.603Z
publishedAt: 2025-07-30T16:58:47.603Z
firstPublishedAt: 2025-04-30T20:21:51.539Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: pedidos-presos-em-concluidos-com-status-de-pedido-concluido-no-atendimento-e-status-de-pagamento-aprovado-no-marketplace
locale: pt
kiStatus: Backlog
internalReference: 1218615
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos, um pedido pode ficar preso em seus status iniciais (`on-order-completed-ffm`, `on-order-completed` ou `processing`), mesmo depois de ter sido aparentemente criado com sucesso. Isso acontece quando uma das etapas internas no fluxo de criação do pedido falha silenciosamente, causando uma ** dessincronização do fluxo de trabalho** que impede que o pedido progrida normalmente.



## Simulação


No momento, esse cenário não pode ser simulado de forma confiável, pois depende de falhas intermitentes ou específicas em partes isoladas do processo de criação de pedidos.


## Workaround


Atualmente, não há como evitar esse tipo de cenário, mas a equipe técnica pode aplicar manualmente ações corretivas aos pedidos afetados, permitindo que eles prossigam normalmente pelo fluxo de trabalho.






