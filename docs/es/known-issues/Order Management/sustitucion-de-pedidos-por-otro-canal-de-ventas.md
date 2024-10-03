---
title: 'Sustitución de pedidos por otro canal de ventas'
id: 2gShXcwLLHu7R8JyPjP0W6
status: PUBLISHED
createdAt: 2024-02-16T13:02:17.686Z
updatedAt: 2024-02-16T13:05:20.998Z
publishedAt: 2024-02-16T13:05:20.998Z
firstPublishedAt: 2024-02-16T13:02:18.609Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: replacing-orders-with-different-sales-channel
locale: es
kiStatus: Backlog
internalReference: 982965
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Hemos identificado que no es posible reemplazar un SKU en el pedido si el Canal de Ventas (SC), igual a 1, no está disponible para la cuenta.

Por ejemplo, la cuenta A no tiene canal de ventas=1, sólo SC=2, en la solicitud de sustitución de pedido estamos enviando canal de ventas=1 y no 2.


##

## Simulación


La cuenta A, no tiene canal de ventas=1, solo SC=2, en la solicitud de reposición de pedido, cuando solicitan la reposición de una referencia, nos envían canal de ventas=1 y no 2, por lo tanto, no es posible realizar la reposición.



## Workaround


N/A.





