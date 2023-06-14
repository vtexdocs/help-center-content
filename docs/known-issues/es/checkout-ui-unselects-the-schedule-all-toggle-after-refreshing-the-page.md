---
title: 'La interfaz de pago deselecciona la opción "Programar todo" después de actualizar la página.'
id: 28TIselp0EzU3iSD4kLJgX
status: PUBLISHED
createdAt: 2023-04-04T21:08:55.937Z
updatedAt: 2023-04-06T17:51:41.231Z
publishedAt: 2023-04-06T17:51:41.231Z
firstPublishedAt: 2023-04-04T21:08:56.349Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-interfaz-de-pago-deselecciona-la-opcion-programar-todo-despues-de-actualizar-la-pagina
locale: es
kiStatus: Backlog
internalReference: 784693
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La interfaz de usuario del proceso de pago anula la selección del conmutador "Programar todo" en el paso de envío después de actualizar la página, aunque la API siga seleccionada. Este comportamiento no tiene ningún impacto; el pedido tendrá seleccionada la entrega programada.



## Simulación



- Añada un artículo que tenga entrega programada y regular;
- Seleccione la entrega programada, rellene toda la información y vaya a Pagos;
- Vuelva a Envíos y actualice la página;
- La opción "Programar todo" no estará seleccionada.


##

## Workaround


N/A



