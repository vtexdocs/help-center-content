---
title: Pedidos completos com erro na criação devido a falha no gatewaycallbak
id: 2qVa686QBsvkgXY8wwmc8Y
status: PUBLISHED
createdAt: 2022-05-04T19:28:00.775Z
updatedAt: 2022-11-25T21:52:28.991Z
publishedAt: 2022-11-25T21:52:28.991Z
firstPublishedAt: 2022-05-04T19:28:01.142Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedidos-completos-com-erro-na-criacao-devido-a-falha-no-gatewaycallbak
kiStatus: Backlog
internalReference: 416936
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Recebemos algumas consultas sobre pedidos que estavam presos no status de aprovação de pagamento, mas que já foram aprovados, o que o fluxo normal de pedidos não deveria acontecer.

Com base na análise dos casos, entendemos que uma possível ocorrência desta ocorrência foi;

A ordem de mercado foi criada incompleta, a ordem de mercado recebe a chamada de gatewaycallback e, neste momento, ocorre uma falha, e isto faz com que um processo de cancelamento de ordem seja iniciado, mas a ordem de marketppace recebe uma segunda chamada de gatewaycallback que faz com que a ordem seja autorizada e completa, impedindo assim que a transação seja cancelada, e este cenário gera uma ordem completa (marketplace / checkout), mas com um erro de criação e a ordem de preenchimento cancelada, o que poderia ser evitado implementando uma validação em gatewaycallback para não proceder com pedidos incompletos.





## Simulação



## Workaround



