---
title: Productos sin stock aparecen disponibles para compra en la página de producto
id: 5yLgUHlBraGeUYAUK4w288
status: PUBLISHED
createdAt: 2018-02-08T18:17:40.064Z
updatedAt: 2022-12-22T20:45:11.644Z
publishedAt: 2022-12-22T20:45:11.644Z
firstPublishedAt: 2018-02-08T18:52:42.311Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: productos-sin-stock-aparecen-disponibles-para-compra-en-la-pagina-de-producto
kiStatus: Backlog
internalReference: 
---

## Sumario

Productos sin stock se mostran como disponibles para compra en la página de producto (el botón de compra aparece). Sin embargo, al hacer clic en el botón e ir al carrito, el Checkout hace la consulta en el sistema e impide que el producto sea comprado de hecho.

La causa de esto es un campo llamado `stockBalance`, que es uno de los campos utilizados por el Catálogo para mostrar (o no) el botón de compra en la página de producto. Este campo muestra el total de unidades en stock de un SKU. Sin embargo, cuando un producto está asociado a un regalo, `stockBalance` actualmente devuelve el stock del regalo en lugar del stock del SKU. Y es exactamente ahí donde está el problema. Este escenario ocurre cuando un producto no tiene stock, pero el brindis asociado a él tiene.

## Simulación

- Agregar un regalo a un producto sin stock.
- Acceder a su página de producto.

## Workaround

Por el momento, la solución es desasociar el regalo del producto sin stock. De esta forma, el producto ya no se mostrará como disponible.

