---
title: 'Error al importar/exportar una hoja de cálculo grande en el nuevo administrador de cobros'
id: 6xbBVR2Z7CCpIC0iCAKHgN
status: PUBLISHED
createdAt: 2023-02-16T19:04:08.298Z
updatedAt: 2023-12-12T21:08:23.871Z
publishedAt: 2023-12-12T21:08:23.871Z
firstPublishedAt: 2023-02-16T19:04:08.784Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: error-al-importarexportar-una-hoja-de-calculo-grande-en-el-nuevo-administrador-de-cobros
locale: es
kiStatus: Fixed
internalReference: 362017
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, subir artículos al nuevo módulo de colecciones con una lista de más de 1000 SKUs es imposible, ya que el proceso se agota. Devuelve una respuesta de error inespecífica
"Su archivo no fue importado. Por favor, intente importar este archivo de nuevo.`"


##

## Simulación



1. Ir al módulo de nuevas colecciones
2. Selecciona la pestaña "Importar"
3. Utilice una hoja que tenga más de 1000 SKUs (es decir, 300 productos con 50 SKUs, cada uno)
4. La importación generará un tiempo de espera.



## Workaround


Cargue gradualmente utilizando hojas más pequeñas, las colecciones CMS heredadas y/o la API de inserción de SKU a subcolección https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit





