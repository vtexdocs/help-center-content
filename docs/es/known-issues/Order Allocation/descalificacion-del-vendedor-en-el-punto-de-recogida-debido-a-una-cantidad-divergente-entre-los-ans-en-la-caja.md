---
title: "Descalificación del vendedor en el punto de recogida debido a una cantidad divergente entre los ANS en la caja"
id: qs0rLD5PX5ZFUAflzoK27
status: PUBLISHED
createdAt: 2025-05-16T20:03:57.747Z
updatedAt: 2025-05-16T20:03:58.910Z
publishedAt: 2025-05-16T20:03:58.910Z
firstPublishedAt: 2025-05-16T20:03:58.910Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: descalificacion-del-vendedor-en-el-punto-de-recogida-debido-a-una-cantidad-divergente-entre-los-ans-en-la-caja
locale: es
kiStatus: Backlog
internalReference: 1228333
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el carrito contiene más de una unidad de la misma SKU y el comprador elige el canal de entrega "recogida", puede producirse un cambio inesperado en el punto de recogida seleccionado o incluso la imposibilidad de elegir una de las opciones listadas.

Este comportamiento suele ocurrir cuando el mismo vendedor responde con más de un ANS del mismo tipo, por ejemplo "recogida", y estos ANS tienen rutas logísticas diferentes, cada una con una disponibilidad diferente para la SKU en cuestión.
La razón es que la caja intenta dar prioridad al ANS con menor disponibilidad durante la simulación, basándose en la dirección de recogida elegida. Esto puede llevar a no tener en cuenta el SLA (y al vendedor) que, en la práctica, podría tener existencias suficientes para satisfacer el pedido en ese punto de recogida.


##

## Simulación


Este tipo de escenario requiere una gama muy amplia de configuraciones de disponibilidad, y simularlo no es trivial.

NOTA:Al introducir el código postal del comprador, Fulfillment devuelve los ANS disponibles con una cantidad total (por ejemplo, 4 unidades).
Al cambiar a la dirección de recogida, se realiza una nueva simulación que, al devolver ANS del mismo tipo con cantidades diferentes, acaba limitando la disponibilidad al valor más bajo disponible en los ANS ofertados, lo que significa que el vendedor en cuestión ya no podrá servir el carrito con el número total de unidades solicitadas por el comprador.



## Workaround



No existe ninguna solución para este caso.





