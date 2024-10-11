---
title: 'Erro na visualização da interface do usuário de pedidos após a solicitação da fatura via aplicativo'
id: 1yrb25L1Skj3sRRWyiFDSA
status: PUBLISHED
createdAt: 2024-07-24T14:24:29.799Z
updatedAt: 2024-07-24T14:24:30.583Z
publishedAt: 2024-07-24T14:24:30.583Z
firstPublishedAt: 2024-07-24T14:24:30.583Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-in-viewing-the-orders-ui-after-requesting-the-invoice-via-app
locale: pt
kiStatus: Backlog
internalReference: 1070299
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando executamos uma "alteração V2" removendo ou adicionando um item a um pedido, criamos uma alteração na lista de itens do pedido, o que pode aumentar ou diminuir o número de índices na lista de itens no json. Essa alteração, por sua vez, pode não ser consumida por todos os aplicativos ou bancos de dados envolvidos no processamento do pedido, como o aplicativo notificador de faturas;

Como resultado, ao solicitar a fatura por meio do aplicativo notificador de faturas antes de ter realizado uma ação para remover ou adicionar um item, o usuário acaba causando um cenário de interrupção na interface do usuário, pois o "aplicativo notificador de faturas" começa a retornar um erro por ter mais ou menos itens do que o esperado pela interface do usuário, resultando em um erro de "referência nula" que impede que o pedido seja exibido na interface do usuário;

## Simulação



**NOTA**: Para simular esse cenário, você deve ter configurado o aplicativo `invoice notifier` e também estar usando o fluxo `Change V2`;


- Em um pedido com mais de um item, vá para o status de processamento;


- Na interface do usuário, clique na opção "Request invoice" (Notificar seu ERP).


- Antes que a fatura seja devolvida pelo ERP, faça uma alteração no pedido, removendo ou adicionando qualquer item ao pedido;


- Aguarde até que o ERP envie a fatura para o sistema de Pedidos e, em seguida, acesse o pedido novamente na interface do usuário de Pedidos; nesse momento, a interface do usuário retornará uma mensagem de erro e o pedido não poderá ser exibido

## Workaround


Faça a solicitação de fatura por meio do notificador de fatura somente após realizar a alteração dos itens do pedido.






