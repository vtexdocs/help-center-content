---
title: '¿Cómo llenar la planilla de stock'
id: 2EQ0XOe8aA0UyQso0k2kkA
status: DRAFT
createdAt: 2019-01-24T20:45:40.102Z
updatedAt: 2020-07-03T22:29:33.529Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:07:32.520Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: llenar-la-planilla-de-stock
locale: es
legacySlug: llenar-la-planilla-de-stock
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Por medio de la plantilla de inventario, se puede ingresar en masa la cantidad de SKUs para cada inventario de su tienda.

De este modo, cada línea de la plantilla se relaciona a un SKU por inventario. Es decir, si el mismo SKU consta en más de un inventario, este aparecerá una vez para cada uno de estos inventarios.

Además, el correcto rellenado de la plantilla depende de dos reglas. Estas son:

- Cada coluna de la plantilla debe contener un número o un texto;
- La actualización de la cantidad de SKUs debe hacerse en la columna __TotalQuantity__. 

<div class="alert alert-warning">
<strong>Atención</strong>: si estas indicaciones no son respetadas, es posible que el sistema no acepte la importación de la plantilla o que el número de ítems en venta sea incorrecto.  
</div>

A continuación, verifique el significado de cada campo de la plantilla de inventario.

- __SkuId__ (texto): ID del SKU.
- __TotalQuantity__ (número): cantidad de unidades del SKU.
- __ReservedQuantity__ (número): cantidad del SKU en reserva.
- __AvailableQuantity__ (número): cantidad del SKU disponible para venta.
- __WarehouseId__ (texto): ID del stock, según registrado en el módulo de logística.
- __WarehouseName__ (texto): nombre del stock, según registrado en el módulo de logística.
- __RefId__ (texto): código de referencia del SKU.
- __IsActive__ (texto): indica si el SKU está activo (`true`) o inactivo (`false`) en el catálogo.
- __UnlimitedQuantity__ (texto): indica si el stock del SKU se ha definido como stock infinito (`true`) o no (`false`).
- __LockIds__ (texto): código identificador de la reserva.
- __DispatchedReservations__ (número): número de ítems del SKU que ya pasaron al status `Iniciar Manejo`, o sea, cuyas reservas ya han caído.
