---
title: 'Actualización incorrecta del precio cuando una promoción no aplica el descuento a todos los mismos artículos de un carrito.'
id: 1nXGR7pKjyc0Rmo0UzMOns
status: PUBLISHED
createdAt: 2024-05-01T20:07:04.369Z
updatedAt: 2024-05-01T20:07:16.339Z
publishedAt: 2024-05-01T20:07:16.339Z
firstPublishedAt: 2024-05-01T20:07:05.363Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: actualizacion-incorrecta-del-precio-cuando-una-promocion-no-aplica-el-descuento-a-todos-los-mismos-articulos-de-un-carrito
locale: es
kiStatus: Backlog
internalReference: 1025539
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando una promoción aplica un descuento a un solo artículo de la misma SKU (por ejemplo, una promoción Más por Menos), si hay una segunda promoción para esa misma SKU, el cálculo del descuento se aplicará a la cantidad ya descontada por la primera promoción - resultando en un descuento menor que el que se aplicaría si la segunda promoción se aplicara al precio inicial de la SKU.

El problema se produce en la actualización de precios cuando una promoción no aplica el descuento a todos los mismos artículos de un carrito y esto provoca una "división" (dos mismos artículos con precios diferentes). Cuando se aplica la segunda promoción, se aplica al precio incorrecto.

El fallo no se da por una promoción concreta.


##

## Simulación



- Crear una promoción Más por Menos, aplicando el descuento a un solo artículo de la misma SKU
- Cree una promoción de porcentaje normal para la misma SKU
- En la caja, compruebe que el descuento de la segunda promoción se basa en el valor inferior de la SKU, que ya había sido descontado por la primera promoción.



## Workaround


N/A





