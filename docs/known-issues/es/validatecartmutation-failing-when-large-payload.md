---
title: 'ValidateCartMutation falla cuando la carga útil es grande'
id: 5YmPMVGsi92owcmICg3CY3
status: PUBLISHED
createdAt: 2024-02-21T15:23:44.054Z
updatedAt: 2024-02-21T15:23:44.919Z
publishedAt: 2024-02-21T15:23:44.919Z
firstPublishedAt: 2024-02-21T15:23:44.919Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: validatecartmutation-falla-cuando-la-carga-util-es-grande
locale: es
kiStatus: Backlog
internalReference: 985867
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al añadir varios productos en minicart, dependiendo de la información asociada a esos productos, si recibimos un error payloadTooLarge, el producto se añadirá al carrito pero no pasará a orderForm correctamente


##

## Simulación




- Añade productos al carrito hasta que recibas un error 413 Payload Too Large



## Workaround


N/A





