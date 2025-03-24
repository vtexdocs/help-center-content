---
title: 'Especificación del producto Índice de exportación fuera de la gama'
id: 2Qu9QCZvfcjmNfAh3uvPkf
status: PUBLISHED
createdAt: 2022-02-25T12:22:04.014Z
updatedAt: 2024-01-10T20:25:32.586Z
publishedAt: 2024-01-10T20:25:32.586Z
firstPublishedAt: 2022-02-25T12:22:04.405Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-export-index-out-of-range
locale: es
kiStatus: Backlog
internalReference: 481095
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al intentar exportar Especificaciones de Producto desde la UI "Importar y Exportar", si existe algún valor nulo o relación nula en la categoría a exportar, el proceso fallará con un mensaje de "Índice fuera de Rango". En otras palabras, la categoría debe tener registrado directamente a su nivel un campo de producto, productos y productos con valores asociados.



##

## Simulación


1) Ir a la UI de exportación de Especificación de Producto: ProdutoExportacaoImportacaoEspecificacaoV2.aspx

2) Haga clic con el botón derecho en una categoría en la que no haya ningún campo de especificación de producto registrado

3) Aparecerá un mensaje de error de "Índice fuera de bonos".






## Workaround


Exporte la categoría padre o hija deseada

o

Utilice la API de obtención de especificaciones de productos para obtener los datos: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product-specification

