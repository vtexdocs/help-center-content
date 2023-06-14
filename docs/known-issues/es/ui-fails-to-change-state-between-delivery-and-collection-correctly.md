---
title: 'La interfaz de usuario no cambia correctamente el estado entre la entrega y la recogida'
id: 5gKsCV8Rh779FlzppablkP
status: PUBLISHED
createdAt: 2022-05-02T18:08:17.388Z
updatedAt: 2022-11-25T21:52:46.291Z
publishedAt: 2022-11-25T21:52:46.291Z
firstPublishedAt: 2022-05-02T18:08:17.892Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-interfaz-de-usuario-no-cambia-correctamente-el-estado-entre-la-entrega-y-la-recogida
locale: es
kiStatus: Backlog
internalReference: 526736
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A veces, cuando el usuario cambia el tipo de entrega entre entrega y recogida en el Checkout (importante que sea en el checkout y no en el carrito, aunque probablemente también ocurra en el carrito), el orderForm guarda el estado de entrega en `logisticsInfo` cuando se selecciona la recogida.



## Simulación


Para simular este escenario sólo tiene que ir a cualquier cuenta en v6. Llene el carrito con cualquier producto que tenga disponible el método de entrega como entrega o recogida y proceda al pago.

Este problema es intermitente. Se necesita un tiempo para ver que el problema ocurre.

Para que funcione, cambia entre entrega y recogida repetidamente hasta que notes que el orderForm almacena dentro de `logisticsInfo[index].selectedSla` el tipo de entrega definido para la entrega cuando en realidad debería estar definido como el nombre establecido para la opción de recogida elegida. El error suele producirse cuando se elige la recogida y en el orderForm tenemos definido el tipo de entrega como nombre de entrega configurado.

Nota: Es importante tener en cuenta que no se está reportando ningún error en el orderForm ni en la plataforma. Tenemos la UI mostrando/seleccionando un tipo de entrega y el orderForm mostrando una UI diferente.



## Workaround


Para que no se impida la compra, cuando se produzca este problema, actualice la página para que se corrija la situación o simplemente cambie el tipo de envío, de nuevo, y vuelva, para solucionar este problema.

