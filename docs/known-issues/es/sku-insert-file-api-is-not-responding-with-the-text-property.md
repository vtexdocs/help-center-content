---
title: 'La API de inserción de archivos de SKU no responde con la propiedad "Texto".'
id: 2rPsyAkpGNCVIM4yGlcMBw
status: PUBLISHED
createdAt: 2024-04-10T14:59:14.341Z
updatedAt: 2024-07-22T19:38:40.304Z
publishedAt: 2024-07-22T19:38:40.304Z
firstPublishedAt: 2024-04-10T14:59:15.416Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-insercion-de-archivos-de-sku-no-responde-con-la-propiedad-texto
locale: es
kiStatus: Fixed
internalReference: 1014787
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la API para crear un archivo sku https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file no responde con la propiedad "Texto" correctamente.

Los datos de este campo se aceptan y se envían a la base de datos, sin embargo, el cuerpo de respuesta de cualquiera de los métodos del archivo SKU (GET, PUT, POST) siempre responden el cuerpo de respuesta JSON que contiene la propiedad "Text" como null, incluso cuando tiene un valor guardado en él.


##

## Simulación


1 - Usando la API mencionada, envíe un cuerpo de petición para una imagen válida que tenga un campo "Texto" con un dato no nulo.
2 - Compruebe el cuerpo de respuesta de esta API o utilice una solicitud GET para obtener los datos de este archivo, el campo "Texto" será nulo.
3 - Sin embargo, si va a la administración de la tienda, en https://VTEX.myvtex.com/admin/Site/SkuForm.aspx?IdSku= verá que el texto muestra los datos del campo enviado.



## Workaround


Obtenga los datos del campo Texto desde el administrador, las hojas de cálculo o las API de búsqueda.





