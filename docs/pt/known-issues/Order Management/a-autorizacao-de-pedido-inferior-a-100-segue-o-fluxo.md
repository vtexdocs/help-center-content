---
title: 'A autorização de pedido inferior a 100 segue o fluxo'
id: 51vxznnbek6mtVtQgKEW9d
status: PUBLISHED
createdAt: 2024-02-16T13:44:05.199Z
updatedAt: 2024-02-16T13:44:05.932Z
publishedAt: 2024-02-16T13:44:05.932Z
firstPublishedAt: 2024-02-16T13:44:05.932Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-authorization-lessthan-100-goes-with-the-flow
locale: pt
kiStatus: Backlog
internalReference: 983031
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Identificamos que quando o sistema de Autorização de Pedidos (OrderAuth) é configurado com o valor "lessThan: 100", no "Rules-list.CreateDoEffect" , ele não consegue entender que é menor ou igual a 100%, apenas que é menor que 100% e quando o pedido tem um desconto de 100%, o sistema autoriza que o pedido siga o fluxo normal.

## Simulação


Para simular é necessário configurar o orderAuth:
Acesso: https://.myvtex.com/admin/order-auth
Configure a divergência de preços > insira os seguintes valores na regra:
Rules-list.denyEffect :0 a 60%

Rules-list.CreateDoEffect: 61 a 100%

Ao configurar a regra "Rules-list.CreateDoEffect" para 100%, ele não consegue entender que é menor ou igual, apenas que é menor e, portanto, autoriza que a solicitação siga o fluxo normal quando for igual a 100%

## Workaround


N/A.





