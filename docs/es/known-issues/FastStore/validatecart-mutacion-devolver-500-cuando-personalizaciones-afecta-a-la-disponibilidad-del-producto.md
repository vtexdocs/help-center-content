---
title: "ValidateCart mutación devolver 500 cuando personalizaciones afecta a la disponibilidad del producto"
id: TmV61O5LTdZFGZ4zBjj5P
status: PUBLISHED
createdAt: 2025-07-11T14:18:35.610Z
updatedAt: 2025-07-11T18:49:40.369Z
publishedAt: 2025-07-11T18:49:40.369Z
firstPublishedAt: 2025-07-11T14:18:36.287Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: validatecart-mutacion-devolver-500-cuando-personalizaciones-afecta-a-la-disponibilidad-del-producto
locale: es
kiStatus: Backlog
internalReference: 1258650
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un producto no está disponible, nuestro comportamiento por defecto es devolver el último carrito válido y los errores en el `cart.messages`. Los productos ya añadidos al carrito pueden dejar de estar disponibles debido a personalizaciones manuales del comerciante (por ejemplo, cambiar manualmente los puntos de recogida/vendedor en el carrito). Este comportamiento puede provocar un error 500 en la mutación validateCart, haciendo que el carrito no esté disponible para las acciones del cliente, como eliminar el producto del carrito.


##

## Simulación


No es un contexto fácil de simular; puede implicar personalización en el lado de la tienda.
Pero un ejemplo sería cambiar de un punto de recogida en el que el producto estaba disponible a otro en el que ya no lo está.



## Workaround

 provisional
Como solución, el equipo ha desarrollado un indicador de función para cambiar el comportamiento predeterminado del carro de la devolución de errores desde el lado del servidor, lo que permite productos no disponibles en el carro y la transferencia de la responsabilidad de manejar los escenarios de error en el lado del cliente a través de personalizaciones comerciante.
https://github.com/vtex/faststore/pull/2938





