---
title: "O checkout cancela a transação imediatamente após a criação"
id: 1fmpSt3LhdfGgdZd6dRItb
status: PUBLISHED
createdAt: 2025-01-03T15:20:54.917Z
updatedAt: 2025-01-03T15:20:55.766Z
publishedAt: 2025-01-03T15:20:55.766Z
firstPublishedAt: 2025-01-03T15:20:55.766Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-checkout-cancela-a-transacao-imediatamente-apos-a-criacao
locale: pt
kiStatus: Backlog
internalReference: 1157809
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Uma transação já aprovada (e, em alguns casos, capturada) recebe uma solicitação de cancelamento diretamente do checkout:

    Um aplicativo externo chamado para cancelar essa transação Id = com Value RequestId = . Prioridade: padrão. Autor: vtex-service::checkout::stable.


Essa solicitação de cancelamento ocorre devido a um tempo limite quando o checkout chama a rota GET payments do gateway e o serviço leva mais de 10 segundos para responder.

## Simulação


A simulação não é possível.



## Workaround


Não há solução alternativa disponível.





