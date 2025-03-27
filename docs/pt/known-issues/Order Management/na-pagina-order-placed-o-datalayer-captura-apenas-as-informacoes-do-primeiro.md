---
title: 'Na página Order Placed, o DataLayer captura apenas as informações do primeiro pagamento dentro da transação (transactionPaymentType)'
id: 5cTy3dCZ6x7FNMKvBbc9s8
status: PUBLISHED
createdAt: 2023-01-04T21:06:17.111Z
updatedAt: 2024-02-16T20:23:30.519Z
publishedAt: 2024-02-16T20:23:30.519Z
firstPublishedAt: 2023-01-04T21:14:00.744Z
contentType: knownIssue
productTeam: Order Management
author: authors_84
tag: Order Management
slugEN: on-the-order-placed-page-the-datalayer-only-captures-the-information-of-the
locale: pt
kiStatus: No Fix
internalReference: 727339
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

Quando a compra é concluída, o cliente vai para a página conhecida como **Order Placed**, nesta página temos um **Indicar evento de captura de pedido***(`RequestType: "orderPlaced"`) de nossa plataforma que captura alguns detalhes do pedido e serve para alimentar a **DataLayer*** com informações.

O problema que temos neste momento é que no objeto "**transactionPaymentType**", ** no caso de pedidos com mais de um pagamento***, estamos mostrando apenas o primeiro, o que deixa as informações incompletas para aqueles que utilizam este tipo de dados.

\*Podemos ver este evento (_`RequestType: "orderPlaced"`_) abrindo o inspetor do navegador, procurando pela aba "**Network***", e filtrando por "**eventos***" é possível ver este detalhe na seção **Payload***._

```
    *Headers*
    URL de solicitação: https://rc.vtex.com.br/api/events
    Método de solicitação: POST

    *Payload*
    Objeto com todos os detalhes
``` 

## Simulação

1. Complete pedidos com mais de um pagamento
2. Ao chegar à página de confirmação do pedido (**Order Placed***), abra o inspetor na aba **Network*** e valide o `RequestType: "orderPlaced"`evento
3. Dentro desses detalhes, encontre o objeto transactionPaymentType. Aí você verá que apenas um elemento aparecerá. A coisa correta seria mostrar todos os detalhes referentes aos outros pagamentos.

## Workaround

Neste momento não temos uma solução para este problema, entretanto, caso você precise de mais detalhes da transação, com a identificação é possível consultar mais informações com nossas APIs.

