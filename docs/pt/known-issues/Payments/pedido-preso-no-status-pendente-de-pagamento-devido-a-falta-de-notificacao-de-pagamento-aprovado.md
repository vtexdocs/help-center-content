---
title: "Pedido preso no status Pendente de pagamento devido à falta de notificação de pagamento aprovado"
id: 1yM3alrrYhrpdZhBPLslZC
status: PUBLISHED
createdAt: 2024-05-24T15:04:47.795Z
updatedAt: 2025-03-06T12:54:01.253Z
publishedAt: 2025-03-06T12:54:01.253Z
firstPublishedAt: 2024-05-24T15:04:48.820Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pedido-preso-no-status-pendente-de-pagamento-devido-a-falta-de-notificacao-de-pagamento-aprovado
locale: pt
kiStatus: Backlog
internalReference: 1031035
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



No status "Payment Pending" (Pagamento pendente), espera-se que uma notificação de pagamento seja enviada ao módulo Orders (Pedidos). Durante esse período, podem ocorrer alguns problemas com o processamento de eventos.
A fila de mensagens fornece um protocolo de comunicação assíncrono, no qual os eventos são colocados em uma fila para serem consumidos em um momento predeterminado no futuro.
Este KI refere-se explicitamente aos cenários com conectores PPP e GiftcardHub, e não tem a intenção de esgotar todas as possibilidades de problemas de processamento de eventos que possam ocorrer.

## Simulação



Não há como simular esse comportamento.



## Workaround



Entre em contato com nossa equipe de suporte para reprocessar manualmente o evento.





