---
title: "Liquidação da transação enquanto o pagamento com cartão-presente fica preso no status autorizado após erro de liquidação automática"
id: 3IMj58gMkwdWb6ZcRWdYQ
status: PUBLISHED
createdAt: 2025-03-28T15:40:05.734Z
updatedAt: 2025-07-24T17:49:53.748Z
publishedAt: 2025-07-24T17:49:53.748Z
firstPublishedAt: 2025-03-28T15:40:06.313Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: liquidacao-da-transacao-enquanto-o-pagamento-com-cartaopresente-fica-preso-no-status-autorizado-apos-erro-de-liquidacao-automatica
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

A mensagem nas interações da transação é:


    Message: Unknown Error on AutoSettleA chamada a 'https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements' retornou o status HTTP '()'.


Isso não depende do status HTTP retornado.

## Simulação


N/A



## Workaround


Abra um tíquete solicitando a atualização do status.





