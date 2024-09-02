---
title: 'La simulación de suscripciones devuelve un error cuando PickupPointID contiene caracteres especiales'
id: aM2So6TmVffZ1ywtQsknS
status: PUBLISHED
createdAt: 2023-09-19T17:31:47.442Z
updatedAt: 2024-07-01T18:49:12.303Z
publishedAt: 2024-07-01T18:49:12.303Z
firstPublishedAt: 2023-09-19T17:31:48.217Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: la-simulacion-de-suscripciones-devuelve-un-error-cuando-pickuppointid-contiene-caracteres-especiales
locale: es
kiStatus: No Fix
internalReference: 903332
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para realizar un pedido de suscripción o actualizar una suscripción, el sistema de suscripción realiza una simulación, y en esta simulación utiliza los datos de entrega devueltos por el sistema logístico, y si dentro de estos datos hay un punto de recogida cuyo ID está subrayado, el sistema de suscripción no podrá elegir correctamente el ANS, generando así el error "AddressProvider inválido:...." en la simulación y en consecuencia no generará el pedido.


##

## Simulación


1- Crear un punto de recogida cuyo ID tenga un subrayado
2- Realice una solicitud de suscripción eligiendo el punto de picking creado en el paso 1.
3- Espera a que se ejecute el primer ciclo y comprueba que no se ejecuta y que el panel de suscripción registra un error diciendo que la dirección no es válida.



## Workaround


Elimina el punto de recogida cuyo ID aparece subrayado y crea uno nuevo y actualiza la suscripción para que utilice este nuevo punto de recogida.





