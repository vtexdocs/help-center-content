---
title: 'La fecha de entrega se vacía cuando el artículo es un regalo añadido'
id: 5HMepNuoEHY0xJPm4PKPb4
status: PUBLISHED
createdAt: 2022-05-25T21:39:17.092Z
updatedAt: 2022-11-25T21:53:17.345Z
publishedAt: 2022-11-25T21:53:17.345Z
firstPublishedAt: 2022-05-25T21:39:17.787Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-fecha-de-entrega-se-vacia-cuando-el-articulo-es-un-regalo-anadido
locale: es
kiStatus: Backlog
internalReference: 586143
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



En el carrito que ya tiene un artículo de entrega programada y seleccionada, con su dirección rellenada, al llegar a la etapa de pago y añadir un método de pago que añade un regalo al carrito y este regalo también tiene entrega programada, el usuario es devuelto a la etapa de elección de la entrega programada, pero el regalo acaba "tomando" la fecha que había sido rellenada previamente para el primer artículo.
Al analizar la API, el `deliveryWindow` de este regalo queda como nulo e imposibilita que el usuario pase al paso de pago. Desde que se pulsa el botón no ocurre nada.

Nota: si el usuario cambia la fecha en la selección de fecha, se produce una actualización y se rellena el `deliveryWindow`, con lo que el usuario puede pasar al paso de pago.



## Simulación


Tenga un carrito con un artículo con entrega programada, rellene sus datos normalmente, elija la fecha de entrega, cuando llegue a la etapa de pago, elija un método de pago que añada un regalo, el checkout volverá a la etapa de selección de la fecha de entrega programada, por lo que si el usuario hace clic en el botón proceder, no podrá, sólo si cambia la fecha de este regalo.



## Workaround


N/A

