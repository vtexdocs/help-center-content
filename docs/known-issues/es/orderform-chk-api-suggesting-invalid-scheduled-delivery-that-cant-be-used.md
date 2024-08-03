---
title: 'orderForm (Chk API) sugiere una entrega programada no válida que no se puede utilizar'
id: 7e2bSJSJa938QCrOHkRibZ
status: PUBLISHED
createdAt: 2022-01-24T20:20:11.732Z
updatedAt: 2023-12-01T14:08:09.892Z
publishedAt: 2023-12-01T14:08:09.892Z
firstPublishedAt: 2023-03-21T19:26:09.280Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: orderform-chk-api-sugiere-una-entrega-programada-no-valida-que-no-se-puede-utilizar
locale: es
kiStatus: Backlog
internalReference: 298665
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un carrito/pedido tiene varios artículos con entrega programada del mismo vendedor, las opciones programadas con el mismo ID (consideradas el mismo método de envío) necesitan tener las mismas ventanas de entrega entre ellas. Si no hay intersección, el método de envío será descartado para algunos artículos.

El problema es que, en algunos flujos, como la API "GET orderForm", este comportamiento de filtrado no se aplica, ofreciendo una entrega programada no válida (sin intersección). En otros flujos, como en la "simulación orderForm" o al seleccionar el método de envío, la opción ofrecida se filtrará/eliminará correctamente.

Efecto secundario: el Chk UI intentará usar/simular la opción inválida y puede quedarse bloqueado en un **bucle de peticiones** porque el método de envío está disponible en un primer momento pero no puede usarse en un segundo momento, y el UI vuelve a intentar el primer paso mientras revisa las opciones disponibles en el orderForm.


##

## Simulación



- Desde el mismo vendedor, configure dos políticas de envío diferentes (transportistas) con el mismo "tipo de flete" (que define el "slaId");
- Ambas con entrega programada, pero con una ventana de entrega diferente entre ellas;
- Añadir 2 artículos al carrito, un artículo de cada política de envío.

La interfaz de usuario puede quedar bloqueada en un bucle debido a la divergencia entre el "GET orderForm" y la "simulación de orderForm".



## Workaround


Es necesario fijar la ventana de entrega entre los métodos de envío con el mismo ID (para tener las mismas ventanas de entrega), o tratarlos como diferentes métodos de envío, por lo que utilizar diferentes IDs.





