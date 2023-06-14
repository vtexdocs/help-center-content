---
title: 'A cidade e o estado não são enviados ao PayPalPlus quando há apenas um endereço de retirada disponível'
id: 5ScWTMLqT9oBMUYFc6WGo2
status: PUBLISHED
createdAt: 2023-06-01T13:47:08.477Z
updatedAt: 2023-06-01T13:47:09.590Z
publishedAt: 2023-06-01T13:47:09.590Z
firstPublishedAt: 2023-06-01T13:47:09.590Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-cidade-e-o-estado-nao-sao-enviados-ao-paypalplus-quando-ha-apenas-um-endereco-de-retirada-disponivel
locale: pt
kiStatus: Backlog
internalReference: 836025
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os campos "cidade" e "estado" não são enviados ao PayPalPlus quando o comprador adiciona apenas um endereço de retirada ao carrinho, fazendo com que a forma de pagamento não seja carregada.

## Simulação



- Adicionar produtos ao carrinho;
- Vá para a etapa de envio;
- Selecione "Pick up in store" (Retirar na loja), adicione o código postal e selecione uma loja;
- Clique em "Go to payment" (Ir para pagamento) e selecione o cartão de crédito do PayPalPlus

## Workaround


Selecione "Delivery" (Entrega), adicione o código postal e mude para "Pick up in store" (Retirar na loja).



