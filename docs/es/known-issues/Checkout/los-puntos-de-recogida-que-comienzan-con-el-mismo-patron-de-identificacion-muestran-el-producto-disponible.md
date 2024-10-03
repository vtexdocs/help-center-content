---
title: 'Los puntos de recogida que comienzan con el mismo patrón de identificación muestran el producto disponible'
id: 1iCnOFHyKNTLvY20VS58HP
status: PUBLISHED
createdAt: 2024-01-10T16:01:39.766Z
updatedAt: 2024-01-10T16:01:40.403Z
publishedAt: 2024-01-10T16:01:40.403Z
firstPublishedAt: 2024-01-10T16:01:40.403Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-points-starting-with-the-same-id-pattern-show-product-available
locale: es
kiStatus: Backlog
internalReference: 964036
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando los dos puntos de recogida con IDs comienzan con el mismo patrón, la UI de caja los valida como la misma tienda, mostrando un producto disponible.


##

## Simulación



- Registre dos puntos de recogida: uno con ID 8 y otro con ID 835;
- Asócielos con diferentes estrategias de envío, donde sólo uno de los puntos de recogida debe tener un producto disponible;
- Montar un carrito y seleccionar el punto de recogida donde el producto no debería estar disponible;
- El producto aparecerá como disponible.



## Workaround


NO DISPONIBLE




