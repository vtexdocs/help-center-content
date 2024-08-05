---
title: "Enlace de texto creado con ' ' en Marketplace tras las aprobaciones - Reoccurrence"
id: 2afynQ9MwaHPMPWyhx80Tp
status: PUBLISHED
createdAt: 2023-04-24T19:36:10.185Z
updatedAt: 2023-07-13T15:25:43.450Z
publishedAt: 2023-07-13T15:25:43.450Z
firstPublishedAt: 2023-04-24T19:36:10.701Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: enlace-de-texto-creado-con-en-marketplace-tras-las-aprobaciones-reoccurrence
locale: es
kiStatus: Fixed
internalReference: 795900
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos escenarios, al aprobar un producto en un Marketplace, en la aplicación de SKUs Recibidos, la petición falla al introducir los datos en el catálogo y al reintentar, los campos textlink rellenan los caracteres "-" con " ", cambiando el comportamiento deseado.

La SKU se devuelve para su aprobación en el módulo de SKUs Recibidas, pero no es posible aprobarla de nuevo, puesto que ya habrá un producto con un enlace de texto igual.



##

## Simulación


1) Suele ocurrir con un error genérico de skus recibidos al intentar aprobar (esto no ocurre en todos los casos).

2) Se creará un producto en el catálogo del marketplace con los textlinks defectuosos.

3) El producto en cuestión seguirá apareciendo en los skus recibidos, pendiente de aprobación.

4) Al intentar aprobarlo de nuevo se mostrará un error.



## Workaround


Actualizar manualmente/API los enlaces de texto del producto en este escenario.




