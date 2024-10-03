---
title: 'Pedidos completos com erro na criação devido a falha no gatewaycallbak'
id: 2qVa686QBsvkgXY8wwmc8Y
status: PUBLISHED
createdAt: 2022-05-04T19:28:00.775Z
updatedAt: 2024-04-04T16:46:47.602Z
publishedAt: 2024-04-04T16:46:47.602Z
firstPublishedAt: 2022-05-04T19:28:01.142Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: complete-orders-with-error-in-creation-due-to-failure-in-gatewaycallbak
locale: pt
kiStatus: Backlog
internalReference: 416936
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Recebemos algumas consultas sobre pedidos que estavam presos no status de pagamento aprovado, mas já aprovados, o que não deveria acontecer no fluxo normal de pedidos.

Com base na análise dos casos, entendemos que uma possível ocorrência desse fato foi;

O pedido do marketplace foi criado incompleto, o pedido do marketplace recebe a chamada do gatewaycallback e, nesse momento, ocorre uma falha, e isso faz com que se inicie um processo de cancelamento do pedido, mas o pedido do marketppace recebe uma segunda chamada do gatewaycallback que faz com que o pedido seja autorizado e concluído, impedindo assim que a transação seja cancelada, e esse cenário gera um pedido completo (marketplace/checkout), mas com um erro de criação e o pedido completo cancelado, o que poderia ser evitado implementando uma validação no gatewaycallback para não prosseguir com pedidos incompletos.
Em alguns casos, o pedido do vendedor pode não ser cancelado.

## Simulação



Não podemos simular devido à complexidade do fluxo, a análise deve ser feita considerando os dados aqui informados.

## Workaround


Nos casos em que o pedido do vendedor não for cancelado, você deverá cancelar o pedido manualmente ou aguardar o prazo de 30 dias.





