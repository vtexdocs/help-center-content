---
title: "Erro no sistema de eventos no final de uma transação faz com que um pedido fique incompleto"
id: 6FzlxrxSQgIE3G62ZCJurd
status: PUBLISHED
createdAt: 2025-02-11T16:43:10.540Z
updatedAt: 2025-02-11T16:43:11.122Z
publishedAt: 2025-02-11T16:43:11.122Z
firstPublishedAt: 2025-02-11T16:43:11.122Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: erro-no-sistema-de-eventos-no-final-de-uma-transacao-faz-com-que-um-pedido-fique-incompleto
locale: pt
kiStatus: Backlog
internalReference: 421137
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando ocorre um erro com o sistema de eventos no final de uma transação, o pedido que o cliente estava tentando comprar não é finalizado e permanece incompleto. A ação "RaiseEvent" é uma ação interna acionada nas últimas etapas da criação do pedido, sempre após a transação/pagamento ser efetuado (não necessariamente aprovado ou analisado; eles podem ter seus próprios fluxos e timings), quando ocorre um erro nessa etapa, sendo ele no final de uma compra, por exemplo GatewayCallback, o usuário não consegue concluir sua compra, cancelando assim a transação devido à falha desse evento.

## Simulação


Não há como simular, mas podemos ver os registros:

RaiseEventyAsync falhou nos últimos 30 dias, contados por tipo de fluxo de trabalho

RaiseEventAsync & RaiseEventAsyncV2 no tipo de fluxo de trabalho PlaceOrder & NewGatewayCallbac

## Workaround


N/A





