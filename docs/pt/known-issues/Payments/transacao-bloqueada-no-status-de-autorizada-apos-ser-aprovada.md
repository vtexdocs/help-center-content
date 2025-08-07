---
title: "Transação bloqueada no status de autorizada após ser aprovada"
id: 60oG2yj6wb1MomGh7Bbh9C
status: PUBLISHED
createdAt: 2024-05-22T17:58:05.800Z
updatedAt: 2025-04-01T21:52:53.517Z
publishedAt: 2025-04-01T21:52:53.517Z
firstPublishedAt: 2024-05-22T17:58:06.594Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacao-bloqueada-no-status-de-autorizada-apos-ser-aprovada
locale: pt
kiStatus: Backlog
internalReference: 1037765
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um fluxo de transação padrão, uma vez que todos os pagamentos tenham sido autorizados com sucesso, espera-se que a transação mude seu status para **Aprovado**.
Aqui está a documentação oficial que explica os diferentes estados da transação com mais detalhes: Fluxo de transações em pagamentos.

No entanto, nas transações afetadas por esse problema, observamos um comportamento inesperado: após todos os pagamentos terem sido aprovados (autorizados) e a transação já ter passado para o status **Approved**, um novo evento de status de transição, **TransactionWorkFlowChangeStatus**, é acionado. Esse evento atualiza incorretamente o status de volta para **Authorized**.
Mesmo que outro evento **TransactionWorkFlowChangeStatus - Approved** ocorra após essa transição incorreta, a atualização final do status não é registrada corretamente na transação.
Como resultado, a transação permanece presa no estado **Authorized**, impedindo que o pedido ou a transação avance conforme o esperado.

Esse problema pode ser facilmente evidenciado pela duplicação inesperada dos registros **TransactionWorkFlowChangeStatus**, em que os eventos **Approved** e **Authorized** aparecem consecutivamente, levando a um estado inconsistente da transação.

## Simulação



## Workaround



