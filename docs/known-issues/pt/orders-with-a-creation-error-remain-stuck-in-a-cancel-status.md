---
title: 'Os pedidos com um "Erro de criação" permanecem presos em um status de "cancelar"'
id: gP4woBDBX0FsUC6sdMHED
status: PUBLISHED
createdAt: 2024-08-29T20:28:41.531Z
updatedAt: 2024-08-29T20:28:42.413Z
publishedAt: 2024-08-29T20:28:42.413Z
firstPublishedAt: 2024-08-29T20:28:42.413Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: os-pedidos-com-um-erro-de-criacao-permanecem-presos-em-um-status-de-cancelar
locale: pt
kiStatus: Backlog
internalReference: 1089344
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Em algumas ordens que apresentam um erro no momento da criação (**Creation Error -** `cancellationData.reason`), é esperado que essas ordens atinjam automaticamente o status **Cancelado**, pois são ordens que estavam incompletas de alguma forma (_mesmo que a propriedade `isCompleted` esteja_ `true`), ou com um erro na comunicação entre os sistemas, principalmente na comunicação com o Gateway, e acabam sendo canceladas.


    "cancellationData": { "requestedByUser": false, "requestedBySystem": true, "requestedBySellerNotification": null, "requestedByPaymentNotification": null, "reason": "Creation error" (Erro de criação), "cancellationDate" (Data de cancelamento): "2024-08-13T17:40:23.8875213Z", "cancellationRequestId": null},


Nesse caso, o problema é que, atualmente, alguns pedidos com um **erro de criação permanecem presos em um status de "cancelamento "**, sem poder avançar para o cancelamento.


    curl --location 'https://.vtexcommercestable.com.br/api/orders/pvt/document/' \--header 'Accept: application/json' \--header 'Content-Type: application/json' \--header 'VtexIdclientAutCookie: ***' \--header 'Cookie: janus_sid=71df74ec-7639-443a-ad33-4f9de2053cba'



    "status": "cancel",



    "workflowData". "instances". "name": "Marketplace""workflowData". "instances". "currentStepName": "end""workflowData". "instances". "name": "Fulfillment""workflowData". "instances". "currentStepName": "cancel" (cancelar)


O importante nesses casos é poder validar que a transação já foi cancelada e que não há problemas com a reserva dos itens no pedido.

## Simulação



Se o pedido estiver no status "**cancel**" e não tiver avançado para "**cancelado**":

1. Faça um GET do pedido e valide as seguintes informações:
  - "status"
  - "cancellationData" (dados de cancelamento)
  - "workflowData" (dados do fluxo de trabalho)
2. Se as informações da primeira etapa forem iguais aos detalhes mostrados no resumo deste problema, é porque seu pedido não poderá ser movido para o status "**canceled**"

## Workaround



No momento, não temos uma solução alternativa para esse problema.






