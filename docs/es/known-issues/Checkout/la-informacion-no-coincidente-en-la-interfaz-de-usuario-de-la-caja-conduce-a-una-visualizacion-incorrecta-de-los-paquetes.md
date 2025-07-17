---
title: "La información no coincidente en la interfaz de usuario de la caja conduce a una visualización incorrecta de los paquetes."
id: 4rZvjBKLiYZ2H7tW8nK14b
status: PUBLISHED
createdAt: 2025-01-28T19:09:22.628Z
updatedAt: 2025-01-28T19:09:23.318Z
publishedAt: 2025-01-28T19:09:23.318Z
firstPublishedAt: 2025-01-28T19:09:23.318Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: la-informacion-no-coincidente-en-la-interfaz-de-usuario-de-la-caja-conduce-a-una-visualizacion-incorrecta-de-los-paquetes
locale: es
kiStatus: Backlog
internalReference: 1170509
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El componente UI omnishipping de Checkout espera la misma ordenación para el objeto orderForm `items` y el objeto orderForm `shippingData.logisticsInfo`.

Cuando esta ordenación no coincide entre ambos objetos, la información del paquete del pedido puede presentar artículos y paquetes no coincidentes.


##

## Simulación


No hay un proceso directo paso a paso para replicar este escenario, pero se puede comprobar en el orderForm vía API.



## Workaround


N/A





