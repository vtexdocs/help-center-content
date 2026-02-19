---
title: 'Mi stock está negativo'
id: JSFHaWsASXbnrX9dgNEeP
status: PUBLISHED
createdAt: 2024-06-10T11:08:39.990Z
updatedAt: 2025-08-14T15:10:09.934Z
publishedAt: 2025-08-14T15:10:09.934Z
firstPublishedAt: 2024-06-10T17:21:47.755Z
contentType: tutorial
productTeam: Post-purchase
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: my-inventory-is-negative
legacySlug: mi-stock-esta-negativo
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Stock
  - Reserva
  - Política comercial
  - Admin VTEX
---

Cuando la cantidad disponible de un producto se muestra negativa, es posible que haya más ítems [reservados](/es/docs/tutorials/como-se-maneja-la-reserva) de la cantidad indicada para el total de stock. Generalmente, este problema ocurre al registrar (dar de baja) un ítem en un pedido que todavía no está reservado por el sistema.

## Solución

La información de stock del ítem debe actualizarse en función de la cantidad de ítems físicos disponibles en el stock. Así, el valor registrado de los ítems en stock deberá ser igual a la suma de los ítems disponibles más los ítems reservados pero que aún no tienen el status **Preparando envío**.

Para actualizar la cantidad correcta en el stock, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, o ingresa **Gestión del stock** en la barra de búsqueda de la parte superior de la página.
2. Haz clic en **Gestión del stock**.
3. Busca el SKU deseado.
4. En la columna **Actualizar recuento**, ingresa la cantidad correcta de ítems físicos en el stock, considerando la suma de los ítems disponibles más los ítems reservados.
5. Haz clic en **Guardar**.

Cuando dos o más stocks utilizan la misma [política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial) y uno de ellos presenta una cantidad negativa de unidades, el SKU no se mostrará como disponible para la venta, independientemente de que el otro stock tenga unidades disponibles en el [inventario](/es/docs/tutorials/gestionar-items-en-inventario).
