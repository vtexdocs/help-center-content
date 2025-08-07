---
title: "SKU activo incluso sin especificaciones registradas"
id: RVkBbJAVMGwo2cqcq6Okg
status: PUBLISHED
createdAt: 2018-06-28T22:50:36.470Z
updatedAt: 2020-05-14T17:58:25.679Z
publishedAt: 2020-05-14T17:58:25.679Z
firstPublishedAt: 2018-06-28T22:59:59.588Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
tag: Catalog
slugEN: sku-activo-incluso-sin-especificaciones-registradas
locale: es
kiStatus: Closed
internalReference: 
---

## Sumario

Al importar la planilla de productos/SKUs, los SKUs con la columna ___AtivarSkuSePossível___ rellenada con __"SIM"__ y que no tienen especificaciones registradas están siendo activados en la tienda.


## Simulación

1. Acceder al catálogo.
2. Navegar hasta Registro de Productos > Productos y SKUs > Importar/Exportar Productos y SKUs.
3. Exportar planilla con los productos que no tienen especificaciones registradas.
4. Cambiar en cada fila de la planilla la columna ___AtivarSkuSePossível___ a __SIM__.
5. Importar la planilla de productos y SKUs.

## Workaround

Al importar la planilla, asegúrese de que la columna __AtivarSkuSePossível__ esté marcada como __NÃO__ para los SKUs que deben permanecer inactivos.


