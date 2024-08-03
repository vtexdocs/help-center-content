---
title: 'Diferencia de precios entre PDP, PLP y Checkout Cart'
id: 3Oo5ccYOG7hcEXYaROxXMV
status: PUBLISHED
createdAt: 2023-06-29T20:02:13.485Z
updatedAt: 2023-06-29T20:02:14.572Z
publishedAt: 2023-06-29T20:02:14.572Z
firstPublishedAt: 2023-06-29T20:02:14.572Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: diferencia-de-precios-entre-pdp-plp-y-checkout-cart
locale: es
kiStatus: Backlog
internalReference: 853175
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



El portal está entregando el mismo contenido en los PDPs y PLPs incluso después de algunas actualizaciones como promociones.



## Simulación



Con una caché caducada, el CDN pregunta al sistema del portal si se ha modificado la página. Si es así, el portal entrega la nueva página para ser renderizada, de lo contrario, el CDN redibuja la página que ya tiene.

En este caso, vimos que aunque la página había presentado algunos cambios, la inclusión de una promoción, el portal devolvía al CDN que no había ningún cambio en comparación con la página en caché y, por lo tanto, la capa de borde estaba renderizando la página sin promoción.



## Workaround



Una forma de solucionarlo era **cambiar la plantilla de la página del producto (como incluir un comentario**), de forma que el portal informara de que había un cambio en la estructura, y el CDN obtuviera la nueva página para almacenarla en caché.




