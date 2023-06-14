---
title: 'O campo "reference" sempre é definido como nulo'
id: 6Tq4zip0lfUm7vVJdwfZWx
status: PUBLISHED
createdAt: 2023-04-26T22:31:38.892Z
updatedAt: 2023-05-08T18:19:35.696Z
publishedAt: 2023-05-08T18:19:35.696Z
firstPublishedAt: 2023-04-26T22:31:39.458Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-campo-reference-sempre-e-definido-como-nulo
locale: pt
kiStatus: Backlog
internalReference: 797989
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O campo `reference` do endereço do ponto de coleta é sempre definido como nulo, embora esteja registrado na API do ponto de coleta.

## Simulação



- Registre um ponto de retirada via API, incluindo o campo `address.reference`;
- Adicione um item ao carrinho;
- Execute um Get Order e verifique se o campo `pickupPoints.reference` é nulo

## Workaround


N/A




