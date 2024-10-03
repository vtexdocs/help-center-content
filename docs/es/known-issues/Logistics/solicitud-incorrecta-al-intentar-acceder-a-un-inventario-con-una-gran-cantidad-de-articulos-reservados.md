---
title: 'Solicitud incorrecta al intentar acceder a un inventario con una gran cantidad de artículos reservados.'
id: 4DujUMKeYTlx2MXAjnHlS5
status: PUBLISHED
createdAt: 2024-07-03T20:18:55.508Z
updatedAt: 2024-07-03T20:23:50.434Z
publishedAt: 2024-07-03T20:23:50.434Z
firstPublishedAt: 2024-07-03T20:18:56.626Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: bad-request-when-trying-to-access-an-inventory-with-a-huge-quantity-of-reserved-items
locale: es
kiStatus: Fixed
internalReference: 296066
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando intentamos ver el detalle de las reservas de una SKU en el módulo de logística, en el listado de inventario de productos (**Inventario y envío** > **Gestión de inventario**), podemos tener un problema cuando hay demasiadas reservas activas.

No es posible acceder o actualizar el inventario de una SKU con una gran cantidad de artículos reservados, como por ejemplo, 100000 reservas activas.

El usuario puede ver en la UI el error: **"Error al intentar obtener la reserva "**

O en los detalles de respuesta de la API el error **"Demasiadas reservas activas "**


##

## Simulación



## Workaround



