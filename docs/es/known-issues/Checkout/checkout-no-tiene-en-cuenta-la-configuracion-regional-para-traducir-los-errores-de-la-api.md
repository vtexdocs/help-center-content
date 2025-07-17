---
title: "Checkout no tiene en cuenta la configuración regional para traducir los errores de la API"
id: 4JbEQJhiodzeWdXx66aNpT
status: PUBLISHED
createdAt: 2025-01-24T18:40:15.876Z
updatedAt: 2025-01-24T18:40:16.605Z
publishedAt: 2025-01-24T18:40:16.605Z
firstPublishedAt: 2025-01-24T18:40:16.605Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-no-tiene-en-cuenta-la-configuracion-regional-para-traducir-los-errores-de-la-api
locale: es
kiStatus: Backlog
internalReference: 1168499
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



## Simulación


En una tienda con una configuración multilingüe, acceda a la caja utilizando una configuración regional diferente a la del canal de ventas principal.
Forzar un error como añadir más cantidad de un artículo que la que tiene para inventario.
Se mostrará un error emergente no traducido para la configuración regional elegida.



## Workaround


Envíe el canal de ventas relacionado con la configuración regional elegida como parámetro para todas las solicitudes de API en la interfaz de pago.





