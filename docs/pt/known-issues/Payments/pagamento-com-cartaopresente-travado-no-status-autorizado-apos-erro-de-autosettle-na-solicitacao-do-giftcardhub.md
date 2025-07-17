---
title: "Pagamento com cartão-presente travado no status autorizado após erro de autosettle na solicitação do Giftcardhub"
id: 3IMj58gMkwdWb6ZcRWdYQ
status: PUBLISHED
createdAt: 2025-03-28T15:40:05.734Z
updatedAt: 2025-03-28T15:40:06.313Z
publishedAt: 2025-03-28T15:40:06.313Z
firstPublishedAt: 2025-03-28T15:40:06.313Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pagamento-com-cartaopresente-travado-no-status-autorizado-apos-erro-de-autosettle-na-solicitacao-do-giftcardhub
locale: pt
kiStatus: Backlog
internalReference: 1201336
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os pagamentos com Giftcard ficam presos no status `authorized` após qualquer erro de liquidação automática na solicitação do GiftcardHub.
Mesmo após uma nova tentativa e uma liquidação bem-sucedida, o status do pagamento não é alterado.

Isso não depende do status HTTP retornado.

## Simulação


N/A



## Workaround


Abra um tíquete solicitando a atualização do status.





