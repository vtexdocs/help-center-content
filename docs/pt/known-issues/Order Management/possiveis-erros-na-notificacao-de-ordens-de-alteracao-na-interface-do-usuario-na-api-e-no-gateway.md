---
title: 'Possíveis erros na notificação de ordens de alteração na interface do usuário, na API e no gateway.'
id: 1UeG6MyFYIUVCnH8kPwNIJ
status: PUBLISHED
createdAt: 2023-12-19T19:37:47.313Z
updatedAt: 2024-09-11T19:26:44.153Z
publishedAt: 2024-09-11T19:26:44.153Z
firstPublishedAt: 2023-12-19T19:37:47.950Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: possible-errors-in-change-orders-notification-in-the-ui-api-and-gateway
locale: pt
kiStatus: No Fix
internalReference: 955489
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



_**Importante**: Sugerimos que você use o novo **Change V2**, já que o esforço foi feito para criar esse novo recurso.

Alguns problemas foram identificados na arquitetura Change Orders V1, em que alguns casos não eram notificados na interação do pedido na interface do usuário e não eram notificados na API Get Orders, mas havia um desconto ou aumento no valor. Também vimos cenários em que a notificação ocorre na UI e na API, mas o desconto ou aumento não é feito no gateway.

## Simulação


Não é possível realizar uma simulação, pois os cenários são esporádicos e geralmente ocorrem devido a um erro de timeout, para o qual já aumentamos o cronômetro

## Workaround


Inicialmente, não temos uma solução alternativa, no entanto, vale a pena mencionar que em alguns cenários poderemos ajustar manualmente, como, por exemplo, se o registro de pedidos de alteração ocorrer no gateway e não ocorrer no Marketplace ou a interação do pedido de atendimento e a API também.

