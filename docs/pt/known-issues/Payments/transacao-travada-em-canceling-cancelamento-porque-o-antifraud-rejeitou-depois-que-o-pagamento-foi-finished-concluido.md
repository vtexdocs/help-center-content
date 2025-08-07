---
title: 'Transação travada em "Canceling" (Cancelamento) porque o AntiFraud rejeitou depois que o pagamento foi "Finished" (Concluído)'
id: 2dFaHTjrQZse6wNrRzw4Pt
status: PUBLISHED
createdAt: 2025-02-28T12:27:26.637Z
updatedAt: 2025-02-28T12:40:20.759Z
publishedAt: 2025-02-28T12:40:20.759Z
firstPublishedAt: 2025-02-28T12:27:27.436Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacao-travada-em-canceling-cancelamento-porque-o-antifraud-rejeitou-depois-que-o-pagamento-foi-finished-concluido
locale: pt
kiStatus: Backlog
internalReference: 1187516
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O status do pedido fica preso no cancelamento, e a transação também fica presa no status de cancelamento.

Sempre que um pagamento estiver no status "Finished" (Concluído), a transação também deverá estar no status "Finished" (Concluído). No entanto, se a antifraude rejeitar o risco antes de a transação mudar para "Concluída", a transação iniciará o fluxo de "Cancelamento".

## Simulação


Nos registros de transação, é possível ver que o pagamento foi liquidado e concluído. Depois que o antifraude rejeita o risco.



## Workaround


Cancele o pedido por meio da página Detalhes do pedido. A transação não pode ser atualizada e permanecerá no status "Canceling" (Cancelando).




