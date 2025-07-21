---
title: "Pedido preso em pagamento pendente devido a um status de transação inesperado"
id: NiojkaM32e07VzydweKqx
status: PUBLISHED
createdAt: 2025-03-17T20:50:16.017Z
updatedAt: 2025-03-17T20:50:16.558Z
publishedAt: 2025-03-17T20:50:16.558Z
firstPublishedAt: 2025-03-17T20:50:16.558Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pedido-preso-em-pagamento-pendente-devido-a-um-status-de-transacao-inesperado
locale: pt
kiStatus: Backlog
internalReference: 1195265
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes, quando o OMS verifica o gateway quanto ao status da transação antes de alterar o pedido para Pagamento aprovado, o status é anterior ao esperado, que deve ser **Aprovado**, fazendo com que o pedido permaneça preso no status Pagamento pendente.

## Simulação


O erro é intermitente e não pode ser simulado.



## Workaround


Abra um tíquete com a VTEX solicitando que a notificação de pagamento aprovado seja reenviada ao OMS.





