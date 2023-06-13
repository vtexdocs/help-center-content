---
title: El filtro de importación y exportación de categorías de productos/skus sólo funciona para las categorías de último nivel
id: i7KO2Nw3puiniVTRbDJok
status: PUBLISHED
createdAt: 2022-03-25T17:49:45.769Z
updatedAt: 2022-11-25T21:43:11.100Z
publishedAt: 2022-11-25T21:43:11.100Z
firstPublishedAt: 2022-03-25T17:49:46.190Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-filtro-de-importacion-y-exportacion-de-categorias-de-productosskus-solo-funciona-para-las-categorias-de-ultimo-nivel
kiStatus: Fixed
internalReference: 550313
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para reducir la cantidad de skus exportados en la hoja de cálculo Producto/Skus el cliente puede utilizar los filtros.

El filtro de categorías no funciona como se espera cuando se utilizan categorías que no están en el último nivel (categorías que tienen categorías secundarias).

El resultado es que la hoja de cálculo no se filtra en absoluto, todos los skus permanecen.

Cuando se utilizan categorías del último nivel el comportamiento es correcto.



## Simulación



1. Vaya a Importar y exportar -> Producto y Skus;
2. Seleccione una categoría de último nivel en el filtro;
3. Exporte la hoja de cálculo y compruebe que el resultado está correctamente filtrado por la categoría.
4. Seleccione la categoría padre en el filtro;
5. Exporte la hoja de cálculo y compruebe que el resultado son todos los skus.



## Workaround


Seleccione la categoría de último nivel u otros campos de filtro para reducir la cantidad de skus.

