---
title: "Pagamento concluído e cancelamento da transação após a rejeição da análise de risco"
id: 2ysbvix1xPcsuTKiBHZvZz
status: PUBLISHED
createdAt: 2025-02-17T18:23:46.040Z
updatedAt: 2025-02-17T18:23:46.534Z
publishedAt: 2025-02-17T18:23:46.534Z
firstPublishedAt: 2025-02-17T18:23:46.534Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pagamento-concluido-e-cancelamento-da-transacao-apos-a-rejeicao-da-analise-de-risco
locale: pt
kiStatus: Backlog
internalReference: 1163213
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O pagamento foi concluído e a transação permanece presa no status de cancelamento depois que a análise de risco é rejeitada.


## Simulação


Quando o processo de liquidação automática ocorre antes da conclusão da análise de risco, o status do pagamento é atualizado para "concluído", enquanto a transação permanece no estado "analisando risco".

Se a análise de risco resultar em um resultado de "risco rejeitado", o processo de cancelamento será acionado. No entanto, uma vez que a transação tenha sido liquidada, ela não poderá ser cancelada - somente reembolsada.

Como resultado, as transações ficam presas no status "cancelando", mesmo após um reembolso bem-sucedido, enquanto o status do pagamento permanece "concluído"

## Workaround



Cancele o pedido manualmente no OMS para evitar problemas com o gerenciamento de estoque.





