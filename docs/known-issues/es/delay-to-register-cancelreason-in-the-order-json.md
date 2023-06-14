---
title: 'Retraso para registrar CancelReason en el json del pedido'
id: 3n8i3EHJO9wPTEKDbaWbo2
status: PUBLISHED
createdAt: 2023-04-18T17:20:25.088Z
updatedAt: 2023-04-18T17:27:34.471Z
publishedAt: 2023-04-18T17:27:34.471Z
firstPublishedAt: 2023-04-18T17:20:25.672Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: retraso-para-registrar-cancelreason-en-el-json-del-pedido
locale: es
kiStatus: Backlog
internalReference: 792650
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Debido a la forma en que se ejecuta el flujo de actualización de la orden desde cualquier estado hasta cancelada, es posible que el sistema de órdenes tarde un tiempo en registrar el CancelReason en el json de la orden, provocando un breve escenario de inconsistencia si se consulta o utiliza el Json unos segundos después de la acción de cancelación;

Un ejemplo práctico es el uso de este campo en la plantilla `vtexcommerce-order-cancelled`, ya que como el proceso de guardado puede tardar un tiempo es posible que el envío del email no entregue este dato al usuario final porque el envío del email es asíncrono al flujo de cancelación;


##

## Simulación


no es posible simularlo.
Pero se puede observar en la línea de tiempo de un pedido cancelado, una vez que se utiliza la propiedad `cancellationReason` en la plantilla de la tienda.



## Workaround


En caso de que el fallo afecte al proceso de obtención del pedido, recomendamos que se realice una nueva obtención;




