---
title: 'La API recibe varios SKU y devuelve "Invalid sellerId".'
id: 60aL2Chds0Jo3m6XMkxmnG
status: PUBLISHED
createdAt: 2023-10-17T16:26:27.980Z
updatedAt: 2023-10-17T16:26:40.592Z
publishedAt: 2023-10-17T16:26:40.592Z
firstPublishedAt: 2023-10-17T16:26:28.466Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: la-api-recibe-varios-sku-y-devuelve-invalid-sellerid
locale: es
kiStatus: Fixed
internalReference: 506660
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La API Match Multiple Received SKUs (doc: https://developers.vtex.com/vtex-rest-api/reference/match-received-skus#matchmultiple) está devolviendo el mensaje de error "Invalid sellerId" para cualquier intento de aprobación de nuevos productos, incluso si el vendedor está correctamente activo en el marketplace.


##

## Simulación


1. Copia el curl de la documentación anterior;
2. Pégalo en tu herramienta API (postman, insomnia...);
3. Sustituye los valores del objeto por los datos del sku que intentas aprobar;
4. Comprueba si el sellerId está activo y es válido en la gestión de vendedores del marketplace;
5. La respuesta de la API no debe ser:

    "errorResponse": { "Code": 33, "Message": "Invalid sellerId" }





## Workaround


La API Match Received SKUs individually funciona correctamente y puede sustituir a la API anterior para aprobar nuevos productos uno a uno.






