---
title: "orderForm no resiste a los cambios en itemAttachment y ofertas"
id: 2pNOpx38Dca7HBomTZBdAD
status: PUBLISHED
createdAt: 2022-01-05T20:40:21.829Z
updatedAt: 2022-11-25T21:51:57.663Z
publishedAt: 2022-11-25T21:51:57.663Z
firstPublishedAt: 2022-06-29T13:12:46.749Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-no-resiste-a-los-cambios-en-itemattachment-y-ofertas
locale: es
kiStatus: Backlog
internalReference: 334191
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El orderForm es sensible a la modificación o eliminación de un itemAttachment del catálogo de productos. Si un itemAttachment deja de existir o comienza a tener otro patrón de validación, un orderForm que ya tiene datos antiguos se volverá inaccesible, y no será posible proceder con el flujo de compra.
Este escenario también se aplica a los servicios (ofertas).



## Simulación



- Crear un archivo adjunto en el catálogo y hacerlo disponible en algún artículo
- Crear un orderForm, con este artículo
- Añadir el archivo adjunto al artículo
- Desactivar o renombrar el adjunto en el catálogo



## Workaround


Una vez registrados, los anexos de los artículos no deben cambiarse, a menos que se pueda garantizar que no habrá carros con esta información rellenada.

