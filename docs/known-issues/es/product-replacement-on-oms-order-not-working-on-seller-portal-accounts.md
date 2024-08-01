---
title: 'La sustitución de productos en un pedido OMS no funciona en las cuentas del portal del vendedor'
id: 1wQTfSR6OB6CL0sRpCYARp
status: PUBLISHED
createdAt: 2023-02-14T12:25:00.911Z
updatedAt: 2024-07-01T18:48:50.766Z
publishedAt: 2024-07-01T18:48:50.766Z
firstPublishedAt: 2023-02-14T12:25:01.506Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-sustitucion-de-productos-en-un-pedido-oms-no-funciona-en-las-cuentas-del-portal-del-vendedor
locale: es
kiStatus: No Fix
internalReference: 753484
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


No está siendo posible cambiar el sku de un pedido porque el OMS utiliza la API de búsqueda (que está relacionada con el catálogo V1) y las cuentas del portal del vendedor utilizan una nueva versión del catálogo. No se ha implementado ningún proxy en esta área.

El error es: "A conta solicitada {accountName} não foi encontrada no banco de conexão." <> "La cuenta solicitada {accountName} no fue encontrada en el banco de conexión."


##

## Simulación



## Workaround



