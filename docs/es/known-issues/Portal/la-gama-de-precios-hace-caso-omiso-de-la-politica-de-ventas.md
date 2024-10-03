---
title: 'La gama de precios hace caso omiso de la política de ventas'
id: 4isnfk4T2UB3CId8bXcvFT
status: DRAFT
createdAt: 2022-03-16T16:35:57.963Z
updatedAt: 2024-01-19T19:13:41.739Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: price-range-disregards-sales-policy
locale: es
kiStatus: Backlog
internalReference: 322764
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El filtro de rango de precios, que se configura desde la categoría de opciones, tiene en cuenta el precio que está registrado en todas las políticas de venta de la tienda, lo que significa que siempre mostrará el valor más bajo registrado de cualquier política de venta, pudiendo mostrar un producto que no esté en el rango de precios de esa política de venta en concreto.


##

## Simulación



1. Registrar diferentes precios en diferentes políticas de venta para la misma SKU;
2. Crear rangos de precios en la categoría en la que los precios registrados tienen diferentes rangos;
3. En la política de ventas de la SKU con el precio más alto, filtrar por rango de precios
4. Observe que el valor SKU considerado pertenece a otra política de ventas, porque el filtro sólo mira el valor más bajo de cualquier política.



## Workaround


No existe ninguna solución para este caso.

