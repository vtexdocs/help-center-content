---
title: Redondeo de TotalValue en ListOrders
id: 4XyW5dYYny0wHSOuGbLCRw
status: PUBLISHED
createdAt: 2023-02-17T14:06:47.652Z
updatedAt: 2023-03-15T18:07:19.037Z
publishedAt: 2023-03-15T18:07:19.037Z
firstPublishedAt: 2023-02-17T14:06:48.556Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: redondeo-de-totalvalue-en-listorders
kiStatus: Backlog
internalReference: 756314
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando consultamos el valor del pedido a través de la UI, nos muestra un valor y cuando lo consultamos a través de la API Get Orders, vemos un valor 0.01 superior. Este comportamiento se produce debido al redondeo realizado en la base de datos. Sin embargo, este comportamiento no afecta al valor total del pedido, es sólo una visualización en el ListOrders, el valor total del pedido sigue siendo correcto.

Otro escenario es mostrar un valor con ".0" en la lista de pedidos.


##

## Simulación


Pedidos con valores muy altos pueden tener este comportamiento en ListOrders.



## Workaround


Todavía no tenemos una WA.

Hacemos hincapié en que este comportamiento no interfiere con el valor de la orden, es sólo visual en los listorders.





