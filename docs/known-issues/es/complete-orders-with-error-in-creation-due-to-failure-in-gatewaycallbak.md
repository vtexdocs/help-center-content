---
title: 'Pedidos completos con error de creación por fallo en gatewaycallbak'
id: 2qVa686QBsvkgXY8wwmc8Y
status: PUBLISHED
createdAt: 2022-05-04T19:28:00.775Z
updatedAt: 2022-11-25T21:52:28.991Z
publishedAt: 2022-11-25T21:52:28.991Z
firstPublishedAt: 2022-05-04T19:28:01.142Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedidos-completos-con-error-de-creacion-por-fallo-en-gatewaycallbak
locale: es
kiStatus: Backlog
internalReference: 416936
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hemos recibido algunas consultas sobre pedidos que estaban atascados en el estado de pago aprobado, pero que ya habían sido aprobados, lo que no debería ocurrir en el flujo normal de pedidos.

Basándonos en el análisis de los casos, entendemos que una posible ocurrencia de este suceso fue;

El pedido de marketplace fue creado incompleto, el pedido de marketplace recibe la llamada de gatewaycallback y, en este momento, se produce un fallo, y esto hace que se inicie un proceso de cancelación del pedido, pero el pedido de marketppace recibe una segunda llamada de gatewaycallback que hace que el pedido esté autorizado y completo, evitando así que se cancele la transacción, y este escenario genera un pedido completo (marketplace / checkout), pero con un error de creación y el pedido fullfiment cancelado, lo que podría evitarse implementando una validación en gatewaycallback para no proceder con pedidos incompletos.





## Simulación



## Workaround



