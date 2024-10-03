---
title: 'Quitar anexo de SKU por importación de productos a través de planilla no surte efecto'
id: 3BgRi2HNCwYEAKuOc0G4Se
status: PUBLISHED
createdAt: 2018-05-03T19:24:21.455Z
updatedAt: 2022-12-22T20:46:01.489Z
publishedAt: 2022-12-22T20:46:01.489Z
firstPublishedAt: 2018-05-03T19:34:26.219Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: removing-an-sku-attachment-by-importing-products-via-spreadsheet-has-no-effect
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al importar una planilla de productos y SKUs, eliminando los anexos de un SKU (es decir, dejando la columna "\_Anexos" en blanco en la planilla), este cambio no se refleja en el registro del SKU. Se mantiene con el anexo vinculado.

## Simulación

1. Acceder al catálogo.
2. Navegar hasta el registro de productos > Productos y SKUs > Importar/exportar productos y SKUs.
3. Abrir el dropdown Exportación/Importación > Importar.
4. Seleccione una planilla de productos y SKUs que contenga SKUs con anexos previamente vinculados y deje el valor de \_Anexos en blanco.
5. Haga clic en __Importar__.

## Workaround

Primero, [crear un nuevo anexo](/es/tutorial/registrar-un-anexo) y dejar este anexo inactivo. Entonces, rellene la planilla con el valor del nuevo anexo creado y realice la importación de los productos.

