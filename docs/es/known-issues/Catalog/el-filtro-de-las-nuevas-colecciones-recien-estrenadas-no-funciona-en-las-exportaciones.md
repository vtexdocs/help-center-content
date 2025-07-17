---
title: 'El filtro de las nuevas colecciones "Recién estrenadas" no funciona en las exportaciones'
id: 7n6JZhsHxN8k27DUHOhgYg
status: PUBLISHED
createdAt: 2022-05-11T13:58:31.689Z
updatedAt: 2024-07-01T18:48:19.827Z
publishedAt: 2024-07-01T18:48:19.827Z
firstPublishedAt: 2022-05-11T13:58:32.282Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-filtro-de-las-nuevas-colecciones-recien-estrenadas-no-funciona-en-las-exportaciones
locale: es
kiStatus: No Fix
internalReference: 576760
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El filtro de productos "Lanzamiento reciente" en el nuevo módulo de colecciones recupera los productos que se establecieron con la variable de fecha de lanzamiento en el pasado reciente. Está presente en el siguiente componente de la interfaz de usuario:

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

