---
title: "New Collections 'Newly Released' filter is not working for Exports"
id: 5JAkYgWVz6pwLn17oQkuif
status: DRAFT
createdAt: 2022-05-11T13:58:31.619Z
updatedAt: 2022-11-17T20:58:07.666Z
publishedAt: 
firstPublishedAt: 2022-05-11T13:58:32.467Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: new-collections-newly-released-filter-is-not-working-for-exports
kiStatus: Backlog
internalReference: 
---

## Sumario

<div class="alert alert-warning">
  <p>Este contenido sólo está disponible en Inglês.</p>
</div>

## Simulación

<div class="alert alert-warning">
  <p>Este contenido sólo está disponible en Inglês.</p>
</div>

## Workaround

<div class="alert alert-warning">
  <p>Este contenido sólo está disponible en Inglês.</p>
</div>

e de fecha de lanzamiento en el pasado reciente. Está presente en el siguiente componente de la interfaz de usuario:

 ![](https://vtexhelp.zendesk.com/attachments/token/pFLlcE3tDbGcA0bgmlAhPNccB/?name=image.png)

Sin embargo, al combinar esta funcionalidad con la exportación de hojas, este filtro se ignora, trayendo todos los productos dentro de la colección.






## Simulación


1 - Vaya al módulo de nuevas colecciones y elija una colección

2 - En el listado principal de la colección, utilice el filtro "Recién lanzado", tenga en cuenta que necesita tener al menos 1 producto con el valor "Fecha de lanzamiento" establecido en el rango filtrado. Este valor puede establecerse en la página de configuración del producto.

3 - Un valor determinado de productos "Recién lanzados" será filtrado y listado en la UI.

4 - Seleccione la función "Exportar".

5 - Exporte una hoja de SKU para esta colección

6 - Compruebe el número de registros exportados, será la cantidad total de productos de la colección, no los Recién Salidos.






## Workaround


Utilice filtros alternativos para su exportación.

