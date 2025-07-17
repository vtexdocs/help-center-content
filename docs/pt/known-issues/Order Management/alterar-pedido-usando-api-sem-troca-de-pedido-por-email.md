---
title: "Alterar pedido usando API sem troca de pedido por e-mail"
id: 1KMglga4xM1s7EvNO1mmua
status: PUBLISHED
createdAt: 2022-05-18T18:40:48.935Z
updatedAt: 2024-02-16T20:27:31.478Z
publishedAt: 2024-02-16T20:27:31.478Z
firstPublishedAt: 2022-05-18T18:40:49.234Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: alterar-pedido-usando-api-sem-troca-de-pedido-por-email
locale: pt
kiStatus: No Fix
internalReference: 380509
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a administração de uma conta muda o pedido aplicando descontos no valor e não nos itens usando API o e-mail de Pedido de Mudança não está sendo enviado ao cliente final.



## Simulação



Para simular este cenário, você precisa alterar o valor do pedido usando API.
https://developers.vtex.com/vtex-rest-api/reference/orders#registerchange



## Workaround


Não há solução para este caso.

