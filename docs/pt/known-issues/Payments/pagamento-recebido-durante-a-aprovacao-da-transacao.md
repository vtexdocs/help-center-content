---
title: "Pagamento recebido durante a aprovação da transação"
id: 30A0Dtg7lncuMolcufknRJ
status: PUBLISHED
createdAt: 2025-02-17T18:23:25.656Z
updatedAt: 2025-02-17T18:23:26.189Z
publishedAt: 2025-02-17T18:23:26.189Z
firstPublishedAt: 2025-02-17T18:23:26.189Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pagamento-recebido-durante-a-aprovacao-da-transacao
locale: pt
kiStatus: Backlog
internalReference: 1174379
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos, mesmo que o conector (**pagelofacil**) retorne a resposta correta, os pagamentos permanecem presos no status `recebido` depois que a transação é `aprovada`.

Para verificar o status do pagamento, você pode usar a API GET Payment details, que deve retornar `received` nesse caso.

Além disso, é possível verificar alguns registros que indicam a mudança de status de Received para Authorizing, mas não há efeito sobre o status do pagamento.

## Simulação


Não é possível simular.



## Workaround


Não há solução alternativa.





