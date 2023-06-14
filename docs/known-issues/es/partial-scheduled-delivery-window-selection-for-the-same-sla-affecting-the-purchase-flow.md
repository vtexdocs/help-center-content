---
title: 'Selección de ventana de entrega programada parcial para el mismo SLA que afecta al flujo de compra'
id: 1xkpnp0vxR0O8sJYARcFJF
status: PUBLISHED
createdAt: 2022-08-11T18:41:25.906Z
updatedAt: 2022-11-25T21:50:45.960Z
publishedAt: 2022-11-25T21:50:45.960Z
firstPublishedAt: 2022-08-11T18:41:26.449Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: seleccion-de-ventana-de-entrega-programada-parcial-para-el-mismo-sla-que-afecta-al-flujo-de-compra
kiStatus: Backlog
internalReference: 627261
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El cambio de dirección puede modificar las opciones de envío de un artículo y, naturalmente, puede eliminar la selección de la ventana de entrega para las entregas programadas si las opciones son diferentes.

En un carro con múltiples artículos, cuando este cambio ocurre sólo para artículos específicos de manera que permanezcan en el mismo ANS pero no todos con ventanas de entrega aplicadas, pueden ocurrir comportamientos incoherentes.

Algunos efectos secundarios conocidos:

Si el primer artículo de un mismo método de envío tiene la ventana de entrega seleccionada pero los demás artículos no, el usuario no podrá saberlo al mismo tiempo que no podrá seguir adelante en el flujo de compra - debido a los artículos con entrega programada, pero sin seleccionar su ventana de entrega.

Si el primer artículo no tiene su ventana de entrega seleccionada, pero cualquier otro sí, la capa del frontend puede estar calculando un valor de envío erróneo. Este valor se enviará a la capa de la API, que siempre responderá con un valor diferente/correcto. La diferencia entre esos valores generará un bucle de peticiones mientras la ventana de entrega no esté seleccionada, calculando así los valores correctos desde el frontend.



## Simulación



- crear un carrito con tres artículos, eligiendo también sus opciones de envío y ventanas de entrega
  - artículo 1, SLA A
  - artículo 2, SLA A
  - artículo 3, ANS B
- cambiar a una dirección que ponga el artículo 1 o 2 a un ANS diferente
- volver a la dirección anterior, volviendo a habilitar ese artículo al ANS A
- en este momento, el ítem cambiado no tendrá ventana de entrega, pero el otro sí, lo que genera los problemas reportados



## Workaround


N/A

