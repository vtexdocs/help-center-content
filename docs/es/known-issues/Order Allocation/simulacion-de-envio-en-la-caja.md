---
title: "Simulación de envío en la caja"
id: 7IXW5HoKgHLrhjw8fRH36E
status: PUBLISHED
createdAt: 2025-04-02T20:46:36.543Z
updatedAt: 2025-05-30T19:28:43.501Z
publishedAt: 2025-05-30T19:28:43.501Z
firstPublishedAt: 2025-04-02T20:46:37.195Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: simulacion-de-envio-en-la-caja
locale: es
kiStatus: Backlog
internalReference: 1204287
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El problema se produce cuando un carrito de la compra, en una cuenta configurada para no permitir la división de la carga, pasa por el flujo de envío e inicialmente, sólo algunos de los artículos de ese carrito comparten el mismo ANS, dejando a otros sin opción de entrega.

Sin embargo, durante la etapa de pagos, el sistema divide la compra en múltiples orderForms en función de los ID de SLA, lo que desencadena una nueva simulación de carga. Este nuevo cálculo puede hacer que haya opciones de entrega disponibles para artículos que antes no estaban disponibles, lo que cambia el precio del carro y desencadena otra simulación más.

El resultado es un bucle continuo, en el que el sistema alterna entre estados de entrega posibles e imposibles debido a las restricciones de SLA y a la división de pedidos.



## Simulación


** **
Configuración de una cuenta para no permitir fraccionamientos de carga (en logística).

Crear un carro con artículos que tienen diferentes ANS, lo que resulta en la ausencia de una opción de envío para algunos de ellos.

Proceder a la etapa de pago y ver que el pedido se divide en múltiples orderForms.

Compruebe que, con esta división, se devuelven nuevos ANS para los artículos que antes no se podían entregar.

Tenga en cuenta que este cambio tiene un impacto en el precio del carrito, lo que desencadena nuevas simulaciones y puede llevar el proceso de pago a un bucle infinito.



## Workaround


** **
Si es posible, permitir la división de la carga (en el sistema logístico)






