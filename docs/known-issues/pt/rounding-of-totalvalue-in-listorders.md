---
title: 'Arredondamento do Valor Total em Ordens de Lista'
id: 4XyW5dYYny0wHSOuGbLCRw
status: PUBLISHED
createdAt: 2023-02-17T14:06:47.652Z
updatedAt: 2023-03-15T18:07:19.037Z
publishedAt: 2023-03-15T18:07:19.037Z
firstPublishedAt: 2023-02-17T14:06:48.556Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: arredondamento-do-valor-total-em-ordens-de-lista
locale: pt
kiStatus: Backlog
internalReference: 756314
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando consultamos o valor do pedido através da IU, ele exibe um valor e quando o consultamos através da API Get Orders, vemos um valor 0,01 maior. Este comportamento ocorre devido ao arredondamento feito no banco de dados. Entretanto, este comportamento não afeta o valor total do pedido, ele é apenas uma visualização na ListOrders, o valor total do pedido ainda está correto.

Outro cenário é mostrar um valor com ".0" na lista de ordens.


##

## Simulação


Encomendas com valores muito altos podem ter este comportamento na ListOrders.


##

## Workaround


Ainda não temos um WA.

Enfatizamos que este comportamento não interfere no valor da ordem, ele é apenas visual nas ordens de listagem.





