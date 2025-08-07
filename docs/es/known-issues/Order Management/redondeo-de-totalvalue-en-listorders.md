---
title: "Redondeo de TotalValue en ListOrders"
id: 4XyW5dYYny0wHSOuGbLCRw
status: PUBLISHED
createdAt: 2023-02-17T14:06:47.652Z
updatedAt: 2025-01-28T13:48:17.907Z
publishedAt: 2025-01-28T13:48:17.907Z
firstPublishedAt: 2023-02-17T14:06:48.556Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: redondeo-de-totalvalue-en-listorders
locale: es
kiStatus: Backlog
internalReference: 756314
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando consultamos el `totalValue` de algunos pedidos utilizando la ruta GET ListOrders, podemos encontrarnos con valores discrepantes a los valores devueltos en Get Order. Esto se debe a que la ruta listOrder consulta la base de datos Solr que tiene el campo `totalValue` definido como float, que puede generar números inexactos debido a su naturaleza de aproximación/redondeo.

Por otro lado, en la ruta GET Order, la base de datos consultada está definida como integer, por lo que el retorno no se comporta de la misma manera que en la ruta List Order.

La consecuencia de esto es que la API de lista puede devolver valores con decimales diferentes cuando el valor es demasiado alto.
Otro efecto secundario de este escenario es la visualización de `totalValue` con ".0" en los pedidos de lista.


##

## Simulación


No hay forma de simular el escenario, pero puede ocurrir en pedidos con un valor muy alto o escenarios con monedas con muchos ceros;


##

## Workaround


Todavía no tenemos una WA.





