---
title: 'Suscripciones: FAQ'
id: 2yumbsdX8aMQiXqKtFY4tE
status: PUBLISHED
createdAt: 2025-02-20T12:33:13.030Z
updatedAt: 2025-04-15T16:31:46.707Z
publishedAt: 2025-04-15T16:31:46.707Z
firstPublishedAt: 2025-02-20T12:42:22.848Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: subscriptions-faq
legacySlug: suscripciones-faq
locale: es
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Esta guía tiene el objetivo de responder a las preguntas más frecuentes sobre Suscripciones. Para navegar, utilice la siguiente tabla de contenido:

### ¿Puedo tener más de una suscripción en mi tienda?
El número de suscripciones es ilimitado, tanto para su tienda como para su cliente. Esto significa que no hay un número máximo de suscripciones que puedan ser vendidas por su tienda o compradas por su cliente. Sin embargo, es importante conocer las condiciones que se aplican en las suscripciones.

### ¿Puede mi cliente comprar por suscripción y retirar en las tiendas o en puntos de recogida?
Sí, lea el artículo [Puntos de recogida para pedidos de suscripción (Beta)](https://help.vtex.com/es/tutorial/puntos-de-recogida-para-pedidos-de-suscripcion-beta--csIqB6iBh4QNIFdEj0nVv) para más información.

### ¿Puede mi cliente registrar más de una dirección en su suscripción?
No es posible registrar más de una dirección en la misma suscripción.

### ¿Cuál es el plazo de entrega y la regla de flete?
El plazo de entrega y la regla de flete se basan en las políticas de entrega vigentes en la tienda en el momento del ciclo del pedido.

### ¿Puede mi cliente pagar en cuotas sus pedidos de suscripción?
Sí, cuando se configure la tienda para permitir el pago de pedidos de suscripción en cuotas. Esto se realiza a través del endpoint [Editar configuración de suscripciones](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings), marcando los campos `isMultipleInstallmentsEnabledOnCreation` y `isMultipleInstallmentsEnabledOnUpdate` como `true` (verdadero).

### ¿Qué pasa si la tarjeta de mi cliente es cancelada?
La suscripción no se generará por falta de posibilidad de pago.

### ¿Puede mi cliente solicitar una entrega programada para pedidos de Suscripción?
Todavía no es posible solicitar entregas programadas para pedidos de Suscripción. Ese escenario no se atiende para que su cliente no se vea afectado negativamente si la configuración logística de su tienda cambia. Sin embargo, su cliente puede crear una nueva suscripción con la fecha futura de la primera entrega en el día que desee.   

### ¿Cómo puedo cancelar, omitir o pausar un pedido de suscripción de mi cliente?
Todavía no es posible hacer cambios en los pedidos de suscripción de sus clientes a través del Admin de VTEX. Solo es posible pausar, omitir o cancelar un pedido de suscripción por medio del acceso a Televentas, en el painel de subscripción de su cliente, o por medio de nuestras [APIs](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#overview).

### ¿Es posible agregar ítems de Sellers o Marketplaces en un pedido de Suscripción?
Suscripciones pueden ser creadas con ítems de la propia tienda, de sellers VTEX o de sellers white lable (cuenta franquicia).

### Si el administrador de la tienda crea una regla para un valor mínimo, ¿esta regla podrá afectar a las suscripciones?
Sí, si el valor del pedido de suscripción es inferior al límite definido por la configuración _Valor mínimo total de la compra_. Tenga en cuenta que nuestro sistema de Suscripción no admite ciclos, o pedidos con un valor total de $0.

### Si el precio de un SKU cambia, ¿se verá afectada la suscripción de mi cliente?
De forma predeterminada, sí. El precio que paga el cliente por su suscripción se basa en el precio registrado para cada SKU. La suscripción del cliente no sigue las condiciones de precio del primer pedido realizado. El pedido se realiza con los mismos productos que el pedido original, pero el precio se calculará en función de lo que está configurado en el momento del siguiente ciclo del pedido.

Puedes modificar la configuración para nuevas suscripciones mediante API utilizando el request [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Envía `true` (verdadero) en el campo `useItemPriceFromOriginalOrder` para utilizar el precio del primer pedido.

### ¿A qué hora se crean pedidos de suscripción?
De forma predeterminada, la creación de pedidos de suscripción se realiza entre 6:00 y 7:00 a. m. UTC-3.

Sin embargo, puedes establecer otra hora mediante API utilizando el request [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Envía la hora nueva en el campo `executionHourInUtc`.

### ¿La funcionalidad Suscripciones funciona con el Seller Portal?
No, Suscripciones no funciona con el [Seller Portal](https://help.vtex.com/es/tutorial/how-to-set-up-your-store-on-seller-portal).

### ¿Cómo crear suscripciones a partir de pedidos originales que tienen SKUs con anexos?
De forma predeterminada, las tiendas no crean pedidos de suscripción incorporando [anexos](https://help.vtex.com/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) de SKUs del pedido original, es decir, los anexos no se consideran en pedidos recurrentes. Esta configuración se puede cambiar, pero solo a través de API utilizando el endpoint [Edit subscriptions settings](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3#post-/api/rns/settings). Más información en [How to keep attachments from original orders in subscriptions](https://developers.vtex.com/docs/guides/how-to-keep-attachments-from-original-orders-in-subscriptions).
