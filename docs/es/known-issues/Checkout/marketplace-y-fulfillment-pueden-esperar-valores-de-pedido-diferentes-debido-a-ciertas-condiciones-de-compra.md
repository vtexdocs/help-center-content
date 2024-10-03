---
title: 'Marketplace y Fulfillment pueden esperar valores de pedido diferentes debido a ciertas condiciones de compra'
id: 5LoC3DwesBWH5kr2b5u6WD
status: PUBLISHED
createdAt: 2024-05-13T20:04:19.094Z
updatedAt: 2024-05-13T20:34:01.432Z
publishedAt: 2024-05-13T20:34:01.432Z
firstPublishedAt: 2024-05-13T20:04:20.144Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-and-fulfillment-can-expect-different-order-values-due-to-certain-purchase-conditions
locale: es
kiStatus: Backlog
internalReference: 1032473
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las capas de Marketplace y Fulfillment pueden esperar valores diferentes para el pedido, impidiendo la finalización de la compra.
En estos casos, el "precio de venta" del artículo en el mercado no coincide con el "precio" de cumplimiento.


##

## Simulación


El problema no se limita necesariamente a este paso exacto, pero es más fácil de reproducir de la siguiente manera:

1. Pon a cero los decimales del Mercado y del vendedor.
2. En la cuenta del vendedor, fije el precio de un artículo en 49950,00, y una promoción de Cumplimiento que le aplique un descuento del 15%.
3. En un Marketplace, añade 3 unidades del artículo del vendedor a tu cesta.
4. 4. Intenta completar la compra. Aparecerá el mensaje de error "No se ha podido crear el pedido solicitado. Por favor, inténtelo de nuevo".



## Workaround


N/A





