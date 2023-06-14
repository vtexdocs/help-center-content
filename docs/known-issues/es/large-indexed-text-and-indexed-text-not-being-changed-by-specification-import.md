---
title: '"Texto grande indexado" y "Texto indexado" no se modifican con la importación de la especificación'
id: 5ty5q8AfOROtCc8GegzZbd
status: PUBLISHED
createdAt: 2022-04-22T17:12:36.962Z
updatedAt: 2022-11-25T21:45:01.199Z
publishedAt: 2022-11-25T21:45:01.199Z
firstPublishedAt: 2022-04-22T17:12:37.634Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: texto-grande-indexado-y-texto-indexado-no-se-modifican-con-la-importacion-de-la-especificacion
kiStatus: Backlog
internalReference: 322657
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>





Actualmente, para cada tipo de importación de especificaciones de productos, el "Texto grande indexado" y el "Texto indexado" no reconocen los cambios en los valores de las especificaciones a través de la importación de la hoja de especificaciones de productos.




## Simulación


1) Cree una especificación de producto de tipo "Texto indexado grande" o "Texto indexado".

2) Exporte una hoja de especificación de producto de una categoría en la que se haya creado esta especificación: en ProdutoExportacaoImportacaoEspecificacaoV2.aspx e intente cambiar un valor de la especificación.

3) Revise su producto en el que ha solicitado cambios, no se ha realizado ninguno.





## Workaround


Utilizar otros tipos de texto, como "`Texto grande`" o "`Texto`"

