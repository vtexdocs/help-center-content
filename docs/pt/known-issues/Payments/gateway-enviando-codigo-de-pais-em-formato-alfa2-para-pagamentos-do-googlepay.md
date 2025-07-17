---
title: "Gateway enviando código de país em formato alfa-2 para pagamentos do GooglePay"
id: 2w3ofI9vXdQwjjtAdChFdD
status: PUBLISHED
createdAt: 2025-03-10T19:56:38.926Z
updatedAt: 2025-03-10T19:56:39.724Z
publishedAt: 2025-03-10T19:56:39.724Z
firstPublishedAt: 2025-03-10T19:56:39.724Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gateway-enviando-codigo-de-pais-em-formato-alfa2-para-pagamentos-do-googlepay
locale: pt
kiStatus: Backlog
internalReference: 1191562
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O gateway envia o código do país do endereço de cobrança no formato alfa-2 para o provedor no caso de pagamentos do GooglePay.

## Simulação


Isso acontece com todas as transações do Google Pay, pois o Google usa um formato diferente do esperado em nosso protocolo.

## Workaround


O provedor deve identificar e aceitar a transação mesmo que o endereço de cobrança tenha um formato diferente nos casos de transações do GooglePay.





