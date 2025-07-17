---
title: "O fluxo de pedidos do Fulfillment/Vendedor progride independentemente de ter o sinalizador de pedido incompleto (isCompleted=false) no pedido do Marketplace"
id: 1wy7o9sS7qKnvVlaJd9Pq9
status: PUBLISHED
createdAt: 2024-11-21T18:39:13.496Z
updatedAt: 2024-11-21T19:56:54.571Z
publishedAt: 2024-11-21T19:56:54.571Z
firstPublishedAt: 2024-11-21T18:39:14.505Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: o-fluxo-de-pedidos-do-fulfillmentvendedor-progride-independentemente-de-ter-o-sinalizador-de-pedido-incompleto-iscompletedfalse-no-pedido-do-marketplace
locale: pt
kiStatus: Backlog
internalReference: 345526
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Nos cenários de gerenciamento de pedidos da VTEX, sempre teremos dois pedidos e, de certa forma, fluxos de trabalho independentes, que são o pedido do Marketplace e o do Fulfillment.

Nesse caso, o problema ocorre quando, por algum motivo, o pedido do **Marketplace** é marcado como incompleto (`"isCompleted": false`), porém, o pedido **Fulfillment** é criado com sucesso e permanece no status "**Waiting for fulfillment authorization**", sendo que o Fulfillment só sai desse status em duas situações, sendo uma automática, que é a correta, quando o Marketplace recebe a notificação de pagamento e o próprio marketplace notifica o fulfillment, permitindo que ele continue o fluxo, ou a própria conta pode fazer isso deliberadamente, podendo não receber o pagamento do pedido que será entregue. Enquanto o comportamento esperado é cancelar ambos os pedidos.

Ações dentro do **Fulfillment order**, como "Start handling" (Iniciar processamento) ou enviar a notificação de fatura sem antes consultar o status do **Marketplace order** (se ele está completo ou não), podem fazer com que o **Fulfillment workflow** continue, independentemente de o **Marketplace** ter um pedido incompleto.

O principal problema é fazer o atendimento do pedido sem um pedido completo do Marketplace (principal) e, com certeza, sem um processo de pagamento correto.

## Simulação



Não é um cenário que possa ser replicado, no entanto, é possível validar a propriedade no JSON do **Marketplace order** `"isCompleted:"` se estiver atualmente com o valor `false`, e o **Fulfillment order (Seller)** `"isCompleted:"` com o valor `true` e seu fluxo de trabalho permitindo avançar o pedido.

Exemplo de propriedade `"isCompleted": false` do **Marketplace order**:
 ![](https://vtexhelp.zendesk.com/attachments/token/61ctwev8pXI4WHheLVtfnD0Sq/?name=inline1159444440.png

## Workaround


A ideia é poder impedir que o fluxo de pedidos avance se o pedido do Marketplace estiver incompleto. A ideia é bloquear qualquer ação para continuar com o pedido de Fulfillment e garantir que ele seja cancelado, juntamente com o pagamento, se ambos estiverem ativos ou ainda não tiverem sido cancelados.

Por outro lado, a ideia é que o cliente evite realizar qualquer ação no pedido se o pedido do Marketplace tiver sido marcado como incompleto.


