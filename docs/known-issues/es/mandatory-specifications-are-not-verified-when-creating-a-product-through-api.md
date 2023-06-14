---
title: 'Las especificaciones obligatorias no se verifican al crear un producto a través de la API'
id: 2s4WhYOfIRDcwuXyUp9mtK
status: PUBLISHED
createdAt: 2022-02-10T21:44:57.094Z
updatedAt: 2022-11-25T21:46:15.425Z
publishedAt: 2022-11-25T21:46:15.425Z
firstPublishedAt: 2022-02-10T21:44:58.173Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: las-especificaciones-obligatorias-no-se-verifican-al-crear-un-producto-a-traves-de-la-api
locale: es
kiStatus: Backlog
internalReference: 522293
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se supone que los productos con especificaciones obligatorias no están activos si al menos una de estas especificaciones no está cumplida o comprobada.

La creación del producto a través de Admin garantiza una validación por parte del catálogo sobre estas especificaciones y el resultado es que el producto permanece inactivo hasta que se completen.

Sin embargo, esta validación no se produce al crear el producto a través de la API. El resultado es que el producto puede estar activo incluso sin que se completen esas especificaciones.



## Simulación





1. Crear un producto a través de la API: https://developers.vtex.com/vtex-rest-api/reference/post-product
2. Seleccionar una categoría que tenga especificaciones de producto obligatorias
3. No cumplir con las especificaciones obligatorias
4. Comprobar que el producto tiene el estado "Activo" cuando no debería tenerlo.



## Workaround





No hay solución.

