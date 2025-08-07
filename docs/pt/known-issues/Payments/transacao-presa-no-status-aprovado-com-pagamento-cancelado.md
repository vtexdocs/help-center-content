---
title: "Transação presa no status aprovado com pagamento cancelado"
id: 5SwwnGi26tagIXuTmvToc
status: PUBLISHED
createdAt: 2024-06-07T14:21:22.809Z
updatedAt: 2024-06-12T17:33:43.967Z
publishedAt: 2024-06-12T17:33:43.967Z
firstPublishedAt: 2024-06-07T14:21:23.608Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacao-presa-no-status-aprovado-com-pagamento-cancelado
locale: pt
kiStatus: Backlog
internalReference: 1046365
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A transação ficou presa no status aprovado, mesmo que o pagamento tenha sido cancelado.

Quando tentamos liquidá-la manualmente, o gateway retorna o seguinte erro:

    "error": {"code": "1506", "message": "O pagamento com ID = xxxxx não foi liquidado porque o valor de liquidação foi -x.xx.", "exception": null}


## Simulação


Não há como simular esse comportamento.



## Workaround


Não há nenhuma solução alternativa nesse caso.





