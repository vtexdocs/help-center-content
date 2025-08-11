---
title: 'Nueva configuración del plazo de entrega en Checkout'
id: 5pv2gBQKH8nOKJiMKyBwDu
status: PUBLISHED
createdAt: 2024-12-05T14:49:01.044Z
updatedAt: 2024-12-11T13:00:03.603Z
publishedAt: 2024-12-11T13:00:03.603Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: new-shipping-time-settings-in-the-checkout
locale: es
legacySlug: nueva-configuracion-del-plazo-de-entrega-en-checkout
announcementImageID: ''
announcementSynopsisES: 'Nueva configuración en Checkout permite mostrar el plazo de entrega de cada producto de forma individual.'
---

La configuración predeterminada de Checkout muestra un único plazo de entrega (en días laborables) para todos los productos del carrito. Siempre se muestra el valor correspondiente al producto con el tiempo de envío más largo.

Para mejorar la experiencia del cliente, ahora la [API de Checkout](https://developers.vtex.com/docs/api-reference/checkout-api) permite mostrar plazos de entrega individuales para cada ítem en lugar de un único plazo para todos los productos.

## ¿Qué cambió?

Con esta actualización los retailers ahora pueden:

* Mostrar plazos de entrega específicos para cada producto en el checkout.
* Presentar el plazo de entrega en formato de fecha, en lugar del número de días (por ejemplo, “15 de septiembre de 2024” en lugar de “en 5 días laborables”).

## ¿Qué se necesita hacer?

La funcionalidad está disponible automáticamente en todas las tiendas. Para implementar las mejoras, personaliza tu storefront con la información proporcionada por la API de Checkout. 

Para más detalles, consulta el [release note](https://developers.vtex.com/updates/release-notes/2024-06-24-displaying-sla-by-item-in-checkout) y la guía [Displaying SLA by item in Checkout](https://developers.vtex.com/updates/release-notes/2024-06-24-displaying-sla-by-item-in-checkout).

> ⚠️ La funcionalidad activa puede impactar el módulo de **Pedidos**, considerando que el estándar es mostrar el plazo de entrega agrupado por el más largo. Esto genera una discrepancia entre lo que se muestra en el Admin de VTEX y lo que se presenta al cliente.
