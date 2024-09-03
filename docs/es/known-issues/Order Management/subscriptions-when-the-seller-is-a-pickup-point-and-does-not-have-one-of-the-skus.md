---
title: 'Suscripciones cuando el vendedor es un Punto de Recogida y no tiene una de las SKU.'
id: 4xIlZZQu8cK42otvvbjhMA
status: PUBLISHED
createdAt: 2022-10-03T12:50:59.047Z
updatedAt: 2022-11-25T22:01:08.292Z
publishedAt: 2022-11-25T22:01:08.292Z
firstPublishedAt: 2022-10-03T12:51:00.284Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: suscripciones-cuando-el-vendedor-es-un-punto-de-recogida-y-no-tiene-una-de-las-sku
locale: es
kiStatus: Backlog
internalReference: 666701
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Se identificó que en la solicitud de recurrencia de una firma con el siguiente escenario:

La Suscripción tiene más de un producto/sku distinto, uno de estos productos/sku no tiene stock y el vendedor es un punto de recogida, se mostrará el siguiente error: Ningún artículo cumple las condiciones de simulación para realizar el pedido.



Esto ocurre porque, en todas las solicitudes de suscripción, se realiza una simulación con el Checkout y en esta simulación, recibimos el error de checkout de que uno de los productos no puede ser entregado.




## Simulación



Para simular este escenario, tendremos que tener una suscripción con más de un SKU distinto, el Vendedor tiene un punto de recogida y uno de los SKUs debe no tener stock disponible.

1- Cuando la suscripción hace la simulación para la recurrencia, tendrá en la respuesta el estado= FALTA para las SKU's;



2- Al comprobar la simulación en la caja, tendremos un error de que una de las SKU's no puede ser entregada y el pedido parcial no se realizará.



3- También veremos que no es posible realizar el pedido de forma parcial.




## Workaround


No tenemos ninguna solución por el momento.

