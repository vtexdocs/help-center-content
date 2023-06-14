---
title: 'Recurso de indexação de ganchos de feed que ignora eventos nos filtros FromOrders'
id: 6wpHloVS4KnH1TN5S5ySN2
status: PUBLISHED
createdAt: 2023-05-25T20:23:18.818Z
updatedAt: 2023-05-25T20:23:19.709Z
publishedAt: 2023-05-25T20:23:19.709Z
firstPublishedAt: 2023-05-25T20:23:19.709Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: recurso-de-indexacao-de-ganchos-de-feed-que-ignora-eventos-nos-filtros-fromorders
kiStatus: Backlog
internalReference: 832400
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao configurar o filtro Feed/Hook, você define quais atualizações de pedidos devem ser exibidas no feed. Dois tipos de filtros podem ser usados no feed: FromWorkflow e FromOrders.

Usando a configuração FromWorkflow, você só pode filtrar as atualizações de pedidos por status.
E o FromOrders permite filtrar as atualizações em seu feed por qualquer propriedade no documento JSON do pedido.

Porém, na expressão FromOrders, quando há uma propriedade dinâmica no filtro, como status, por exemplo, isso faz com que a indexação de pedidos ignore algumas versões de pedidos.
E isso pode resultar na ausência de notificações para o feed/hook quando isso deveria acontecer.

## Simulação


Defina uma expressão de FromOrders com o status do pedido e muitas possibilidades como canal de vendas, número de sequência e outras condições.

Ela pode não ser notificada devido a informações dinâmicas como status do pedido

## Workaround


A recomendação para casos como esse é remover a parte dinâmica do filtro e lidar com isso externamente.
Se a informação dinâmica for o ponto principal do status do pedido, deve-se usar a opção FromWorkflow.





