---
title: "orderForm (Chk API) suggesting invalid scheduled delivery that can't be used"
id: 7e2bSJSJa938QCrOHkRibZ
status: PUBLISHED
createdAt: 2022-01-24T20:20:11.732Z
updatedAt: 2023-03-21T19:26:09.280Z
publishedAt: 2023-03-21T19:26:09.280Z
firstPublishedAt: 2023-03-21T19:26:09.280Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: 
slug: orderform-chk-api-suggesting-invalid-scheduled-delivery-that-cant-be-used
kiStatus: Backlog
internalReference: 298665
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Cuando un carrito/pedido tiene múltiples artículos con entrega programada, las opciones programadas que tienen el mismo ID (por lo tanto, considerado el mismo método de envío) necesitan tener las mismas ventanas de entrega entre ellas. Si no hay intersección, el método de envío será descartado para algunos artículos.

El problema es que, en algunos flujos, como la API "GET orderForm", este comportamiento de filtrado no se aplica, ofreciendo una entrega programada no válida (sin intersección). En otros flujos, como en la "simulación orderForm" o al seleccionar de hecho el método de envío, la opción ofrecida será correctamente filtrada/eliminada.

Efecto secundario: la aplicación Chk UI intentará utilizar/simular la opción no válida y puede quedarse bloqueada en un **bucle de peticiones**, ya que el método de envío está disponible en un primer momento, pero no se puede utilizar en un segundo momento, y la aplicación UI vuelve a intentar el primer paso mientras revisa las opciones disponibles en el orderForm.


## Simulación

- tener dos políticas de envío diferentes (transportistas) con el mismo "tipo de carga" (que define el "slaId")
- ambos programados, pero con una ventana de entrega diferente entre ellos
- tener un artículo para cada política de envío
- incluir ambos artículos en el carrito y simular el envío

En este momento, la interfaz de usuario puede quedar bloqueada en un bucle debido a la divergencia entre el "GET orderForm" y la "simulación de orderForm".


## Workaround

Es necesario fijar la ventana de entrega entre los métodos de envío que tienen el mismo ID (para tener las mismas ventanas de entrega), o tratarlos como diferentes métodos de envío, por lo que utilizan diferentes IDs.

