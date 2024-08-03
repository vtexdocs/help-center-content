---
title: 'Impossibilidade de usar duas ou mais credenciais diferentes do PayPal para a mesma conta.'
id: 3cVh2SbvToH8yGOOYcWgDB
status: PUBLISHED
createdAt: 2022-03-03T18:39:24.442Z
updatedAt: 2024-02-16T20:25:01.876Z
publishedAt: 2024-02-16T20:25:01.876Z
firstPublishedAt: 2022-03-03T18:39:25.004Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: impossibilidade-de-usar-duas-ou-mais-credenciais-diferentes-do-paypal-para-a-mesma-conta
locale: pt
kiStatus: No Fix
internalReference: 459704
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o usuário registra duas afiliações diferentes na mesma conta usando o PayPalPlus, a plataforma não atualiza o cache para quando houver uma alteração em uma regra de pagamento, ou seja, é possível usar apenas uma credencial por conta.

## Simulação


Registre duas afiliações diferentes com credenciais diferentes e crie regras considerando essas duas afiliações.
Feche duas compras, cada uma com uma das regras, e no payload da transação você pode ver que, apesar de inserir as regras corretas, o merchant_id (identificação da conta na qual o dinheiro cairá) é o mesmo

## Workaround


N/A





