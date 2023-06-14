---
title: 'La interfaz de las colecciones no permite buscar productos con caracteres especiales'
id: 3O9C8uOskw2UJYdBVUCFw
status: PUBLISHED
createdAt: 2022-04-07T20:36:02.541Z
updatedAt: 2022-11-25T21:43:06.394Z
publishedAt: 2022-11-25T21:43:06.394Z
firstPublishedAt: 2022-04-07T20:36:03.017Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-interfaz-de-las-colecciones-no-permite-buscar-productos-con-caracteres-especiales
locale: es
kiStatus: Backlog
internalReference: 344451
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La nueva interfaz de colecciones, `.myvtex.com/admin/collections`, no permite a los usuarios buscar productos con caracteres especiales.



## Simulación



- Busque cualquier producto con apóstrofes, comillas, puntos... en la interfaz de usuario de las colecciones cuando añada productos a la colección;
- La búsqueda no encontrará productos con caracteres especiales;



## Workaround


- Buscar nombres de productos antes del carácter especial (ejemplo: no se puede escribir `'` en la búsqueda);
- Añadir productos a las colecciones utilizando la API;
- Añadir productos a las colecciones utilizando la interfaz de usuario heredada de las colecciones.

