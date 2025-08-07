---
title: "El cambio de tipo de vendedor no provoca una indexación"
id: 5RkGYncJlbxFZY4f0IUont
status: PUBLISHED
createdAt: 2025-06-10T16:45:40.854Z
updatedAt: 2025-06-10T16:45:41.511Z
publishedAt: 2025-06-10T16:45:41.511Z
firstPublishedAt: 2025-06-10T16:45:41.511Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-cambio-de-tipo-de-vendedor-no-provoca-una-indexacion
locale: es
kiStatus: Backlog
internalReference: 1242193
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La plataforma VTEX ofrece a partir de la redacción de este número 2 opciones distintas para los tipos de vendedor: 1 (vendedor amplio) y 2 (vendedor regionalizado).

El tipo de vendedor se puede cambiar a través de la API https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller, sin embargo, al hacerlo, todos los artículos que son vendidos por este vendedor deben ser indexados, de lo contrario, los efectos secundarios, tales como artículos que deberían estar apareciendo para vendedores específicos disponibles no se actualizan correctamente.



## Simulación


1 - Cambie la propiedad isBetterScope de un vendedor de su tienda.

2 - Comprueba el historial de indexación de un artículo después de este movimiento y podrás ver que sus datos indexados no se actualizaron.



## Workaround


Volver a indexar la base de datos después de actualizar el vendedor dado.





