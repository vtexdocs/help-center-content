---
title: "O e-mail não é preenchido automaticamente para novos compradores após o login"
id: 2H6REXZGS6utlWmYKoPmGq
status: PUBLISHED
createdAt: 2023-10-17T16:22:21.667Z
updatedAt: 2023-11-03T17:17:12.530Z
publishedAt: 2023-11-03T17:17:12.530Z
firstPublishedAt: 2023-10-17T16:22:22.650Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: o-email-nao-e-preenchido-automaticamente-para-novos-compradores-apos-o-login
locale: pt
kiStatus: Fixed
internalReference: 920634
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um novo comprador faz login e prossegue com o checkout, o e-mail não é preenchido automaticamente, exigindo que o cliente insira novamente o e-mail. Isso também acontece com o uso de APIs e o envio de cabeçalhos com os cookies do comprador.

## Simulação



- Faça login com um e-mail nunca usado antes na loja;
- Adicionar produtos ao carrinho;
- Vá para o checkout;
- O e-mail não será preenchido e deverá ser digitado novamente

## Workaround


N/A




