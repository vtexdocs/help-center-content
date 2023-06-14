---
title: 'La exportación de especificación del producto retorna Index Out of Range'
id: 2Qu9QCZvfcjmNfAh3uvPkf
status: PUBLISHED
createdAt: 2022-02-25T12:22:04.014Z
updatedAt: 2022-11-25T21:45:45.357Z
publishedAt: 2022-11-25T21:45:45.357Z
firstPublishedAt: 2022-02-25T12:22:04.405Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-exportacion-de-especificacion-del-producto-retorna-index-out-of-range
kiStatus: Backlog
internalReference: 481095
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar exportar, mediante la UI: , los datos de las fichas de producto, si no tienen ningún campo válido registrado directamente en la categoría a exportar, el proceso fallará con un mensaje de "Índice fuera de rango".





## Simulación


1) Vaya a la UI de exportación de la especificación del producto: ProdutoExportacaoImportacaoEspecificacaoV2.aspx

2) Haga clic con el botón derecho del ratón en una categoría en la que no haya ningún campo de especificación de producto registrado

3) Aparecerá un mensaje de error de "Índice fuera de bonos".






## Workaround


Exportar el padre o el hijo de la categoría deseada

o

Utilizar la API de obtención de especificaciones de productos para obtener los datos: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product-specification

