---
title: 'La API de pago puede no agrupar paquetes cuando dos o más vendedores pueden cumplir'
id: 3nTRP8r3ZvoZ6UqC1RTbIb
status: PUBLISHED
createdAt: 2023-05-03T22:24:43.036Z
updatedAt: 2023-05-08T18:33:00.831Z
publishedAt: 2023-05-08T18:33:00.831Z
firstPublishedAt: 2023-05-03T22:24:44.282Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-api-de-pago-puede-no-agrupar-paquetes-cuando-dos-o-mas-vendedores-pueden-cumplir
locale: es
kiStatus: Backlog
internalReference: 802156
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando dos o más vendedores pueden completar un carro con más de un artículo, es posible que la API de pago no agrupe los paquetes seleccionando vendedores diferentes para cada producto. Esto aumenta el valor del envío para el comprador.

Este comportamiento se observó cuando se añadieron dos artículos al carro; uno de los artículos sólo podía ser satisfecho por un vendedor, y se produjo una división de paquetes a pesar de que el otro artículo podía ser satisfecho por el mismo vendedor. Pero no se limita a este escenario.


##

## Simulación


No hay una manera fácil de reproducir el escenario, pero se refieren a los pedidos / carrito donde ocurrió el problema.



## Workaround


N/A




