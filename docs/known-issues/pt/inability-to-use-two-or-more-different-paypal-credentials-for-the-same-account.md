---
title: Impossibilidade de usar duas ou mais credenciais diferentes do PayPal para a mesma conta.
id: 3cVh2SbvToH8yGOOYcWgDB
status: PUBLISHED
createdAt: 2022-03-03T18:39:24.442Z
updatedAt: 2022-11-25T22:05:45.390Z
publishedAt: 2022-11-25T22:05:45.390Z
firstPublishedAt: 2022-03-03T18:39:25.004Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: impossibilidade-de-usar-duas-ou-mais-credenciais-diferentes-do-paypal-para-a-mesma-conta
kiStatus: Backlog
internalReference: 459704
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o cliente registra duas afiliações diferentes na mesma conta usando PayPalPlus, a plataforma não atualiza o cache para quando há uma mudança na regra de pagamento, ou seja, é possível usar apenas uma credencial por conta.




## Simulação


Registre duas filiações diferentes com credenciais diferentes e crie regras considerando estas duas filiações.
Feche duas compras, cada uma com uma das regras, e na carga útil da transação você pode ver que apesar de entrar com as regras corretas, o merchant_id (identificação da conta na qual o dinheiro cairá) é o mesmo.



## Workaround


Não há solução

