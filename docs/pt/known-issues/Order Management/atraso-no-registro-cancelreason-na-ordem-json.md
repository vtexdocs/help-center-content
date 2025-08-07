---
title: "Atraso no registro CancelReason na ordem json"
id: 3n8i3EHJO9wPTEKDbaWbo2
status: PUBLISHED
createdAt: 2023-04-18T17:20:25.088Z
updatedAt: 2023-04-18T17:27:34.471Z
publishedAt: 2023-04-18T17:27:34.471Z
firstPublishedAt: 2023-04-18T17:20:25.672Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: atraso-no-registro-cancelreason-na-ordem-json
locale: pt
kiStatus: Backlog
internalReference: 792650
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Devido à forma como o fluxo de atualização do pedido é executado de qualquer status a ser cancelado, é possível que o sistema de Pedido demore um pouco para registrar o CancelReason na ordem json, causando um breve cenário de inconsistência se o Json for consultado ou usado alguns segundos após a ação de cancelamento;

Um exemplo prático é a utilização deste campo no modelo `vtexcommerce-order-cancelled', pois como o processo de salvamento pode demorar um pouco, é possível que o envio de e-mail não entregue estes dados ao usuário final, pois o envio de e-mail é assíncrono com o fluxo de cancelamento;


##

## Simulação


não é possível simulá-lo.
Mas pode ser observado na linha do tempo de uma ordem cancelada, uma vez que a propriedade "razão de cancelamento" é utilizada no modelo da loja.


##

## Workaround


Caso a falha tenha impacto no processo de pedido, recomendamos que seja feito um novo pedido;




