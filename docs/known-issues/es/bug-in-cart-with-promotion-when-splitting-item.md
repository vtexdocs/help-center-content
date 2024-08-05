---
title: "Bug en el carrito con promoción al 'splitar' item"
id: 26EY5QcY4wcGm88okke8SY
status: PUBLISHED
createdAt: 2017-05-24T20:20:57.562Z
updatedAt: 2019-12-31T15:17:20.897Z
publishedAt: 2019-12-31T15:17:20.897Z
firstPublishedAt: 2017-05-26T19:35:05.050Z
contentType: knownIssue
productTeam: Shopping
author: authors_37
tag: Catalog
slug: bug-en-el-carrito-con-promocion-al-splitar-item
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

En el carrito, de acuerdo con la cantidad seleccionada de un mismo ítem y la selección de un servicio - embalaje o garantía, por ejemplo - asociado a este ítem, ocurre el split del ítem, es decir, se muestra el mismo elemento dos veces, una con Servicio y otra sin servicio.

El módulo de Promociones no está considerando este ítem "splitado" para sumar al valor del carrito en las promociones que tienen el criterio "Valor mínimo del pedido", no dando entonces el beneficio esperado al cliente en este escenario específico.

## Simulación

- Crear promoción con criterio de Carrito "Valor Mínimo del Pedido"
- Asociar SKU a un servicio: embalaje o garantía extendida, por ejemplo
- En el sitio, inserte el SKU en el carrito
- Aumentar su cantidad a 2
- Seleccionar la opción de servicio
- Comprobar que el mismo ítem aparece ahora dos veces
- Verificar que el beneficio no es dado, pues la suma total del Carrito, sin considerar el ítem "splitado", no alcanza el criterio configurado en la promoción

## Workaround

Retirar la opción de servicio de SKU temporalmente, hasta que el equipo de Rates and Benefits resuelva el error.

