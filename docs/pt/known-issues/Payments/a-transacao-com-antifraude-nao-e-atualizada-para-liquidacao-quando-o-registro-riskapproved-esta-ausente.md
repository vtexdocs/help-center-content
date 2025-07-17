---
title: 'A transação com antifraude não é atualizada para "liquidação" quando o registro "riskApproved" está ausente'
id: 50IrRBlZJJxgEbE0RccCA9
status: PUBLISHED
createdAt: 2025-02-24T14:42:45.902Z
updatedAt: 2025-02-24T14:42:46.474Z
publishedAt: 2025-02-24T14:42:46.474Z
firstPublishedAt: 2025-02-24T14:42:46.474Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: a-transacao-com-antifraude-nao-e-atualizada-para-liquidacao-quando-o-registro-riskapproved-esta-ausente
locale: pt
kiStatus: Backlog
internalReference: 1184723
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes, quando o provedor antifraude aprova a transação, podemos ver que o gateway recebe a mensagem de aprovado pelo antifraude, mas não atualiza a transação para o status "riskApproved". Quando isso acontece, a transação fica presa em Autorizado ou Aprovado mesmo depois que a liquidação é feita pelo provedor de pagamento.

## Simulação


Não há uma maneira assertiva de reproduzir esse erro, pois ele é intermitente.



## Workaround


Abra um tíquete para o Suporte ao produto - Pagamentos, para prosseguir manualmente com o fluxo da transação.




