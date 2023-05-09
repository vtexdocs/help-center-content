---
title: El artículo añadido a la orden de modificación se encuentra en otro paquete después de facturarse
id: 4a3VAtnfhYeg2N1EekVyO2
createdAt: 2022-08-19T19:25:08.342Z
updatedAt: 2023-05-09T12:40:52.392Z
publishedAt: 2023-05-09T12:40:52.392Z
firstPublishedAt: 2022-08-19T19:25:09.023Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-articulo-anadido-a-la-orden-de-modificacion-se-encuentra-en-otro-paquete-despues-de-facturarse
status: Backlog
internalReference: 412526
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los elementos eliminados o añadidos por el flujo de órdenes de cambio no forman parte del paquete, por lo que no aparecerán en el correo electrónico de la factura, y en caso de que todos los elementos de una orden se eliminen y se añadan más tarde, el correo electrónico de la factura no se envía, porque los elementos añadidos no se añaden al paquete original de la orden;


##

## Simulación


1 - Tenga un pedido en estado "**Envío en gestión**" y seleccione "_Cambiar artículo_";
2 - Añada una o más unidades de una SKU existente al pedido (o añada una nueva SKU);
3 - Compruebe que la unidad se ha añadido al paquete;
4 - Facturar el pedido (a través de la interfaz de usuario o la API). En este caso, lo hice a través de la UI (_"Facturar paquete" > "Enviar una factura" > "Total"_). Pero puedes hacerlo utilizando este endpoint;
5 - Y entonces, podemos observar que, incluso después de facturar todo el paquete, la unidad añadida estaba en un paquete separado;
6 - Y no es posible facturar este paquete por separado;

El pedido estará normalmente en el estado "**Facturado**", pero este detalle no es muy "amigable" (paquetes separados):



## Workaround


Desafortunadamente, no tenemos una solución para este caso.

