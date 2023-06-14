---
title: 'Paquete devuelto como entrega a cliente final en mi cuenta'
id: 6kMtbSa42iBu6rqQj5QcTv
status: PUBLISHED
createdAt: 2022-03-11T14:25:43.659Z
updatedAt: 2022-11-25T22:03:08.191Z
publishedAt: 2022-11-25T22:03:08.191Z
firstPublishedAt: 2022-05-18T18:51:45.994Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: paquete-devuelto-como-entrega-a-cliente-final-en-mi-cuenta
locale: es
kiStatus: Backlog
internalReference: 415482
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hay un escenario en el que el paquete devuelto se muestra como entregado en la página **Mi Cuenta > Mis Pedidos**. Parece que se va a entregar más de un paquete al cliente en lugar de mostrar que el paquete ya fue entregado al cliente y que se generó un nuevo paquete que simboliza la devolución.

Puede crear algo de confusión para el cliente final porque parece que está recibiendo más productos y no se muestra como totalmente entregado en el flujo de **Mis Pedidos**.



## Simulación



- Haga un pedido con un producto/paquete.
- Complete el flujo del pedido y márquelo como entregado.
- Intente devolver ese artículo.
- Se generará un nuevo paquete que representa la devolución del producto.
- Entonces en la página de Mis Pedidos muestra ese paquete devuelto como uno más.
- El cliente y el usuario administrador de la tienda pueden confundirse con el estado del pedido y el detalle del flujo.


## Workaround


No hay ninguna solución disponible.

