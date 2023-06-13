---
title: Mensaje de error no específico al exportar ProdutoExportacaoImportacaoEspecificacaoV2.aspx
id: 3rtDeX0QppmbXOvuCtC1Lr
status: PUBLISHED
createdAt: 2022-03-22T13:09:32.153Z
updatedAt: 2022-11-25T21:44:55.880Z
publishedAt: 2022-11-25T21:44:55.880Z
firstPublishedAt: 2022-03-22T13:09:32.886Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: mensaje-de-error-no-especifico-al-exportar-produtoexportacaoimportacaoespecificacaov2aspx
kiStatus: Backlog
internalReference: 314227
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, el mensaje de error de la interfaz ProdutoExportacaoImportacaoEspecificacaoV2.aspx en el catálogo de importación/exportación, cuando un usuario intenta exportar una ficha de producto y no hay productos en una categoría determinada (pero sí hay especificaciones registradas) no señala el origen del problema.

El mensaje que se muestra es una excepción muy genérica:


    Ocorreu algo inesperado: El índice estaba fuera de rango. Debe ser no negativo y menor que el tamaño de la colección. Nombre del parámetro: índice


Debe ser algo parecido a

    "No hay productos en esta categoría".





## Simulación


1) Acceda a la interfaz ProdutoExportacaoImportacaoEspecificacaoV2.aspx.
2) Exporte una hoja de especificaciones de producto que tenga campos de producto registrados pero que no contenga productos.




## Workaround


No hay soluciones.

