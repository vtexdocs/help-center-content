---
title: "Los precios de los servicios no se actualizan cuando se añaden a los artículos"
id: 5hJ7TbHzX4zFbdNWqPnMRQ
status: PUBLISHED
createdAt: 2023-05-09T14:27:37.283Z
updatedAt: 2023-06-23T18:37:32.624Z
publishedAt: 2023-06-23T18:37:32.624Z
firstPublishedAt: 2023-05-09T14:27:37.766Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: los-precios-de-los-servicios-no-se-actualizan-cuando-se-anaden-a-los-articulos
locale: es
kiStatus: Backlog
internalReference: 822107
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los precios de los servicios no se actualizan si se añadió a un artículo antes de cambiar su precio de servicio en el admin. Esto provocará que el pedido se cree con un precio desactualizado.


##

## Simulación



- Crear un servicio;
- Añadir un artículo con servicio al carrito;
- Modificar el precio del servicio;
- Comprobar el carro previamente montado; el servicio no se actualiza.



## Workaround


Elimine y vuelva a añadir el servicio.




