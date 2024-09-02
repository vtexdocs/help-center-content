---
title: 'En la lista de direcciones disponibles de la interfaz de pago faltan datos de la dirección recién creada.'
id: 1BEDcoXLVAs5L039eKXsXv
status: PUBLISHED
createdAt: 2024-07-05T21:08:40.994Z
updatedAt: 2024-07-11T15:56:34.357Z
publishedAt: 2024-07-11T15:56:34.357Z
firstPublishedAt: 2024-07-05T21:08:42.246Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: en-la-lista-de-direcciones-disponibles-de-la-interfaz-de-pago-faltan-datos-de-la-direccion-recien-creada
locale: es
kiStatus: Backlog
internalReference: 1061630
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un usuario añade una nueva dirección durante el paso de envío de la caja, avanza al paso de pago y, a continuación, vuelve a la lista de direcciones disponibles del paso de envío, es posible que esta dirección recién creada no aparezca en la lista o que muestre información incompleta en la interfaz de usuario.



## Simulación



Caso 1, para usuarios autenticados:

1. Accede a la tienda con un usuario que tenga al menos una dirección guardada y crea un carrito.
2. Proceda al Pago y llegue a la pantalla de Pago.
3. Haz clic en "Cambiar opciones de envío".
4. Haz clic en "Entregar en otra dirección".
5. Rellene una nueva dirección y haga clic en "Ir al pago".
6. Haz clic de nuevo en "Cambiar opciones de envío".
7. Haga clic de nuevo en "Entregar en otra dirección".
8. Haga clic en "Volver a la lista de direcciones".
9. Es posible que la dirección recién creada no aparezca en la lista.

Caso 2, para usuarios identificados pero no autentificados:

1. Crea un carrito e identifícate con el email de un usuario que tenga al menos una dirección guardada.
2. Proceder al Checkout y llegar a la pantalla de Pago.
3. Haz clic en "Cambiar opciones de envío".
4. Haz clic en "Entregar en otra dirección".
5. Rellene una nueva dirección y haga clic en "Ir al pago".
6. Haz clic de nuevo en "Cambiar opciones de envío".
7. Haga clic de nuevo en "Entregar en otra dirección".
8. 8. Pulse "Volver a la lista de direcciones".
9. Para algunos países, la dirección recién añadida puede mostrar información incompleta, como mostrar sólo el código postal y el nombre del país.



## Workaround


Actualice la página.






